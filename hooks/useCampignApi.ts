import { useEffect, useState } from 'react'

interface BikeStatEntry {
  ZEIT: string
  Distanz: number
  Stunden: number
  Kcal: number
  Tracks: number
  date?: Date
}

interface BikeStatisticsResponse {
  stats: Omit<BikeStatEntry, 'date'>[]
}

type WeeklyStat = {
  week: string
  total_distance_m: number
  total_duration_s: number
  total_kcal: number
  trip_count: number
}

type ParsedStats = {
  weekly_stats?: WeeklyStat[]
  periodic_stats?: WeeklyStat[]
}

const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}

const transformToEntry = (label: string, raw: any): BikeStatEntry => {
  const date = new Date(label)
  return {
    ZEIT: formatDate(date),
    Distanz: raw.total_distance_m / 1000,
    Stunden: raw.total_duration_s / 3600,
    Kcal: Math.round(raw.total_kcal),
    Tracks: raw.trip_count,
    date,
  }
}

const pythonDictToJson = (raw: string): string => {
  return raw
    .replace(/np\.(?:float64|float32|int64|int32)\(([^()]+)\)/g, '$1')
    .replace(/'/g, '"')
    .replace(/\bTrue\b/g, 'true')
    .replace(/\bFalse\b/g, 'false')
    .replace(/\bNone\b/g, 'null')
}

export function useBikeStatistics() {
  const [data, setData] = useState<BikeStatisticsResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.atrai.bike/collections/statistics/items',
        )
        const collection = await response.json()

        const feature = Array.isArray(collection?.features)
          ? collection.features.find(
              (item: { properties?: { tag?: string; statistics?: unknown } }) =>
                item?.properties?.tag === 'heilbronn' &&
                !!item?.properties?.statistics,
            ) ??
            collection.features.find(
              (item: { properties?: { statistics?: unknown } }) =>
                !!item?.properties?.statistics,
            )
          : undefined

        const statistics = feature?.properties?.statistics

        if (!statistics) {
          setData(null)
          return
        }

        const rawStats = (typeof statistics === 'string'
          ? JSON.parse(pythonDictToJson(statistics))
          : statistics) as ParsedStats

        const weeklyStats = rawStats.weekly_stats ?? rawStats.periodic_stats ?? []

        const entries: BikeStatEntry[] = [
          ...weeklyStats.map((week: WeeklyStat) =>
            transformToEntry(week.week, week),
          ),
        ]

        entries.sort(
          (a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0),
        )
        entries.reverse()

        let cumulativeDistance = 0
        let cumulativeTime = 0
        let cumulativeKcal = 0
        let cumulativeTracks = 0

        const cumulativeEntries = entries.map(entry => {
          cumulativeDistance += entry.Distanz
          cumulativeTime += entry.Stunden
          cumulativeKcal += entry.Kcal
          cumulativeTracks += entry.Tracks

          return {
            ...entry,
            Distanz: cumulativeDistance,
            Stunden: cumulativeTime,
            Kcal: cumulativeKcal,
            Tracks: cumulativeTracks,
          }
        })
        const stats = cumulativeEntries.map(({ date: _date, ...rest }) => rest)

        setData({ stats })
      } catch {
        setData(null)
      }
    }

    fetchData()
  }, [])

  return data
}
