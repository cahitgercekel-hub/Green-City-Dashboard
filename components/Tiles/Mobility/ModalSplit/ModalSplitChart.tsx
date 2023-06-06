//@ts-nocheck
'use client'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config'
// @ts-ignore
// import ModalSplitData from '@/assets/data/verkehrsmittelwahl-zeitreihe.csv'
import ModalSplitData from '@/assets/data/modal-split.csv'
import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import Slider from '@/components/Inputs/Slider'
import { MuensterBackground ***REMOVED*** from '@/components/Icons/'
import { useState ***REMOVED*** from 'react'
import { useWindowSize ***REMOVED*** from 'react-use'
import Carousel from '@/components/Elements/Carousel'
import Title from '@/components/Elements/Title'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import ToggleGroup from '@/components/Inputs/ToggleGroup'

const { theme ***REMOVED*** = resolveConfig(tailwindConfig)

interface IModalSplitData {
  ZEIT: number
  Absolut: number
  'Modal Split V.leistung - Fahrrad': number
  'Modal Split V.leistung - Fuß': number
  'Modal Split V.leistung - Kfz': number
  'Modal Split V.leistung - sonstige': number
  'Modal Split V.leistung - ÖV': number
  'Verkehrsmittelwahl Fahrrad': number
  'Verkehrsmittelwahl Fuß': number
  'Verkehrsmittelwahl Kfz': number
  'Verkehrsmittelwahl sonstige': number
  'Verkehrsmittelwahl ÖV': number
  'Wege/Tag': number
***REMOVED***

function Toggle({ onChange ***REMOVED***: { onChange: (_val: string) => void ***REMOVED***) {
  return (
    <ToggleGroup
      items={[
  ***REMOVED***
          element: (
            <Title as="h5" className="2xl:w-max">
              Verkehrsleistung in km
            </Title>
      ***REMOVED***,
          value: 'verkehrsleistung',
      ***REMOVED***,
  ***REMOVED***
          element: (
            <Title as="h5" className="2xl:w-max">
              Anzahl Wege
            </Title>
      ***REMOVED***,
          value: 'wege',
      ***REMOVED***,
      ]***REMOVED***
      onChange={onChange***REMOVED***
      variant={'mobility'***REMOVED***
    />
  )
***REMOVED***

const icons = {
  KFZ: require('@/assets/icons/ModalSplit/ModalsplitCar.svg').default.src,
  ÖPNV: require('@/assets/icons/ModalSplit/ModalsplitBus.svg').default.src,
  Fahrrad: require('@/assets/icons/ModalSplit/ModalsplitBicycle.svg').default
    .src,
  Fuß: require('@/assets/icons/ModalSplit/ModalsplitShoe.svg').default.src,
***REMOVED***

const colors = {
  //@ts-ignore
  KFZ: theme?.colors?.energy.DEFAULT || '#f28443',
  //@ts-ignore
  ÖPNV: theme?.colors?.climate.DEFAULT || '#14b3d9',
  //@ts-ignore
  Fahrrad: theme?.colors?.mobility.DEFAULT || '#34c17b',
  //@ts-ignore
  Fuß: theme?.colors?.buildings.DEFAULT || '#6060d6',
***REMOVED***

const nameColumnMapping = {
  KFZ: {
    verkehrsleistung: 'Modal Split V.leistung - Kfz',
    wege: 'Verkehrsmittelwahl Kfz',
***REMOVED***,
  ÖPNV: {
    verkehrsleistung: 'Modal Split V.leistung - ÖV',
    wege: 'Verkehrsmittelwahl ÖV',
***REMOVED***,
  Fahrrad: {
    verkehrsleistung: 'Modal Split V.leistung - Fahrrad',
    wege: 'Verkehrsmittelwahl Fahrrad',
***REMOVED***,
  Fuß: {
    verkehrsleistung: 'Modal Split V.leistung - Fuß',
    wege: 'Verkehrsmittelwahl Fuß',
***REMOVED***,
***REMOVED***

const data: IModalSplitData[] = ModalSplitData

export default function ModalSplitChart() {
  const [yearIndex, setYearIndex] = useState<number>(1)
  const [mode, setMode] = useState<'verkehrsmittelwahl' | 'verkehrsleistung'>(
    'verkehrsleistung',
  )

  const { width ***REMOVED*** = useWindowSize()

  const yearData = data.find(d => d.ZEIT === data.map(d => d.ZEIT)[yearIndex])

  const getSeries = (value: number, name: keyof typeof icons) => {
    return {
      value: value,
      name: name,
      label: {
        show: width > 1024,
        alignTo: 'labelLine',
        formatter: ['{Icon|***REMOVED***', '{name|{b***REMOVED******REMOVED*** ', '{percent|{c***REMOVED***%***REMOVED***'].join('\n'),
        rich: {
          Icon: {
            height: 50,
            width: width <= 1600 ? 50 : 80,
            align: 'left',
            backgroundColor: {
              image: `${icons[name]***REMOVED***`,
          ***REMOVED***,
        ***REMOVED***,
          name: {
            //@ts-ignore
            color: theme?.colors?.primary.DEFAULT || '#005b79',
            fontWeight: 'bold',
            align: 'left',
            fontSize: width <= 1600 ? 18 : 20,
            fontWeight: 500,
            padding: width <= 1600 ? [6, 0, 6, 0] : [18, 0, 6, 0],
        ***REMOVED***,
          percent: {
            color: colors[name],
            align: 'left',
            fontSize: width <= 1600 ? 32 : 40,
            fontWeight: 500,
        ***REMOVED***,
      ***REMOVED***,
    ***REMOVED***,
  ***REMOVED***
***REMOVED***

  if (!yearData) {
    return <></>
***REMOVED***

  return (
    <>
      <div className="relative flex h-96 flex-1 flex-col rounded bg-white p-2 md:h-[32rem]">
        <div className="absolute -top-4 left-0 z-10 w-full md:-top-6 md:w-auto">
          <Toggle onChange={val => setMode(val as typeof mode)***REMOVED*** />
        </div>
        <div className="absolute left-[40%] top-[50%] z-10 text-lg font-bold text-[#005b79] ">
          <div className="flex">
            <AnimatedNumber>
        ***REMOVED***mode === 'verkehrsleistung'
                ? yearData.Absolut
                : yearData['Wege/Tag']***REMOVED***
            </AnimatedNumber>
            <p className="ml-1"> {mode === 'verkehrsleistung' ? 'km' : ''***REMOVED***</p>
          </div>
        </div>
        <div className="absolute left-0 top-0 flex h-full w-full">
          <MuensterBackground className="h-full w-full flex-1" />
          <div className="sm:w-14"></div>
        </div>
        <div className="w-full flex-1 pb-12">
          <div className=" h-full w-full">
            <ReactECharts
              option={{
                series: [
            ***REMOVED***
                    type: 'pie',
                    top: '10%',
                    radius:
                      width > 1024 && width < 1260
                        ? ['50%', '45%']
                        : ['75%', '68%'],
                    labelLine: {
                      length: width <= 1400 ? 50 : 150,
                      lineStyle: {
                        color: 'black',
                    ***REMOVED***,
                  ***REMOVED***,
                    data: [
                      getSeries(
                        mode === 'verkehrsleistung'
                          ? yearData['Modal Split V.leistung - Fuß']
                          : yearData['Verkehrsmittelwahl Fuß'],
                        'Fuß',
                  ***REMOVED***,
                      getSeries(
                        mode === 'verkehrsleistung'
                          ? yearData['Modal Split V.leistung - Kfz']
                          : yearData['Verkehrsmittelwahl Kfz'],
                        'KFZ',
                  ***REMOVED***,
                      getSeries(
                        mode === 'verkehrsleistung'
                          ? yearData['Modal Split V.leistung - ÖV']
                          : yearData['Verkehrsmittelwahl ÖV'],
                        'ÖPNV',
                  ***REMOVED***,
                      getSeries(
                        mode === 'verkehrsleistung'
                          ? yearData['Modal Split V.leistung - Fahrrad']
                          : yearData['Verkehrsmittelwahl Fahrrad'],
                        'Fahrrad',
                  ***REMOVED***,
                    ],
                    color: [
                      //@ts-ignore
                      theme?.colors?.buildings.DEFAULT || '#6060d6',
                      //@ts-ignore
                      theme?.colors?.energy.DEFAULT || '#f28443',
                      //@ts-ignore
                      theme?.colors?.climate.DEFAULT || '#14b3d9',
                      //@ts-ignore
                      theme?.colors?.mobility.DEFAULT || '#34c17b',
                    ],
                ***REMOVED***,
                ],
            ***REMOVED******REMOVED***
            />
          </div>
        </div>
      </div>
      <div className="bg-white px-4 pb-4 lg:hidden">
        <Carousel arrows variant={'mobility'***REMOVED***>
    ***REMOVED***Object.keys(icons).map((key, index) => {
            return (
              <div
                className="flex items-center justify-center gap-3"
                key={index***REMOVED***
              >
          ***REMOVED***/* eslint-disable-next-line @next/next/no-img-element */***REMOVED***
                <img
                  alt={`${key***REMOVED*** Icon`***REMOVED***
                  className="h-full w-auto"
                  src={icons[key]***REMOVED***
                />
                <div>
                  <Title as="h5" variant={'primary'***REMOVED***>
              ***REMOVED***key***REMOVED***
                  </Title>
                  <Title
                    as="h3"
                    style={{
                      color: colors[key],
                  ***REMOVED******REMOVED***
                  >
                    <AnimatedNumber decimals={1***REMOVED***>
                ***REMOVED***yearData[nameColumnMapping[key][mode]]***REMOVED***
                    </AnimatedNumber>
                    %
                  </Title>
                </div>
              </div>
        ***REMOVED***
        ***REMOVED***)***REMOVED***
        </Carousel>
      </div>
      <Slider
        defaultValue={[data.length - 1]***REMOVED***
        labels={data.map(d => d.ZEIT)***REMOVED***
        max={data.length - 1***REMOVED***
        min={0***REMOVED***
        onValueChange={([e]) => {
          setYearIndex(e)
      ***REMOVED******REMOVED***
        variant={'mobility'***REMOVED***
      />
    </>
  )
***REMOVED***
