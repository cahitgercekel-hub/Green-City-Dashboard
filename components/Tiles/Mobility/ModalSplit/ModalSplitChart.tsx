import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config'
// @ts-ignore
import ModalSplitData from '@/assets/data/mobilitaetsdaten_cleaned.csv'

const { theme ***REMOVED*** = resolveConfig(tailwindConfig)

type IModalSplitData = {
  Fuß: number
  Rad: number
  MIV: number
  ÖPNV: number
***REMOVED***

const data: IModalSplitData[] = ModalSplitData

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

export default function ModalSplitChart() {
  return (
    <ReactECharts
      option={{
        title: {
          text: total.toLocaleString('de-DE') + ' km',
          left: 'center',
          top: 'center',
          padding: 4,
          textStyle: {
            fontWeight: 500,
            fontSize: 22,
            fontFamily: '',
            // @ts-ignore
            color: theme?.colors?.primary.DEFAULT || '#005b79',
        ***REMOVED***,
      ***REMOVED***,
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
                  formatter: ['{Auto|***REMOVED***', '{name|{b***REMOVED******REMOVED*** ', '{percent|{c***REMOVED***%***REMOVED***'].join(
                    '\n',
              ***REMOVED***,
                  rich: {
                    Auto: {
                      height: 50,
                      width: 50,
                      align: 'left',
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
                      align: 'left',
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
        ***REMOVED***
                value: calculatePercentage(totals.ÖPNV),
                name: 'ÖPNV',
                label: {
                  formatter: ['{Bus|***REMOVED***', '{name|{b***REMOVED******REMOVED*** ', '{percent|{c***REMOVED***%***REMOVED***'].join(
                    '\n',
              ***REMOVED***,
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
                      align: 'left',
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
        ***REMOVED***
                value: calculatePercentage(totals.Rad),
                name: 'Fahrrad',
                label: {
                  formatter: ['{Rad|***REMOVED***', '{name|{b***REMOVED******REMOVED*** ', '{percent|{c***REMOVED***%***REMOVED***'].join(
                    '\n',
              ***REMOVED***,
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
        ***REMOVED***
                value: calculatePercentage(totals.Fuß),
                name: 'Fußgänger:innen',
                label: {
                  alignTo: 'labelLine',
                  formatter: ['{Schuh|***REMOVED***', '{name|{b***REMOVED******REMOVED*** ', '{percent|{c***REMOVED***%***REMOVED***'].join(
                    '\n',
              ***REMOVED***,
                  rich: {
                    Schuh: {
                      height: 50,
                      width: 50,
                      align: 'left',
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
            color: [
              //@ts-ignore
              theme?.colors?.energy.DEFAULT || '#f28443',
              //@ts-ignore
              theme?.colors?.climate.DEFAULT || '#14b3d9',
              //@ts-ignore
              theme?.colors?.mobility.DEFAULT || '#34c17b',
              //@ts-ignore
              theme?.colors?.buildings.DEFAULT || '#6060d6',
            ],
        ***REMOVED***,
        ],
        media: [
    ***REMOVED***
            query: {
              maxWidth: 500,
          ***REMOVED***,
            option: {
              title: {
                text: total.toLocaleString('de-DE') + ' km',
                left: 'center',
                top: '50%',
                padding: 2,
                textStyle: {
                  fontWeight: 500,
                  fontSize: 14,
                  fontFamily: '',
                  // @ts-ignore
                  color: theme?.colors?.primary.DEFAULT || '#005b79',
              ***REMOVED***,
            ***REMOVED***,
              series: [
          ***REMOVED***
                  type: 'pie',
                  radius: ['50%', '45%'],
                  labelLine: {
                    length: 25,
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
                          '{Auto|***REMOVED***',
                          '{name|{b***REMOVED******REMOVED*** ',
                          '{percent|{c***REMOVED***%***REMOVED***',
                        ].join('\n'),
                        rich: {
                          Auto: {
                            height: 25,
                            width: 25,
                            align: 'left',
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
                            align: 'left',
                            fontSize: 14,
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
              ***REMOVED***
                      value: calculatePercentage(totals.ÖPNV),
                      name: 'ÖPNV',
                      label: {
                        formatter: [
                          '{Bus|***REMOVED***',
                          '{name|{b***REMOVED******REMOVED*** ',
                          '{percent|{c***REMOVED***%***REMOVED***',
                        ].join('\n'),
                        rich: {
                          Bus: {
                            height: 25,
                            width: 25,
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
                            align: 'left',
                            fontSize: 14,
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
              ***REMOVED***
                      value: calculatePercentage(totals.Rad),
                      name: 'Fahrrad',
                      label: {
                        formatter: [
                          '{Rad|***REMOVED***',
                          '{name|{b***REMOVED******REMOVED*** ',
                          '{percent|{c***REMOVED***%***REMOVED***',
                        ].join('\n'),
                        rich: {
                          Rad: {
                            height: 25,
                            width: 25,
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
                            fontSize: 14,
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
              ***REMOVED***
                      value: calculatePercentage(totals.Fuß),
                      name: 'Fußgänger:innen',
                      label: {
                        alignTo: 'labelLine',
                        formatter: [
                          '{Schuh|***REMOVED***',
                          '{name|{b***REMOVED******REMOVED*** ',
                          '{percent|{c***REMOVED***%***REMOVED***',
                        ].join('\n'),
                        rich: {
                          Schuh: {
                            height: 25,
                            width: 25,
                            align: 'left',
                            backgroundColor: {
                              image: `${
                                require('@/assets/icons/ModalSplit/ModalsplitShoe.svg')
                                  .default.src
                            ***REMOVED***`,
                          ***REMOVED***,
                        ***REMOVED***,
                          percent: {
                            color:
                              //@ts-ignore
                              theme?.colors?.buildings.DEFAULT || '#6060d6',
                            align: 'left',
                            fontSize: 14,
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
                  color: [
                    //@ts-ignore
                    theme?.colors?.energy.DEFAULT || '#f28443',
                    //@ts-ignore
                    theme?.colors?.climate.DEFAULT || '#14b3d9',
                    //@ts-ignore
                    theme?.colors?.mobility.DEFAULT || '#34c17b',
                    //@ts-ignore
                    theme?.colors?.buildings.DEFAULT || '#6060d6',
                  ],
              ***REMOVED***,
              ],
          ***REMOVED***,
        ***REMOVED***,
        ],
    ***REMOVED******REMOVED***
    />
  )
***REMOVED***
