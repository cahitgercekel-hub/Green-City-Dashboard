import Title from '@/components/Elements/Title'
import EnergyTile from '../EnergyTile'

// @ts-ignore
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { format ***REMOVED*** from 'date-fns'

// interface PVDataType {
//   ZEIT: string
//   AnzahlAnlagen: number
//   AnzahlSolarModule: number
//   Bruttoleistung: number
//   Nettonennleistung: number
// ***REMOVED***

export default function LanternsTile() {
  // const [data] = PVData as PVDataType[]

  return (
    <EnergyTile
      dataRetrieval={format(new Date('2023-05-22T00:00:00.000Z'), 'dd.MM.yyyy')***REMOVED***
      dataSource={'Stadt Münster - Amt für Immobilienmanagement'***REMOVED***
      embedId="energy-lanterns"
      title={
        <>
          <AnimatedNumber className="font-medium">{5200***REMOVED***</AnimatedNumber>{' '***REMOVED***
          LED-Leuchtmittel
        </>
    ***REMOVED***
    >
      <div>
        <Title as={'subtitle'***REMOVED***>
          schenken Münsters Straßen bereits klimafreundliches Licht. Die
          Stadtnetze Münster rüsten nach und nach alle rund{' '***REMOVED***
          <span className="text-energy">
            <AnimatedNumber>{28000***REMOVED***</AnimatedNumber> Straßenlaternen
          </span>{' '***REMOVED***
          im Stadtgebiet mit der Technologie aus.
        </Title>
      </div>
    </EnergyTile>
  )
***REMOVED***
