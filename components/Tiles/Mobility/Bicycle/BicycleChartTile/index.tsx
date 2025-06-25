import { Spacer } from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import BicycleChartContent from './BicycleChartContent'
import getTileData from '@/lib/api/getTileData'

export default async function BicycleChartTile() {
  const data = await getTileData('mobility-bicycle')
  const infoText = data?.info ?? ''
  const year = new Date().getFullYear()

  return (
    <MobilityTile
      dataSource="Eco-Counter, NeoSens"
      embedId="mobility-bicycle"
      live
      subtitle="im Stadtgebiet"
      title="Radelnde"
    >
      <>
        <BicycleChartContent />
        <Spacer size={'lg'} />
        <Title as="h5">{infoText}</Title>
      </>
      <div className="relative w-full pt-3">
        <p className="absolute right-0 text-base font-bold text-red-800">
          * Total Count in {year}
        </p>
      </div>
    </MobilityTile>
  )
}
