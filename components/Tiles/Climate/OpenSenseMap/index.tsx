import ClimateTile from '../ClimateTile'
import OpenSenseMapContent from './OpenSenseMapContent'

const DEFAULT_GROUPTAG = 'GreenCityHN'

export default function OpenSenseMapTile() {
  return (
    <ClimateTile
      dataSource="opensensemap.org"
      embedId="climate-opensensemap"
      live
      title="Unsere Messstationen"
    >
      <OpenSenseMapContent grouptag={DEFAULT_GROUPTAG} />
    </ClimateTile>
  )
}
