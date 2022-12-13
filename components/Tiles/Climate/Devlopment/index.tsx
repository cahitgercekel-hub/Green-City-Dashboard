import ClimateTile from '../ClimateTile'

//@ts-ignore
import rawClimateData from '@/assets/data/climate_muenster.csv'
import RadarChart from './RadarChart'

type DWDMonthlyClimateMeasurement = {
  STATIONS_ID: number
  MESS_DATUM_BEGINN: number
  MESS_DATUM_ENDE: number
  QN_4: number
  MO_N: number
  MO_TT: number
  MO_TX: number
  MO_TN: number
  MO_FK: number
  MX_TX: number
  MX_FX: number
  MX_TN: number
  MO_SD_S: number
  QN_6: number
  MO_RR: number
  MX_RS: number
  eor: string
***REMOVED***

const climateData = rawClimateData as DWDMonthlyClimateMeasurement[]

const climateTemperature = climateData.map(e => ({
  year: e.MESS_DATUM_BEGINN.toString().substring(0, 4),
  month: e.MESS_DATUM_BEGINN.toString().substring(4, 6),
  value: e.MO_TT,
***REMOVED***))

const climateYears = climateTemperature.reduce(
  (
    a: {
      [key: string]: {
        [key: string]: number
    ***REMOVED***
  ***REMOVED***,
    o,
  ) => ({
    ...a,
    [o.year]: {
      // @ts-ignore
      ...a[o.year],
      [o.month]: o.value,
  ***REMOVED***,
***REMOVED***),
  {***REMOVED***,
)

export default function ClimateDevelopmentTile() {
  return (
    <ClimateTile dataSource="DWD" live title={'Klima'***REMOVED***>
      <div className="h-96 w-full rounded bg-white">
        <div className="h-full w-full">
          <RadarChart data={climateYears***REMOVED*** />
        </div>
      </div>
    </ClimateTile>
  )
***REMOVED***
