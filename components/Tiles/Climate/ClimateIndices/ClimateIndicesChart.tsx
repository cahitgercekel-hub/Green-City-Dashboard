'use client'

import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import climateIndicesData from '@/assets/data/climate_indices.json'
import { SeriesOption ***REMOVED*** from 'echarts'
import { parse ***REMOVED*** from 'date-fns'

type ClimateIndex = {
  dwd_station_id: number
  eistage: number
  frosttage: number
  heisse_tage: number
  observation_type: string
  sommertage: number
  timestamp: string
  tropennaechte: number
***REMOVED***

const SCATTER_SYMBOL_SIZE = 7
const data = climateIndicesData as ClimateIndex[]
const getSeries = (property: keyof ClimateIndex) =>
  data.map(e => [
    parse(e.timestamp, 'yyyy-MM-dd HH:mm:ssXXX', new Date()),
    e[property],
  ])

export default function ClimateIndicesChart() {
  const series: SeriesOption[] = [
    {
      name: 'Eistage',
      type: 'scatter',
      symbolSize: SCATTER_SYMBOL_SIZE,
      data: getSeries('eistage'),
  ***REMOVED***,
    {
      name: 'Frosttage',
      type: 'scatter',
      symbolSize: SCATTER_SYMBOL_SIZE,
      data: getSeries('frosttage'),
  ***REMOVED***,
    {
      name: 'Heiße Tage',
      type: 'scatter',
      symbolSize: SCATTER_SYMBOL_SIZE,
      data: getSeries('heisse_tage'),
  ***REMOVED***,
    {
      name: 'Sommertage',
      type: 'scatter',
      symbolSize: SCATTER_SYMBOL_SIZE,
      data: getSeries('sommertage'),
  ***REMOVED***,
    {
      name: 'Tropennächte',
      type: 'scatter',
      symbolSize: SCATTER_SYMBOL_SIZE,
      data: getSeries('tropennaechte'),
  ***REMOVED***,
  ]

  return (
    <ReactECharts
      option={{
        series,
        xAxis: {
          type: 'time',
      ***REMOVED***,
        yAxis: {
          type: 'value',
          min: 1,
      ***REMOVED***,
        legend: {
          show: true,
          bottom: 0,
          icon: 'circle',
      ***REMOVED***,
        textStyle: {
          fontSize: 12,
      ***REMOVED***,
    ***REMOVED******REMOVED***
      renderer="canvas"
    />
  )
***REMOVED***
