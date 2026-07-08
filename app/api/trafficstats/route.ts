import { NextResponse } from 'next/server'
import TTLCache from '@isaacs/ttlcache'

const STATS_URL =
  'https://api.atrai.bike/collections/statistics_flowmap/items/heilbronn?f=json'

const ttl = 15 * 60 * 1000
const cache = new TTLCache<string, unknown>({ ttl })

export type WeeklyStatEntry = {
  week: string
  trip_count: number
  total_duration_s: number
  average_duration_s: number
  total_distance_m: number
  average_distance_m: number
  average_speed_kmh: number
  total_kcal: number
}

export type LatestStats = {
  trip_count: number
  total_duration_s: number
  average_duration_s: number
  total_distance_m: number
  average_distance_m: number
  average_speed_kmh: number
  total_kcal: number
}

export type TrafficStatsPayload = {
  latest_stats: LatestStats
  weekly_stats: WeeklyStatEntry[]
}

/**
 * Convert Python-dict string to valid JSON.
 * Handles: single-quoted strings, True/False/None → true/false/null.
 */
function pythonDictToJson(raw: string): string {
  return raw
    // Replace single-quoted string values/keys with double-quoted ones.
    // This handles the majority of cases in this payload.
    .replace(/'/g, '"')
    // Python booleans / None
    .replace(/\bTrue\b/g, 'true')
    .replace(/\bFalse\b/g, 'false')
    .replace(/\bNone\b/g, 'null')
}

export const GET = async () => {
  const cacheKey = 'traffic-stats-heilbronn'

  if (cache.has(cacheKey)) {
    return NextResponse.json(cache.get(cacheKey))
  }

  try {
    const response = await fetch(STATS_URL)

    if (!response.ok) {
      throw new Error(`API error ${response.status}`)
    }

    const feature = await response.json()
    const rawStats: string = feature?.properties?.statistics

    if (!rawStats) {
      return NextResponse.json({ error: 'No statistics field in response' }, { status: 502 })
    }

    const parsed = JSON.parse(pythonDictToJson(rawStats)) as Record<string, unknown> & {
      latest_stats: LatestStats
      weekly_stats?: WeeklyStatEntry[]
      periodic_stats?: WeeklyStatEntry[]
    }

    const payload: TrafficStatsPayload = {
      latest_stats: parsed.latest_stats,
      weekly_stats: parsed.weekly_stats ?? parsed.periodic_stats ?? [],
    }

    cache.set(cacheKey, payload)
    return NextResponse.json(payload)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch traffic stats' }, { status: 500 })
  }
}
