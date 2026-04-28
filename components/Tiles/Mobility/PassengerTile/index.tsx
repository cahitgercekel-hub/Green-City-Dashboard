import { format } from 'date-fns'
import MobilityTile from '../MobilityTile'
import PassengerContent from './PassengerContent'
import { getT } from '@/lib/i18n/server'

export default async function PassengerTile() {
  const t = await getT()
  return (
    <MobilityTile
      dataRetrieval={format(new Date('2023-05-22T00:00:00.000Z'), 'dd.MM.yyyy')}
      dataSource={'Stadtwerke Münster'}
      embedId="mobility-passengers"
      subtitle={t('tiles.mobility.passenger.subtitle')}
      title={t('tiles.mobility.passenger.title')}
    >
      <PassengerContent></PassengerContent>
    </MobilityTile>
  )
}
