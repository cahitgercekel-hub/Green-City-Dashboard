import Title from '@/components/Elements/Title'
import EnergyTile from '../EnergyTile'

// @ts-ignore
import PVData from '@/assets/data/bestand-pv-anlagen.csv'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { format ***REMOVED*** from 'date-fns'

interface PVDataType {
  ZEIT: string
  AnzahlAnlagen: number
  AnzahlSolarModule: number
  Bruttoleistung: number
  Nettonennleistung: number
***REMOVED***

export default function PhotovoltTile() {
  const [data] = PVData as PVDataType[]

  return (
    <EnergyTile
      dataRetrieval={format(new Date(data.ZEIT), 'dd.MM.yyyy')***REMOVED***
      dataSource={'Marktstammdatenregister'***REMOVED***
      embedId="energy-PV"
      live
      title={
        <>
          <AnimatedNumber className="font-medium" decimals={1***REMOVED***>
      ***REMOVED***data.Nettonennleistung / 1000***REMOVED***
          </AnimatedNumber>{' '***REMOVED***
          MW
        </>
    ***REMOVED***
    >
      <div>
        <Title as={'subtitle'***REMOVED***>
          Haben die Müsteraner:innen bereits mit{' '***REMOVED***
          <span className="text-energy">
            <AnimatedNumber>{data.AnzahlAnlagen***REMOVED***</AnimatedNumber> PV-Anlagen
          </span>{' '***REMOVED***
          in Münster produziert.
        </Title>
  ***REMOVED***/* <div className="mt-8 flex items-center justify-between gap-8">
          <PvIcon className="w-40" />
          <div className="w-full flex-1">
            <div className="flex  items-center justify-between">
              <div>
                <Title as="h7" font="semibold" variant={'energy'***REMOVED***>
                  Bereits installiert
                </Title>
                <Title as="h4" variant={'energy'***REMOVED***>
                  5%
                </Title>
              </div>
              <div className="flex flex-col items-end">
                <Title as="h7" font="semibold" variant={'primary'***REMOVED***>
                  Angestrebtes Ziel bis 2030
                </Title>
                <Title as="h4" variant={'primary'***REMOVED***>
                  2.500 MWp
                </Title>
              </div>
            </div>
            <Spacer size={'sm'***REMOVED*** />
            <ProgressBar progress={5***REMOVED*** variant="energy" />
            <Spacer size={'sm'***REMOVED*** />
            <Slider
              defaultValue={[0]***REMOVED***
              labels={['2005', '2010', '2015', '2020', 'jetzt']***REMOVED***
              max={4***REMOVED***
              min={0***REMOVED***
              variant={'energy'***REMOVED***
            />
          </div>
        </div> */***REMOVED***
      </div>
    </EnergyTile>
  )
***REMOVED***
