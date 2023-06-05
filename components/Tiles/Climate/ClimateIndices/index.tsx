import { format ***REMOVED*** from 'date-fns'
import ClimateTile from '../ClimateTile'
import ClimateIndicesChart from './ClimateIndicesChart'
import { TileSplitView ***REMOVED*** from '../../Base/TileSplitView'
import getTileData from '@/lib/api/getTileData'
import Title from '@/components/Elements/Title'

export default async function ClimateIndicesTile() {
  const data = await getTileData('climate-indices')
  const infoText = data?.info ?? ''

  return (
    <ClimateTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')***REMOVED***
      dataSource="Deutscher Wetterdienst"
      embedId="climate-indices"
      subtitle={
        'Häufigkeit von Temperaturkenntagen in Münster'
    ***REMOVED***
      title="Klimakenntage"
    >
      <TileSplitView>
        <TileSplitView.Left>
          <div className="rounded bg-white">
            <ClimateIndicesChart />
          </div>
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
