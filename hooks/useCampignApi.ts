import { useEffect, useState } from 'react'

interface BikeStatEntry {
  ZEIT: string
  Distanz: number
  Stunden: number
  total_distance: number
  total_time: number
  Kcal: number
  Tracks: number
  date?: Date
}

interface BikeStatisticsResponse {
  stats: Omit<BikeStatEntry, 'date'>[]
}

const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}

const transformToEntry = (label: string, raw: any): BikeStatEntry => {
  const isCurrent = label === 'aktuell'
  const date = isCurrent ? new Date() : new Date(label)
  return {
    ZEIT: isCurrent ? 'aktuell' : formatDate(date),
    Distanz: raw.average_distance_m / 1000,
    Stunden: raw.average_duration_s / 3600,
    total_distance: raw.total_distance_m / 1000,
    total_time: raw.total_duration_s / 3600,
    Kcal: Math.round(raw.total_kcal),
    Tracks: raw.trip_count,
    date,
  }
}

export function useBikeStatistics() {
  const [data, setData] = useState<BikeStatisticsResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.atrai.bike/collections/statistics_flowmap/items/muenster?f=json',
        )
        const feature = await response.json()

        const rawStats = JSON.parse(
          feature.properties.statistics.replace(/'/g, '"'),
        )

        const entries: BikeStatEntry[] = [
          transformToEntry('aktuell', rawStats.latest_stats),
          ...rawStats.weekly_stats.map((week: any) =>
            transformToEntry(week.week, week),
          ),
        ]

        entries.sort(
          (a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0),
        )

        const stats = entries.map(({ date, ...rest }) => rest)

        setData({ stats })
      } catch (err) {
        console.error('Error fetching bike statistics:', err)
        setData(null)
      }
    }

    fetchData()
  }, [])

  return data
}
