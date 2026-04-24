import ClimateTile from '../ClimateTile'
import BirdTileContent from './BirdTileContent'

const DEFAULT_STATION_ID = '699b7f2c-3855-4273-af7f-ed61a54541f9'

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
