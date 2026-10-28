import { NextResponse } from 'next/server'
import TTLCache from '@isaacs/ttlcache'

// openSenseMap proxy for the noise tile, with a short cache so the live card can poll every minute:
//   GET /api/noise?grouptag=LaermLupe                      -> boxes of the LärmBox grouptag (60 s cache)
//   GET /api/noise?boxId=<24 hex>&sensorId=<24 hex>&hours=24 -> time series of one sensor (5 min cache)
const BASE_URL = 'https://api.opensensemap.org/boxes'
const ID_RE = /^[a-f0-9]{24}$/i
const MAX_HOURS = 72

const ttl = 5 * 60 * 1000 // 5 minutes
const cache = new TTLCache<string, unknown>({ ttl })
const boxesTtl = 60 * 1000 // 1 minute: the live card polls at this rate
const boxesCache = new TTLCache<string, unknown>({ ttl: boxesTtl })

interface OsmMeasurement {
  createdAt: string
  value: string
}

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const grouptag = searchParams.get('grouptag')
  if (grouptag) {
    if (!/^[\w-]{1,64}$/.test(grouptag)) {
      return NextResponse.json({ error: 'invalid grouptag' }, { status: 400 })
    }
    const key = `boxes-${grouptag}`
    if (boxesCache.has(key)) {
      return NextResponse.json(boxesCache.get(key))
    }
    try {
      const response = await fetch(
        `${BASE_URL}?grouptag=${encodeURIComponent(grouptag)}`,
      )
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }
      const boxes = await response.json()
      boxesCache.set(key, boxes)
      return NextResponse.json(boxes)
    } catch {
      return NextResponse.json(
        { error: 'Failed to fetch openSenseMap boxes' },
        { status: 500 },
      )
    }
  }
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
