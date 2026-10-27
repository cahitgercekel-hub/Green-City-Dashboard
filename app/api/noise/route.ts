import { NextResponse } from 'next/server'
import TTLCache from '@isaacs/ttlcache'

// Time series of one LärmBox sensor (e.g. LAeq) for the last hours, proxied from openSenseMap.
// GET /api/noise?boxId=<24 hex>&sensorId=<24 hex>&hours=24
const BASE_URL = 'https://api.opensensemap.org/boxes'
const ID_RE = /^[a-f0-9]{24}$/i
const MAX_HOURS = 72

const ttl = 5 * 60 * 1000 // 5 minutes
const cache = new TTLCache<string, unknown>({ ttl })

interface OsmMeasurement {
  createdAt: string
  value: string
}

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const boxId = searchParams.get('boxId') ?? ''
  const sensorId = searchParams.get('sensorId') ?? ''
  const hours = Math.min(
    Math.max(Number(searchParams.get('hours') ?? 24) || 24, 1),
    MAX_HOURS,
  )

  if (!ID_RE.test(boxId) || !ID_RE.test(sensorId)) {
    return NextResponse.json(
      { error: 'boxId and sensorId must be openSenseMap ids' },
      { status: 400 },
    )
  }

  const cacheKey = `noise-${boxId}-${sensorId}-${hours}`
  if (cache.has(cacheKey)) {
    return NextResponse.json(cache.get(cacheKey))
  }

  const to = new Date()
  const from = new Date(to.getTime() - hours * 60 * 60 * 1000)
  const params = new URLSearchParams({
    'from-date': from.toISOString(),
    'to-date': to.toISOString(),
    format: 'json',
  })

  try {
    const response = await fetch(
      `${BASE_URL}/${boxId}/data/${sensorId}?${params}`,
    )
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }
    const raw = (await response.json()) as OsmMeasurement[]
    const data = raw
      .map(m => ({ t: m.createdAt, value: Number(m.value) }))
      .filter(m => Number.isFinite(m.value))
      .sort((a, b) => a.t.localeCompare(b.t))

    cache.set(cacheKey, data)
    return NextResponse.json(data)
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch openSenseMap noise data' },
      { status: 500 },
    )
  }
}
