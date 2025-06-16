import { ReactECharts } from '@/components/Charts/ReactECharts'
import { Spinner } from '@/components/Elements/Spinner'
import useDevice from '@/hooks/useDevice'
import tailwindConfig from '@/tailwind.config.js'
import {
  BarSeriesOption,
  LineSeriesOption,
  PictorialBarSeriesOption,
  SeriesOption,
} from 'echarts'
import { useCallback, useEffect, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import { StadtradelnData } from './ChartContainer'

const { theme } = resolveConfig(tailwindConfig)

const colors = {
  muenster: {
    // @ts-ignore
    color: theme?.colors?.mobility.DEFAULT || '#FF7A00',
    symbol: `image://${
      require('@/assets/icons/Bicycle/BicycleIconBlue.svg').default.src
    }`,
  },
  other: {
    // @ts-ignore
    color: theme?.colors?.buildings.DEFAULT || '#6060d6',
    symbol: `image://${
      require('@/assets/icons/Bicycle/BicycleIconPurple.svg').default.src
    }`,
  },
  highlight: {
    color: '#f97316',
    symbol: `image://${
      require('@/assets/icons/Bicycle/BicycleIconOrange.svg').default.src
    }`,
  },
}

type ChartProps = {
  compare: boolean
  data: StadtradelnData[]
  other?: StadtradelnData[]
}

export default function Chart({ data, other }: ChartProps) {
  const [series, setSeries] = useState<SeriesOption[]>()

  const device = useDevice()

  const getSeries = useCallback(
    (data: StadtradelnData[], color: string, symbol: string) => {
      // Split data into regular and 2025
      const regular = data.filter(({ year }) => year !== '2025 *')
      const data2025 = data.filter(({ year }) => year === '2025 *')

      const lineSeries: LineSeriesOption = {
        data: data.map(({ year, value }) => [year, value]),
        type: 'line',
        lineStyle: {
          opacity: 0,
        },
        symbol: 'none',
        itemStyle: {},
        smooth: 0.2,
      }

      const barSeriesRegular: BarSeriesOption = {
        data: regular.map(({ year, value }) => [year, value]),
        type: 'bar',
        barWidth: 3,
        zlevel: 10,
        itemStyle: {
          color: color,
          borderRadius: [2, 2, 0, 0],
        },

        barGap: 2,
        xAxisIndex: 1,
        label: {
          formatter: () => 'X',
          position: 'top',
        },
      }

      const barSeries2025: BarSeriesOption | null = data2025.length
        ? {
            type: 'bar',
            data: data2025.map(item => ({
              value: [item.year, item.value],
              itemStyle: {
                color: colors.highlight.color,
                borderColor: colors.highlight.color,
                borderType: 'dashed',
                borderWidth: 4,
                borderRadius: [2, 2, 0, 0],
              },
            })),
            barWidth: 3,
            xAxisIndex: 1,
            zlevel: 10,
            barGap: 2,
          }
        : null

      const regularIcons: PictorialBarSeriesOption = {
        data: regular.map(({ year, value }) => [year, value]),
        type: 'pictorialBar',
        symbol: symbol,
        symbolSize: device === 'desktop' ? [61, 61] : [30, 30],
        symbolOffset: device === 'desktop' ? [0, -60] : [0, -30],
        symbolRotate: 15,
        barWidth: 3,
        barGap: 2,
        symbolPosition: 'end',
        xAxisIndex: 1,
        zlevel: 20,
      }

      const icons2025: PictorialBarSeriesOption | null = data2025.length
        ? {
            data: data2025.map(({ year, value }) => [year, value]),
            type: 'pictorialBar',
            symbol: colors.highlight.symbol,
            symbolSize: device === 'desktop' ? [61, 61] : [30, 30],
            symbolOffset: device === 'desktop' ? [0, -60] : [0, -30],
            symbolRotate: 15,
            barWidth: 3,
            barGap: 2,
            symbolPosition: 'end',
            xAxisIndex: 1,
            zlevel: 20,
          }
        : null

      return [
        lineSeries,
        barSeriesRegular,
        ...(barSeries2025 ? [barSeries2025] : []),
        regularIcons,
        ...(icons2025 ? [icons2025] : []),
      ]
    },
    [],
  )

  useEffect(() => {
    if (!data) {
      return
    }

    setSeries(getSeries(data, colors.muenster.color, colors.muenster.symbol))
  }, [data])

  useEffect(() => {
    if (!other) {
      setSeries(getSeries(data, colors.muenster.color, colors.muenster.symbol))
      return
    }

    setSeries([
      ...getSeries(data, colors.muenster.color, colors.muenster.symbol),
      ...getSeries(other, colors.other.color, colors.other.symbol),
    ])
  }, [other])

  // the maximum value of the series
  const maxValue = Math.max(...data.map(e => e.value))

  if (!data) {
    return <Spinner />
  }

  return (
    <div className="relative h-full w-full">
      <div className="absolute left-0 top-0 h-full w-full">
        <ReactECharts
          option={{
            grid: {
              left: '20%',
              right: '10%',
              top: '20%',
              bottom: '10%',
            },
            xAxis: [
              {
                // hidden xaxis for lines
                type: 'category',
                axisTick: undefined,
                boundaryGap: false,
                position: 'bottom',
                show: false,
              },
              {
                // xaxis for bars
                type: 'category',
                axisTick: undefined,
                position: 'bottom',
                name: 'Jahr',
                axisLabel: {
                  fontSize: device === 'mobile' ? 12 : 20,
                },
              },
            ],
            yAxis: {
              type: 'value',
              interval: (Math.ceil(maxValue / 250000) * 250000) / 4,
              max: Math.ceil(maxValue / 250000) * 250000,
              axisLabel: {
                fontSize: device === 'mobile' ? 12 : 20,
                formatter: (value: number) =>
                  value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
              },
            },
            series,
          }}
          settings={{
            notMerge: true,
          }}
        />
      </div>
    </div>
  )
}
