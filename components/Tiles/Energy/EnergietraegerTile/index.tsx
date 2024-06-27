import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import getTileData from '@/lib/api/getTileData'
import { format ***REMOVED*** from 'date-fns'
import EnergyTile from '../EnergyTile'
import EnergietraegerChart from './EnergietraegerChart'

export default async function EnergietraegerTile() {
  const data = await getTileData('energy-energietraeger')
  const infoText = data?.info ?? ''

  return (
    <EnergyTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')***REMOVED***
      dataSource="Stadt Münster &ndash; Stabsstelle Klima"
      embedId="energy-energietraeger"
      subtitle={'Anteile verschiedener Energieträger'***REMOVED***
      title={'Stromerzeugung'***REMOVED***
    >
      <div className="h-[350px] md:h-[600px]">
        <EnergietraegerChart />
      </div>
      <Spacer />
      <Title as="h5" variant={'dark'***REMOVED***>
  ***REMOVED***infoText***REMOVED***
      </Title>
    </EnergyTile>
  )
***REMOVED***
