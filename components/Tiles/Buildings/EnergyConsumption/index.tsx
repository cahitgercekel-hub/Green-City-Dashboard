import BuildingTile from '../BuildingsTile'

import { format ***REMOVED*** from 'date-fns'
import { TileSplitView ***REMOVED*** from '../../Base/TileSplitView'
import getTileData from '@/lib/api/getTileData'
import Title from '@/components/Elements/Title'
import EnergyConsumptionContent from './EnergyConsumptionContent'

export default async function EnergyComsumptionTile() {
  const data = await getTileData('building-energyConsumption')
  const infoText = data?.info ?? ''

  return (
    <BuildingTile
      dataRetrieval={format(new Date(), 'dd.MM.yyyy')***REMOVED***
      dataSource="Stadt Münster &ndash; Amt für Immobilienmanagement"
      embedId={'building-energyConsumption'***REMOVED***
      subtitle={'So entwickelt sich über das Jahr verteilt der Verbrauch von Wärme und Strom in ausgewählten städtischen Gebäuden'***REMOVED***
      live
      title={'Energieverbrauch'***REMOVED***
    >
      <TileSplitView>
        <TileSplitView.Left>
          <div>
            <EnergyConsumptionContent />
          </div>
        </TileSplitView.Left>
        <TileSplitView.Right>
          <Title as="h5" variant={'dark'***REMOVED***>
      ***REMOVED***infoText***REMOVED***
          </Title>
        </TileSplitView.Right>
      </TileSplitView>
    </BuildingTile>
  )
***REMOVED***
