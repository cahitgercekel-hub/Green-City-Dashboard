import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import Title from '@/components/Elements/Title'
import {
  Ratsgymnasium,
  SentruperHoehe,
  Stadtbibliothek,
  Stadtweinhaus,
***REMOVED*** from '@/components/Icons'
import { SVGProps ***REMOVED*** from 'react'
import EnergyConsumptionChart from './EnergyConsumptionChart'
import LabelSeperator from './LabelSeperator'
import waermeData from '@/assets/data/waerme.json'
import stromData from '@/assets/data/strom.json'
import Carousel from '@/components/Elements/Carousel'

type DataType = {
  Datum: number
  stadtbuecherei: number | null
  sentruper: number | null
  rathaus: number | null
  'freiherr-von-stein': number | null
***REMOVED***

type Building = Omit<DataType, 'Datum'>

const buildings: Record<keyof Building, string> = {
  rathaus: 'Rathaus / Stadtweinhaus',
  stadtbuecherei: 'Stadtbücherei',
  sentruper: 'Sportantlage Sentruper Höhe',
  'freiherr-von-stein': 'Freiherr-von-Stein-Gymnasium',
***REMOVED***

const buildingIcon: Record<
  keyof Building,
  (_props: SVGProps<SVGSVGElement>) => JSX.Element
> = {
  stadtbuecherei: Stadtbibliothek,
  sentruper: SentruperHoehe,
  rathaus: Stadtweinhaus,
  'freiherr-von-stein': Ratsgymnasium,
***REMOVED***

function getBuildingIcon(
  building: keyof Building,
  props?: SVGProps<SVGSVGElement>,
) {
  const Icon = buildingIcon[building]
  return <Icon {...props***REMOVED*** />
***REMOVED***

function getData(
  mode: 'strom' | 'waerme',
  building: keyof Building,
  year: number,
) {
  const data: DataType[] = mode === 'strom' ? stromData : waermeData

  const filteredYear = data.filter(
    d => year === new Date(d.Datum).getFullYear(),
  )

  return filteredYear.map(d => d[building]).filter(d => d !== null) as number[]
***REMOVED***

function getYearSum(
  mode: 'strom' | 'waerme',
  building: keyof Building,
  year: number,
) {
  const data = getData(mode, building, year)

  return data.reduce((a, b) => a + b, 0)
***REMOVED***

const years = Array.from(
  new Set(
    stromData.map(d => new Date(d.Datum).getFullYear()).filter(e => e > 2018),
  ),
).sort((a, b) => a - b)

interface MobileViewProps {
  mode: 'strom' | 'waerme'
  yearIndex: number
***REMOVED***

export default function MobileView({ mode, yearIndex ***REMOVED***: MobileViewProps) {
  return (
    <Carousel
      arrows
      options={{
        gap: '4rem',
    ***REMOVED******REMOVED***
      pagination
    >
***REMOVED***Object.keys(buildings).map(building => {
        const sum = getYearSum(
          mode,
          building as keyof Building,
          years[yearIndex],
    ***REMOVED***

        return (
          <div key={building***REMOVED***>
            <div className="flex gap-2">
              <Title as="h4" className="h-20 flex-1" variant="building">
          ***REMOVED***buildings[building as keyof Building]***REMOVED***
              </Title>
              <div className="mx-auto flex h-[80px] w-[80px] justify-end">
          ***REMOVED***getBuildingIcon(building as keyof Building)***REMOVED***
              </div>
            </div>
            <LabelSeperator>Monatlicher Verbrauch</LabelSeperator>
            <div className="h-40 w-full">
              <EnergyConsumptionChart
                data={getData(
                  mode,
                  building as keyof Building,
                  years[yearIndex],
            ***REMOVED******REMOVED***
              />
            </div>
            <LabelSeperator>
        ***REMOVED***years[yearIndex] === new Date().getFullYear()
                ? 'Jahresverbrauch bisher'
                : 'Jahresverbrauch'***REMOVED***
            </LabelSeperator>
            <div className="flex w-full gap-1 p-2">
        ***REMOVED***sum === 0 ? (
                <Title as="h4" variant="building">
                  fehlende Daten
                </Title>
          ***REMOVED*** : (
                <>
                  <Title as="h4" variant="building">
                    <AnimatedNumber decimals={0***REMOVED***>{sum***REMOVED***</AnimatedNumber>
                  </Title>
                  <Title as="h4" font="normal" variant="building">
                    kWh
                  </Title>
                </>
          ***REMOVED******REMOVED***
            </div>
          </div>
    ***REMOVED***
    ***REMOVED***)***REMOVED***
    </Carousel>
  )
***REMOVED***
