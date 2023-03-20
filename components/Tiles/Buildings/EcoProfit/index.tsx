import BuildingTile from '../BuildingsTile'

import EcoProfitData from '@/assets/data/ecoprofit.json'
import { format ***REMOVED*** from 'date-fns'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import Title from '@/components/Elements/Title'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'

interface IEcoProfitData {
  companiesTotal: number
  savingsEuro: number
  savingsCO2: number
  companiesStartupConsulting: number
  updatedAt: string
***REMOVED***

export default function EcoProfitTile() {
  const {
    companiesTotal,
    savingsEuro,
    savingsCO2,
    companiesStartupConsulting,
    updatedAt,
***REMOVED*** = EcoProfitData as IEcoProfitData

  return (
    <BuildingTile
      dataRetrieval={format(new Date(updatedAt), 'dd.MM.yyyy')***REMOVED***
      dataSource="Stadt Münster"
      embedId={'ecoProfit'***REMOVED***
    >
      <Title as={'h1'***REMOVED*** variant={'building'***REMOVED***>
        <AnimatedNumber className="font-medium">
    ***REMOVED***companiesTotal***REMOVED***
        </AnimatedNumber>{' '***REMOVED***
        Unternehmen
      </Title>
      <Spacer />
      <Title as="subtitle">
        Haben bereits am Ökoprofit-Projekt teilgenommen und gemeinsam{' '***REMOVED***
        <span className="text-buildings">
          <AnimatedNumber decimals={1***REMOVED***>{savingsEuro***REMOVED***</AnimatedNumber> Mio Euro
        </span>{' '***REMOVED***
        und{' '***REMOVED***
        <span className="text-buildings">
          <AnimatedNumber>{savingsCO2***REMOVED***</AnimatedNumber> t CO2
        </span>{' '***REMOVED***
        eingespart.
      </Title>
      <Spacer size={'xl'***REMOVED*** />
      <Title as={'h1'***REMOVED*** variant={'building'***REMOVED***>
        <AnimatedNumber className="font-medium">
    ***REMOVED***companiesStartupConsulting***REMOVED***
        </AnimatedNumber>{' '***REMOVED***
        Unternehmen
      </Title>
      <Spacer />
      <Title as="subtitle">
        Haben zudem bereits die &quot;Startberatung Energieeffizienz&quot; in
        Anspruch genommen.
      </Title>
    </BuildingTile>
  )
***REMOVED***
