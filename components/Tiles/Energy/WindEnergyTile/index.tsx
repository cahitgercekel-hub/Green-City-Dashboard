import ProgressBar from '@/components/Charts/Progress/ProgressBar'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import { WindEnergyIcon ***REMOVED*** from '@/components/Icons'
import Slider from '@/components/Inputs/Slider'
import EnergyTile from '../EnergyTile'

export default function WindEnergyTile() {
  return (
    <EnergyTile
      dataSource={'Stadtwerke Münster'***REMOVED***
      embedId="windenergy"
      live
      title={
        <span>
          <span className="font-medium">50</span> MW
        </span>
    ***REMOVED***
    >
      <div>
        <Title as={'subtitle'***REMOVED***>
          Haben die Müsteraner:innen bereits mit ca.{' '***REMOVED***
          <span className="text-energy">28 Windkraftanlagen</span> in Münster
          produziert. In diesem Moment werden{' '***REMOVED***
          <span className="text-energy">10 MW</span> produziert.
        </Title>
        <div className="mt-8 flex items-center justify-between gap-8">
          <WindEnergyIcon className="w-40" />
          <div className="w-full flex-1">
            <div className="flex  items-center justify-between">
              <div>
                <Title as="h7" variant={'energy'***REMOVED***>
                  Bereits installiert
                </Title>
                <Title as="h4" variant={'energy'***REMOVED***>
                  33%
                </Title>
              </div>
              <div className="flex flex-col items-end">
                <Title as="h7" variant={'primary'***REMOVED***>
                  Angestrebtes Ziel bis 2030
                </Title>
                <Title as="h4" variant={'primary'***REMOVED***>
                  150 MW
                </Title>
              </div>
            </div>
            <Spacer size={'sm'***REMOVED*** />
            <ProgressBar progress={33***REMOVED*** variant="energy" />
            <Spacer size={'sm'***REMOVED*** />
            <Slider
              defaultValue={[0]***REMOVED***
              labels={['2005', '2010', '2015', '2020', 'jetzt']***REMOVED***
              max={4***REMOVED***
              min={0***REMOVED***
              variant={'energy'***REMOVED***
            />
          </div>
        </div>
      </div>
    </EnergyTile>
  )
***REMOVED***
