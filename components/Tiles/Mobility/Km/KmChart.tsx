import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'

// type CO2ChartProps = {
//   showFuture?: boolean
// ***REMOVED***

export default function KmChart() {
  const colors = ['#FF8800', '#59ABE3', '#26C281', '#8800FF']

  return (
    <ReactECharts
      option={{
        series: [
    ***REMOVED***
            name: 'Access From',
            type: 'pie',
            radius: ['50%', '60%'],
            labelLine: {
              length: 60,
          ***REMOVED***,
            label: {
              formatter: '{a| {b***REMOVED***\n{c***REMOVED***%***REMOVED***',
              fontWeight: 'bold',
              // rich: {
              //  a: {
              //  color: '#8800FF',
              // ***REMOVED***,
              // b: {
              //   color: '#59ABE3'
              // ***REMOVED***,
              // c: {
              //   color: '#26C281'
              // ***REMOVED***,
              // d: {
              //   color: '#FF8800'
              // ***REMOVED***
          ***REMOVED***,
            data: [
        ***REMOVED*** value: 29, name: 'KFZ' ***REMOVED***,
        ***REMOVED*** value: 10, name: 'ÖPNV' ***REMOVED***,
        ***REMOVED*** value: 39, name: 'Fahrrad' ***REMOVED***,
        ***REMOVED*** value: 22, name: 'Fußgänger:innen' ***REMOVED***,
            ],
            color: colors,
        ***REMOVED***,
        ],
    ***REMOVED******REMOVED***
    />
  )
***REMOVED***
