import { format } from 'date-fns'
import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import Title from '@/components/Elements/Title'
import { TileSplitView } from '../../Base/TileSplitView'
import getTileData from '@/lib/api/getTileData'
import TrafficloadContent from './TrafficloadContent'
import { getT } from '@/lib/i18n/server'
export default async function TrafficloadTile() {
  const [data, t] = await Promise.all([getTileData('mobility-trafficload'), getT()])
  const infoText = data?.info ?? ''

  const endIndex = infoText.indexOf('nehmen.')
  const firstParagraph = infoText.slice(0, endIndex + 7)
  const secondParagraph = infoText.slice(endIndex + 7)

  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadt Münster - Amt für Mobilität und Tiefbau"
      embedId="mobility-trafficload"
      subtitle={t('tiles.mobility.trafficload.subtitle')}
      title={t('tiles.mobility.trafficload.title')}
    >
      <TileSplitView>
        <TileSplitView.Left>
          <TrafficloadContent />
        </TileSplitView.Left>
        <TileSplitView.Right>
          <Title as="h5" variant={'dark'}>
            <p>{firstParagraph}</p>
            <br />
            <p>{secondParagraph}</p>
          </Title>
        </TileSplitView.Right>
      </TileSplitView>
    </MobilityTile>
  )
}
