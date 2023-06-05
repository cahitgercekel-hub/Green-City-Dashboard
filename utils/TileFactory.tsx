import EcoProfitTile from '@/components/Tiles/Buildings/EcoProfit'
import EnergyComsumptionTile from '@/components/Tiles/Buildings/EnergyConsumption'
import ClimateIndicesTile from '@/components/Tiles/Climate/ClimateIndices'
import CO2EmissionsTile from '@/components/Tiles/Climate/CO2EmissionsTile'
import ClimateDevelopmentTile from '@/components/Tiles/Climate/Devlopment'
import GarbageTile from '@/components/Tiles/Climate/Garbage'
import WeatherTile from '@/components/Tiles/Climate/WeatherTile'
import EnergietraegerTile from '@/components/Tiles/Energy/EnergietraegerTile'
import PhotovoltTile from '@/components/Tiles/Energy/PhotovoltTile'
import WindEnergyTile from '@/components/Tiles/Energy/WindEnergyTile'
import PVAnlagenTile from '@/components/Tiles/Energy/PVAnlagenTile'
import AWMTile from '@/components/Tiles/Mobility/AWM'
import BicycleChartTile from '@/components/Tiles/Mobility/Bicycle/BicycleChartTile'
import StadtradelnTile from '@/components/Tiles/Mobility/Bicycle/Stadtradeln'
import BusTile from '@/components/Tiles/Mobility/Bus'
import ModalSplitTile from '@/components/Tiles/Mobility/ModalSplit'
import TrafficloadTile from '@/components/Tiles/Mobility/TrafficloadTile'
import SuccessStoryTile, {
  SuccessStoryTileProps,
***REMOVED*** from '@/components/Tiles/SuccessStory'
import SurveyTile, { SurveyTileProps ***REMOVED*** from '@/components/Tiles/Survey'
import { getSurveyData ***REMOVED*** from '@/lib/api/getSurveyData'
import {
  BuildingsTypes,
  ClimateTypes,
  EnergyTypes,
  MobilityTypes,
  TileTypePrefix,
***REMOVED*** from '@/types/tile'
import { ID ***REMOVED*** from '@directus/sdk'

type TileTypeSuffix =
  | ClimateTypes
  | MobilityTypes
  | BuildingsTypes
  | EnergyTypes
  | ID

type SuccessStoryTileType = 'successStory'
type SurveyTileType = 'survey'

export type TileType =
  | SuccessStoryTileType
  | SurveyTileType
  | `${TileTypePrefix***REMOVED***-${TileTypeSuffix***REMOVED***`

interface TileFactoryProps {
  type: TileType
  successStoryData?: SuccessStoryTileProps
  surveyData?: SurveyTileProps
***REMOVED***

export default async function TileFactory({
  type,
  ...props
***REMOVED***: TileFactoryProps) {
  if (type.startsWith('survey')) {
    const [_, id] = type.split('survey-')
    if (props.surveyData) {
      return <SurveyTile {...props.surveyData***REMOVED*** />
  ***REMOVED***
    const data = await getSurveyData(id)
    if (!data) {
      return null
  ***REMOVED***
    return <SurveyTile {...data***REMOVED*** />
***REMOVED***

  switch (type) {
    // ---- WEATHER ----
    case 'climate-weather':
      return <WeatherTile />
    case 'climate-co2':
      // @ts-expect-error Server Component
      return <CO2EmissionsTile />
    case 'climate-indices':
      // @ts-expect-error Server Component
      return <ClimateIndicesTile />
    case 'climate-development':
      return <ClimateDevelopmentTile />
    case 'climate-garbage':
      // @ts-expect-error Server Component
      return <GarbageTile />

    // ---- BUILDINGS ----
    case 'building-ecoProfit':
      return <EcoProfitTile />
    case 'building-energyConsumption':
      // @ts-expect-error Server Component
      return <EnergyComsumptionTile />

    // ---- ENERGY ----
    case 'energy-PV':
      return <PhotovoltTile />
    case 'energy-wind':
      return <WindEnergyTile />
    case 'energy-PVAnlagen':
      return <PVAnlagenTile />
    case 'energy-energietraeger':
      // @ts-expect-error Server Component
      return <EnergietraegerTile />

    // ---- MOBILITY ----
    case 'mobility-bicycle':
      // @ts-expect-error Server Component
      return <BicycleChartTile />
    case 'mobility-stadtradeln':
      // @ts-expect-error Server Component
      return <StadtradelnTile />
    case 'mobility-bus':
      return <BusTile />
    case 'mobility-modalSplit':
      // @ts-expect-error Server Component
      return <ModalSplitTile />
    case 'mobility-trafficload':
      // @ts-expect-error Server Component
      return <TrafficloadTile />
    case 'mobility-awm':
      // @ts-expect-error Server Component
      return <AWMTile />

    // ---- SUCCESS-STORY ----
    case 'successStory':
      if (!props.successStoryData) {
        return null
    ***REMOVED***
      return <SuccessStoryTile {...props.successStoryData***REMOVED*** />

    default:
      return null
***REMOVED***
***REMOVED***
