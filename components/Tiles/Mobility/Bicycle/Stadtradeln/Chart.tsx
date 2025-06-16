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
    (
      data: StadtradelnData[],
      color: string,
      symbol: string,
    ): SeriesOption[] => {
      const regularData = data.filter(({ year }) => !String(year).includes('*'))
      const preliminaryData = data.filter(({ year }) =>
        String(year).includes('*'),
      )

      const createLineSeries = (): LineSeriesOption => ({
        type: 'line',
        data: data.map(({ year, value }) => [year, value]),
        lineStyle: { opacity: 0 },
        symbol: 'none',
        smooth: 0.2,
      })

      const createBarSeries = (
        dataset: StadtradelnData[],
        seriesColor: string,
        dashed: boolean = false,
      ): BarSeriesOption => ({
        type: 'bar',
        data: dataset.map(({ year, value }) => [year, value]),
        itemStyle: dashed
          ? {
              color: colors.highlight.color,
              borderColor: colors.highlight.color,
              borderType: 'dashed',
              borderWidth: 2,
              borderRadius: [2, 2, 0, 0],
            }
          : {
              color: seriesColor,
              borderRadius: [2, 2, 0, 0],
            },
        barWidth: dashed ? 1 : 3,
        barGap: 2,
        xAxisIndex: 1,
        zlevel: dashed ? 20 : 10,
        label: !dashed
          ? {
              formatter: () => 'X',
              position: 'top',
            }
          : undefined,
      })

      const createIconSeries = (
        dataset: StadtradelnData[],
        iconSymbol: string,
      ): PictorialBarSeriesOption => ({
        type: 'pictorialBar',
        data: dataset.map(({ year, value }) => [year, value]),
        symbol: iconSymbol,
        symbolSize: device === 'desktop' ? [61, 61] : [30, 30],
        symbolOffset: device === 'desktop' ? [0, -60] : [0, -30],
        symbolRotate: 15,
        symbolPosition: 'end',
        barWidth: 3,
        barGap: 2,
        xAxisIndex: 1,
        zlevel: 20,
      })

      const series: SeriesOption[] = [
        createLineSeries(),
        createBarSeries(regularData, color),
        ...(preliminaryData.length
          ? [createBarSeries(preliminaryData, color, true)]
          : []),
        createIconSeries(regularData, symbol),
        ...(preliminaryData.length
          ? [createIconSeries(preliminaryData, colors.highlight.symbol)]
          : []),
      ]

      return series
    },
    [device],
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
