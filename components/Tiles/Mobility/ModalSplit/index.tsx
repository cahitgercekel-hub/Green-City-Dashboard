import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import ModalSplitChart from './ModalSplitChart'
import Title from '@/components/Elements/Title'
import { TileSplitView ***REMOVED*** from '../../Base/TileSplitView'
import getTileData from '@/lib/api/getTileData'

export default async function ModalSplitTile() {
  const data = await getTileData('mobility-modalSplit')
  const infoText = data?.info ?? ''

  return (
    <MobilityTile
      dataRetrieval="22.05.2023"
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
