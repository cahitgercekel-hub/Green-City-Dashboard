import Title from '@/components/Elements/Title'

// @ts-ignore
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { format ***REMOVED*** from 'date-fns'
import MobilityTile from '../MobilityTile'
import { Masterplan ***REMOVED*** from '@/components/Icons'

// interface PVDataType {
//   ZEIT: string
//   AnzahlAnlagen: number
//   AnzahlSolarModule: number
//   Bruttoleistung: number
//   Nettonennleistung: number
// ***REMOVED***

export default function MasterplanTile() {
  // const [data] = PVData as PVDataType[]

  return (
    <MobilityTile
      dataRetrieval={format(new Date('2023-05-22T00:00:00.000Z'), 'dd.MM.yyyy')***REMOVED***
      dataSource={'Stadt Münster'***REMOVED***
      embedId="mobility-masterplan"
      title={<>Unser Masterplan</>***REMOVED***
    >
      <div>
        <Title as={'subtitle'***REMOVED*** className="pb-2">
          <span className="block md:hidden">
            Masterplan Mobilität Münster 2035+ wird aktuell entwickelt.
          </span>{' '***REMOVED***
        </Title>
        <div className="flex flex-row gap-6">
          <span>
            <Masterplan className="h-20 text-primary md:h-44" />
          </span>
          <Title as={'subtitle'***REMOVED***>
            <span className="hidden md:block">
              Masterplan Mobilität Münster 2035+ wird aktuell entwickelt.
            </span>{' '***REMOVED***
            Dabei werden über verschiedene Formate Münsteraner Bürger*innen
            beteiligt, die so{' '***REMOVED***
            <span className="text-mobility">
              <AnimatedNumber>{967***REMOVED***</AnimatedNumber> Ideen
            </span>{' '***REMOVED***
            einbringen konnten.
          </Title>
        </div>
      </div>
    </MobilityTile>
  )
***REMOVED***
