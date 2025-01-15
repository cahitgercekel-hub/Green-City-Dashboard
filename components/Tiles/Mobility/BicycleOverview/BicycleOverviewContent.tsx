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
  const maxYear = new Date().getFullYear()

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

  const [monthIndex, setMonthIndex] = useState(latestMonthWithData - 1)
  const [mode, setMode] = useState(currentYear.toString())

  return (
    <>
      <div className="relative flex h-[60rem] flex-1 flex-col rounded bg-white p-6  md:h-[32rem]">
        <div className="absolute -top-4 left-0 w-full md:-top-6 md:w-auto">
          <Toggle onChange={val => setMode(val as typeof mode)***REMOVED*** />
        </div>
        <div className="mx-auto mb-2 flex  h-full w-full flex-wrap gap-3 py-3 md:flex-nowrap">
          <div className="h-1/3 w-full overflow-hidden  md:h-full md:w-1/3">
            <TotalBikes indexofmonth={monthIndex***REMOVED*** year={mode***REMOVED*** />
          </div>
          <div className="h-1/3 w-full overflow-hidden  md:h-full md:w-1/3">
            <TotalDistance indexofmonth={monthIndex***REMOVED*** year={mode***REMOVED*** />
          </div>
          <div className="h-1/3 w-full overflow-hidden  md:h-full md:w-1/3">
            <TotalTime indexofmonth={monthIndex***REMOVED*** year={mode***REMOVED*** />
          </div>
        </div>
      </div>

      <Slider
        defaultValue={[monthIndex]***REMOVED***
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
