import useCO2Data from '@/hooks/useCO2Data'
import { parse ***REMOVED*** from 'date-fns'
import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import { SeriesOption ***REMOVED*** from 'echarts'

type CO2ChartProps = {
  showFuture?: boolean
***REMOVED***

export default function CO2Chart({ showFuture = false ***REMOVED***: CO2ChartProps) {
  const data = useCO2Data()

  const transformdata = (baseData: any[]) =>
    showFuture
      ? [
          ...baseData,
          [parse('01-01-2030', 'dd-MM-yyyy', new Date()).getTime(), 0],
        ]
      : baseData

  const series: SeriesOption[] = [
    {
      type: 'line',
      name: 'Wärme',
      data: transformdata(
        data.map(e => [
          parse(`01-01-${e.Jahr***REMOVED***`, 'dd-MM-yyyy', new Date()).getTime(),
          e.Wärme,
        ]),
  ***REMOVED***,
      showSymbol: false,
  ***REMOVED***,
    {
      type: 'line',
      name: 'Strom',
      data: transformdata(
        data.map(e => [
          parse(`01-01-${e.Jahr***REMOVED***`, 'dd-MM-yyyy', new Date()).getTime(),
          e.Strom,
        ]),
  ***REMOVED***,
      showSymbol: false,
  ***REMOVED***,
    {
      type: 'line',
      name: 'Verkehr',
      data: transformdata(
        data.map(e => [
          parse(`01-01-${e.Jahr***REMOVED***`, 'dd-MM-yyyy', new Date()).getTime(),
          e.Verkehr,
        ]),
  ***REMOVED***,
      showSymbol: false,
  ***REMOVED***,
  ]

  return (
    <ReactECharts
      option={{
        xAxis: {
          type: 'time',
      ***REMOVED***,
        yAxis: {
          type: 'value',
      ***REMOVED***,
        series: series,
        legend: {
          show: true,
      ***REMOVED***,
    ***REMOVED******REMOVED***
    />
  )
***REMOVED***
