import { SuccessStoryTileProps ***REMOVED*** from '@/components/Tiles/SuccessStory'
import { SurveyTileProps ***REMOVED*** from '@/components/Tiles/Survey'
import { TileLayout ***REMOVED*** from '@/components/Tiles/TileLayout'
import { fetchCollection ***REMOVED*** from '@/lib/api/directusService'
import { getSuccessStoryData ***REMOVED*** from '@/lib/api/getSuccessStoryData'
import { getSurveyData ***REMOVED*** from '@/lib/api/getSurveyData'
import directus, {
  collectionsName,
  ENV_DIRECTUS_ITEM_STATUS,
  tileCollectionName,
***REMOVED*** from '@/lib/directus'
import getTilesBucket, { BaseTile ***REMOVED*** from '@/utils/fullWidthBucket'
import TileFactory, { TileType ***REMOVED*** from '@/utils/TileFactory'
import { sortTiles ***REMOVED*** from '@/utils/tileLayout'
import { readItem, readItems ***REMOVED*** from '@directus/sdk'
import { notFound ***REMOVED*** from 'next/navigation'

export const revalidate = 10

// ISR
export async function generateStaticParams() {
  const data = await directus.request(
    readItems(collectionsName, {
      fields: ['slug'],
      status: {
        _eq: ENV_DIRECTUS_ITEM_STATUS,
    ***REMOVED***,
  ***REMOVED***),
  )

  if (!data) {
    return [{ slug: undefined ***REMOVED***]
***REMOVED***

  return data.map(({ slug ***REMOVED***) => ({
    slug,
***REMOVED***))
***REMOVED***

const getCollection = async (collectionSlug: string) => {
  const data = await directus.request(
    readItems(collectionsName, {
      filter: {
        slug: {
          _eq: collectionSlug,
      ***REMOVED***,
        status: {
          _eq: ENV_DIRECTUS_ITEM_STATUS,
      ***REMOVED***,
    ***REMOVED***,
      fields: ['title', 'description', 'tiles.*'],
  ***REMOVED***),
  )

  return data
***REMOVED***

const getTileType = async (tileID: string) => {
  const data = await directus.request(
    readItem(tileCollectionName, tileID, {
      fields: ['tile_id'],
  ***REMOVED***),
  )

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
    console.log(tile)
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

export default async function Collection({
  params,
***REMOVED***: {
  params?: { slug: string ***REMOVED***
***REMOVED***) {
  if (!params?.slug) {return notFound()***REMOVED***

  const collection = await fetchCollection(
    params.slug,
    ENV_DIRECTUS_ITEM_STATUS,
  )
  if (!collection?.[0]) {return notFound()***REMOVED***

  const { tiles ***REMOVED*** = collection[0]
  const sortedTiles = sortTiles(tiles)
  const tileBuckets = await getTilesBucket(sortedTiles)

  return <TileLayout tileBuckets={tileBuckets***REMOVED*** />
***REMOVED***
