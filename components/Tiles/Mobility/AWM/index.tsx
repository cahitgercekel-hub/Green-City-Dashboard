import { Spacer } from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import getTileData from '@/lib/api/getTileData'
import { format } from 'date-fns'
import MobilityTile from '../MobilityTile'
import AWMContent from './AWMContent'
import { getT } from '@/lib/i18n/server'

export default async function AWMTile() {
  const [data, t] = await Promise.all([getTileData('mobility-awm'), getT()])
  const infoText = data?.info ?? ''

  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Abfallwirtschaftsbetriebe Münster (awm)"
      embedId="mobility-awm"
      subtitle={t('tiles.mobility.awm.subtitle')}
      title={t('tiles.mobility.awm.title')}
    >
      <AWMContent />
      <Spacer size={'lg'} />
      <Title as="h5">{infoText}</Title>
    </MobilityTile>
  )
}
