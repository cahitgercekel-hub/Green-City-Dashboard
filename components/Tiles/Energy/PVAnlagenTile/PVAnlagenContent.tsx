'use client'

import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import Title from '@/components/Elements/Title'

// @ts-ignore
import PVData from '@/assets/data/pv-anlagen.csv'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import { MsKlimadashboardIconsEPvGebaeude ***REMOVED*** from '@/components/Icons/Energie'
import Slider from '@/components/Inputs/Slider'
import { useState ***REMOVED*** from 'react'
import { PVAnlagenDataType ***REMOVED*** from '.'

export default function PVAnlagenContent() {
  const allData = PVData as PVAnlagenDataType[]

  // find all data where data['Leistung aller Anlagen (Summe)'] and data['Anzahl aller PV-Anlagen'] is not null
  const filteredData = allData
    .filter(
      e =>
        e['Leistung aller Anlagen (Summe)'] !== null &&
        e['Anzahl aller PV-Anlagen'] !== null,
***REMOVED***
    .sort((a, b) => a.ZEIT - b.ZEIT)

  const [yearIndex, setYearIndex] = useState(filteredData.length - 1)

  return (
    <div>
      <Title as={'h1'***REMOVED*** className="min-w-fit text-energy" font={'normal'***REMOVED***>
        <AnimatedNumber>
    ***REMOVED***filteredData[yearIndex]['Anzahl aller PV-Anlagen']***REMOVED***
        </AnimatedNumber>{' '***REMOVED***
        PV-Anlagen
      </Title>
      <Spacer />
      <div className="mb-4 flex flex-row gap-6">
        <span>
          <MsKlimadashboardIconsEPvGebaeude className="h-20 text-energy md:h-32" />
        </span>
        <div className="flex flex-grow flex-col justify-between">
          <Title as={'subtitle'***REMOVED***>
            sind im Moment auf Gebäuden der Stadtverwaltung installiert. Das
            entspricht einer Leistung von{' '***REMOVED***
            <span className="text-energy">
              <AnimatedNumber decimals={0***REMOVED***>
          ***REMOVED***filteredData[yearIndex]['Leistung aller Anlagen (Summe)']***REMOVED***
              </AnimatedNumber>{' '***REMOVED***
              kWp.
            </span>{' '***REMOVED***
          </Title>
        </div>
      </div>
      <Spacer />
      <Slider
        defaultValue={[filteredData.at(-1)!.ZEIT]***REMOVED***
        firstValueMobile={filteredData.at(0)!.ZEIT***REMOVED***
        labels={filteredData.map(e => e.ZEIT.toString())***REMOVED***
        max={filteredData.length - 1***REMOVED***
        min={0***REMOVED***
        onValueChange={([e]) => {
          setYearIndex(e)
      ***REMOVED******REMOVED***
        variant={'energy'***REMOVED***
      />
    </div>
  )
***REMOVED***
