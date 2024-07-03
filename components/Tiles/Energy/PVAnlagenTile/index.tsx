import { format ***REMOVED*** from 'date-fns'
import EnergyTile from '../EnergyTile'
import PVAnlagenContent from './PVAnlagenContent'

export interface PVAnlagenDataType {
  ZEIT: number
  'Anzahl aller PV-Anlagen': number
  'Leistung aller Anlagen (Summe)': number
***REMOVED***

export default function PVAnlagenTile() {
  return (
    <EnergyTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')***REMOVED***
      dataSource={'Stadt Münster'***REMOVED***
      embedId="energy-PVAnlagen"
    >
      <PVAnlagenContent></PVAnlagenContent>
    </EnergyTile>
  )
***REMOVED***
