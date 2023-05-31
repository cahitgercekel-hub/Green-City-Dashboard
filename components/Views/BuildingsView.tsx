import Columns from '../Layout/Columns'
import EcoProfitTile from '../Tiles/Buildings/EcoProfit'
import EnergyComsumptionTile from '../Tiles/Buildings/EnergyConsumption'
import RenovationTile from '../Tiles/Buildings/Renovation'
import BaseView from './BaseView'

export default function BuildingsView() {
  return (
    // @ts-expect-error Server Component
    <BaseView type="building">
      <Columns>
        <EcoProfitTile />
  ***REMOVED***/* @ts-expect-error Server Component */***REMOVED***
        <RenovationTile />
      </Columns>
***REMOVED***/* @ts-expect-error Server Component */***REMOVED***
      <EnergyComsumptionTile />
    </BaseView>
  )
***REMOVED***
