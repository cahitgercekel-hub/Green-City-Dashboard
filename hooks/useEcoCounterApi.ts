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

  return res.json()
}

export function useEcoCounter(timestamp: Date) {
  timestamp.setUTCHours(0)
  timestamp.setUTCMinutes(0)
  timestamp.setUTCSeconds(0)
  timestamp.setUTCMilliseconds(0)
  const [data, setData] = useState<BicycleAPIResponse[]>([])
  const [filteredData, setFilteredData] = useState<BicycleStationData[]>([])
  const [totalMin, setTotalMin] = useState(0)
  const [totalMax, setTotalMax] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const results = await Promise.all(
        stations.map(async ({ name, id }) => ({
          name,
          id,
          data: await fetchBicycleData(id),
        })),
      )
      setData(results)
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (!data.length) {
      return
    }
    const normalizeDate = (d: Date) =>
      new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()
    const filtered = data.map(({ id, name, data }) => ({
      id,
      name,
      count:
        data.find(
          ({ date }) =>
            normalizeDate(new Date(date)) === normalizeDate(timestamp),
        )?.counts || 0,
    }))

    setFilteredData(filtered)
  }, [timestamp, data])
  useEffect(() => {
    if (!data) {
      return
    }

    const min = Math.min(
      ...data.map(e =>
        Math.min(...e.data.map(x => x.counts).filter(y => y !== null)),
      ),
    )

    const max = Math.max(
      ...data.map(e =>
        Math.max(...e.data.map(x => x.counts).filter(y => y !== null)),
      ),
    )

    setTotalMin(min)
    setTotalMax(max)
  }, [data])

  return {
    min: totalMin,
    max: totalMax,
    data: filteredData,
    stationCount: stations.length,
  }
}
