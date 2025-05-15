import { format } from 'date-fns'
import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import CampaignChart from './CampaignContent'
export default async function BicycleOverview() {
  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="openSenseMap"
      embedId="mobility-bicycleCampaign"
      subtitle="So viele Fahrraddaten wurden bisher gesammelt"
      title={'Kampagne "SensorBike"'}
    >
      <CampaignChart />
    </MobilityTile>
  )
}
