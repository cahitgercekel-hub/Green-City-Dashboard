import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import useModalSplitData from '@/hooks/useModalSplitData'
// import {
//   ModalsplitAuto,
//   ModalsplitBus,
//   ModalsplitFahrrad,
//   ModalsplitHintergrundgrafik,
//   ModalsplitSchuh,
// ***REMOVED*** from '@/components/Icons/'

export default function KmChart() {
  const colors = ['#FF8800', '#59ABE3', '#26C281', '#8800FF']
  const data = useModalSplitData()

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
        title: {
          text: total.toLocaleString('de-DE') + ' km',
          left: 'center',
          top: 'center',
          padding: 4,
          textStyle: {
            fontWeight: 'bold',
            fontSize: 18,
        ***REMOVED***,
      ***REMOVED***,
        // backgroundColor: {
        //   imageHeight: 375,
        //   imageWidth: 720,
        //   image: `${
        //     require('@/assets/icons/ModalSplit/ModalsplitHintergrundgrafik.svg')
        //       .default.src
        // ***REMOVED***`,
        // ***REMOVED***,
        series: [
    ***REMOVED***
            type: 'pie',
            radius: ['60%', '50%'],
            labelLine: {
              length: 200,
              lineStyle: {
                color: 'black',
            ***REMOVED***,
          ***REMOVED***,
            data: [
        ***REMOVED***
                value: KfzData,
                name: 'KFZ',
                label: {
                  alignTo: 'labelLine',
                  formatter: [
                    '  {Auto|***REMOVED***',
                    ' {name|{b***REMOVED******REMOVED*** ',
                    ' {percent|{c***REMOVED***%***REMOVED***',
                  ].join('\n'),
                  rich: {
                    Auto: {
                      height: 50,
                      width: 50,
                      // align: 'left',
                      backgroundColor: {
                        image: `${
                          require('@/assets/icons/ModalSplit/ModalsplitAuto.svg')
                            .default.src
                      ***REMOVED***`,
                    ***REMOVED***,
                  ***REMOVED***,
                    percent: {
                      color: '#FF8800',
                      align: 'center',
                      padding: [10, 0, 0, 5],
                      fontWeight: 'bold',
                      fontSize: 18,
                  ***REMOVED***,
                    name: {
                      color: 'darkblue',
                      // align: 'center',
                      padding: [5, 0, 0, 10],
                  ***REMOVED***,
                ***REMOVED***,
              ***REMOVED***,
            ***REMOVED***,
        ***REMOVED***
                value: ÖPNVData,
                name: 'ÖPNV',
                label: {
                  formatter: [
                    '  {Bus|***REMOVED***',
                    ' {name|{b***REMOVED******REMOVED*** ',
                    ' {percent|{c***REMOVED***%***REMOVED***',
                  ].join('\n'),
                  rich: {
                    Bus: {
                      height: 50,
                      width: 50,
                      align: 'left',
                      backgroundColor: {
                        image: `${
                          require('@/assets/icons/ModalSplit/ModalsplitBus.svg')
                            .default.src
                      ***REMOVED***`,
                    ***REMOVED***,
                  ***REMOVED***,
                    percent: {
                      color: '#59ABE3',
                      align: 'center',
                      padding: [5, 0, 0, 0],
                      fontWeight: 'bold',
                      fontSize: 18,
                  ***REMOVED***,
                    name: {
                      color: 'darkblue',
                      align: 'left',
                      padding: [0, 0, 0, 5],
                  ***REMOVED***,
                ***REMOVED***,
              ***REMOVED***,
            ***REMOVED***,
        ***REMOVED***
                value: RadData,
                name: 'Fahrrad',
                label: {
                  formatter: [
                    '  {Rad|***REMOVED***',
                    ' {name|{b***REMOVED******REMOVED*** ',
                    ' {percent|{c***REMOVED***%***REMOVED***',
                  ].join('\n'),
                  rich: {
                    Rad: {
                      height: 50,
                      width: 50,
                      align: 'left',
                      backgroundColor: {
                        image: `${
                          require('@/assets/icons/ModalSplit/ModalsplitFahrrad.svg')
                            .default.src
                      ***REMOVED***`,
                    ***REMOVED***,
                  ***REMOVED***,
                    percent: {
                      color: '#26C281',
                      align: 'left',
                      padding: [5, 0, 0, 0],
                      fontWeight: 'bold',
                      fontSize: 18,
                  ***REMOVED***,
                    name: {
                      color: 'darkblue',
                      padding: [0, 0, 0, 10],
                  ***REMOVED***,
                ***REMOVED***,
              ***REMOVED***,
            ***REMOVED***,
        ***REMOVED***
                value: FußData,
                name: 'Fußgänger:innen',
                label: {
                  alignTo: 'labelLine',
                  formatter: [
                    '  {Schuh|***REMOVED***',
                    ' {name|{b***REMOVED******REMOVED*** ',
                    ' {percent|{c***REMOVED***%***REMOVED***',
                  ].join('\n'),
                  rich: {
                    Schuh: {
                      height: 50,
                      width: 50,
                      align: 'left',
                      padding: [5, 0, 0, 0],
                      backgroundColor: {
                        image: `${
                          require('@/assets/icons/ModalSplit/ModalsplitSchuh.svg')
                            .default.src
                      ***REMOVED***`,
                    ***REMOVED***,
                  ***REMOVED***,
                    percent: {
                      color: '#8800FF',
                      align: 'left',
                      padding: [10, 0, 0, 0],
                      fontWeight: 'bold',
                      fontSize: 18,
                  ***REMOVED***,
                    name: {
                      color: 'darkblue',
                      // align: 'center',
                      padding: [0, 0, 0, 50],
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
