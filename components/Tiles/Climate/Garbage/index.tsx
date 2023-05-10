import Title from '@/components/Elements/Title'
import ClimateTile from '../ClimateTile'
import GarbageChart from './GarbageChart'
import getTileData from '@/lib/api/getTileData'
import { TileSplitView ***REMOVED*** from '../../Base/TileSplitView'

export default async function GarbageTile() {
  const data = await getTileData('climate-garbage')
  const infoText = data?.info ?? ''

  return (
    <ClimateTile
      dataRetrieval={'01.01.2022'***REMOVED***
      dataSource="awm"
      embedId="climate-garbage"
      subtitle={
        'So viel KG Abfall wurden bisher in Münster pro Einwohner:in produziert'
    ***REMOVED***
      title={
        <>
          <span className="font-medium">Abfall</span> pro Kopf
        </>
    ***REMOVED***
    >
      <TileSplitView>
        <TileSplitView.Left className="h-[30rem] rounded bg-white p-5">
          <GarbageChart />
        </TileSplitView.Left>
        <TileSplitView.Right>
          <Title as="h5" variant={'dark'***REMOVED***>
      ***REMOVED***infoText***REMOVED***
          </Title>
        </TileSplitView.Right>
      </TileSplitView>
    </ClimateTile>
  )
***REMOVED***
