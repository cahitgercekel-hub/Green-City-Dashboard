'use client'

import type { ECharts, EChartsOption, SetOptionOpts ***REMOVED*** from 'echarts'
import { getInstanceByDom, init ***REMOVED*** from 'echarts'
import type { CSSProperties, JSX ***REMOVED*** from 'react'
import { useEffect, useRef ***REMOVED*** from 'react'

import useDevice from '@/hooks/useDevice'

export interface ReactEChartsProps {
  option: EChartsOption
  style?: CSSProperties
  settings?: SetOptionOpts
  loading?: boolean
  theme?: 'light' | 'dark'
  renderer?: 'svg' | 'canvas'
***REMOVED***

export function ReactECharts({
  option,
  style,
  settings,
  loading,
  theme,
  renderer = 'svg',
***REMOVED***: ReactEChartsProps): JSX.Element {
  const chartRef = useRef<HTMLDivElement>(null)

  const device = useDevice()

  useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined
    if (chartRef.current !== null) {
      chart = init(chartRef.current, theme, {
        renderer,
    ***REMOVED***)
  ***REMOVED***

    // Add chart resize listener
    // ResizeObserver is leading to a bit janky UX
    function resizeChart() {
      chart?.resize()
  ***REMOVED***
    window.addEventListener('resize', resizeChart)

    // Return cleanup function
    return () => {
      chart?.dispose()
      window.removeEventListener('resize', resizeChart)
  ***REMOVED***
***REMOVED***, [theme])

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current)
      const myOption: EChartsOption = {
        textStyle: {
          ...option.textStyle,
          fontFamily: 'Inter, sans-serif',
          color: '#005b79',
          fontSize: device === 'mobile' ? 12 : 20,
      ***REMOVED***,
        ...option,
    ***REMOVED***
      chart!.setOption(myOption, settings)
  ***REMOVED***
***REMOVED***, [option, settings, theme]) // Whenever theme changes we need to add option and setting due to it being deleted in cleanup function

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current)
      loading === true ? chart!.showLoading() : chart!.hideLoading()
  ***REMOVED***
***REMOVED***, [loading, theme])

  return <div className="h-full w-full" ref={chartRef***REMOVED*** style={{ ...style ***REMOVED******REMOVED*** />
***REMOVED***
