import Title from '@/components/Elements/Title'
import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import getTileData from '@/lib/api/getTileData'
import { TileSplitView } from '../../Base/TileSplitView'
import ModalSplitChart from './ModalSplitChart'
import { getT } from '@/lib/i18n/server'

export default async function ModalSplitTile() {
  const [data, t] = await Promise.all([getTileData('mobility-modalSplit'), getT()])
  const infoText = data?.info ?? ''

  return (
    <MobilityTile
      dataSource="SrV 2023, SrV 2018, SrV 2013, KONTIV 2002, KONTIV 1990 (mit Vergleichszahlen von 1982 und 1976), Amt für Statistik und Stadtforschung"
      embedId="mobility-modalSplit"
      subtitle={t('tiles.mobility.modalSplit.subtitle')}
      title={t('tiles.mobility.modalSplit.title')}
    >
      <TileSplitView>
        <TileSplitView.Left>
          <ModalSplitChart />
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
