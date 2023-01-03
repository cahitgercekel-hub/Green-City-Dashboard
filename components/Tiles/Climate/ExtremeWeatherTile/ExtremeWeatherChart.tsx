import { SeriesOption ***REMOVED*** from 'echarts'
import { ReactECharts ***REMOVED*** from '../../../../components/Charts/ReactECharts'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../tailwind.config'
import React from 'react'

type ExtremeWeatherChartProps = {
  //   showFuture?: boolean
***REMOVED***

const { theme ***REMOVED*** = resolveConfig(tailwindConfig)

export default function CO2Chart({***REMOVED***: ExtremeWeatherChartProps) {
  const series: SeriesOption[] = [
    {
      type: 'bar',
      name: 'Verkehr',
      data: [0, 1, 2],
      // @ts-ignore
      color: theme?.colors?.mobility.DEFAULT || '#34c17b',
      //   barStyle: {
      //     width: 3,
      // ***REMOVED***,
  ***REMOVED***,
    // {
    //   type: 'line',
    //   name: 'Industrie',
    //   data: prepareData('Industrie'),
    //   showSymbol: false,
    //   // @ts-ignore
    //   color: theme?.colors?.primary.DEFAULT || '#005b79',
    //   lineStyle: {
    //     width: 3,
    // ***REMOVED***,
    // ***REMOVED***,
    // {
    //   type: 'line',
    //   name: 'Gewerbe und Sonstiges',
    //   data: prepareData('Gewerbe + Sonstiges'),
    //   showSymbol: false,
    //   // @ts-ignore
    //   color: '#f3e500',
    //   lineStyle: {
    //     width: 3,
    // ***REMOVED***,
    // ***REMOVED***,
    // {
    //   type: 'line',
    //   name: 'Private Haushalte',
    //   data: prepareData('Private Haushalte'),
    //   showSymbol: false,
    //   // @ts-ignore
    //   color: theme?.colors?.energy.DEFAULT || '#f28443',
    //   lineStyle: {
    //     width: 3,
    // ***REMOVED***,
    // ***REMOVED***,
  ]

  return (
    <ReactECharts
      option={{
        xAxis: {
          max: 'dataMax',
      ***REMOVED***,
        yAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D', 'E'],
      ***REMOVED***,
        series: series,
    ***REMOVED******REMOVED***
    />
  )
***REMOVED***
