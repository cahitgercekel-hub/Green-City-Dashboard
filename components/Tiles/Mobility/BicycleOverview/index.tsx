import { format ***REMOVED*** from 'date-fns'
import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import { TileSplitView ***REMOVED*** from '../../Base/TileSplitView'
// import getTileData from '@/lib/api/getTileData'
import BicycleOverviewContent from './BicycleOverviewContent'

export default async function BicycleOverview() {
  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')***REMOVED***
      dataSource="Stadt Münster - Amt für Mobilität und Tiefbau"
      embedId="mobility-trafficload"
      subtitle=""
      title={'Kampangnenmetriken'***REMOVED***
    >
      <TileSplitView>
        <TileSplitView.Left>
          <BicycleOverviewContent />
        </TileSplitView.Left>
      </TileSplitView>
    </MobilityTile>
  )
***REMOVED***
