import Title from '@/components/Elements/Title'
import EnergyTile from '../EnergyTile'

// @ts-ignore
import WindData from '@/assets/data/bestand-windanlagen.csv'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { WindEnergyIcon ***REMOVED*** from '@/components/Icons'

interface WindDataType {
  ZEIT: string
  AnzahlAnlagen: number
  AnzahlSolarModule: number
  Bruttoleistung: number
  Nettonennleistung: number
***REMOVED***

export default function WindEnergyTile() {
  const [data] = WindData as WindDataType[]

  return (
    <EnergyTile
      dataRetrieval="05.06.2023"
      dataSource="Stadt Münster &ndash; Stadtplanungsamt"
      embedId="energy-wind"
      live
      title={
        <>
          <AnimatedNumber>{62***REMOVED***</AnimatedNumber> MW
        </>
    ***REMOVED***
    >
      <div>
        <Title as={'subtitle'***REMOVED***>
          haben die Münsteraner*innen bereits mit{' '***REMOVED***
          <span className="text-energy">
      ***REMOVED***/* <AnimatedNumber>{data.AnzahlAnlagen***REMOVED***</AnimatedNumber>{' '***REMOVED*** */***REMOVED***
            32 Windkraftanlagen
          </span>{' '***REMOVED***
          in Münster installiert.
        </Title>
        <div className="mt-8 flex items-center justify-between gap-8">
          <WindEnergyIcon className="w-40" />
          <div className="w-full flex-1">
            <div className="flex  items-center justify-between">
              <div>
                <Title as="h7" font="semibold" variant={'energy'***REMOVED***>
                  Bereits installiert
                </Title>
                <Title as="h4" variant={'energy'***REMOVED***>
                  69%
                </Title>
              </div>
              <div className="flex flex-col items-end">
                <Title as="h7" font="semibold" variant={'primary'***REMOVED***>
                  Angestrebtes Ziel bis 2030
                </Title>
                <Title as="h4" variant={'primary'***REMOVED***>
                  90 MW
                </Title>
              </div>
            </div>
      ***REMOVED***/*
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
            */***REMOVED***
          </div>
        </div>
      </div>
    </EnergyTile>
  )
***REMOVED***
