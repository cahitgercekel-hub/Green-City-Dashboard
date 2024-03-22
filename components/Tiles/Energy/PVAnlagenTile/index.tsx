import EnergyTile from '../EnergyTile'

// @ts-ignore
import PVData from '@/assets/data/pv-anlagen.csv'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import PVAnlagenContent from './PVAnlagenContent'

export interface PVAnlagenDataType {
  'Anzahl aller PV-Anlagen': number
  'Leistung aller Anlagen (Summe)': number
***REMOVED***

export default function PVAnlagenTile() {
  const allData = PVData as PVAnlagenDataType[]
  const data = allData.at(-1)!

  return (
    <EnergyTile
      dataRetrieval="12.04.2023"
      dataSource={'Stadt Münster'***REMOVED***
      embedId="energy-PVAnlagen"
      live
      title={
        <>
          <AnimatedNumber>{data['Anzahl aller PV-Anlagen']***REMOVED***</AnimatedNumber>{' '***REMOVED***
          PV-Anlagen
        </>
    ***REMOVED***
    >
      <PVAnlagenContent></PVAnlagenContent>
    </EnergyTile>
  )
***REMOVED***
