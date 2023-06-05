import EnergyTile from '../EnergyTile'

// @ts-ignore
import PVData from '@/assets/data/pv-anlagen.csv'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { format ***REMOVED*** from 'date-fns'
import PVAnlagenContent from './PVAnlagenContent'

export interface PVAnlagenDataType {
  AnzahlAnlagen: number
  Leistung: number
***REMOVED***

export default function PVAnlagenTile() {
  const [data] = PVData as PVAnlagenDataType[]

  return (
    <EnergyTile
      dataRetrieval={format(new Date(), 'dd.MM.yyyy')***REMOVED***
      dataSource={'Marktstammdatenregister'***REMOVED***
      embedId="energy-PVAnlagen"
      live
      title={
        <>
          <AnimatedNumber className="font-medium">
      ***REMOVED***data.AnzahlAnlagen***REMOVED***
          </AnimatedNumber>{' '***REMOVED***
          PV-Anlagen
        </>
    ***REMOVED***
    >
      <PVAnlagenContent></PVAnlagenContent>
    </EnergyTile>
  )
***REMOVED***
