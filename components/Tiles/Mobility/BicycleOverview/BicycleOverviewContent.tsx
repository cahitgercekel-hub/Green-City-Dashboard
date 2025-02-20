'use client'

import monatsmittelwerte from '@/assets/data/trafficload.json'
import Title from '@/components/Elements/Title'
import Slider from '@/components/Inputs/Slider'
import ToggleGroup from '@/components/Inputs/ToggleGroup'
import { useState ***REMOVED*** from 'react'
import TotalDistance from './DistanceOverview'
import TotalTime from './TimeConsume'
import TotalBikes from './RigistredBikes'

function Toggle({ onChange ***REMOVED***: { onChange: (_val: string) => void ***REMOVED***) {
  const minYear = 2020
  const maxYear = new Date().getFullYear() - 1

  const years = Array.from({ length: maxYear - minYear + 1 ***REMOVED***, (_, i) => {
    return {
      element: (
        <Title as="h6" className="2xl:w-max">
    ***REMOVED***minYear + i***REMOVED***
        </Title>
  ***REMOVED***,
      value: (minYear + i).toString(),
  ***REMOVED***
***REMOVED***)

  return (
    <ToggleGroup
      defaultValue="2024"
      items={years***REMOVED***
      onChange={onChange***REMOVED***
      scrollX
      variant={'mobility'***REMOVED***
    />
  )
***REMOVED***

export default function BicycleOverviewContent() {
  const currentYear = new Date().getFullYear()
  const latestMonthWithData = monatsmittelwerte.features
    .filter(f => f.properties.year === currentYear)
    .map(f => f.properties.month)
    .sort((a, b) => b - a)[0]

  const [monthIndex, setMonthIndex] = useState(latestMonthWithData)
  const [mode, setMode] = useState('2024')
  console.log('datta', monthIndex, mode)
  return (
    <>
      <div className="relative flex h-[60rem] flex-1 flex-col rounded border bg-white px-6 pb-4 pt-8 md:h-[28rem]  xl:h-[32rem]">
        <div className="absolute -top-4 left-0 w-full md:-top-6 md:w-auto">
          <Toggle onChange={val => setMode(val as typeof mode)***REMOVED*** />
        </div>
        <div className="flex h-full w-full flex-col gap-4 overflow-hidden py-2 md:flex-row">
          <TotalBikes indexofmonth={monthIndex***REMOVED*** year={mode***REMOVED*** />
          <TotalDistance indexofmonth={monthIndex***REMOVED*** year={mode***REMOVED*** />
          <TotalTime indexofmonth={monthIndex***REMOVED*** year={mode***REMOVED*** />
        </div>
      </div>

      <Slider
        defaultValue={[monthIndex - 1]***REMOVED***
        firstValueMobile={monthIndex***REMOVED*** // MONAT MAI NUR FÜR DEMO
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
