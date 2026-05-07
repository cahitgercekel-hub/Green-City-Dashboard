import Title from '@/components/Elements/Title'
import getTileData from '@/lib/api/getTileData'
import { format } from 'date-fns'
import { TileSplitView } from '../../Base/TileSplitView'
import ClimateTile from '../ClimateTile'
import WachstumChart from './WachstumChart'
import { getT } from '@/lib/i18n/server'

export default async function WachstumTile() {
  const [data, t] = await Promise.all([getTileData('climate-wachstum'), getT()])
  const infoText = data?.info ?? ''

  return (
    <ClimateTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadt Münster &ndash; Stabsstelle Klima"
      embedId="climate-wachstum"
      rightAlignedExtra={
        <Title as="h7" font="normal" variant={'primary'}>
          *Sozialversicherungspflichtige Beschäftigte &emsp; BIP =
          Bruttoinlandsprodukt
        </Title>
      }
      title={t('tiles.climate.wachstum.title')}
    >
      <TileSplitView>
        <TileSplitView.Left className="rounded bg-white p-5">
          <WachstumChart />
        </TileSplitView.Left>
        <TileSplitView.Right>
          <Title as="h5" variant={'dark'}>
            {infoText}
          </Title>
        </TileSplitView.Right>
      </TileSplitView>
    </ClimateTile>
  )
}
