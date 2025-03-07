import { format } from 'date-fns'
import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import OvertakingContent from './OvertakingContent'

export default function BicycleOvertaking() {
  return (
    <MobilityTile
      dataRetrieval={format(new Date('2023-05-22T00:00:00.000Z'), 'dd.MM.yyyy')}
      dataSource={
        'LIVEQUELLE: STADT XX - AMT FÜR MOBILITÄT- KAMPANGNENMETRIKEN'
      }
      embedId="mobility-bicycleOvertaking"
      title={'Überholabstand'}
    >
      <OvertakingContent></OvertakingContent>
    </MobilityTile>
  )
}
