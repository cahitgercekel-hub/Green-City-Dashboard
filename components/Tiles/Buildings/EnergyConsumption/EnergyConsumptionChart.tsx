import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import { BarSeriesOption ***REMOVED*** from 'echarts'

interface Props {
  data: BarSeriesOption['data']
***REMOVED***

export default function EnergyConsumptionChart({ data ***REMOVED***: Props) {
  return (
    <ReactECharts
      option={{
        xAxis: {
          type: 'category',
          data: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          axisLine: {
            show: false,
        ***REMOVED***,
          axisTick: {
            show: false,
        ***REMOVED***,
      ***REMOVED***,
        yAxis: {
          type: 'value',
          show: false,
      ***REMOVED***,
        series: [
    ***REMOVED***
            data,
            type: 'bar',
            color: '#837ef4',
            barWidth: '11px',
        ***REMOVED***,
        ],
    ***REMOVED******REMOVED***
    />
  )
***REMOVED***
