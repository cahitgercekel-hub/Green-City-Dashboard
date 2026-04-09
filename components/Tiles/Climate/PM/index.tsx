import ClimateTile from '../ClimateTile'
import PMContent from './PMContent'

const DEFAULT_GROUPTAG = 'GreenCityHN'

export default function PMTile() {
  return (
    <ClimateTile
      dataSource="opensensemap.org"
      embedId="climate-pm"
      live
      title="Feinstaub"
    >
      <PMContent grouptag={DEFAULT_GROUPTAG} />
    </ClimateTile>
  )
}
