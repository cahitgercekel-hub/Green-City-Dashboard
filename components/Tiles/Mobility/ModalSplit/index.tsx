import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import ModalSplitChart from './ModalSplitChart'
import { MuensterBackground ***REMOVED*** from '@/components/Icons/'
import Title from '@/components/Elements/Title'
import { TileSplitView ***REMOVED*** from '../../Base/TileSplitView'

export default function ModalSplitTile() {
  return (
    <MobilityTile
      dataRetrieval="live"
      dataSource="Stadt Münster - Amt für Mobilität"
      embedId="mobility-modalSplit"
      subtitle="Jahresvergleich aller 2019 zurückgelegten Kilometer in Münster (PKW, Fahrrad & co)"
      title={'km'***REMOVED***
    >
      <TileSplitView>
        <TileSplitView.Left>
          <div className="relative flex h-96 flex-1 flex-col rounded bg-white p-2 md:h-[32rem]">
            <div className="absolute left-0 top-0 flex h-full w-full">
              <MuensterBackground className="h-full w-full flex-1" />
              <div className="w-14"></div>
            </div>
            <div className="w-full flex-1 pb-12">
              <ModalSplitChart />
            </div>
          </div>
        </TileSplitView.Left>
        <TileSplitView.Right>
          <Title as="h5" variant={'dark'***REMOVED***>
            Trotz einer wachsenden Zahl von Einwohner*innen sinkt die Kurve der
            CO₂-Emissionen in Münster. Das zeigt: Münsteraner*innen setzen mehr
            und mehr Klimaschutz-Maßnahmen um. Mit dem Ziel der Klimaneutralität
            bis 2030 soll die Kurve nun nochmals deutlich steiler sinken.
          </Title>
        </TileSplitView.Right>
      </TileSplitView>
    </MobilityTile>
  )
***REMOVED***
