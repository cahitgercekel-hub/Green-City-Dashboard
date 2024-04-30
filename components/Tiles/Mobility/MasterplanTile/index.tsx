import Title from '@/components/Elements/Title'
// @ts-ignore
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { MsKlimadashboardIconsMMasterplanV1 ***REMOVED*** from '@/components/Icons/Mobilitaet'
import { format ***REMOVED*** from 'date-fns'
import MobilityTile from '../MobilityTile'

export default function MasterplanTile() {
  return (
    <MobilityTile
      dataRetrieval={format(new Date('2024-04-30T00:00:00.000Z'), 'dd.MM.yyyy')***REMOVED***
      dataSource={'Stadt Münster - Amt für Mobilität und Tiefbau'***REMOVED***
      embedId="mobility-masterplan"
      title={<>Der „Masterplan</>***REMOVED***
    >
      <div>
        <div className="flex flex-row justify-center gap-6">
          <span className="flex flex-col justify-center">
            <MsKlimadashboardIconsMMasterplanV1 className="h-20 text-primary lg:h-44" />
          </span>
          <Title as={'subtitle'***REMOVED***>
            Mobilität Münster 2035+“ wurde im April 2024 veröffentlicht. Viele
            Anregungen der Bürger*innen sind darin eingeflossen. Insgesamt{' '***REMOVED***
            <span className="text-mobility">
              <AnimatedNumber>{46***REMOVED***</AnimatedNumber> Ideen
            </span>{' '***REMOVED***
            Maßnahmen wurden daraus entwickelt.
          </Title>
        </div>
      </div>
    </MobilityTile>
  )
***REMOVED***
