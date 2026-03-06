import ClimateTile from '../ClimateTile'
import BirdTileContent from './BirdTileContent'

const DEFAULT_STATION_ID = 'fc81902e-17e8-487a-bfb2-f63d818e0940'

export default function BirdTile() {
  return (
    <ClimateTile
      dataSource="wiediversistmeingarten.org"
      embedId={'climate-bird'}
      live
      title={'Vogelbeobachtung'}
    >
      <BirdTileContent stationId={DEFAULT_STATION_ID} />
    </ClimateTile>
  )
}
