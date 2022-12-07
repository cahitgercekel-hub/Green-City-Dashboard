'use client'

import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Slider from '@/components/Inputs/Slider'
import MobilityTile from '@/components/Tiles/Base/MobilityTile'
import { useBicycleCount ***REMOVED*** from '@/hooks/useBicycleCount'
***REMOVED***
import { useState ***REMOVED*** from 'react'
import BicycleRow from './BicycleRow'

export default function BicycleChartTile() {
  const lastDays = new Array(7)
    .fill(undefined)
    .map((e, i) => subDays(new Date(), i + 1))
    .reverse()

  const [date, setDate] = useState<Date>(lastDays[lastDays.length - 1])

  const { data, min, max ***REMOVED*** = useBicycleCount(date)

  return (
    <MobilityTile live subtitle="im Stadtgebiet" title="Radler:innen">
      <>
        <div className="rounded bg-white px-4 py-2">
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
        <Spacer size="sm" />
  ***REMOVED***lastDays.length > 0 && (
          <Slider
            defaultValue={[lastDays.length - 1]***REMOVED***
            labels={lastDays.map(d => format(d, 'dd.MM.'))***REMOVED***
            max={lastDays.length - 1***REMOVED***
            min={0***REMOVED***
            onValueChange={([e]) => {
              setDate(lastDays[e])
          ***REMOVED******REMOVED***
          />
    ***REMOVED******REMOVED***
      </>
    </MobilityTile>
  )
***REMOVED***
