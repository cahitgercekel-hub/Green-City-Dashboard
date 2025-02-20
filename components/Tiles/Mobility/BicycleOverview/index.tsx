import { format } from 'date-fns'
import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import { TileSplitView } from '../../Base/TileSplitView'
// import getTileData from '@/lib/api/getTileData'
import BicycleOverviewContent from './BicycleOverviewContent'

export default async function BicycleOverview() {
  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadt Münster - Amt für Mobilität und Tiefbau"
      embedId="mobility-trafficload"
      subtitle=""
      title={'Kampangnenmetriken'}
    >
      <TileSplitView>
        <TileSplitView.Left>
          <BicycleOverviewContent />
        </TileSplitView.Left>
      </TileSplitView>
    </MobilityTile>
  )
}
