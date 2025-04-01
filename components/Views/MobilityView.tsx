import Columns from '../Layout/Columns'
import AWMTile from '../Tiles/Mobility/AWM'
import BicycleChartTile from '../Tiles/Mobility/Bicycle/BicycleChartTile'
import StadtradelnTile from '../Tiles/Mobility/Bicycle/Stadtradeln'
import BusTile from '../Tiles/Mobility/Bus'
import MasterplanTile from '../Tiles/Mobility/MasterplanTile'
import ModalSplitTile from '../Tiles/Mobility/ModalSplit'
import PassengerTile from '../Tiles/Mobility/PassengerTile'
import TrafficloadTile from '../Tiles/Mobility/TrafficloadTile'
import BaseView from './BaseView'
import OvertakingManeuver from '../Tiles/Mobility/Bicycle/OvertakingManeuver'

export default async function MobilityView() {
  return (
    <BaseView type="mobility">
      <Columns>
        <BicycleChartTile />
        <MasterplanTile />

        <StadtradelnTile />
        <BusTile />

        <AWMTile />
        <PassengerTile />
      </Columns>

      <ModalSplitTile />
      <OvertakingManeuver />
      <TrafficloadTile />
    </BaseView>
  )
}
