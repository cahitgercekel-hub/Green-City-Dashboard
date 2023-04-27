import BuildingTile from '../BuildingsTile'

import { format ***REMOVED*** from 'date-fns'
import { TileSplitView ***REMOVED*** from '../../Base/TileSplitView'
import getTileData from '@/lib/api/getTileData'
import Title from '@/components/Elements/Title'
import EnergyConsumptionContent from './EnergyConsumptionContent'

export default async function EnergyComsumptionTile() {
  const data = await getTileData('building-energyConsumption')
  const infoText =
    data?.info ??
    '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloremque temporibus labore facilis beatae ipsum nostrum nam vero, ipsam quos dolore. Corrupti ipsa facere ab soluta, nulla veritatis consectetur doloribus.  '

  return (
    <BuildingTile
      dataRetrieval={format(new Date(), 'dd.MM.yyyy')***REMOVED***
      dataSource="Stadt Münster"
      embedId={'building-energyConsumption'***REMOVED***
      subtitle={'So viel verbrauchen städtische Gebäude im Vergleich'***REMOVED***
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
