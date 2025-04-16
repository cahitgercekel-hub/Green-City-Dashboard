import { useEffect, useMemo, useState } from 'react'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'

type EcoCounterResponse = {
  id: string
  name: string
  data: {
    counts: number
    date: string
  }[]
}

export interface NeoSenseResponse {
  cuId: number
  dailyTotalTraffic: number
  yearlyTotalPedestrian: number
  yearlyTotalBike: number
  fullDataMonthly: FullData
  fullDataDaily: FullData
}

interface FullData {
  labels: string[]
  datasets: {
    totalPedestrians: number[]
    totalBikes: number[]
  }
}

interface Station {
  id: string
  name: string
}

interface Result {
  id: string
  name: string
  count: number
}

const stations: Station[] = [
  { name: 'MZ-Kastel, Rheinufer', id: '300023897' },
  { name: 'Erbenheim / Kalkhofen', id: '300022664' },
]

const neosens: Station[] = [
  { name: 'Stresemann-Ring', id: '1836' },
  { name: 'Bertramstraße', id: '1837' },
]

const normalizeDate = (d: Date) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()

const fetchBicycleData = async (
  stationId: string,
): Promise<EcoCounterResponse['data']> => {
  const res = await fetch(`api/ecocounter?siteId=${stationId}`)
  if (!res.ok) {
    throw new Error(`Failed to fetch data for station ${stationId}`)
  }
  return res.json()
}

const fetchNeosensData = async (): Promise<NeoSenseResponse[]> => {
  const cuIdsParam = encodeURIComponent(
    JSON.stringify(neosens.map(s => Number(s.id))),
  )
  const url = `https://api.neocount.de/traffic-counts/sensor-data?cuIds=${cuIdsParam}`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch Neosens data')
  }
  return res.json()
}

const processNeosensData = (
  data: NeoSenseResponse[],
  timestamp: Date,
): Result[] => {
  const formattedDate = format(timestamp, 'd. MMMM yyyy', { locale: de })

  return data
    .flatMap(sensor => {
      const { labels, datasets } = sensor.fullDataDaily
      return labels.map((label, index) => ({
        label,
        count: datasets.totalBikes[index],
        id: sensor.cuId.toString(),
        name: neosens.find(s => s.id === sensor.cuId.toString())?.name ?? '',
      }))
    })
    .filter(d => d.label === formattedDate)
}

export function useEcoCounter(timestamp: Date) {
  const [bicycleData, setBicycleData] = useState<EcoCounterResponse[]>([])
  const [neosensData, setNeosensData] = useState<NeoSenseResponse[]>([])

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const bikes = await Promise.all(
          stations.map(async ({ id, name }) => ({
            id,
            name,
            data: await fetchBicycleData(id),
          })),
        )
        setBicycleData(bikes)

        const neosens = await fetchNeosensData()
        setNeosensData(neosens)
      } catch (err) {
        console.error('Error fetching eco data:', err)
      }
    }

    fetchAll()
  }, [])

  const filteredData = useMemo(() => {
    if (!bicycleData.length || !neosensData.length) {
      return null
    }

    const normalized = normalizeDate(timestamp)

    const bikes: Result[] = bicycleData.map(({ id, name, data }) => ({
      id,
      name,
      count:
        data.find(d => normalizeDate(new Date(d.date)) === normalized)
          ?.counts || 0,
    }))

    const neosens: Result[] = processNeosensData(neosensData, timestamp)

    return [...neosens, ...bikes]
  }, [bicycleData, neosensData, timestamp])

  const [min, max] = useMemo(() => {
    const counts = bicycleData.flatMap(({ data }) =>
      data.map(d => d.counts).filter(Boolean),
    )
    return counts.length ? [Math.min(...counts), Math.max(...counts)] : [0, 0]
  }, [bicycleData])

  return {
    loading: !filteredData,
    min,
    max,
    data: filteredData,
    stationCount: stations.length + neosens.length,
  }
}
