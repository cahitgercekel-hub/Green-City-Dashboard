'use client'

import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Slider from '@/components/Inputs/Slider'
import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import { useBicycleCount ***REMOVED*** from '@/hooks/useBicycleCount'
***REMOVED***
import { useState ***REMOVED*** from 'react'
import BicycleRow from './BicycleRow'
import LoadingRow from './LoadingRow'

export default function BicycleChartTile() {
  const lastDays = new Array(7)
    .fill(undefined)
    .map((e, i) => subDays(new Date(), i + 1))
    .reverse()

  const [date, setDate] = useState<Date>(lastDays[lastDays.length - 1])

  const { data, min, max, stationCount ***REMOVED*** = useBicycleCount(date)

  const loading = !data

  return (
    <MobilityTile
      dataSource="Stadt Münster - Amt für Mobilität und Tiefbau"
      live
      subtitle="im Stadtgebiet"
      title="Radler:innen"
    >
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
        <Spacer size={'sm'***REMOVED*** />
        <p className="font-medium">
          An verschiedenen Zählstellen in der Stadt wird die Anzahl an
          vorbeiradelnden Radfahrer*innen gemessen. Seit Jahren werden es stetig
          mehr. Diese Zahlen sind wichtig für die Stadtplanung und weisen u.a.
          auf einen Ausbaubedarf bei Radwegen und Velorouten hin.
        </p>
      </>
    </MobilityTile>
  )
***REMOVED***
