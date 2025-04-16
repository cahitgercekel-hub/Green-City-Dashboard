import { useEffect, useState } from 'react'

type BicycleAPIResponse = {
  id: string
  name: string
  data: {
    counts: number
    date: string
  }[]
}

type BicycleStationData = {
  count: number
  id: string
  name: string
}

const stations = [
  { name: 'MZ-Kastel, Rheinufer', id: '300023897' },
  { name: 'Erbenheim / Kalkhofen', id: '300022664' },
]

const fetchBicycleData = async (stationId: string) => {
  const res = await fetch(`api/ecocounter?siteId=${stationId}`)
  if (!res.ok) {
    throw new Error(`Failed to fetch data for station ${stationId}`)
  }
  return res.json()
}

const neosens = [
  { name: 'Stresemann-Ring', id: 1836 },
  { name: 'Bertramstraße', id: 1837 },
]

const fetchNeosensData = async () => {
  try {
    const cuIds = neosens.map(sensor => sensor.id)
    const cuIdsParam = encodeURIComponent(JSON.stringify(cuIds))
    const url = `https://api.neocount.de/traffic-counts/sensor-data?cuIds=${cuIdsParam}`

    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching counter API data:', error)
    throw error
  }
}

const processNeosensData = (apiData: any, timestamp: Date) => {
  const date = new Date(timestamp)
  const day = date.getDate()
  const month = new Intl.DateTimeFormat('de-DE', { month: 'long' }).format(date)
  const year = date.getFullYear()
  const formattedDate = `${day}. ${month} ${year}`

  const result = apiData.flatMap((item: any) => {
    const labels = item.fullDataDaily.labels.slice(-8, -1)
    const totalBikes = item.fullDataDaily.datasets.totalBikes.slice(-8, -1)

    return labels.map((label: string, index: number) => ({
      label,
      cuId: item.cuId,
      count: totalBikes[index],
      name: neosens.find(sensor => sensor.id === item.cuId)?.name || '',
    }))
  })

  return result
    .filter((item: any) => item.label === formattedDate)
    .map((item: any) => ({
      id: item.cuId.toString(),
      name: item.name,
      count: item.count,
    }))
}

const normalizeDate = (d: Date) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()

export function useEcoCounter(timestamp: Date) {
  const [data, setData] = useState<BicycleAPIResponse[]>([])
  const [filteredData, setFilteredData] = useState<BicycleStationData[]>([])
  const [totalMin, setTotalMin] = useState(0)
  const [totalMax, setTotalMax] = useState(0)
  const [neosensData, setNeosensData] = useState<any>(null)

  const normalizedTimestamp = new Date(timestamp)
  normalizedTimestamp.setUTCHours(0, 0, 0, 0)

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const bicycleResults = await Promise.all(
          stations.map(async ({ name, id }) => ({
            name,
            id,
            data: await fetchBicycleData(id),
          })),
        )

        setData(bicycleResults)

        const bicycleData = bicycleResults.map(({ id, name, data }) => ({
          id,
          name,
          count:
            data.find(
              // @ts-ignore
              ({ date }) =>
                normalizeDate(new Date(date)) ===
                normalizeDate(normalizedTimestamp),
            )?.counts || 0,
        }))

        const counterData = await fetchNeosensData()
        setNeosensData(counterData)

        const processedData = processNeosensData(counterData, timestamp)
        setFilteredData([...processedData, ...bicycleData])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchAllData()
  }, [])

  useEffect(() => {
    if (!data.length || !neosensData) {
      return
    }

    try {
      const bicycleData = data.map(({ id, name, data }) => ({
        id,
        name,
        count:
          data.find(
            ({ date }) =>
              normalizeDate(new Date(date)) ===
              normalizeDate(normalizedTimestamp),
          )?.counts || 0,
      }))

      const counterData = processNeosensData(neosensData, timestamp)

      setFilteredData([...counterData, ...bicycleData])
    } catch (error) {
      console.error('Error processing data:', error)
    }
  }, [data, timestamp])

  useEffect(() => {
    if (!data.length) {
      return
    }

    const counts = data.flatMap(e =>
      e.data.map(x => x.counts).filter(y => y !== null),
    )

    if (counts.length > 0) {
      setTotalMin(Math.min(...counts))
      setTotalMax(Math.max(...counts))
    }
  }, [data])

  return {
    min: totalMin,
    max: totalMax,
    data: filteredData.length ? filteredData : null,
    stationCount: stations.length + neosens.length,
  }
}
