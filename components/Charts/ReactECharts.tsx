import React, { useEffect, useRef ***REMOVED*** from 'react'
import { getInstanceByDom, init ***REMOVED*** from 'echarts'
import type { CSSProperties ***REMOVED*** from 'react'
import type { ECharts, EChartsOption, SetOptionOpts ***REMOVED*** from 'echarts'

export interface ReactEChartsProps {
  option: EChartsOption
  style?: CSSProperties
  settings?: SetOptionOpts
  loading?: boolean
  theme?: 'light' | 'dark'
***REMOVED***

export function ReactECharts({
  option,
  style,
  settings,
  loading,
  theme,
***REMOVED***: ReactEChartsProps): JSX.Element {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined
    if (chartRef.current !== null) {
      chart = init(chartRef.current, theme, {
        renderer: 'svg',
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
      chart!.setOption(option, settings)
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
