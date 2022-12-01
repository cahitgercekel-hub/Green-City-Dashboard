'use client'

import Slider from '@/components/Inputs/Slider'
import MobilityTile from '@/components/Tiles/Base/MobilityTile'
***REMOVED***
import { useState ***REMOVED*** from 'react'
import BicycleProgress from './BicycleProgress'

export default function ChartTile() {
  const lastDays = new Array(7)
    .fill(undefined)
    .map((e, i) => subDays(new Date(), i))
    .reverse()

  const [mockVal, setMockVal] = useState(0)

  return (
    <MobilityTile live subtitle="im Stadtgebiet" title="Radler:innen">
      <>
        <div className="bg-white p-4">
          <BicycleProgress progress={mockVal * 100***REMOVED*** />
          <BicycleProgress progress={mockVal * 100***REMOVED*** />
          <BicycleProgress progress={mockVal * 100***REMOVED*** />
          <BicycleProgress progress={mockVal * 100***REMOVED*** />
        </div>
  ***REMOVED***lastDays.length > 0 && (
          <Slider
            defaultValue={[0]***REMOVED***
            labels={lastDays.map(d => format(d, 'dd.MM.'))***REMOVED***
            max={lastDays.length - 1***REMOVED***
            min={0***REMOVED***
            onValueChange={([e]) => {
              setMockVal(e / (lastDays.length - 1))
          ***REMOVED******REMOVED***
          />
    ***REMOVED******REMOVED***
      </>
    </MobilityTile>
  )
***REMOVED***
