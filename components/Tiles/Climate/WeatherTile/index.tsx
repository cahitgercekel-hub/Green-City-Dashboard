'use client'

import { SunLarge ***REMOVED*** from '@/components/Icons'
import Slider from '@/components/Inputs/Slider'
import useWeather from '@/hooks/useWeather'
import { conditionMapping ***REMOVED*** from '@/lib/brightsky'
import { addHours, format ***REMOVED*** from 'date-fns'
import { useState ***REMOVED*** from 'react'
import ClimateTile from '../ClimateTile'
import Phenomenon from './Phenomenon'

export default function WeatherTile() {
  const [timestamp, setTimestamp] = useState(new Date())

  const weather = useWeather({ lat: 52, lng: 7.6 ***REMOVED***, timestamp)

  const nextHours = new Array(6).fill(undefined).map((e, i) => {
    const date = new Date()
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return addHours(date, i)
***REMOVED***)

  return (
    <ClimateTile
      dataSource="DWD"
      live
      title={
        <span>
          <span className="font-medium">Wetter</span> aktuell
        </span>
    ***REMOVED***
    >
      <div>
  ***REMOVED***weather && (
          <div className="mb-8 flex space-x-4">
            <div className="flex flex-1 flex-col justify-between">
              <span>
                <SunLarge className="h-24 text-primary" />
              </span>
              <p className="my-4 text-xl">
                In Münster ist es gerade{' '***REMOVED***
                <span className="text-climate">
            ***REMOVED***conditionMapping[weather?.condition]***REMOVED***
                </span>
              </p>
              <Phenomenon
                phenomenon="temperature"
                size="xl"
                value={weather?.temperature***REMOVED***
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <Phenomenon
                phenomenon="precipitation"
                value={weather?.precipitation***REMOVED***
              />
              <Phenomenon
                phenomenon="cloudcover"
                value={weather?.cloud_cover***REMOVED***
              />
              <Phenomenon phenomenon="windspeed" value={weather?.wind_speed***REMOVED*** />
        ***REMOVED***/* <Phenomenon phenomenon="sunhours" value={weather?.sunshine***REMOVED*** /> */***REMOVED***
            </div>
          </div>
    ***REMOVED******REMOVED***
        <Slider
          defaultValue={[0]***REMOVED***
          labels={(() => {
            const labels = nextHours.map(d => format(d, 'kk:mm'))
            labels[0] = 'jetzt'
            return labels
        ***REMOVED***)()***REMOVED***
          max={nextHours.length - 1***REMOVED***
          min={0***REMOVED***
          onValueChange={([e]) => {
            setTimestamp(nextHours[e])
        ***REMOVED******REMOVED***
        />
      </div>
    </ClimateTile>
  )
***REMOVED***
