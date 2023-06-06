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

export default function MobilityView() {
  return (
    // @ts-expect-error Server Component
    <BaseView type="mobility">
      <Columns>
  ***REMOVED***/* @ts-expect-error Server Component */***REMOVED***
        <BicycleChartTile />
  ***REMOVED***/* @ts-expect-error Server Component */***REMOVED***
        <StadtradelnTile />
        <BusTile />
  ***REMOVED***/* @ts-expect-error Server Component */***REMOVED***
        <AWMTile />
      </Columns>
      <Columns>
        <MasterplanTile />
        <PassengerTile />
      </Columns>
***REMOVED***/* @ts-expect-error Server Component */***REMOVED***
      <ModalSplitTile />
***REMOVED***/* @ts-expect-error Server Component */***REMOVED***
      <TrafficloadTile />
    </BaseView>
  )
***REMOVED***
