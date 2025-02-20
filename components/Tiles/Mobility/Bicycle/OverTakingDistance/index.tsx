import { format ***REMOVED*** from 'date-fns'
import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import OvertakingContent from './OvertakingContent'

export default function PassengerTile() {
  return (
    <MobilityTile
      dataRetrieval={format(new Date('2023-05-22T00:00:00.000Z'), 'dd.MM.yyyy')***REMOVED***
      dataSource={
        'LIVEQUELLE: STADT XX - AMT FÜR MOBILITÄT- KAMPANGNENMETRIKEN'
    ***REMOVED***
      embedId="mobility-passengers"
      title={'Überholabstand'***REMOVED***
    >
      <OvertakingContent></OvertakingContent>
    </MobilityTile>
  )
***REMOVED***
