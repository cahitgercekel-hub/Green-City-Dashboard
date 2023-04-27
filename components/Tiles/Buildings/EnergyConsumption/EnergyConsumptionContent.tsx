'use client'

import ToggleGroup from '@/components/Inputs/ToggleGroup'

import waermeData from '@/assets/data/waerme.json'
import stromData from '@/assets/data/strom.json'
import Title from '@/components/Elements/Title'
import { useState ***REMOVED*** from 'react'
import Slider from '@/components/Inputs/Slider'
import EnergyConsumptionChart from './EnergyConsumptionChart'

type DataType = {
  Datum: number
  stadtbuecherei: number | null
  sentruper: number | null
  rathaus: number | null
  'freiherr-von-stein': number | null
***REMOVED***

type Building = Omit<DataType, 'Datum'>

const buildings: Record<keyof Building, string> = {
  stadtbuecherei: 'Stadtbücherei',
  sentruper: 'Sportantlage Sentruper Höhe',
  rathaus: 'Rathaus / Stadtweinhaus',
  'freiherr-von-stein': 'Freiherr-von-Stein-Gymnasium',
***REMOVED***

function getData(
  mode: 'strom' | 'waerme',
  building: keyof Building,
  year: number,
) {
  const data: DataType[] = mode === 'strom' ? stromData : waermeData

  const filteredYear = data.filter(
    d => year === new Date(d.Datum).getFullYear(),
  )

  return filteredYear.map(d => d[building]).filter(d => d !== null) as number[]
***REMOVED***

const years = Array.from(
  new Set(stromData.map(d => new Date(d.Datum).getFullYear())),
).sort((a, b) => a - b)

export default function EnergyConsumptionContent() {
  const [mode, setMode] = useState<'strom' | 'waerme'>('strom')
  const [yearIndex, setYearIndex] = useState<number>(years.length - 1)

  return (
    <>
      <div className="relative h-full w-full rounded bg-white p-5">
        <div className="absolute -top-6 right-0">
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

        <div className="flex h-full w-full justify-between">
    ***REMOVED***Object.keys(buildings).map(building => (
            <div className="flex-1 p-2" key={building***REMOVED***>
              <Title as="h5" className="h-20" variant="building">
          ***REMOVED***buildings[building as keyof Building]***REMOVED***
              </Title>
              <div className="h-72">
                <EnergyConsumptionChart
                  data={getData(
                    mode,
                    building as keyof Building,
                    years[yearIndex],
              ***REMOVED******REMOVED***
                />
              </div>
            </div>
      ***REMOVED***)***REMOVED***
        </div>
      </div>
      <Slider
        defaultValue={[yearIndex]***REMOVED***
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
