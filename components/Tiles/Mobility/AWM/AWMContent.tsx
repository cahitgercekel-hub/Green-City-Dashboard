'use client'

import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import Title from '@/components/Elements/Title'

import MobileSlider from '@/components/Inputs/MobileSlider'
import Slider from '@/components/Inputs/Slider'
import { useWindowSize ***REMOVED*** from 'react-use'
// @ts-ignore
import AwmEMobility from '@/assets/data/awm-e-mobilitaet.csv'
import { useEffect, useState ***REMOVED*** from 'react'
import { MsKlimadashboardIconsMAwmAbgas, MsKlimadashboardIconsMAwmElektro ***REMOVED*** from '@/components/Icons/Mobilität'

type AwmDatatType = {
  ZEIT: number
  'AWM Fahrzeuge - Dieselantrieb': number
  'AWM Fahrzeuge - Elektroantrieb': number
  'AWM Fahrzeuge - Erdgasantrieb': number
***REMOVED***

export default function AWMContent() {
  // const { electroCount, combustionCount ***REMOVED*** = useBusData()
  const { width ***REMOVED*** = useWindowSize()
  const [yearIndex, setYearIndex] = useState(2)

  const [combustionCount, setCombustionCount] = useState(0)
  const [electroCount, setElectroCount] = useState(0)

  const data: AwmDatatType[] = AwmEMobility

  useEffect(() => {
    if (!data) {
      return
  ***REMOVED***
    const row: AwmDatatType = data[yearIndex]
    setElectroCount(row['AWM Fahrzeuge - Elektroantrieb'])
    setCombustionCount(row['AWM Fahrzeuge - Dieselantrieb'])
***REMOVED***, [data, yearIndex])

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <Title as="h5" variant={'primary'***REMOVED***>
            Fahrzeuge mit fossilem Antrieb
          </Title>
          <AnimatedNumber className="text-2xl text-mobility">
      ***REMOVED***combustionCount***REMOVED***
          </AnimatedNumber>
        </div>
        <div className="flex flex-col items-end">
          <Title as="h5" variant={'primary'***REMOVED***>
            Fahrzeuge mit Elektroantrieb
          </Title>
          <AnimatedNumber className="text-2xl text-mobility">
      ***REMOVED***electroCount***REMOVED***
          </AnimatedNumber>
        </div>
      </div>
      <div className="flex aspect-[7/4] w-full items-end rounded bg-white p-4">
        <div
          className="flex-none transition-all"
          style={{
            width: `${
              (combustionCount / (electroCount + combustionCount) || 0.5) * 100
          ***REMOVED***%`,
        ***REMOVED******REMOVED***
        >
          <MsKlimadashboardIconsMAwmAbgas className="w-full" />
        </div>
        <div className="flex-1">
          <MsKlimadashboardIconsMAwmElektro className="w-full" />
        </div>
      </div>
***REMOVED***width < 1800 && (
        <MobileSlider
          defaultValue={[yearIndex]***REMOVED***
          firstValueMobile={data.length - 1***REMOVED***
          labels={data.map(e => e.ZEIT.toString())***REMOVED***
          max={data.length - 1***REMOVED***
          min={0***REMOVED***
          onValueChange={([index]) => setYearIndex(index)***REMOVED***
          variant={'mobility'***REMOVED***
        />
  ***REMOVED******REMOVED***
***REMOVED***width >= 1800 && (
        <Slider
          defaultValue={[yearIndex]***REMOVED***
          firstValueMobile={data.length - 1***REMOVED***
          labels={data.map(e => e.ZEIT.toString())***REMOVED***
          max={data.length - 1***REMOVED***
          min={0***REMOVED***
          onValueChange={([index]) => setYearIndex(index)***REMOVED***
          variant={'mobility'***REMOVED***
        />
  ***REMOVED******REMOVED***
    </div>
  )
***REMOVED***
