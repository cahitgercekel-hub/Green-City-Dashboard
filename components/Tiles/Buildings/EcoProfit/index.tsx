import BuildingTile from '../BuildingsTile'

// @ts-ignore
import EcoProfitData from '@/assets/data/oekoprofit.csv'
// @ts-ignore
import StartberatungData from '@/assets/data/teilnehmer-startberatung.csv'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import { format ***REMOVED*** from 'date-fns'

interface IEcoProfitData {
  ZEIT: number
  Betriebe: number
  'Einsparung - CO2': number
  'Einsparung - Wasser': number
  'Einsparung Abfälle': number
  'Einsparung Betriebskosten': number
  'Einsparung Energie': number
  'einmalige Investitionskosten': number
***REMOVED***

interface IStartberatungData {
  ZEIT: number
  'Teilnehmer Startberatung - Unternehmen': number
***REMOVED***

export default function EcoProfitTile() {
  const data = EcoProfitData as IEcoProfitData[]

  const startberatungData = StartberatungData as IStartberatungData[]

  const companiesTotal = data.reduce((acc, cur) => acc + cur.Betriebe, 0)
  const savingsCO2 = data.reduce((acc, cur) => acc + cur['Einsparung - CO2'], 0)
  const savingsEuro = data.reduce(
    (acc, cur) => acc + cur['Einsparung Betriebskosten'],
    0,
  )
  const companiesStartupConsulting = startberatungData.reduce(
    (acc, cur) => acc + cur['Teilnehmer Startberatung - Unternehmen'],
    0,
  )

  return (
    <BuildingTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')***REMOVED***
      dataSource="Stadt Münster"
      embedId={'building-ecoProfit'***REMOVED***
    >
      <Title as={'h1'***REMOVED*** font={'normal'***REMOVED*** variant={'building'***REMOVED***>
        <AnimatedNumber>{companiesTotal***REMOVED***</AnimatedNumber> Unternehmen
      </Title>
      <Spacer />
      <Title as="subtitle">
        haben bereits am Ökoprofit-Projekt teilgenommen und gemeinsam{' '***REMOVED***
        <span className="text-buildings">
          <AnimatedNumber decimals={1***REMOVED***>
      ***REMOVED***savingsEuro / 1_000_000***REMOVED***
          </AnimatedNumber>{' '***REMOVED***
          Millionen Euro
        </span>{' '***REMOVED***
        und{' '***REMOVED***
        <span className="text-buildings">
          <AnimatedNumber>{savingsCO2***REMOVED***</AnimatedNumber> Tonnen CO
          <sub>2</sub>
        </span>{' '***REMOVED***
        eingespart.
      </Title>
      <Spacer size={'xl'***REMOVED*** />
      <Title as={'h1'***REMOVED*** font={'normal'***REMOVED*** variant={'building'***REMOVED***>
        <AnimatedNumber>{companiesStartupConsulting***REMOVED***</AnimatedNumber>{' '***REMOVED***
        Unternehmen
      </Title>
      <Spacer />
      <Title as="subtitle">
        haben bereits die „Startberatung Energieeffizienz“ genutzt und Maßnahmen
        zur Energieeinsparung entwickelt.
      </Title>
    </BuildingTile>
  )
***REMOVED***
