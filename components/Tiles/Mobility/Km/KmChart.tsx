import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import useKmData from '@/hooks/useKmData'
import lastenrad from '@/assets/images/lastenrad.jpg'

export default function KmChart() {
  const colors = ['#FF8800', '#59ABE3', '#26C281', '#8800FF']
  const data = useKmData()

  const totalFuß: number = data
    .map(d => d.Fuß)
    .reduce((acc, cur) => {
      return acc + cur
  ***REMOVED***, 0)

  const totalKFZ: number = data
    .map(d => d.MIV)
    .reduce((acc, cur) => {
      return acc + cur
  ***REMOVED***, 0)

  const totalRad: number = data
    .map(d => d.Rad)
    .reduce((acc, cur) => {
      return acc + cur
  ***REMOVED***, 0)

  const totalÖPNV: number = data
    .map(d => d.ÖPNV)
    .reduce((acc, cur) => {
      return acc + cur
  ***REMOVED***, 0)

  const total: number = totalÖPNV + totalFuß + totalKFZ + totalRad

  const KfzData: number = parseInt(((totalKFZ / total) * 100).toFixed(0))
  const RadData: number = parseInt(((totalRad / total) * 100).toFixed(0))
  const ÖPNVData: number = parseInt(((totalÖPNV / total) * 100).toFixed(0))
  const FußData: number = parseInt(((totalFuß / total) * 100).toFixed(0))

  return (
    <ReactECharts
      option={{
        series: [
    ***REMOVED***
            type: 'pie',
            radius: ['60%', '50%'],
            labelLine: {
              length: 60,
          ***REMOVED***,
            data: [
        ***REMOVED***
                value: KfzData,
                name: 'KFZ',
                label: {
                  formatter: [
                    '  {Sunny|***REMOVED***',
                    ' {name|{b***REMOVED******REMOVED*** ',
                    ' {percent|{c***REMOVED***%***REMOVED***',
                  ].join('\n'),
                  rich: {
                    Sunny: {
                      height: 30,
                      width: 30,
                      align: 'left',
                      backgroundColor: {
                        image: lastenrad.src,
                    ***REMOVED***,
                  ***REMOVED***,
                    percent: {
                      color: '#FF8800',
                      align: 'center',
                      padding: [5, 0, 0, 0],
                      fontWeight: 'bold',
                      fontSize: 14,
                  ***REMOVED***,
                    name: {
                      color: 'darkblue',
                      align: 'left',
                      padding: [5, 0, 0, 0],
                  ***REMOVED***,
                ***REMOVED***,
              ***REMOVED***,
            ***REMOVED***,
        ***REMOVED***
                value: ÖPNVData,
                name: 'ÖPNV',
                label: {
                  formatter: [
                    '  {Sunny|***REMOVED***',
                    ' {name|{b***REMOVED******REMOVED*** ',
                    ' {percent|{c***REMOVED***%***REMOVED***',
                  ].join('\n'),
                  rich: {
                    Sunny: {
                      height: 30,
                      width: 30,
                      align: 'left',
                      backgroundColor: {
                        image: lastenrad.src,
                    ***REMOVED***,
                  ***REMOVED***,
                    percent: {
                      color: '#59ABE3',
                      align: 'center',
                      padding: [5, 0, 0, 0],
                      fontWeight: 'bold',
                      fontSize: 14,
                  ***REMOVED***,
                    name: {
                      color: 'darkblue',
                      align: 'left',
                      padding: [5, 0, 0, 5],
                  ***REMOVED***,
                ***REMOVED***,
              ***REMOVED***,
            ***REMOVED***,
        ***REMOVED***
                value: RadData,
                name: 'Fahrrad',
                label: {
                  formatter: [
                    '  {Sunny|***REMOVED***',
                    ' {name|{b***REMOVED******REMOVED*** ',
                    ' {percent|{c***REMOVED***%***REMOVED***',
                  ].join('\n'),
                  rich: {
                    Sunny: {
                      height: 30,
                      width: 30,
                      align: 'left',
                      backgroundColor: {
                        image: lastenrad.src,
                    ***REMOVED***,
                  ***REMOVED***,
                    percent: {
                      color: '#26C281',
                      align: 'left',
                      padding: [5, 0, 0, 0],
                      fontWeight: 'bold',
                      fontSize: 14,
                  ***REMOVED***,
                    name: {
                      color: 'darkblue',
                      padding: [5, 0, 0, 15],
                  ***REMOVED***,
                ***REMOVED***,
              ***REMOVED***,
            ***REMOVED***,
        ***REMOVED***
                value: FußData,
                name: 'Fußgänger:innen',
                label: {
                  formatter: [
                    '  {Sunny|***REMOVED***',
                    ' {name|{b***REMOVED******REMOVED*** ',
                    ' {percent|{c***REMOVED***%***REMOVED***',
                  ].join('\n'),
                  rich: {
                    Sunny: {
                      height: 30,
                      width: 30,
                      align: 'left',
                      padding: [5, 0, 0, 0],
                      backgroundColor: {
                        image: lastenrad.src,
                    ***REMOVED***,
                  ***REMOVED***,
                    percent: {
                      color: '#8800FF',
                      align: 'left',
                      padding: [5, 0, 0, 0],
                      fontWeight: 'bold',
                      fontSize: 14,
                  ***REMOVED***,
                    name: {
                      color: 'darkblue',
                      padding: [5, 0, 0, 100],
                  ***REMOVED***,
                ***REMOVED***,
              ***REMOVED***,
            ***REMOVED***,
            ],
            color: colors,
        ***REMOVED***,
        ],
    ***REMOVED******REMOVED***
    />
  )
***REMOVED***
