import { format } from 'date-fns'
import MobilityTile from '../MobilityTile'
import BusContent from './BusContent'
import { getT } from '@/lib/i18n/server'

export default async function BusTile() {
  const t = await getT()
  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadtwerke Münster"
      embedId="mobility-bus"
      subtitle={t('tiles.mobility.bus.subtitle')}
      title={t('tiles.mobility.bus.title')}
    >
      <BusContent />
    </MobilityTile>
  )
}
