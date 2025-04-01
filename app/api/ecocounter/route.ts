import { NextResponse } from 'next/server'
import TTLCache from '@isaacs/ttlcache'
import { format, subDays } from 'date-fns'

const apiKey = process.env.ECOCOUNTER_API_KEY

const BASE_URL = 'https://api.eco-counter.com/api/v2/history/traffic/aggregated'

const ttl = 60 * 60 * 1000 // 1 hour

const trafficCache = new TTLCache<string, any>({ ttl })

export const GET = async (req: Request) => {
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing API key' }, { status: 500 })
  }

  const { searchParams } = new URL(req.url)
  const siteId = searchParams.get('siteId')

  if (!siteId) {
    return NextResponse.json(
      { error: 'Missing siteId parameter' },
      { status: 400 },
    )
  }

  const cacheKey = `trafficData-${siteId}`

  if (trafficCache.has(cacheKey)) {
    return NextResponse.json(trafficCache.get(cacheKey))
  }

  try {
    const endDate = format(subDays(new Date(), 0), 'yyyy-MM-dd')
    const startDate = format(subDays(new Date(), 7), 'yyyy-MM-dd')

    const response = await fetch(
      `${BASE_URL}?siteId=${siteId}&startDate=${startDate}&endDate=${endDate}`,
      { headers: { 'X-API-KEY': apiKey } },
    )

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }
    const responseData = await response.json()

    const formattedData = responseData['0'].data.map((entry: any) => {
      return { counts: entry.traffic.counts, date: entry.timestamp }
    })

    trafficCache.set(cacheKey, formattedData)

    return NextResponse.json(formattedData)
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Failed to fetch data',
      },
      { status: 500 },
    )
  }
}
