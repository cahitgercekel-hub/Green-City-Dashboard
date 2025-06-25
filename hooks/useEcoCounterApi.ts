import { useEffect, useMemo, useState } from 'react'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'

type EcoCounterDailyData = {
  counts: number
  date: string
}

type EcoCounterYearlyData = {
  countsPerYear: number
  year: number
}

interface EcoCounterStationData {
  id: string
  name: string
  weeklyData: EcoCounterDailyData[]
  yearlyData: EcoCounterYearlyData[]
}

interface NeoSenseResponse {
  cuId: number
  yearlyTotalBike: number
  fullDataDaily: {
    labels: string[]
    datasets: {
      totalBikes: number[]
    }
  }
}

interface Station {
  id: string
  name: string
}

interface ProcessedStationData {
  id: string
  name: string
  weeklyCount: number
  yearlyCount: number
}

interface UseEcoCounterResult {
  loading: boolean
  data: ProcessedStationData[]
  min: number
  max: number
  stationCount: number
}

const ECO_COUNTER_STATIONS: Station[] = [
  { name: 'MZ-Kastel, Rheinufer', id: '300023897' },
  { name: 'Erbenheim / Kalkhofen', id: '300022664' },
]

const NEO_SENSE_STATIONS: Station[] = [
  { name: 'Stresemann-Ring', id: '1836' },
  { name: 'Bertramstraße', id: '1837' },
]

const normalizeDate = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()

const fetchBicycleData = async (
  stationId: string,
): Promise<EcoCounterStationData> => {
  const response = await fetch(`/api/ecocounter?siteId=${stationId}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch data for station ${stationId}`)
  }
  const data = await response.json()

  return {
    id: stationId,
    name: ECO_COUNTER_STATIONS.find(s => s.id === stationId)?.name || stationId,
    weeklyData: data.filter((d: any) => 'counts' in d),
    yearlyData: data.filter((d: any) => 'countsPerYear' in d),
  }
}

const fetchNeosensData = async (): Promise<NeoSenseResponse[]> => {
  const cuIdsParam = encodeURIComponent(
    JSON.stringify(NEO_SENSE_STATIONS.map(s => Number(s.id))),
  )
  const response = await fetch(
    `https://api.neocount.de/traffic-counts/sensor-data?cuIds=${cuIdsParam}`,
  )
  if (!response.ok) {
    throw new Error('Failed to fetch Neosens data')
  }
  return response.json()
}

export function useEcoCounter(timestamp: Date): UseEcoCounterResult {
  const [loading, setLoading] = useState(true)
  const [ecoCounterData, setEcoCounterData] = useState<EcoCounterStationData[]>(
    [],
  )
  const [neosensData, setNeosensData] = useState<NeoSenseResponse[]>([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const [ecoData, neoData] = await Promise.all([
          Promise.all(
            ECO_COUNTER_STATIONS.map(station => fetchBicycleData(station.id)),
          ),
          fetchNeosensData(),
        ])
        setEcoCounterData(ecoData)
        setNeosensData(neoData)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const { data, min, max } = useMemo(() => {
    if (loading) {
      return {
        data: [],
        min: 0,
        max: 0,
      }
    }

    const normalizedDate = normalizeDate(timestamp)
    const formattedDate = format(timestamp, 'd. MMMM yyyy', { locale: de })

    // Process EcoCounter stations
    const ecoStations = ecoCounterData.map(station => {
      const weeklyCount =
        station.weeklyData.find(
          d => normalizeDate(new Date(d.date)) === normalizedDate,
        )?.counts || 0

      const yearlyCount = station.yearlyData[0]?.countsPerYear || 0

      return {
        id: station.id,
        name: station.name,
        weeklyCount,
        yearlyCount,
      }
    })

    // Process NeoSens stations
    const neoSensStations = neosensData.flatMap(sensor => {
      const station = NEO_SENSE_STATIONS.find(
        s => s.id === sensor.cuId.toString(),
      )
      if (!station) {
        return []
      }

      const dailyData = sensor.fullDataDaily.labels
        .map((label, index) => ({
          label,
          count: sensor.fullDataDaily.datasets.totalBikes[index],
        }))
        .find(d => d.label === formattedDate)

      return {
        id: sensor.cuId.toString(),
        name: station.name,
        weeklyCount: dailyData?.count || 0,
        yearlyCount: sensor.yearlyTotalBike,
      }
    })

    // Combine all stations into single array
    const combinedData = [...ecoStations, ...neoSensStations]

    // Calculate min/max from weekly counts
    const weeklyCounts = combinedData.map(d => d.weeklyCount || 0)
    const min = weeklyCounts.length ? Math.min(...weeklyCounts) : 0
    const max = weeklyCounts.length ? Math.max(...weeklyCounts) : 0

    return {
      data: combinedData,
      min,
      max,
    }
  }, [loading, ecoCounterData, neosensData, timestamp])

  return {
    loading,
    data,
    min,
    max,
    stationCount: ECO_COUNTER_STATIONS.length + NEO_SENSE_STATIONS.length,
  }
}
