import { Spacer } from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import getTileData from '@/lib/api/getTileData'
import { format } from 'date-fns'
import EnergyTile from '../EnergyTile'
import EnergietraegerChart from './EnergietraegerChart'
import { getT } from '@/lib/i18n/server'

export default async function EnergietraegerTile() {
  const [data, t] = await Promise.all([getTileData('energy-energietraeger'), getT()])
  const infoText = data?.info ?? ''

  return (
    <EnergyTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadt Münster &ndash; Stabsstelle Klima"
      embedId="energy-energietraeger"
      subtitle={t('tiles.energy.energietraeger.subtitle')}
      title={t('tiles.energy.energietraeger.title')}
    >
      <div className="h-[350px] md:h-[600px]">
        <EnergietraegerChart />
      </div>
      <Spacer />
      <Title as="h5" variant={'dark'}>
        {infoText}
      </Title>
    </EnergyTile>
  )
}
