'use client'

import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import { useEffect, useState ***REMOVED*** from 'react'

export default function RadarChart({
  data,
***REMOVED***: {
  data: {
    [x: string]: {
      [key: number]: number
  ***REMOVED***
***REMOVED***
***REMOVED***) {
  const [years, setYears] = useState<string[]>([])
  const [seriesData, setSeriesData] = useState<any[]>([])
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const timer = setInterval(
      () => setCounter(prevCounter => prevCounter + 1),
      200,
***REMOVED***

    return () => clearInterval(timer)
***REMOVED***, [])

  useEffect(() => {
    const allYears = Object.keys(data)
    if (counter >= allYears.length) {
      setCounter(0)
      setYears([])
      return
  ***REMOVED***
    const newYear = allYears[counter]
    setYears([...years, newYear])
***REMOVED***, [counter])

  useEffect(() => {
    const mySeriesData = years?.slice(-10).map(y => {
      const year = data[y]
      return {
        value: Object.keys(year)
          .map(m => year[Number(m)])
          .reverse(),
        name: y,
        areaStyle: {
          color: '#14b3d9',
          opacity: 0.1,
      ***REMOVED***,
        lineStyle: {
          width: 0,
      ***REMOVED***,
        itemStyle: {
          opacity: 0,
      ***REMOVED***,
    ***REMOVED***
  ***REMOVED***)
    setSeriesData(mySeriesData)
***REMOVED***, [years])

  return (
    <div className="relative h-full w-full">
      <div className="absolute flex h-full w-full items-center justify-center">
        <p className="z-10 text-2xl">{years[years.length - 1]***REMOVED***</p>
      </div>

      <ReactECharts
        option={{
          animation: false,
          radar: {
            splitLine: {
              show: false,
          ***REMOVED***,
            splitArea: {
              areaStyle: {
                color: ['#14b3d91f'],
            ***REMOVED***,
          ***REMOVED***,
            axisLine: {
              show: false,
          ***REMOVED***,
            axisTick: {
              show: false,
          ***REMOVED***,
            shape: 'circle',
            indicator: [
        ***REMOVED*** name: 'Jan', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'Feb', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'Mar', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'Apr', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'May', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'Jun', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'Jul', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'Aug', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'Sep', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'Oct', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'Nov', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'Dec', min: -5, max: 5 ***REMOVED***,
            ].reverse(),
        ***REMOVED***,
          series: {
            name: 'Climate',
            type: 'radar',
            data: seriesData,
        ***REMOVED***,
      ***REMOVED******REMOVED***
        renderer="canvas"
      />
    </div>
  )
***REMOVED***
