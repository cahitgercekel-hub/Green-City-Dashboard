import Title from '@/components/Elements/Title'
import getTileData from '@/lib/api/getTileData'
import { format } from 'date-fns'
import { TileSplitView } from '../../Base/TileSplitView'
import ClimateTile from '../ClimateTile'
import GarbageChart from './GarbageChart'
import { getT } from '@/lib/i18n/server'

export default async function GarbageTile() {
  const [data, t] = await Promise.all([getTileData('climate-garbage'), getT()])
  const infoText = data?.info ?? ''

  return (
    <ClimateTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Abfallwirtschaftsbetriebe Münster (awm)"
      embedId="climate-garbage"
      subtitle={t('tiles.climate.garbage.subtitle')}
      title={t('tiles.climate.garbage.title')}
    >
      <TileSplitView>
        <TileSplitView.Left className="rounded bg-white p-5">
          <GarbageChart />
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
