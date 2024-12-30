import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import { Spinner ***REMOVED*** from '@/components/Elements/Spinner'
import useDevice from '@/hooks/useDevice'
import tailwindConfig from '@/tailwind.config.js'
import {
  BarSeriesOption,
  LineSeriesOption,
  PictorialBarSeriesOption,
  SeriesOption,
***REMOVED*** from 'echarts'
import { useCallback, useEffect, useState ***REMOVED*** from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import { StadtradelnData ***REMOVED*** from './ChartContainer'

const { theme ***REMOVED*** = resolveConfig(tailwindConfig)

const colors = {
  muenster: {
    // @ts-ignore
    color: theme?.colors?.mobility.DEFAULT || '#FF7A00',
    symbol: `image://${
      require('@/assets/icons/Bicycle/BicycleIconBlue.svg').default.src
  ***REMOVED***`,
***REMOVED***,
  other: {
    // @ts-ignore
    color: theme?.colors?.buildings.DEFAULT || '#6060d6',
    symbol: `image://${
      require('@/assets/icons/Bicycle/BicycleIconPurple.svg').default.src
  ***REMOVED***`,
***REMOVED***,
***REMOVED***

type ChartProps = {
  compare: boolean
  data: StadtradelnData[]
  other?: StadtradelnData[]
***REMOVED***

export default function Chart({ data, other ***REMOVED***: ChartProps) {
  const [series, setSeries] = useState<SeriesOption[]>()

  const device = useDevice()

  const getSeries = useCallback(
    (data: StadtradelnData[], color: string, symbol: string) => {
      const lineSeries: LineSeriesOption = {
        data: data.map(({ year, value ***REMOVED***) => [year, value]),
        type: 'line',
        lineStyle: {
          opacity: 0,
      ***REMOVED***,
        symbol: 'none',
        itemStyle: {***REMOVED***,
        smooth: 0.2,
    ***REMOVED***

      const barSeries: BarSeriesOption = {
        data: data.map(({ year, value ***REMOVED***) => [year, value]),
        type: 'bar',
        barWidth: 3,
        zlevel: 10,
        itemStyle: {
          color: color,
          borderRadius: [2, 2, 0, 0],
      ***REMOVED***,
        barGap: 2,
        xAxisIndex: 1,
        label: {
          formatter: () => 'X',
          position: 'top',
      ***REMOVED***,
    ***REMOVED***

      const barIcons: PictorialBarSeriesOption = {
        data: data.map(({ year, value ***REMOVED***) => [year, value]),
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
    ***REMOVED***

      return [lineSeries, barSeries, barIcons]
  ***REMOVED***,
    [],
  )

  useEffect(() => {
    if (!data) {
      return
  ***REMOVED***

    setSeries(getSeries(data, colors.muenster.color, colors.muenster.symbol))
***REMOVED***, [data])

  useEffect(() => {
    if (!other) {
      setSeries(getSeries(data, colors.muenster.color, colors.muenster.symbol))
      return
  ***REMOVED***

    setSeries([
      ...getSeries(data, colors.muenster.color, colors.muenster.symbol),
      ...getSeries(other, colors.other.color, colors.other.symbol),
    ])
***REMOVED***, [other])

  // the maximum value of the series
  const maxValue = Math.max(...data.map(e => e.value))

  if (!data) {
    return <Spinner />
***REMOVED***

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
          ***REMOVED***,
            xAxis: [
        ***REMOVED***
                // hidden xaxis for lines
                type: 'category',
                axisTick: undefined,
                boundaryGap: false,
                position: 'bottom',
                show: false,
            ***REMOVED***,
        ***REMOVED***
                // xaxis for bars
                type: 'category',
                axisTick: undefined,
                position: 'bottom',
                name: 'Jahr',
                axisLabel: {
                  fontSize: device === 'mobile' ? 12 : 20,
              ***REMOVED***,
            ***REMOVED***,
            ],
            yAxis: {
              type: 'value',
              interval: (Math.ceil(maxValue / 250000) * 250000) / 4,
              max: Math.ceil(maxValue / 250000) * 250000,
              axisLabel: {
                fontSize: device === 'mobile' ? 12 : 20,
                formatter: (value: number) =>
                  value.toFixed(0).replace(/\B(?=(\d{3***REMOVED***)+(?!\d))/g, '.'),
            ***REMOVED***,
          ***REMOVED***,
            series,
        ***REMOVED******REMOVED***
          settings={{
            notMerge: true,
        ***REMOVED******REMOVED***
        />
      </div>
    </div>
  )
***REMOVED***
