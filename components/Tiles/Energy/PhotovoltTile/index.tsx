import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import EnergyTile from '../EnergyTile'

// @ts-ignore
import PVData from '@/assets/data/bestand-pv-anlagen.csv'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { PvIcon ***REMOVED*** from '@/components/Icons'
import ProgressBar from '@/components/Charts/Progress/ProgressBar'

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
      dataRetrieval="05.06.2023"
      dataSource={'Marktstammdatenregister'***REMOVED***
      embedId="energy-PV"
      live
      title={
        <>
          <AnimatedNumber>{data.Bruttoleistung / 10000000000***REMOVED***</AnimatedNumber>{' '***REMOVED***
          MW
        </>
    ***REMOVED***
    >
      <div>
        <Title as={'subtitle'***REMOVED***>
          haben die Münsteraner*innen bereits mit{' '***REMOVED***
          <span className="text-energy">
            <AnimatedNumber>{data.AnzahlAnlagen***REMOVED***</AnimatedNumber> PV-Anlagen
          </span>{' '***REMOVED***
          in Münster installiert.
        </Title>
        <div className="mt-8 flex items-center justify-between gap-8">
          <PvIcon className="w-40" />
          <div className="w-full flex-1">
            <div className="flex  items-center justify-between">
              <div>
                <Title as="h7" font="semibold" variant={'energy'***REMOVED***>
                  Bereits installiert
                </Title>
                <Title as="h4" variant={'energy'***REMOVED***>
            ***REMOVED***(data.Bruttoleistung / 2500000000000).toFixed(0)***REMOVED***%
                </Title>
              </div>
              <div className="flex flex-col items-end">
                <Title as="h7" font="semibold" variant={'primary'***REMOVED***>
                  Angestrebtes Ziel bis 2030
                </Title>
                <Title as="h4" variant={'primary'***REMOVED***>
                  2.500 MW
                </Title>
              </div>
            </div>
            <Spacer size={'sm'***REMOVED*** />
            <ProgressBar
              progress={data.Bruttoleistung / 2500000000000***REMOVED***
              variant="energy"
            />
      ***REMOVED***/*
            <Spacer size={'sm'***REMOVED*** />
            <Slider
              defaultValue={[0]***REMOVED***
              labels={['2005', '2010', '2015', '2020', 'jetzt']***REMOVED***
              max={4***REMOVED***
              min={0***REMOVED***
              variant={'energy'***REMOVED***
            />*/***REMOVED***
          </div>
        </div>
      </div>
    </EnergyTile>
  )
***REMOVED***
