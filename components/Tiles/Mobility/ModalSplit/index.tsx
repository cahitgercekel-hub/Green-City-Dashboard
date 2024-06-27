import Title from '@/components/Elements/Title'
import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import getTileData from '@/lib/api/getTileData'
import { format ***REMOVED*** from 'date-fns'
import { TileSplitView ***REMOVED*** from '../../Base/TileSplitView'
import ModalSplitChart from './ModalSplitChart'

export default async function ModalSplitTile() {
  const data = await getTileData('mobility-modalSplit')
  const infoText = data?.info ?? ''

  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')***REMOVED***
      dataSource="Stadt Münster &ndash; Amt für Mobilität und Tiefbau"
      embedId="mobility-modalSplit"
      subtitle="Aufteilung der zurückgelegten Wege und Kilometer der Münsteraner*innen"
      title={'Unterwegs'***REMOVED***
    >
      <TileSplitView>
        <TileSplitView.Left>
          <ModalSplitChart />
        </TileSplitView.Left>
        <TileSplitView.Right>
          <Title as="h5" variant={'dark'***REMOVED***>
      ***REMOVED***infoText***REMOVED***
          </Title>
        </TileSplitView.Right>
      </TileSplitView>
    </MobilityTile>
  )
***REMOVED***
