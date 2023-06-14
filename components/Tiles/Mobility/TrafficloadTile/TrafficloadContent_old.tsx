//@ts-nocheck
'use client'

import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import Carousel from '@/components/Elements/Carousel'
import Title from '@/components/Elements/Title'
import Slider from '@/components/Inputs/Slider'
import ToggleGroup from '@/components/Inputs/ToggleGroup'
import { useState ***REMOVED*** from 'react'
import { useWindowSize ***REMOVED*** from 'react-use'
import monatsmittelwerte from '@/assets/data/monatsmittelwerte.json'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { Pendlerkarte ***REMOVED*** from '@/components/Icons'

function Toggle({ onChange ***REMOVED***: { onChange: (_val: string) => void ***REMOVED***) {
  return (
    <ToggleGroup
      defaultValue="current"
      items={[
  ***REMOVED***
          element: (
            <Title as="h6" className="2xl:w-max">
              2013
            </Title>
      ***REMOVED***,
          value: '2013',
      ***REMOVED***,
  ***REMOVED***
          element: (
            <Title as="h6" className="2xl:w-max">
              2019
            </Title>
      ***REMOVED***,
          value: '2019',
      ***REMOVED***,
  ***REMOVED***
          element: (
            <Title as="h6" className="2xl:w-max">
              Aktuelles Jahr
            </Title>
      ***REMOVED***,
          value: 'current',
      ***REMOVED***,
      ]***REMOVED***
      onChange={onChange***REMOVED***
      variant={'mobility'***REMOVED***
    />
  )
***REMOVED***

const kfzIcon = require('@/assets/icons/Trafficload/TrafficloadCar.svg').default
  .src

const getIcon = (width: number) => {
  return {
    value: 0,
    label: {
      show: true,
      position: 'center',
      formatter: '{Icon|***REMOVED***',
      rich: {
        Icon: {
          height: width <= 1600 ? 30 : 40,
          width: width <= 1600 ? 25 : 50,
          align: 'left',
          backgroundColor: {
            image: `${kfzIcon***REMOVED***`,
        ***REMOVED***,
      ***REMOVED***,
    ***REMOVED***,
  ***REMOVED***,
***REMOVED***
***REMOVED***

const getLabel = (value: number, name: string, width: number) => {
  return {
    value: value,
    name: name,
    label: {
      show: width > 1024,
      textStyle: {
        opacity: 1,
    ***REMOVED***,
      emphasis: {
        opacity: 1,
    ***REMOVED***,
      formatter: () => {
        const monatsmittelValue = value !== 0 ? value : 'Keine Daten'
        return `{street|${name***REMOVED******REMOVED***\n{monatsmittel|${monatsmittelValue***REMOVED******REMOVED***`
    ***REMOVED***,
      rich: {
        street: {
          color: '#005b79',
          fontWeight: 'bold',
          align: 'left',
          fontSize: width <= 1600 ? 16 : 20,
          padding: width <= 1600 ? [6, 0, 6, 0] : [18, 0, 6, 0],
      ***REMOVED***,
        monatsmittel: {
          color: '#34c17b',
          align: 'left',
          fontSize: width <= 1600 ? 32 : 40,
          fontWeight: '500',
      ***REMOVED***,
    ***REMOVED***,
  ***REMOVED***,
***REMOVED***
***REMOVED***

export default function TrafficloadContent() {
  const [monthIndex, setMonthIndex] = useState(4)
  const [mode, setMode] = useState<'2013' | '2019' | 'current'>('current')
  const { width ***REMOVED*** = useWindowSize()

  let year
  if (mode === 'current') {
    year = new Date().getFullYear().toString()
***REMOVED*** else {
    year = mode
***REMOVED***

  const data = monatsmittelwerte.features.filter(f => {
    return (
      f.properties.year.toString() === year &&
      f.properties.month === monthIndex + 1
***REMOVED***
***REMOVED***)

  const albersloher = data.find(d => d.properties.amknotennr === 10010750)
  const warendorfer = data.find(d => d.properties.amknotennr === 10011170)
  const weseler = data.find(d => d.properties.amknotennr === 10022200)
  const rishon = data.find(d => d.properties.amknotennr === 10024088)
  const steinfurter = data.find(d => d.properties.amknotennr === 20000723)

  const streetData = {
    'Albersloher Weg / Heumannsweg':
      albersloher?.properties.mittelwert.toFixed(0) ?? 0,
    'Warendorfer Str. / Schifffahrter Damm':
      warendorfer?.properties.mittelwert.toFixed(0) ?? 0,
    'Weseler Str. / Inselbogen': weseler?.properties.mittelwert.toFixed(0) ?? 0,
    'Rishon-le-Zion-Ring / Einsteinstr.':
      rishon?.properties.mittelwert.toFixed(0) ?? 0,
    'Steinfurter Str. / Austermannstr.':
      steinfurter?.properties.mittelwert.toFixed(0) ?? 0,
***REMOVED***

  return (
    <>
      <div className="relative flex h-96 flex-1 flex-col rounded bg-white p-2 md:h-[32rem]">
        <div className="absolute -top-4 left-0 w-full md:-top-6 md:w-auto">
          <Toggle onChange={val => setMode(val as typeof mode)***REMOVED*** />
        </div>
        <div className="absolute bottom-5 left-0 flex h-[80%] w-full justify-center">
          <Pendlerkarte className="h-full" />
        </div>
        <div className="w-full flex-1 pb-12">
          <div className="h-full w-full">
            <ReactECharts
              option={{
                series: [
            ***REMOVED***
                    name: '1',
                    type: 'pie',
                    center: ['35%', '45%'],
                    itemStyle: {
                      color: 'transparent',
                      // opacity: 0.2,
                  ***REMOVED***,
                    radius: ['20%'],
                    label: {
                      show: true,
                      position: 'center',
                      textStyle: {
                        opacity: 1,
                    ***REMOVED***,
                  ***REMOVED***,
                    labelLine: {
                      show: false,
                  ***REMOVED***,
                    data: [getIcon(width)],
                ***REMOVED***,
            ***REMOVED***
                    name: 'Steinfurter Str. / Austermannstr.',
                    type: 'pie',
                    center: ['35%', '45%'],
                    startAngle: 0,
                    selectedMode: width < 1024 ? 'single' : false,
                    itemStyle: {
                      color: '#34c17b',
                      opacity: 0.2,
                  ***REMOVED***,
                    select: {
                      itemStyle: {
                        color: '#005b79',
                    ***REMOVED***,
                  ***REMOVED***,
                    radius: ['', '20%'],
                    labelLine: {
                      show: true,
                      lineStyle: {
                        color: '#005b79',
                        opacity: 1,
                        cap: 'round',
                    ***REMOVED***,
                  ***REMOVED***,
                    labelLayout: {
                      x: '25%',
                      y: '30%',
                  ***REMOVED***,
                    data: [
                      getLabel(
                        streetData['Steinfurter Str. / Austermannstr.'],
                        'Steinfurter Straße / Austermannstraße',
                        width,
                  ***REMOVED***,
                    ],
                ***REMOVED***,
            ***REMOVED***
                    name: '2',
                    type: 'pie',
                    center: ['40%', '60%'],
                    itemStyle: {
                      color: 'transparent',
                      // opacity: 0.2,
                  ***REMOVED***,
                    radius: ['15%'],
                    label: {
                      show: true,
                      position: 'center',
                      textStyle: {
                        opacity: 1,
                    ***REMOVED***,
                  ***REMOVED***,
                    labelLine: {
                      show: false,
                  ***REMOVED***,
                    data: [getIcon(width)],
                ***REMOVED***,
            ***REMOVED***
                    name: '33',
                    type: 'pie',
                    startAngle: 0,
                    selectedMode: width < 1024 ? 'single' : false,
                    select: {
                      itemStyle: {
                        color: '#005b79',
                    ***REMOVED***,
                  ***REMOVED***,
                    center: ['40%', '60%'],
                    itemStyle: {
                      color: '#34c17b',
                      opacity: 0.2,
                  ***REMOVED***,
                    radius: ['', '15%'],
                    label: {
                      show: true,
                  ***REMOVED***,
                    labelLine: {
                      show: true,
                      lineStyle: {
                        color: '#005b79',
                    ***REMOVED***,
                  ***REMOVED***,
                    labelLayout: {
                      x: '30%',
                      y: '65%',
                  ***REMOVED***,
                    data: [
                      getLabel(
                        streetData['Rishon-le-Zion-Ring / Einsteinstr.'],
                        'Rishon-le-Zion-Ring / Einsteinstr.',
                        width,
                  ***REMOVED***,
                    ],
                ***REMOVED***,

            ***REMOVED***
                    name: '3',
                    type: 'pie',
                    center: ['55%', '75%'],
                    itemStyle: {
                      color: 'transparent',
                      // opacity: 0.2,
                  ***REMOVED***,
                    radius: ['20%'],
                    label: {
                      show: true,
                      position: 'center',
                      textStyle: {
                        opacity: 1,
                    ***REMOVED***,
                  ***REMOVED***,
                    labelLine: {
                      show: false,
                  ***REMOVED***,
                    data: [getIcon(width)],
                ***REMOVED***,
            ***REMOVED***
                    name: '33',
                    type: 'pie',
                    selectedMode: width < 1024 ? 'single' : false,
                    select: {
                      itemStyle: {
                        color: '#005b79',
                    ***REMOVED***,
                  ***REMOVED***,
                    center: ['55%', '75%'],
                    itemStyle: {
                      color: '#34c17b',
                      opacity: 0.2,
                  ***REMOVED***,
                    radius: ['', '20%'],
                    label: {
                      show: true,
                  ***REMOVED***,
                    labelLine: {
                      show: true,
                      lineStyle: {
                        color: '#005b79',
                    ***REMOVED***,
                  ***REMOVED***,
                    data: [
                      getLabel(
                        streetData['Albersloher Weg / Heumannsweg'],
                        'Albersloher Weg / Heumannsweg',
                        width,
                  ***REMOVED***,
                    ],
                ***REMOVED***,
            ***REMOVED***
                    name: '4',
                    type: 'pie',
                    center: ['60%', '55%'],
                    itemStyle: {
                      color: 'transparent',
                      // opacity: 0.2,
                  ***REMOVED***,
                    radius: ['15%'],
                    label: {
                      show: true,
                      position: 'center',
                      textStyle: {
                        opacity: 1,
                    ***REMOVED***,
                  ***REMOVED***,
                    labelLine: {
                      show: false,
                  ***REMOVED***,
                    data: [getIcon(width)],
                ***REMOVED***,
            ***REMOVED***
                    name: '33',
                    type: 'pie',
                    center: ['60%', '55%'],
                    selectedMode: width < 1024 ? 'single' : false,
                    select: {
                      itemStyle: {
                        color: '#005b79',
                    ***REMOVED***,
                  ***REMOVED***,
                    itemStyle: {
                      color: '#34c17b',
                      opacity: 0.2,
                  ***REMOVED***,
                    radius: ['', '15%'],
                    label: {
                      show: true,
                  ***REMOVED***,
                    labelLine: {
                      show: true,
                      lineStyle: {
                        color: '#005b79',
                    ***REMOVED***,
                  ***REMOVED***,
                    data: [
                      getLabel(
                        streetData['Warendorfer Str. / Schifffahrter Damm'],
                        ' Warendorfer Str. / Schifffahrter Damm',
                        width,
                  ***REMOVED***,
                    ],
                ***REMOVED***,
            ***REMOVED***
                    name: '5',
                    type: 'pie',
                    center: ['35%', '75%'],
                    itemStyle: {
                      color: 'transparent',
                      // opacity: 0.2,
                  ***REMOVED***,
                    radius: ['15%'],
                    label: {
                      show: true,
                      position: 'center',
                      textStyle: {
                        opacity: 1,
                    ***REMOVED***,
                  ***REMOVED***,
                    labelLine: {
                      show: false,
                  ***REMOVED***,
                    data: [getIcon(width)],
                ***REMOVED***,
            ***REMOVED***
                    name: '33',
                    type: 'pie',
                    center: ['35%', '75%'],
                    startAngle: 0,
                    selectedMode: width < 1024 ? 'single' : false,
                    select: {
                      itemStyle: {
                        color: '#005b79',
                    ***REMOVED***,
                  ***REMOVED***,
                    itemStyle: {
                      color: '#34c17b',
                      opacity: 0.2,
                  ***REMOVED***,
                    radius: ['', '15%'],
                    label: {
                      show: true,
                  ***REMOVED***,
                    labelLine: {
                      show: true,
                      lineStyle: {
                        color: '#005b79',
                    ***REMOVED***,
                  ***REMOVED***,
                    labelLayout: {
                      x: '25%',
                      y: '90%',
                  ***REMOVED***,
                    data: [
                      getLabel(
                        streetData['Weseler Str. / Inselbogen'],
                        'Weseler Str. / Inselbogen',
                        width,
                  ***REMOVED***,
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
    ***REMOVED***Object.keys(streetData).map((key, index) => {
            const val = parseInt(streetData[key as keyof typeof streetData])
            return (
              <div
                className="flex items-center justify-center gap-3"
                key={index***REMOVED***
              >
                <div>
                  <Title as="h5" variant={'primary'***REMOVED***>
              ***REMOVED***key***REMOVED***
                  </Title>
                  <Title
                    as="h3"
                    style={{
                      color: '#34c17b',
                  ***REMOVED******REMOVED***
                  >
                    <AnimatedNumber>{val***REMOVED***</AnimatedNumber>
                  </Title>
                </div>
              </div>
        ***REMOVED***
        ***REMOVED***)***REMOVED***
        </Carousel>
      </div>
      <Slider
        defaultValue={[monthIndex]***REMOVED***
        firstValueMobile={4***REMOVED*** // MONAT MAI NUR FÜR DEMO
        labels={[
          'JAN',
          'FEB',
          'MAR',
          'APR',
          'MAI',
          'JUN',
          'JUL',
          'AUG',
          'SEP',
          'OKT',
          'NOV',
          'DEZ',
        ]***REMOVED***
        max={11***REMOVED***
        min={0***REMOVED***
        onValueChange={([e]) => {
          setMonthIndex(e)
      ***REMOVED******REMOVED***
        variant={'mobility'***REMOVED***
      />
    </>
  )
***REMOVED***
