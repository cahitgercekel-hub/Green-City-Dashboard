import { NextResponse } from 'next/server'
import TTLCache from '@isaacs/ttlcache'

const BASE_URL = 'https://api.opensensemap.org/boxes/data/bytag'

const ttl = 5 * 60 * 1000 // 5 minutes

const cache = new TTLCache<string, unknown>({ ttl })

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const grouptag = searchParams.get('grouptag')

  if (!grouptag) {
    return NextResponse.json(
      { error: 'Missing grouptag parameter' },
      { status: 400 },
    )
  }

  const cacheKey = `opensensemap-bytag-${grouptag}`

  if (cache.has(cacheKey)) {
    return NextResponse.json(cache.get(cacheKey))
  }

  try {
    const response = await fetch(
      `${BASE_URL}?grouptag=${encodeURIComponent(grouptag)}&format=json`,
    )

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const data = await response.json()

    cache.set(cacheKey, data)

    return NextResponse.json(data)
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch openSenseMap measurement data' },
      { status: 500 },
    )
  }
}
