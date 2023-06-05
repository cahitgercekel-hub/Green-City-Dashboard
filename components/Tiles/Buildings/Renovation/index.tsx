import Title from '@/components/Elements/Title'
import BuildingsTile from '../BuildingsTile'

// @ts-ignore
// import WindData from '@/assets/data/bestand-windanlagen.csv'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { format ***REMOVED*** from 'date-fns'
import getTileData from '@/lib/api/getTileData'

// interface WindDataType {
//   ZEIT: string
//   AnzahlAnlagen: number
//   AnzahlSolarModule: number
//   Bruttoleistung: number
//   Nettonennleistung: number
// ***REMOVED***

export default async function RenovationTile() {
  // const [data] = WindData as WindDataType[]
  const data = await getTileData('building-renovation')
  const infoText = data?.info ?? ''

  return (
    <BuildingsTile
      dataRetrieval={format(new Date(), 'dd.MM.yyyy')***REMOVED***
      dataSource={'Stadt Münster'***REMOVED***
      embedId="building-renovation"
      title={
        <>
          <AnimatedNumber>{3469***REMOVED***</AnimatedNumber> t CO
          <sub>2</sub>
        </>
    ***REMOVED***
    >
      <div>
        <Title as={'subtitle'***REMOVED***>{infoText***REMOVED***</Title>
      </div>
    </BuildingsTile>
  )
***REMOVED***
