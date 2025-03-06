import { format } from 'date-fns'
import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import { TileSplitView } from '../../Base/TileSplitView'
// import getTileData from '@/lib/api/getTileData'
// import BicycleOverviewContent from './BicycleOverviewContent'
// import CampignChart from './CampignChart'
import CampaignChart from './CampigenChart'
export default async function BicycleOverview() {
  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadt Münster - Amt für Mobilität und Tiefbau"
      embedId="mobility-bicycleOverview"
      subtitle="So viele Fahrraddaten wurden bisher gesammelt"
      title={'Kampagne'}
    >
      <TileSplitView>
        <TileSplitView.Left>
          <CampaignChart />
        </TileSplitView.Left>
      </TileSplitView>
    </MobilityTile>
  )
}
