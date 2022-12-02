import useCO2Data from '@/hooks/useCO2Data'
import { parse ***REMOVED*** from 'date-fns'
import Chart from 'react-apexcharts'

type CO2ChartProps = {
  showFuture?: boolean
***REMOVED***

export default function CO2Chart({ showFuture = false ***REMOVED***: CO2ChartProps) {
  const data = useCO2Data()

  const categories = showFuture
    ? [...data.map(e => e.Jahr), 2030]
    : data.map(e => e.Jahr)

  const options: ApexCharts.ApexOptions = {
    chart: {
      id: 'basic-bar',
      toolbar: {
        show: false,
    ***REMOVED***,
      selection: {
        enabled: false,
    ***REMOVED***,
  ***REMOVED***,
    xaxis: {
      categories: categories.map(e =>
        parse(`01-01-${e***REMOVED***`, 'dd-MM-yyyy', new Date()).toDateString(),
  ***REMOVED***,
      type: 'datetime',
      tooltip: {
        enabled: false,
    ***REMOVED***,
  ***REMOVED***,
    tooltip: {
      enabled: false,
  ***REMOVED***,
***REMOVED***

  const transformdata = (baseData: any[]) =>
    showFuture ? [...baseData, 0] : baseData

  const series: ApexAxisChartSeries = [
    {
      name: 'Wärme',
      data: transformdata(data.map(e => e.Wärme)),
  ***REMOVED***,
    {
      name: 'Strom',
      data: transformdata(data.map(e => e.Strom)),
  ***REMOVED***,
    {
      name: 'Verkehr',
      data: transformdata(data.map(e => e.Verkehr)),
  ***REMOVED***,
  ]

  return (
    <Chart
      height="100%"
      options={options***REMOVED***
      series={series***REMOVED***
      type="line"
      width="100%"
    />
  )
***REMOVED***
