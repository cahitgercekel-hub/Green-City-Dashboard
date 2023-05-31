'use client'

import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import Title from '@/components/Elements/Title'
import { Opnvbus, Passenger ***REMOVED*** from '@/components/Icons'
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
  const [yearIndex, setYearIndex] = useState(0)
  const [passengerValue, setPassengerValue] = useState(0)

  useEffect(() => {
    setPassengerValue(data[yearIndex].value)
***REMOVED***, [yearIndex])
  return (
    <div>
      <div className="mb-4 flex flex-row gap-6">
        <span>
          <Opnvbus className="h-20 text-primary md:h-32" />
        </span>
        <div className="flex flex-grow flex-col justify-between">
          <Title as={'subtitle'***REMOVED***>
            <span className="font-bold text-mobility">
              <AnimatedNumber decimals={2***REMOVED***>{passengerValue***REMOVED***</AnimatedNumber> Mio
            </span>{' '***REMOVED***
          </Title>
          <div className="flex justify-end pb-2">
            <span>
              <Passenger className="h-10 text-primary md:h-14" />
            </span>
            <span>
              <Passenger className="h-10 text-primary md:h-14" />
            </span>
            <span>
              <Passenger className="h-10 text-primary md:h-14" />
            </span>
            <span>
              <Passenger className="hidden h-10 text-primary md:block md:h-14" />
            </span>
          </div>
    ***REMOVED***width >= 1800 && (
            <Slider
              defaultValue={[yearIndex]***REMOVED***
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
            defaultValue={[yearIndex]***REMOVED***
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
