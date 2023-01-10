import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import useModalSplitData from '@/hooks/useModalSplitData'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config'
// import {
//   ModalsplitAuto,
//   ModalsplitBus,
//   ModalsplitFahrrad,
//   ModalsplitHintergrundgrafik,
//   ModalsplitSchuh,
// ***REMOVED*** from '@/components/Icons/'
const { theme ***REMOVED*** = resolveConfig(tailwindConfig)

export default function ModalSplitChart() {
  const colors = [
    //@ts-ignore
    theme?.colors?.energy.DEFAULT || '#f28443',
    //@ts-ignore
    theme?.colors?.climate.DEFAULT || '#14b3d9',
    //@ts-ignore
    theme?.colors?.mobility.DEFAULT || '#34c17b',
    //@ts-ignore
    theme?.colors?.buildings.DEFAULT || '#6060d6',
  ]
  const data = useModalSplitData()

  const calculatePercentage = (data: number) => {
    return parseInt(((data / total) * 100).toFixed(0))
***REMOVED***

  const totals = {
    Rad: 0,
    MIV: 0,
    ÖPNV: 0,
    Fuß: 0,
***REMOVED***

  Object.keys(data[0]).forEach(key => {
    totals[key as keyof typeof totals] = data
      .map(d => d[key as keyof typeof totals])
      .reduce((acc, cur) => {
        return acc + cur
    ***REMOVED***, 0)
***REMOVED***)

  const total = Object.values(totals).reduce((acc, cur) => {
    return acc + cur
***REMOVED***, 0)

  // const chartData: any[] | undefined = []
  // Object.keys(totals).forEach(key => {
  //   chartData.push({
  //     value: calculatePercentage(totals[key as keyof typeof totals]),
  //     name: key,
  //     label: {
  //       alignTo: 'labelLine',
  //       formatter: [`  {${key***REMOVED***|***REMOVED***`, ' {name|{b***REMOVED******REMOVED*** ', ' {percent|{c***REMOVED***%***REMOVED***'].join(
  //         '\n',
  //   ***REMOVED***,
  //       rich: {
  //         [key]: {
  //           height: 50,
  //           width: 50,
  //           backgroundColor: {
  //             image: `${
  //               require('@/assets/icons/ModalSplit/ModalsplitCar.svg').default
  //                 .src
  //           ***REMOVED***`,
  //         ***REMOVED***,
  //       ***REMOVED***,
  //         percent: {
  //           // @ts-ignore
  //           color: theme?.colors?.energy.DEFAULT || '#f28443',
  //           align: 'center',
  //           padding: [10, 0, 0, 5],
  //           fontWeight: 'bold',
  //           fontSize: 18,
  //       ***REMOVED***,
  //         name: {
  //           //@ts-ignore
  //           color: theme?.colors?.primary.DEFAULT || '#005b79',
  //           fontWeight: 'bold',
  //           padding: [5, 0, 0, 10],
  //       ***REMOVED***,
  //     ***REMOVED***,
  //   ***REMOVED***,
  // ***REMOVED***)
  // ***REMOVED***)

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
            fontSize: 22,
            fontFamily: '',
            // @ts-ignore
            color: theme?.colors?.primary.DEFAULT || '#005b79',
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
            radius: ['75%', '68%'],
            labelLine: {
              length: 200,
              lineStyle: {
                color: 'black',
            ***REMOVED***,
          ***REMOVED***,
            data: [
        ***REMOVED***
                value: calculatePercentage(totals.MIV),
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
                          require('@/assets/icons/ModalSplit/ModalsplitCar.svg')
                            .default.src
                      ***REMOVED***`,
                    ***REMOVED***,
                  ***REMOVED***,
                    percent: {
                      // @ts-ignore
                      color: theme?.colors?.energy.DEFAULT || '#f28443',
                      align: 'center',
                      padding: [5, 0, 0, 5],
                      // fontWeight: 'bold',
                      fontSize: 22,
                  ***REMOVED***,
                    name: {
                      //@ts-ignore
                      color: theme?.colors?.primary.DEFAULT || '#005b79',
                      fontWeight: 'bold',
                      padding: [5, 0, 0, 10],
                  ***REMOVED***,
                ***REMOVED***,
              ***REMOVED***,
            ***REMOVED***,
        ***REMOVED***
                value: calculatePercentage(totals.ÖPNV),
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
                      //@ts-ignore
                      color: theme?.colors?.climate.DEFAULT || '#14b3d9',

                      align: 'center',
                      padding: [5, 0, 0, 0],
                      // fontWeight: 'bold',
                      fontSize: 22,
                  ***REMOVED***,
                    name: {
                      //@ts-ignore
                      color: theme?.colors?.primary.DEFAULT || '#005b79',
                      fontWeight: 'bold',
                      padding: [0, 0, 0, 5],
                  ***REMOVED***,
                ***REMOVED***,
              ***REMOVED***,
            ***REMOVED***,
        ***REMOVED***
                value: calculatePercentage(totals.Rad),
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
                          require('@/assets/icons/ModalSplit/ModalsplitBicycle.svg')
                            .default.src
                      ***REMOVED***`,
                    ***REMOVED***,
                  ***REMOVED***,
                    percent: {
                      // @ts-ignore
                      color: theme?.colors?.mobility.DEFAULT || '#34c17b',
                      align: 'left',
                      padding: [5, 0, 0, 0],
                      // fontWeight: 'bold',
                      fontSize: 22,
                  ***REMOVED***,
                    name: {
                      //@ts-ignore
                      color: theme?.colors?.primary.DEFAULT || '#005b79',
                      padding: [0, 0, 0, 10],
                      fontWeight: 'bold',
                  ***REMOVED***,
                ***REMOVED***,
              ***REMOVED***,
            ***REMOVED***,
        ***REMOVED***
                value: calculatePercentage(totals.Fuß),
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
                          require('@/assets/icons/ModalSplit/ModalsplitShoe.svg')
                            .default.src
                      ***REMOVED***`,
                    ***REMOVED***,
                  ***REMOVED***,
                    percent: {
                      //@ts-ignore
                      color: theme?.colors?.buildings.DEFAULT || '#6060d6',
                      align: 'left',
                      padding: [10, 0, 0, 0],
                      // fontWeight: 'bold',
                      fontSize: 22,
                  ***REMOVED***,
                    name: {
                      //@ts-ignore
                      color: theme?.colors?.primary.DEFAULT || '#005b79',
                      fontWeight: 'bold',
                      align: 'left',
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
