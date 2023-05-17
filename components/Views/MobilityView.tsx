import Columns from '../Layout/Columns'
import AWMTile from '../Tiles/Mobility/AWM'
import BicycleChartTile from '../Tiles/Mobility/Bicycle/BicycleChartTile'
import StadtradelnTile from '../Tiles/Mobility/Bicycle/Stadtradeln'
import BusTile from '../Tiles/Mobility/Bus'
import ModalSplitTile from '../Tiles/Mobility/ModalSplit'
import BaseView from './BaseView'

export default function MobilityView() {
  return (
    // @ts-expect-error Server Component
    <BaseView type="mobility">
      <Columns>
        <BicycleChartTile />
  ***REMOVED***/* @ts-expect-error Server Component */***REMOVED***
        <StadtradelnTile />
        <BusTile />
        <AWMTile />
      </Columns>
***REMOVED***/* @ts-expect-error Server Component */***REMOVED***
      <ModalSplitTile />
    </BaseView>
  )
***REMOVED***
