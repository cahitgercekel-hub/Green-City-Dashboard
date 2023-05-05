import Columns from '../Layout/Columns'
import EcoProfitTile from '../Tiles/Buildings/EcoProfit'
import EnergyComsumptionTile from '../Tiles/Buildings/EnergyConsumption'
import BaseView from './BaseView'

export default function BuildingsView() {
  return (
    <BaseView type="building">
      <Columns>
        <EcoProfitTile />
      </Columns>
***REMOVED***/* @ts-expect-error Server Component */***REMOVED***
      <EnergyComsumptionTile />
    </BaseView>
  )
***REMOVED***
