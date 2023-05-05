import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import { BarSeriesOption ***REMOVED*** from 'echarts'

interface Props {
  data: BarSeriesOption['data']
***REMOVED***

export default function EnergyConsumptionChart({ data ***REMOVED***: Props) {
  return (
    <ReactECharts
      option={{
        grid: {
          left: 0,
          top: 5,
          right: 0,
          bottom: 22,
      ***REMOVED***,
        xAxis: {
          type: 'category',
          data: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          axisLine: {
            show: false,
        ***REMOVED***,
          axisTick: {
            show: false,
        ***REMOVED***,
          axisLabel: {
            overflow: 'truncate', // or 'break' to continue in a new line
            interval: 0,
            color: '#6060d6',
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
            itemStyle: {
              opacity: 0.77,
          ***REMOVED***,
        ***REMOVED***,
        ],
    ***REMOVED******REMOVED***
    />
  )
***REMOVED***
