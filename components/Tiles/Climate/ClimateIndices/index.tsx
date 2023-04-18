import { format ***REMOVED*** from 'date-fns'
import ClimateTile from '../ClimateTile'
import ClimateIndicesChart from './ClimateIndicesChart'

export default function ClimateIndicesTile() {
  return (
    <ClimateTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')***REMOVED***
      dataSource="DWD"
      embedId="climate-indices"
      subtitle={
        'Häufigkeit von Temperaturkenntagen in Münster im Zeitraum der letzten 20 Jahre'
    ***REMOVED***
      title="Klimakenntage"
    >
      <div className="h-80 rounded bg-white">
        <ClimateIndicesChart />
      </div>
    </ClimateTile>
  )
***REMOVED***
