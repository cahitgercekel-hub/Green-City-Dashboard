import BuildingTile from '../BuildingsTile'

import { format } from 'date-fns'
import { TileSplitView } from '../../Base/TileSplitView'
import getTileData from '@/lib/api/getTileData'
import Title from '@/components/Elements/Title'
import EnergyConsumptionContent from './EnergyConsumptionContent'
import { getT } from '@/lib/i18n/server'

export default async function EnergyComsumptionTile() {
  const [data, t] = await Promise.all([getTileData('building-energyConsumption'), getT()])
  const infoText = data?.info ?? ''

  return (
    <BuildingTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadt Münster &ndash; Amt für Immobilienmanagement"
      embedId={'building-energyConsumption'}
      live
      subtitle={t('tiles.buildings.energyConsumption.subtitle')}
      title={t('tiles.buildings.energyConsumption.title')}
    >
      <TileSplitView>
        <TileSplitView.Left>
          <div>
            <EnergyConsumptionContent />
          </div>
        </TileSplitView.Left>
        <TileSplitView.Right>
          <Title as="h5" variant={'dark'}>
            {infoText}
          </Title>
        </TileSplitView.Right>
      </TileSplitView>
    </BuildingTile>
  )
}
