import { NextResponse } from 'next/server'
import TTLCache from '@isaacs/ttlcache'
import { format, subDays } from 'date-fns'

const CACHE_TTL = 60 * 60 * 1000 // 1 hour
const neosensCache = new TTLCache<string, any>({ ttl: CACHE_TTL })

const MONTH_MAP: Record<string, string> = {
  Januar: '01',
  Februar: '02',
  März: '03',
  April: '04',
  Mai: '05',
  Juni: '06',
  Juli: '07',
  August: '08',
  September: '09',
  Oktober: '10',
  November: '11',
  Dezember: '12',
}

interface DailyCount {
  counts: number
  date: string
}

interface YearlyCount {
  countsPerYear: number
  year: number
}

interface ApiResponse {
  cuId: number
  dailyTotalTraffic: number
  yearlyTotalPedestrian: number
  yearlyTotalBike: number
  fullDataDaily: {
    labels: string[]
    datasets: {
      totalBikes: number[]
      totalPedestrians: number[]
    }
  }
}

function formatDateGermanLabel(label: string): string | null {
  const [day, month, year] = label.split(' ')
  if (!day || !month || !year || !MONTH_MAP[month]) {
    return null
  }

  const cleanDay = day.replace('.', '').padStart(2, '0')
  return `${year}-${MONTH_MAP[month]}-${cleanDay}T00:00:00+02:00`
}

function getYesterdayString(): string {
  return format(subDays(new Date(), 1), 'yyyy-MM-dd')
}

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url)
    const cuId = searchParams.get('cuId')

    if (!cuId) {
      return NextResponse.json(
        { error: 'Missing cuId parameter' },
        { status: 400 },
      )
    }

    const cuIdNum = Number(cuId)
    if (isNaN(cuIdNum)) {
      return NextResponse.json(
        { error: 'Invalid cuId parameter' },
        { status: 400 },
      )
    }

    const cacheKey = `neosens-data-${cuId}`
    if (neosensCache.has(cacheKey)) {
      return NextResponse.json(neosensCache.get(cacheKey))
    }

    const cuIdsParam = encodeURIComponent(JSON.stringify([cuIdNum]))
    const apiUrl = `https://api.neocount.de/traffic-counts/sensor-data?cuIds=${cuIdsParam}`
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const data: ApiResponse[] = await response.json()
    if (!data || !data.length) {
      return NextResponse.json([], { status: 200 })
    }

    const { fullDataDaily, yearlyTotalBike } = data[0]
    const { labels, datasets } = fullDataDaily
    const { totalBikes } = datasets

    const allDailyCounts: DailyCount[] = labels
      .map((label, index) => {
        const formattedDate = formatDateGermanLabel(label)
        const count = totalBikes[index]

        if (!formattedDate || count === 0) {
          return null
        }
        return { date: formattedDate, counts: count }
      })
      .filter(Boolean) as DailyCount[]

    const yesterdayString = getYesterdayString()

    const yesterdayIndex = allDailyCounts.findIndex(d =>
      d.date.startsWith(yesterdayString),
    )

    const dailyCounts =
      yesterdayIndex >= 0
        ? allDailyCounts.slice(
            Math.max(0, yesterdayIndex - 6),
            yesterdayIndex + 1,
          )
        : allDailyCounts.slice(-7)

    const currentYear = dailyCounts.length
      ? new Date(dailyCounts[dailyCounts.length - 1].date).getFullYear()
      : new Date().getFullYear()

    const yearlyCount: YearlyCount = {
      countsPerYear: yearlyTotalBike,
      year: currentYear,
    }

    const responseData = [...dailyCounts, yearlyCount]
    neosensCache.set(cacheKey, responseData)

    return NextResponse.json(responseData)
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : 'Unexpected server error',
      },
      { status: 500 },
    )
  }
}
