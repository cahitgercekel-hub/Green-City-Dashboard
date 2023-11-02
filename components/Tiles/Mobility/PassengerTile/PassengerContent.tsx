'use client'

import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import Title from '@/components/Elements/Title'
import { MsKlimadashboardIconsMoepnv, MsKlimadashboardIconsMoepnvGast ***REMOVED*** from '@/components/Icons/Mobilität'

import MobileSlider from '@/components/Inputs/MobileSlider'
import Slider from '@/components/Inputs/Slider'
import { useEffect, useState ***REMOVED*** from 'react'
import { useWindowSize ***REMOVED*** from 'react-use'

interface PassengerDataProps {
  ZEIT: number
  value: number
***REMOVED***

const data: PassengerDataProps[] = [
  {
    ZEIT: 2018,
    value: 46.3,
***REMOVED***,
  {
    ZEIT: 2019,
    value: 49.0,
***REMOVED***,
  {
    ZEIT: 2020,
    value: 43.9,
***REMOVED***,
  {
    ZEIT: 2021,
    value: 41.0,
***REMOVED***,
  {
    ZEIT: 2022,
    value: 46.8,
***REMOVED***,
]

export default function PassengerContent() {
  const { width ***REMOVED*** = useWindowSize()
  const years = data.map(e => e.ZEIT.toString())
  const [yearIndex, setYearIndex] = useState(
    years.length > 0 ? years.length - 1 : 0,
  )
  const [passengerValue, setPassengerValue] = useState(0)

  useEffect(() => {
    setPassengerValue(data[yearIndex].value)
***REMOVED***, [yearIndex])
  return (
    <div>
      <div className="mb-4 flex flex-row gap-6">
        <span>
          <MsKlimadashboardIconsMoepnv className="h-20 fill-primary md:h-32" />
        </span>
        <div className="flex flex-grow flex-col justify-between">
          <Title as="h3" variant={'mobility'***REMOVED***>
            <AnimatedNumber decimals={2***REMOVED***>{passengerValue***REMOVED***</AnimatedNumber> Mio
          </Title>
          <div className="flex justify-end pb-4 gap-1">
            <span>
              <MsKlimadashboardIconsMoepnvGast className="h-10 fill-primary lg:h-14" />
            </span>
            <span>
              <MsKlimadashboardIconsMoepnvGast className="h-10 fill-primary lg:h-14" />
            </span>
            <span>
              <MsKlimadashboardIconsMoepnvGast className="h-10 fill-primary lg:h-14" />
            </span>
            <span>
              <MsKlimadashboardIconsMoepnvGast className="hidden h-10 fill-primary lg:block lg:h-14" />
            </span>
          </div>
    ***REMOVED***width >= 1800 && (
            <Slider
              defaultValue={[years.length - 1]***REMOVED***
              firstValueMobile={years.length - 1***REMOVED***
              labels={years***REMOVED***
              max={years.length - 1***REMOVED***
              min={0***REMOVED***
              onValueChange={([e]) => {
                setYearIndex(e)
            ***REMOVED******REMOVED***
              variant={'mobility'***REMOVED***
            />
      ***REMOVED******REMOVED***
        </div>
      </div>
      <div className="flex-1">
  ***REMOVED***width < 1800 && (
          <MobileSlider
            defaultValue={[years.length - 1]***REMOVED***
            firstValueMobile={years.length - 1***REMOVED***
            labels={years***REMOVED***
            max={years.length - 1***REMOVED***
            min={0***REMOVED***
            onValueChange={([e]) => {
              setYearIndex(e)
          ***REMOVED******REMOVED***
            variant={'mobility'***REMOVED***
          />
    ***REMOVED******REMOVED***
      </div>
    </div>
  )
***REMOVED***
