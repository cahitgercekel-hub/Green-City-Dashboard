import Title from '@/components/Elements/Title'
import getTileData from '@/lib/api/getTileData'
import { format ***REMOVED*** from 'date-fns'
import { TileSplitView ***REMOVED*** from '../../Base/TileSplitView'
import ClimateTile from '../ClimateTile'
import WachstumChart from './WachstumChart'

export default async function WachstumTile() {
  const data = await getTileData('climate-wachstum')
  const infoText = data?.info ?? ''

  return (
    <ClimateTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')***REMOVED***
      dataSource="Stadt Münster &ndash; Stabsstelle Klima"
      embedId="climate-wachstum"
      rightAlignedExtra={
        <Title as="h7" font="normal" variant={'primary'***REMOVED***>
          *Sozialversicherungspflichtige Beschäftigte &emsp; BIP =
          Bruttoinlandsprodukt
        </Title>
    ***REMOVED***
      title={'Wachstum'***REMOVED***
    >
      <TileSplitView>
        <TileSplitView.Left className="rounded bg-white p-5">
          <WachstumChart />
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
