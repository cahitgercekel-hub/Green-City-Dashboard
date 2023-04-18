'use client'

import Slider from '@/components/Inputs/Slider'
import { useBicycleCount ***REMOVED*** from '@/hooks/useBicycleCount'
***REMOVED***
import { useState ***REMOVED*** from 'react'
import BicycleRow from './BicycleRow'
import LoadingRow from './LoadingRow'

export default function BicycleChartContent() {
  const lastDays = new Array(7)
    .fill(undefined)
    .map((e, i) => subDays(new Date(), i + 1))
    .reverse()

  const [date, setDate] = useState<Date>(lastDays[lastDays.length - 1])

  const { data, min, max, stationCount ***REMOVED*** = useBicycleCount(date)

  const loading = !data

  return (
    <>
      <div className="rounded bg-white px-4 py-2">
  ***REMOVED***loading &&
          new Array(stationCount)
            .fill(undefined)
            .map((_e, i) => <LoadingRow key={i***REMOVED*** />)***REMOVED***
  ***REMOVED***data &&
          data.map(e => (
            <BicycleRow
              count={e.count***REMOVED***
              key={e.id***REMOVED***
              max={max***REMOVED***
              min={min***REMOVED***
              name={e.name***REMOVED***
            />
      ***REMOVED***)***REMOVED***
      </div>
***REMOVED***lastDays.length > 0 && (
        <Slider
          defaultValue={[lastDays.length - 1]***REMOVED***
          labels={lastDays.map(d => format(d, 'dd.MM.'))***REMOVED***
          max={lastDays.length - 1***REMOVED***
          min={0***REMOVED***
          onValueChange={([e]) => {
            setDate(lastDays[e])
        ***REMOVED******REMOVED***
          variant={'mobility'***REMOVED***
        />
  ***REMOVED******REMOVED***
    </>
  )
***REMOVED***
