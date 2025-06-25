// import { NextResponse } from 'next/server'
// import TTLCache from '@isaacs/ttlcache'
// import { subDays } from 'date-fns'

// const ttl = 60 * 60 * 1000 // 1 hour cache
// const neosensCache = new TTLCache<string, any>({ ttl })

// interface DailyCount {
//   counts: number
//   date: string
// }

// interface YearlyCount {
//   countsPerYear: number
//   year: number
// }

// interface ApiResponse {
//   cuId: number
//   dailyTotalTraffic: number
//   yearlyTotalPedestrian: number
//   yearlyTotalBike: number
//   fullDataDaily: {
//     labels: string[]
//     datasets: {
//       totalBikes: number[]
//       totalPedestrians: number[]
//     }
//   }
// }

// export const GET = async (req: Request) => {
//   try {
//     const { searchParams } = new URL(req.url)
//     const cuId = searchParams.get('cuId')

//     // Validate cuId parameter
//     if (!cuId) {
//       return NextResponse.json(
//         { error: 'Missing cuId parameter' },
//         { status: 400 },
//       )
//     }

//     // Create cache key based on cuId
//     const cacheKey = `neosens-data-${cuId}`

//     // Return cached data if available
//     if (neosensCache.has(cacheKey)) {
//       return NextResponse.json(neosensCache.get(cacheKey))
//     }

//     // Convert cuId to number array (API expects array of numbers)
//     const cuIds = [Number(cuId)]

//     // Validate it's a valid number
//     if (isNaN(cuIds[0])) {
//       return NextResponse.json(
//         { error: 'Invalid cuId parameter - must be a number' },
//         { status: 400 },
//       )
//     }

//     const cuIdsParam = encodeURIComponent(JSON.stringify(cuIds))
//     const response = await fetch(
//       `https://api.neocount.de/traffic-counts/sensor-data?cuIds=${cuIdsParam}`,
//     )

//     if (!response.ok) {
//       throw new Error(`API request failed with status ${response.status}`)
//     }

//     const data: ApiResponse[] = await response.json()

//     if (!data || !data.length) {
//       return NextResponse.json([], { status: 200 })
//     }

//     const stationData = data[0]
//     const bikeData = stationData.fullDataDaily.datasets.totalBikes
//     const labels = stationData.fullDataDaily.labels
//     const yearlyTotal = stationData.yearlyTotalBike

//     const monthMap: Record<string, string> = {
//       Januar: '01',
//       Februar: '02',
//       März: '03',
//       April: '04',
//       Mai: '05',
//       Juni: '06',
//       Juli: '07',
//       August: '08',
//       September: '09',
//       Oktober: '10',
//       November: '11',
//       Dezember: '12',
//     }

//     // Get yesterday's date
//     const yesterday = subDays(new Date(), 1)
//     const yesterdayString = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`

//     // Process all daily counts with dates
//     const allDailyCounts: DailyCount[] = labels
//       .map((label, index) => {
//         const count = bikeData[index]
//         if (count === 0) {
//           return null
//         }

//         const [day, month, year] = label.split(' ')
//         const cleanDay = day.replace('.', '')

//         return {
//           counts: count,
//           date: `${year}-${monthMap[month]}-${cleanDay.padStart(2, '0')}T00:00:00+02:00`,
//         }
//       })
//       .filter(Boolean) as DailyCount[]

//     // Find index of yesterday's data
//     const yesterdayIndex = allDailyCounts.findIndex(d =>
//       d.date.startsWith(yesterdayString),
//     )

//     // Get 7 days ending with yesterday
//     const dailyCounts =
//       yesterdayIndex >= 0
//         ? allDailyCounts.slice(
//             Math.max(0, yesterdayIndex - 6),
//             yesterdayIndex + 1,
//           )
//         : allDailyCounts.slice(-7)

//     // Get current year
//     const currentYear =
//       dailyCounts.length > 0
//         ? new Date(dailyCounts[dailyCounts.length - 1].date).getFullYear()
//         : new Date().getFullYear()

//     // Create yearly count entry
//     const yearlyCount: YearlyCount = {
//       countsPerYear: yearlyTotal,
//       year: currentYear,
//     }

//     // Combine both daily and yearly data
//     const responseData = [...dailyCounts, yearlyCount]

//     // Cache the response with cuId-specific key
//     neosensCache.set(cacheKey, responseData)

//     return NextResponse.json(responseData)
//   } catch (error) {
//     return NextResponse.json(
//       {
//         error: error instanceof Error ? error.message : 'Failed to fetch data',
//       },
//       { status: 500 },
//     )
//   }
// }

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
