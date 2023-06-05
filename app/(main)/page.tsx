import InsightsContainer from '@/components/Insights/InsightsContainer'
import Container from '@/components/Layout/Container'

import AnimatedPage from '@/components/Layout/AnimatedPage'
import directus, {
  mainPageName,
  successStoriesCollectionName,
  tileCollectionName,
***REMOVED*** from '@/lib/directus'
import getTilesBucket, { BaseTile ***REMOVED*** from '@/utils/fullWidthBucket'
import { SurveyTileProps ***REMOVED*** from '@/components/Tiles/Survey'
import { SuccessStoryTileProps ***REMOVED*** from '@/components/Tiles/SuccessStory'
import TileFactory, { TileType ***REMOVED*** from '@/utils/TileFactory'
import { getSurveyData ***REMOVED*** from '@/lib/api/getSurveyData'
import { ID ***REMOVED*** from '@directus/sdk'
import ClimateView from '@/components/Views/ClimateView'
import MobilityView from '@/components/Views/MobilityView'
import BuildingsView from '@/components/Views/BuildingsView'
import EnergyView from '@/components/Views/EnergyView'

const getMainPageSettings = async () => {
  const data = await directus.items(mainPageName).readOne(1, {
    fields: ['tiles.*'],
    deep: {
      tiles: {***REMOVED***,
  ***REMOVED***,
***REMOVED***)

  return data
***REMOVED***

const getTileType = async (tileID: string) => {
  const data = await directus.items(tileCollectionName).readOne(tileID)

  return data?.tile_id
***REMOVED***

const getSuccessStoryData = async (
  surveyID: ID,
): Promise<SuccessStoryTileProps> => {
  const data = await directus
    .items(successStoriesCollectionName)
    .readOne(surveyID)
  return {
    link: data?.link ?? '',
    text: data?.text ?? '',
    image: data?.image,
    imagePosition: data?.image_position,
    moreInfo: data?.details,
    id: data?.id ?? '',
***REMOVED***
***REMOVED***

const getTileComponent = async (tile: BaseTile) => {
  let props:
    | { surveyData?: SurveyTileProps; successStoryData?: SuccessStoryTileProps ***REMOVED***
    | undefined
  let type: TileType
  if (tile.collection === 'survey') {
    const surveyData = await getSurveyData(tile.item)
    props = { surveyData ***REMOVED***
    type = 'survey'
***REMOVED*** else if (tile.collection === 'successStory') {
    const successStoryData = await getSuccessStoryData(tile.item)
    props = { successStoryData ***REMOVED***
    type = 'successStory'
***REMOVED*** else {
    type = (await getTileType(tile.item as string)) as TileType
***REMOVED***

  // @ts-expect-error Server Component
  return <TileFactory key={tile.item***REMOVED*** type={type***REMOVED*** {...props***REMOVED*** />
***REMOVED***

const getTileComponents = async (tiles: BaseTile[]) => {
  return Promise.all(
    tiles.map(async t => {
      return await getTileComponent(t)
  ***REMOVED***),
  )
***REMOVED***

export default async function Home() {
  const settings = await getMainPageSettings()

  const { tiles ***REMOVED*** = settings

  // const sortedTiles = tiles.sort((a, b) => a.sort - b.sort)

  // sort tiles into buckets indicating full width display or column display
  const tileBuckets = await getTilesBucket(tiles)

  return (
    <div className="-translate-y-52">
      <AnimatedPage>
        <InsightsContainer />
        <Container>
    ***REMOVED***/* {await Promise.all(
            tileBuckets.map(async ({ tiles, isFullWidth ***REMOVED***, i) => {
              if (isFullWidth) {
                return await getTileComponents(tiles)
            ***REMOVED***

              return <Columns key={i***REMOVED***>{await getTileComponents(tiles)***REMOVED***</Columns>
          ***REMOVED***),
      ***REMOVED******REMOVED*** */***REMOVED***
          <ClimateView />
          <MobilityView />
          <BuildingsView />
          <EnergyView />
        </Container>
      </AnimatedPage>
    </div>
  )
***REMOVED***

export const revalidate = 60
