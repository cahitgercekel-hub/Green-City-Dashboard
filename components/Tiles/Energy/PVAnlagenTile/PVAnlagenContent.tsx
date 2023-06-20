'use client'

import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import Title from '@/components/Elements/Title'
import { PVAnlageMuenster ***REMOVED*** from '@/components/Icons'

// @ts-ignore
import PVData from '@/assets/data/pv-anlagen.csv'
import { PVAnlagenDataType ***REMOVED*** from '.'

export default function PVAnlagenContent() {
  const [data] = PVData as PVAnlagenDataType[]

  return (
    <div>
      <div className="mb-4 flex flex-row gap-6">
        <span>
          <PVAnlageMuenster className="h-20 text-energy md:h-32" />
        </span>
        <div className="flex flex-grow flex-col justify-between">
          <Title as={'subtitle'***REMOVED***>
            sind im Moment auf Gebäuden der Stadtverwaltung installiert. Das
            entspricht einer Leistung von{' '***REMOVED***
            <span className="text-energy">
              <AnimatedNumber decimals={0***REMOVED***>{data.Leistung***REMOVED***</AnimatedNumber> kWp.
            </span>{' '***REMOVED***
          </Title>
        </div>
      </div>
    </div>
  )
***REMOVED***
