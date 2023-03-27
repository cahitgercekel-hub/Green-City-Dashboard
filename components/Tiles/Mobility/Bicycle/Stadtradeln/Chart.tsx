import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import { Spinner ***REMOVED*** from '@/components/Elements/Spinner'
import {
  BarSeriesOption,
  LineSeriesOption,
  PictorialBarSeriesOption,
  SeriesOption,
***REMOVED*** from 'echarts'
import { useEffect, useState ***REMOVED*** from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config.js'

const { theme ***REMOVED*** = resolveConfig(tailwindConfig)

const colors = {
  muenster: {
    // @ts-ignore
    color: theme?.colors?.mobility.DEFAULT || '#34c17b',
    symbol: `image://${
      require('@/assets/icons/Bicycle/BicycleIconGreen.svg').default.src
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

type StadtradelnData = {
  name: string
  data: {
    year: number
    km: number
***REMOVED***[]
***REMOVED***

type ChartProps = {
  compare: boolean
  data: StadtradelnData
  other?: StadtradelnData
***REMOVED***

const getSeries = (data: StadtradelnData, color: string, symbol: string) => {
  const lineSeries: LineSeriesOption = {
    data: data.data.map(({ year, km ***REMOVED***) => [year, km]),
    type: 'line',
    lineStyle: {
      opacity: 0,
  ***REMOVED***,
    symbol: 'none',
    itemStyle: {***REMOVED***,
    smooth: 0.2,
***REMOVED***

  const barSeries: BarSeriesOption = {
    data: data.data.map(({ year, km ***REMOVED***) => [year, km]),
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
    data: data.data.map(({ year, km ***REMOVED***) => [year, km]),
    type: 'pictorialBar',
    symbol: symbol,
    symbolSize: [61, 61],
    symbolOffset: [0, -60],
    symbolRotate: 15,
    barWidth: 3,
    barGap: 2,
    symbolPosition: 'end',
    xAxisIndex: 1,
    zlevel: 20,
***REMOVED***

  return [lineSeries, barSeries, barIcons]
***REMOVED***

export default function Chart({ data, other ***REMOVED***: ChartProps) {
  const [series, setSeries] = useState<SeriesOption[]>()

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

  if (!data) {
    return <Spinner />
***REMOVED***

  return (
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
        ***REMOVED***,
        ],
        yAxis: {
          type: 'value',
          interval: 250000,
          name: 'km',
          max: 2000000,
          axisLabel: {
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
  )
***REMOVED***
