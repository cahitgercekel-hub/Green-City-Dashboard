import { format ***REMOVED*** from 'date-fns'
import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import Title from '@/components/Elements/Title'
import { TileSplitView ***REMOVED*** from '../../Base/TileSplitView'
import getTileData from '@/lib/api/getTileData'
import TrafficloadContent from './TrafficloadContent'
export default async function TrafficloadTile() {
  const data = await getTileData('mobility-trafficload')
  const infoText = data?.info ?? ''

  const endIndex = infoText.indexOf('nehmen.')
  const firstParagraph = infoText.slice(0, endIndex + 7)
  const secondParagraph = infoText.slice(endIndex + 7)

  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')***REMOVED***
      dataSource="Stadt Münster - Amt für Mobilität und Tiefbau"
      embedId="mobility-trafficload"
      subtitle="Anzahl gezählter Fahrzeuge an Werktagen"
      title={'Kfz-Verkehrsbelastung'***REMOVED***
    >
      <TileSplitView>
        <TileSplitView.Left>
          <TrafficloadContent />
        </TileSplitView.Left>
        <TileSplitView.Right>
          <Title as="h5" variant={'dark'***REMOVED***>
            <p>{firstParagraph***REMOVED***</p>
            <br />
            <p>{secondParagraph***REMOVED***</p>
          </Title>
        </TileSplitView.Right>
      </TileSplitView>
    </MobilityTile>
  )
***REMOVED***
