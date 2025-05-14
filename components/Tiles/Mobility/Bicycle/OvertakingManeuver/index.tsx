import Title from '@/components/Elements/Title'
import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import getTileData from '@/lib/api/getTileData'
import { format } from 'date-fns'
import { TileSplitView } from '../../../Base/TileSplitView'

import Compare from './MapCompare'

export default async function OvertakingManeuver() {
  const data = await getTileData('mobility-bicycleOvertaking')
  const infoText = data?.info ?? ''

  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="ATRAI Bikes, Unfallatlas: lizensiert unter der Datenlizenz Deutschland- Namensnennung- Version 2.0 (www.govdata.de/dl-de/by-2-0)"
      embedId="mobility-bicycleOvertaking"
      subtitle="im Blick"
      title={'Überholabstände und Unfallstatistiken'}
    >
      <TileSplitView>
        <TileSplitView.Left>
          <Compare />
        </TileSplitView.Left>
        <TileSplitView.Right>
          <Title as="h5" variant={'dark'}>
            {infoText}
          </Title>
        </TileSplitView.Right>
      </TileSplitView>
    </MobilityTile>
  )
}
