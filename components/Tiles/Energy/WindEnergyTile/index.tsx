import ProgressBar from '@/components/Charts/Progress/ProgressBar'
import Title from '@/components/Elements/Title'
import EnergyTile from '../EnergyTile'

import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import { MsKlimadashboardIconsEWindkraft ***REMOVED*** from '@/components/Icons/Energie'
import { format ***REMOVED*** from 'date-fns'

// @ts-ignore
import WindData from '@/assets/data/bestand-windanlagen.csv'

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
      dataRetrieval={format(new Date(data.ZEIT), 'dd.MM.yyyy')***REMOVED***
      dataSource="Stadt Münster &ndash; Stadtplanungsamt"
      embedId="energy-wind"
      title={
        <>
          <AnimatedNumber>{data.Nettonennleistung / 1000***REMOVED***</AnimatedNumber> MW
        </>
    ***REMOVED***
    >
      <div>
        <Title as={'subtitle'***REMOVED***>
          haben Organisationen bereits mit{' '***REMOVED***
          <span className="text-energy">
            <AnimatedNumber>{data.AnzahlAnlagen***REMOVED***</AnimatedNumber>{' '***REMOVED***
            Windkraftanlagen
          </span>{' '***REMOVED***
          in Münster installiert.
        </Title>
        <div className="mt-8 flex items-center justify-between gap-8">
          <MsKlimadashboardIconsEWindkraft className="w-40" />
          <div className="w-full flex-1">
            <div className="flex  items-center justify-between">
              <div>
                <Title as="h7" font="semibold" variant={'energy'***REMOVED***>
                  Bereits installiert
                </Title>
                <Title as="h4" variant={'energy'***REMOVED***>
            ***REMOVED***(data.Nettonennleistung / 10 / 90).toFixed(0)***REMOVED***%
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
            <Spacer size={'sm'***REMOVED*** />
            <ProgressBar
              progress={data.Nettonennleistung / 10 / 90***REMOVED***
              variant="energy"
            />
          </div>
        </div>
      </div>
    </EnergyTile>
  )
***REMOVED***
