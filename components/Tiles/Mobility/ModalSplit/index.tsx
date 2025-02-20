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
      dataSource="SrV 2018, SrV 2013, KONTIV 2002, KONTIV 1990 (mit Vergleichszahlen von 1982 und 1976), Amt für Statistik und Stadtforschung"
      embedId="mobility-modalSplit"
      subtitle="Verkehrsmittelwahl der Wiesbadenerinnen und Wiesbadener"
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
