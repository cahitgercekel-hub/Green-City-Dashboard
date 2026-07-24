import EcoProfitTile from '@/components/Tiles/Buildings/EcoProfit'
import EnergyComsumptionTile from '@/components/Tiles/Buildings/EnergyConsumption'
import RenovationTile from '@/components/Tiles/Buildings/Renovation'
import AirqualityTile from '@/components/Tiles/Climate/Airquality'
import BirdTile from '@/components/Tiles/Climate/Bird'
import BirdiaryStationsTile from '@/components/Tiles/Climate/BirdiaryStations'
import BirdiaryValidationTile from '@/components/Tiles/Climate/BirdiaryValidation'
import CO2EmissionsTile from '@/components/Tiles/Climate/CO2EmissionsTile'
import ClimateIndicesTile from '@/components/Tiles/Climate/ClimateIndices'
import ClimateDevelopmentTile from '@/components/Tiles/Climate/Devlopment'
import GarbageTile from '@/components/Tiles/Climate/Garbage'
import OpenSenseMapTile from '@/components/Tiles/Climate/OpenSenseMap'
import PMTile from '@/components/Tiles/Climate/PM'
import WachstumTile from '@/components/Tiles/Climate/Wachstum'
import WeatherTile from '@/components/Tiles/Climate/WeatherTile'
import DataCountTile from '@/components/Tiles/Data/DataCountTile'
import PreviousDatesTile from '@/components/Tiles/Dates/PreviousDatesTile'
import UpcomingDatesTile from '@/components/Tiles/Dates/UpcomingDatesTile'
import MaterialTile from '@/components/Tiles/Material/MaterialTile'
import EnergietraegerTile from '@/components/Tiles/Energy/EnergietraegerTile'
import LanternsTile from '@/components/Tiles/Energy/LanternsTile'
import PVAnlagenTile from '@/components/Tiles/Energy/PVAnlagenTile'
import PhotovoltTile from '@/components/Tiles/Energy/PhotovoltTile'
import WindEnergyTile from '@/components/Tiles/Energy/WindEnergyTile'
import AWMTile from '@/components/Tiles/Mobility/AWM'
import BicycleChartTile from '@/components/Tiles/Mobility/Bicycle/BicycleChartTile'
import OvertakingManeuver from '@/components/Tiles/Mobility/Bicycle/OvertakingManeuver'

import StadtradelnTile from '@/components/Tiles/Mobility/Bicycle/Stadtradeln'
import BicycleOverview from '@/components/Tiles/Mobility/BicycleOverview'

import BusTile from '@/components/Tiles/Mobility/Bus'
import MasterplanTile from '@/components/Tiles/Mobility/MasterplanTile'
import ModalSplitTile from '@/components/Tiles/Mobility/ModalSplit'
import PassengerTile from '@/components/Tiles/Mobility/PassengerTile'
import TrafficFlowTile from '@/components/Tiles/Mobility/TrafficFlowTile'
import TrafficStatsTile from '@/components/Tiles/Mobility/TrafficStatsTile'
import TrafficloadTile from '@/components/Tiles/Mobility/TrafficloadTile'
import SuccessStoryTile, {
  SuccessStoryTileProps,
} from '@/components/Tiles/SuccessStory'
import SurveyTile, { SurveyTileProps } from '@/components/Tiles/Survey'
import { getSuccessStoryData } from '@/lib/api/getSuccessStoryData'
import { getSurveyData } from '@/lib/api/getSurveyData'
import {
  BuildingsTypes,
  ClimateTypes,
  EnergyTypes,
  MobilityTypes,
  TileTypePrefix,
} from '@/types/tile'

type TileTypeSuffix =
  | ClimateTypes
  | MobilityTypes
  | BuildingsTypes
  | EnergyTypes
  | string

type SuccessStoryTileType = 'successStory'
type SurveyTileType = 'survey'
type DatesTileType = 'dates-upcoming' | 'dates-previous'
type MaterialTileType = 'material' | 'climate-material'
type BirdTileType = 'climate-bird'
type BirdiaryStationsTileType = 'climate-bird-stations'
type BirdiaryValidationTileType = 'climate-bird-validation'
type OpenSenseMapTileType = 'climate-opensensemap'
type PMTileType = 'climate-pm'

export type TileType =
  | SuccessStoryTileType
  | SurveyTileType
  | DatesTileType
  | MaterialTileType
  | BirdTileType
  | BirdiaryStationsTileType
  | BirdiaryValidationTileType
  | OpenSenseMapTileType
  | PMTileType
  | `${TileTypePrefix}-${TileTypeSuffix}`

interface TileFactoryProps {
  type: TileType
  successStoryData?: SuccessStoryTileProps
  surveyData?: SurveyTileProps
}

/**
 * The TileFactory is a helper function to create tiles dynamically.
 *
 * @param param TileFactoryProps
 * @returns Tile
 */
export default async function TileFactory({
  type,
  ...props
}: TileFactoryProps) {
  if (type?.startsWith('survey')) {
    const [_, id] = type.split('survey-')
    if (props.surveyData) {
      return <SurveyTile {...props.surveyData} />
    }
    const data = await getSurveyData(id)
    if (!data) {
      return null
    }
    return <SurveyTile {...data} />
  }

  if (type?.startsWith('successStory')) {
    const [_, id] = type.split('successStory-')
    if (props.successStoryData) {
      return <SuccessStoryTile {...props.successStoryData} />
    }
    const data = await getSuccessStoryData(id)
    if (!data) {
      return null
    }
    return <SuccessStoryTile {...data} />
  }

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
    case 'climate-wachstum':
      return <WachstumTile />
    case 'climate-airquality':
      return <AirqualityTile />
    case 'climate-bird':
      return <BirdTile />
    case 'climate-bird-stations':
      return <BirdiaryStationsTile />
    case 'climate-bird-validation':
      return <BirdiaryValidationTile />
    case 'climate-opensensemap':
      return <OpenSenseMapTile />
    case 'climate-pm':
      return <PMTile />

    // ---- DATES ----
    case 'dates-upcoming':
      return <UpcomingDatesTile />
    case 'dates-previous':
      return <PreviousDatesTile />

    // ---- MATERIAL ----
    case 'material':
    case 'climate-material':
      return <MaterialTile />

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
    case 'mobility-trafficflow':
      return <TrafficFlowTile />
    case 'mobility-trafficstats':
      return <TrafficStatsTile />
    case 'mobility-awm':
      return <AWMTile />
    case 'mobility-masterplan':
      return <MasterplanTile />
    case 'mobility-passengers':
      return <PassengerTile />
    case 'mobility-bicycleCampaign':
      return <BicycleOverview />
    case 'mobility-bicycleOvertaking':
      return <OvertakingManeuver />

    default:
      return null
  }
}
