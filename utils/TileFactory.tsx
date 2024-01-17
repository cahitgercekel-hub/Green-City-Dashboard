import EcoProfitTile from '@/components/Tiles/Buildings/EcoProfit'
import EnergyComsumptionTile from '@/components/Tiles/Buildings/EnergyConsumption'
import RenovationTile from '@/components/Tiles/Buildings/Renovation'
import CO2EmissionsTile from '@/components/Tiles/Climate/CO2EmissionsTile'
import ClimateIndicesTile from '@/components/Tiles/Climate/ClimateIndices'
import ClimateDevelopmentTile from '@/components/Tiles/Climate/Devlopment'
import GarbageTile from '@/components/Tiles/Climate/Garbage'
import WeatherTile from '@/components/Tiles/Climate/WeatherTile'
import DataCountTile from '@/components/Tiles/Data/DataCountTile'
import EnergietraegerTile from '@/components/Tiles/Energy/EnergietraegerTile'
import LanternsTile from '@/components/Tiles/Energy/LanternsTile'
import PVAnlagenTile from '@/components/Tiles/Energy/PVAnlagenTile'
import PhotovoltTile from '@/components/Tiles/Energy/PhotovoltTile'
import WindEnergyTile from '@/components/Tiles/Energy/WindEnergyTile'
import AWMTile from '@/components/Tiles/Mobility/AWM'
import BicycleChartTile from '@/components/Tiles/Mobility/Bicycle/BicycleChartTile'
import StadtradelnTile from '@/components/Tiles/Mobility/Bicycle/Stadtradeln'
import BusTile from '@/components/Tiles/Mobility/Bus'
import MasterplanTile from '@/components/Tiles/Mobility/MasterplanTile'
import ModalSplitTile from '@/components/Tiles/Mobility/ModalSplit'
import PassengerTile from '@/components/Tiles/Mobility/PassengerTile'
import TrafficloadTile from '@/components/Tiles/Mobility/TrafficloadTile'
import SuccessStoryTile, {
  SuccessStoryTileProps,
***REMOVED*** from '@/components/Tiles/SuccessStory'
import SurveyTile, { SurveyTileProps ***REMOVED*** from '@/components/Tiles/Survey'
import { getSuccessStoryData ***REMOVED*** from '@/lib/api/getSuccessStoryData'
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

/**
 * The TileFactory is a helper function to create tiles dynamically.
 *
 * @param param TileFactoryProps
 * @returns Tile
 */
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

  if (type.startsWith('successStory')) {
    const [_, id] = type.split('successStory-')
    if (props.successStoryData) {
      return <SuccessStoryTile {...props.successStoryData***REMOVED*** />
  ***REMOVED***
    const data = await getSuccessStoryData(id)
    if (!data) {
      return null
  ***REMOVED***
    return <SuccessStoryTile {...data***REMOVED*** />
***REMOVED***

  switch (type) {
    // ---- WEATHER ----
    case 'climate-weather':
      return <WeatherTile />
    case 'climate-co2':
      return <CO2EmissionsTile />
    case 'climate-indices':
      return <ClimateIndicesTile />
    case 'climate-development':
      return <ClimateDevelopmentTile />
    case 'climate-garbage':
      return <GarbageTile />
    case 'climate-data':
      return <DataCountTile />

    // ---- BUILDINGS ----
    case 'building-ecoProfit':
      return <EcoProfitTile />
    case 'building-energyConsumption':
      return <EnergyComsumptionTile />
    case 'building-renovation':
      return <RenovationTile />

    // ---- ENERGY ----
    case 'energy-PV':
      return <PhotovoltTile />
    case 'energy-wind':
      return <WindEnergyTile />
    case 'energy-PVAnlagen':
      return <PVAnlagenTile />
    case 'energy-energietraeger':
      return <EnergietraegerTile />
    case 'energy-lanterns':
      return <LanternsTile />

    // ---- MOBILITY ----
    case 'mobility-bicycle':
      return <BicycleChartTile />
    case 'mobility-stadtradeln':
      return <StadtradelnTile />
    case 'mobility-bus':
      return <BusTile />
    case 'mobility-modalSplit':
      return <ModalSplitTile />
    case 'mobility-trafficload':
      return <TrafficloadTile />
    case 'mobility-awm':
      return <AWMTile />
    case 'mobility-masterplan':
      return <MasterplanTile />
    case 'mobility-passengers':
      return <PassengerTile />

    default:
      return null
***REMOVED***
***REMOVED***
