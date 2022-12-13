'use client'

import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import { SeriesOption ***REMOVED*** from 'echarts'

export default function RadarChart({
  data,
***REMOVED***: {
  data: {
    [x: string]: {
      [key: string]: number
  ***REMOVED***
***REMOVED***
***REMOVED***) {
  const series: SeriesOption = {
    name: 'Climate',
    type: 'radar',
    data: Object.keys(data).map(y => {
      const year = data[y]
      return {
        value: Object.keys(year)
          .map(m => year[m])
          .reverse(),
        name: y,
        areaStyle: {
          color: 'blue',
          opacity: 0.01,
      ***REMOVED***,
        lineStyle: {
          width: 0,
      ***REMOVED***,
        itemStyle: {
          opacity: 0,
      ***REMOVED***,
    ***REMOVED***
  ***REMOVED***),
***REMOVED***

  return (
    <ReactECharts
      option={{
        radar: {
          shape: 'circle',

          indicator: [
      ***REMOVED*** name: 'Jan' ***REMOVED***,
      ***REMOVED*** name: 'Feb' ***REMOVED***,
      ***REMOVED*** name: 'Mar' ***REMOVED***,
      ***REMOVED*** name: 'Apr' ***REMOVED***,
      ***REMOVED*** name: 'May' ***REMOVED***,
      ***REMOVED*** name: 'Jun' ***REMOVED***,
      ***REMOVED*** name: 'Jul' ***REMOVED***,
      ***REMOVED*** name: 'Aug' ***REMOVED***,
      ***REMOVED*** name: 'Sep' ***REMOVED***,
      ***REMOVED*** name: 'Oct' ***REMOVED***,
      ***REMOVED*** name: 'Nov' ***REMOVED***,
      ***REMOVED*** name: 'Dec' ***REMOVED***,
          ].reverse(),
      ***REMOVED***,
        series: series,
    ***REMOVED******REMOVED***
    />
  )
***REMOVED***
