'use client'

import ToggleGroup from '@/components/Inputs/ToggleGroup'

import stromData from '@/assets/data/strom.json'
import { useState ***REMOVED*** from 'react'
import Slider from '@/components/Inputs/Slider'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

const years = Array.from(
  new Set(
    stromData.map(d => new Date(d.Datum).getFullYear()).filter(e => e > 2017),
  ),
).sort((a, b) => a - b)

export default function EnergyConsumptionContent() {
  const [mode, setMode] = useState<'strom' | 'waerme'>('strom')
  const [yearIndex, setYearIndex] = useState<number>(years.length - 1)

  return (
    <>
      <div className="relative h-full w-full rounded bg-white p-5 pt-8">
        <div className="absolute -top-4 right-0 w-full md:-top-6 md:w-auto">
          <ToggleGroup
            items={[
        ***REMOVED***
                element: 'Strom',
                value: 'strom',
            ***REMOVED***,
        ***REMOVED***
                element: 'Wärme',
                value: 'waerme',
            ***REMOVED***,
            ]***REMOVED***
            onChange={value => setMode(value as 'strom' | 'waerme')***REMOVED***
            variant={'building'***REMOVED***
          ></ToggleGroup>
        </div>
        <div className="hidden xl:block">
          <DesktopView mode={mode***REMOVED*** yearIndex={yearIndex***REMOVED*** />
        </div>
        <div className="block xl:hidden">
          <MobileView mode={mode***REMOVED*** yearIndex={yearIndex***REMOVED*** />
        </div>
      </div>
      <Slider
        defaultValue={[yearIndex]***REMOVED***
        firstValueMobile={years.length - 1***REMOVED***
        labels={years.map(e => e.toString())***REMOVED***
        max={years.length - 1***REMOVED***
        min={0***REMOVED***
        onValueChange={([e]) => {
          setYearIndex(e)
      ***REMOVED******REMOVED***
        variant={'buildings'***REMOVED***
      />
    </>
  )
***REMOVED***
