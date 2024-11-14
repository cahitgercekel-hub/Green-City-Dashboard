'use client'

import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import Title from '@/components/Elements/Title'
import { useEffect, useState ***REMOVED*** from 'react'

export type AvgTempData = {
  [x: string]: {
    [key: number]: number
***REMOVED***
***REMOVED***

export default function RadarChart({ data ***REMOVED***: { data: AvgTempData ***REMOVED***) {
  const [years, setYears] = useState<string[]>([])
  const [seriesData, setSeriesData] = useState<any[]>([])
  const [counter, setCounter] = useState(0)

  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(
        () => setCounter(prevCounter => prevCounter + 1),
        180,
  ***REMOVED***
      return () => clearInterval(timer)
  ***REMOVED***
***REMOVED***, [isPlaying])

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
    const mySeriesData = years?.slice(-12).map(y => {
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
    <div
      className="relative h-full w-full cursor-pointer"
      onClick={e => {
        e.stopPropagation()
        setIsPlaying(!isPlaying)
    ***REMOVED******REMOVED***
    >
      <div className="absolute flex h-full w-full items-center justify-center">
        <Title as={'h4'***REMOVED*** className="z-10 text-2xl">
    ***REMOVED***years[years.length - 1]***REMOVED***
        </Title>
      </div>

      <ReactECharts
        option={{
          animation: false,
          radar: {
            axisLabel: {
              fontSize: '20px',
          ***REMOVED***,
            splitLine: {
              show: true,
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
        ***REMOVED*** name: 'JAN', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'FEB', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'MÄR', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'APR', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'MAI', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'JUN', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'JUL', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'AUG', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'SEP', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'OKT', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'NOV', min: -5, max: 5 ***REMOVED***,
        ***REMOVED*** name: 'DEZ', min: -5, max: 5 ***REMOVED***,
            ].reverse(),
        ***REMOVED***,
          series: [
      ***REMOVED***
              name: 'Climate',
              type: 'radar',
              data: [
                // zero,
                ...seriesData,
              ],
          ***REMOVED***,
          ],
      ***REMOVED******REMOVED***
        renderer="svg"
      />
    </div>
  )
***REMOVED***
