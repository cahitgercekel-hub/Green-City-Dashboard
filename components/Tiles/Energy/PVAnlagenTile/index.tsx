import EnergyTile from '../EnergyTile'

// @ts-ignore
import PVData from '@/assets/data/pv-anlagen.csv'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import PVAnlagenContent from './PVAnlagenContent'

export interface PVAnlagenDataType {
  AnzahlAnlagen: number
  Leistung: number
***REMOVED***

export default function PVAnlagenTile() {
  const [data] = PVData as PVAnlagenDataType[]

  return (
    <EnergyTile
      dataRetrieval="12.04.2023"
      dataSource={'Stadt Münster'***REMOVED***
      embedId="energy-PVAnlagen"
      live
      title={
        <>
          <AnimatedNumber>{data.AnzahlAnlagen***REMOVED***</AnimatedNumber> PV-Anlagen
        </>
    ***REMOVED***
    >
      <PVAnlagenContent></PVAnlagenContent>
    </EnergyTile>
  )
***REMOVED***
