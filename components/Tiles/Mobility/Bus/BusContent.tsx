'use client'

import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import { BusCombustion, BusElectro ***REMOVED*** from '@/components/Icons'
import { useBusData ***REMOVED*** from '@/hooks/useBusData'

export default function BusContent() {
  const { electroCount, combustionCount ***REMOVED*** = useBusData()

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <Title as="h5" variant={'primary'***REMOVED***>
            Fahrzeuge mit fossilem Antrieb
          </Title>
          <AnimatedNumber className="text-2xl text-mobility">
      ***REMOVED***combustionCount***REMOVED***
          </AnimatedNumber>
        </div>
        <div className="flex flex-col items-end">
          <Title as="h5" variant={'primary'***REMOVED***>
            Fahrzeuge mit Elektroantrieb
          </Title>
          <AnimatedNumber className="text-2xl text-mobility">
      ***REMOVED***electroCount***REMOVED***
          </AnimatedNumber>
        </div>
      </div>
      <div className="flex w-full items-end rounded bg-white p-4">
        <div
          className="flex-none transition-all"
          style={{
            width: `${
              (combustionCount / (electroCount + combustionCount) || 0.5) * 100
          ***REMOVED***%`,
        ***REMOVED******REMOVED***
        >
          <BusCombustion className="w-full" />
        </div>
        <div className="flex-1">
          <BusElectro className="w-full" />
        </div>
      </div>
      <Spacer />
      <Title as="h5">
        Busfahren ist Klimaschutz. Damit die Umweltbilanz des Nahverkehrs noch
        besser wird, setzen wir immer stärker auf Elektrobusse mit Ökostrom im
        Tank. In Münster sind die leisen und abgasfreien Busse bereits seit 2015
        unterwegs und gehören längst zum Stadtbild. Und jedes Jahr werden es
        mehr! Bis 2029 soll unsere Busflotte komplett elektrisch fahren.
      </Title>
    </div>
  )
***REMOVED***
