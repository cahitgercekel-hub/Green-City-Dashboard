// @ts-ignore
import { format ***REMOVED*** from 'date-fns'
import MobilityTile from '../MobilityTile'
import PassengerContent from './PassengerContent'

// interface PVDataType {
//   ZEIT: string
//   AnzahlAnlagen: number
//   AnzahlSolarModule: number
//   Bruttoleistung: number
//   Nettonennleistung: number
// ***REMOVED***

export default function PassengerTile() {
  return (
    <MobilityTile
      dataRetrieval={format(new Date('2023-05-22T00:00:00.000Z'), 'dd.MM.yyyy')***REMOVED***
      dataSource={'Stadtwerke Münster'***REMOVED***
      embedId="mobility-masterplan"
      subtitle={'Entwicklung der Fahrgastzahlen in den Bussen der Stadtwerke'***REMOVED***
      title={'ÖPNV'***REMOVED***
    >
      <PassengerContent></PassengerContent>
    </MobilityTile>
  )
***REMOVED***
