import Title from '@/components/Elements/Title'
import getTileData from '@/lib/api/getTileData'
import { format ***REMOVED*** from 'date-fns'
import { TileSplitView ***REMOVED*** from '../../Base/TileSplitView'
import ClimateTile from '../ClimateTile'
import GarbageChart from './GarbageChart'

export default async function GarbageTile() {
  const data = await getTileData('climate-garbage')
  const infoText = data?.info ?? ''

  return (
    <ClimateTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')***REMOVED***
      dataSource="Abfallwirtschaftsbetriebe Münster (awm)"
      embedId="climate-garbage"
      subtitle={
        'So viele Kilogramm Abfall wurden durchschnittlich durch die awm erfasst'
    ***REMOVED***
      title={'Abfall pro Kopf'***REMOVED***
    >
      <TileSplitView>
        <TileSplitView.Left className="rounded bg-white p-5">
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
