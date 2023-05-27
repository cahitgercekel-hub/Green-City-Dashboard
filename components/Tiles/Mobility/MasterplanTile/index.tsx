import Title from '@/components/Elements/Title'
// @ts-ignore
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { format ***REMOVED*** from 'date-fns'
import MobilityTile from '../MobilityTile'
import { Masterplan ***REMOVED*** from '@/components/Icons'

export default function MasterplanTile() {
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
        <div className="flex flex-row justify-center gap-6">
          <span className="flex flex-col justify-center">
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
