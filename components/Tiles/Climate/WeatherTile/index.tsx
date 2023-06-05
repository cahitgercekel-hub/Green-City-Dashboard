import ClimateTile from '../ClimateTile'
import WeatherTileContent from './WeatherTileContent'

export default function WeatherTile() {
  return (
    <ClimateTile
      dataSource="Deutscher Wetterdienst"
      embedId={'climate-weather'***REMOVED***
      live
      title={
        <>
          <span className="font-medium">Wetter</span> aktuell
        </>
    ***REMOVED***
    >
      <WeatherTileContent />
    </ClimateTile>
  )
***REMOVED***
