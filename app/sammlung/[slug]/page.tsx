import Columns from '@/components/Layout/Columns'
import directus, {
  collectionsName,
  successStoriesCollectionName,
  surveyCollectionName,
  tileCollectionName,
***REMOVED*** from '@/lib/directus'
import { ID ***REMOVED*** from '@directus/sdk'
import { notFound ***REMOVED*** from 'next/navigation'
import getTilesBucket, { BaseTile ***REMOVED*** from '@/utils/fullWidthBucket'
import TileFactory, { TileType ***REMOVED*** from '@/utils/TileFactory'
import { SurveyTileProps ***REMOVED*** from '@/components/Tiles/Survey'
import { SuccessStoryTileProps ***REMOVED*** from '@/components/Tiles/SuccessStory'

// ISR
export async function generateStaticParams() {
  const { data ***REMOVED*** = await directus.items(collectionsName).readByQuery({
    fields: ['slug'],
    filter: {
      status: 'published',
  ***REMOVED***,
***REMOVED***)

  if (!data) {
    return [{ slug: undefined ***REMOVED***]
***REMOVED***

  return data.map(({ slug ***REMOVED***) => ({
    slug,
***REMOVED***))
***REMOVED***

const getCollection = async (collectionSlug: string) => {
  const { data ***REMOVED*** = await directus.items(collectionsName).readByQuery({
    filter: {
      slug: collectionSlug,
  ***REMOVED***,
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

  return <TileFactory key={tile.item***REMOVED*** type={type***REMOVED*** {...props***REMOVED*** />
***REMOVED***

const getTileComponents = async (tiles: BaseTile[]) => {
  return Promise.all(
    tiles.map(async t => {
      return await getTileComponent(t)
  ***REMOVED***),
  )
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
***REMOVED***
***REMOVED***
const getSurveyData = async (surveyID: ID): Promise<SurveyTileProps> => {
  const data = await directus.items(surveyCollectionName).readOne(surveyID)
  return {
    answer: {
      text: data?.answer_text ?? '',
      percent: data?.answer_percent ?? 0,
  ***REMOVED***,
    question: data?.question ?? '',
***REMOVED***
***REMOVED***

export default async function Collection({
  params,
***REMOVED***: {
  params?: { slug: string ***REMOVED***
***REMOVED***) {
  if (!params) {
    return notFound()
***REMOVED***

  const { slug ***REMOVED*** = params

  if (!slug) {
    return notFound()
***REMOVED***

  const collection = await getCollection(slug)

  if (!collection || !collection[0]) {
    return notFound()
***REMOVED***

  const { tiles ***REMOVED*** = collection[0]

  const sortedTiles = tiles.sort((a, b) => a.sort - b.sort)

  // sort tiles into buckets indicating full width display or column display
  const tileBuckets = await getTilesBucket(sortedTiles)

  return (
    <div>
***REMOVED***await Promise.all(
        tileBuckets.map(async ({ tiles, isFullWidth ***REMOVED***, i) => {
          if (isFullWidth) {
            return await getTileComponents(tiles)
        ***REMOVED***

          return <Columns key={i***REMOVED***>{await getTileComponents(tiles)***REMOVED***</Columns>
      ***REMOVED***),
  ***REMOVED******REMOVED***
    </div>
  )
***REMOVED***
