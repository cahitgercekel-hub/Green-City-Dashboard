'use client'

import Title from '@/components/Elements/Title'
import useWeather from '@/hooks/useWeather'
import { conditionMapping, conditionMappingIcon ***REMOVED*** from '@/lib/brightsky'
import { addHours, format ***REMOVED*** from 'date-fns'
import { useState ***REMOVED*** from 'react'
import Phenomenon from './Phenomenon'
import Slider from '@/components/Inputs/Slider'

export default function WeatherTileContent() {
  const [timestamp, setTimestamp] = useState(new Date())

  const weather = useWeather({ lat: 52, lng: 7.6 ***REMOVED***, timestamp)

  const nextHours = new Array(6).fill(undefined).map((e, i) => {
    const date = new Date()
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return addHours(date, i)
***REMOVED***)

  if(weather) {
    const Icon = conditionMappingIcon[weather?.condition]

    return (
      <div>
  ***REMOVED***weather && (
          <div className="mb-8 flex flex-col gap-4">
            <div className="flex flex-1 items-center gap-6 md:gap-2">
              <Icon className="h-20 text-primary md:mr-12 md:h-36" />
              <Title as={'h4'***REMOVED*** className="my-4 w-3/4 md:w-1/2">
                In Münster ist es gerade{' '***REMOVED***
                <span className="text-climate">
            ***REMOVED***conditionMapping[weather?.condition]***REMOVED***
                </span>
              </Title>
            </div>
            <div className="flex flex-row items-start md:items-center">
              <div className="flex-1">
                <Phenomenon
                  phenomenon="temperature"
                  size="xl"
                  value={weather?.temperature***REMOVED***
                />
              </div>

              <div className="flex flex-1">
                <div className="flex h-full w-full flex-1 flex-col justify-between gap-2.5 md:gap-6">
                  <Phenomenon
                    phenomenon="precipitation"
                    value={weather?.precipitation***REMOVED***
                  />
                  <Phenomenon
                    phenomenon="cloudcover"
                    value={weather?.cloud_cover***REMOVED***
                  />
                  <Phenomenon
                    phenomenon="windspeed"
                    value={weather?.wind_speed***REMOVED***
                  />
            ***REMOVED***/* <Phenomenon phenomenon="sunhours" value={weather?.sunshine***REMOVED*** /> */***REMOVED***
                </div>
              </div>
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
          variant={'climate'***REMOVED***
        />
      </div>
***REMOVED***
***REMOVED***

  return <p>Loading...</p>
***REMOVED***
