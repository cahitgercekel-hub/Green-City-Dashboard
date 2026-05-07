import getTileData from '@/lib/api/getTileData'
import ClimateTile from '../ClimateTile'
import AirqualityChart from './AirqualityChart'
import { getT } from '@/lib/i18n/server'

export default async function AirqualityTile() {
  const [data, t] = await Promise.all([getTileData('climate-airquality'), getT()])
  const infoText = data?.info ?? ''

  return (
    <ClimateTile
      dataSource="Umweltbundesamt & Messstationen der Bundesländer"
      embedId="climate-airquality"
      live
      title={t('tiles.climate.airquality.title')}
    >
      <AirqualityChart />
    </ClimateTile>
  )
}
