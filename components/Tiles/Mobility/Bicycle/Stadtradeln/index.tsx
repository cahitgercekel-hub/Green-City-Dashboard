import { Spacer } from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import getTileData from '@/lib/api/getTileData'
import { format } from 'date-fns'
import ChartContainer from './ChartContainer'
import { getT } from '@/lib/i18n/server'

export default async function StadtradelnTile() {
  const [data, t] = await Promise.all([getTileData('mobility-stadtradeln'), getT()])
  const infoText = data?.info ?? ''

  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Klima-Bündnis Services / Stadtradeln"
      embedId="mobility-stadtradeln"
      subtitle={t('tiles.mobility.stadtradeln.subtitle')}
      title={t('tiles.mobility.stadtradeln.title')}
    >
      <ChartContainer city="heilbronn" />
      <Spacer />
      <Title as="h5">{infoText}</Title>
    </MobilityTile>
  )
}
