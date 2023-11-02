'use client'

import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
// @ts-ignore
import BusData from '@/assets/data/stadtwerke-bus-fahrzeuge.csv'
import { useWindowSize ***REMOVED*** from 'react-use'
import { useEffect, useState ***REMOVED*** from 'react'
import MobileSlider from '@/components/Inputs/MobileSlider'
import Slider from '@/components/Inputs/Slider'
import { MsKlimadashboardIconsMBusAbgas, MsKlimadashboardIconsMBusElektro ***REMOVED*** from '@/components/Icons/Mobilitaet'

type BusDataType = {
  ZEIT: string
  'Fahrzeuge Alternative Antriebe Elektro': number
  'Fahrzeuge Alternative Antriebe Gesamt': number
  'Fahrzeuge Alternative Antriebe H2': number
  'Fahrzeuge Alternative Antriebe Hybrid': number
  'Fahrzeuge SWMS': number
  'Fahrzeuge Sub': number
  'Fahrzeuge awm - Alternativer Antrieb': number
  'Fahrzeuge awm - Verbrenner': number
***REMOVED***

export default function BusContent() {
  // const { electroCount, combustionCount ***REMOVED*** = useBusData()
  const { width ***REMOVED*** = useWindowSize()
  const [yearIndex, setYearIndex] = useState(0)
  const [combustionCount, setCombustionCount] = useState(0)
  const [electroCount, setElectroCount] = useState(0)

  const data: BusDataType[] = BusData
  const [reducedData, setReducedData] = useState<BusDataType[]>([])

  useEffect(() => {
    if (!data) {
      return
  ***REMOVED***
    const reducedDataLocal: BusDataType[] = []
    let currentYear = ''
    data.forEach(item => {
      if (currentYear === item.ZEIT.toString().substring(0, 4)) {
        return
    ***REMOVED***
      currentYear = item.ZEIT.toString().substring(0, 4)
      const row: BusDataType | undefined = data
        .slice()
        .reverse()
        .find(item => item.ZEIT.toString().substring(0, 4) === currentYear)
      if (
        row &&
        row['Fahrzeuge SWMS'] &&
        row['Fahrzeuge Alternative Antriebe Elektro']
  ***REMOVED*** {
        reducedDataLocal.push({ ...row, ZEIT: currentYear ***REMOVED***)
    ***REMOVED***
  ***REMOVED***)
    setReducedData(reducedDataLocal)
    setYearIndex(reducedDataLocal.length - 1)
***REMOVED***, [data])

  useEffect(() => {
    if (!reducedData) {
      return
  ***REMOVED***
    const row: BusDataType = reducedData[yearIndex]
    if (row) {
      setElectroCount(row['Fahrzeuge Alternative Antriebe Elektro'])
      setCombustionCount(
        row['Fahrzeuge SWMS'] - row['Fahrzeuge Alternative Antriebe Elektro'],
  ***REMOVED***
  ***REMOVED***
***REMOVED***, [yearIndex, reducedData])

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
      <div className="flex aspect-[5/2] w-full items-end rounded bg-white p-4">
        <div
          className="flex-none transition-all"
          style={{
            width: `${
              (combustionCount / (electroCount + combustionCount) || 0.5) * 100
          ***REMOVED***%`,
        ***REMOVED******REMOVED***
        >
          <MsKlimadashboardIconsMBusAbgas className="w-full" />
        </div>
        <div className="flex-1">
          <MsKlimadashboardIconsMBusElektro className="w-full" />
        </div>
      </div>
***REMOVED***width < 1800 && (
        <MobileSlider
          firstValueMobile={3***REMOVED*** // ONLY FOR DEMO
          labels={reducedData.map(e => e.ZEIT.toString())***REMOVED***
          max={reducedData.length - 1***REMOVED***
          min={0***REMOVED***
          onValueChange={([index]) => setYearIndex(index)***REMOVED***
          value={[yearIndex]***REMOVED***
          variant={'mobility'***REMOVED***
        />
  ***REMOVED******REMOVED***
***REMOVED***width >= 1800 && (
        <Slider
          firstValueMobile={3***REMOVED*** //ONLY FOR DEMO
          labels={reducedData.map(e => e.ZEIT.toString())***REMOVED***
          max={reducedData.length - 1***REMOVED***
          min={0***REMOVED***
          onValueChange={([index]) => setYearIndex(index)***REMOVED***
          value={[yearIndex]***REMOVED***
          variant={'mobility'***REMOVED***
        />
  ***REMOVED******REMOVED***
      <Spacer />
      <Title as="h5">
        Busfahren ist Klimaschutz. Damit die Umweltbilanz noch besser wird,
        setzen die Stadtwerke auf Elektrobusse mit Ökostrom. Bis 2029 soll die
        Stadtwerke-Flotte komplett elektrisch fahren.
      </Title>
    </div>
  )
***REMOVED***
