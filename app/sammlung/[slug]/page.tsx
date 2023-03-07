import Columns from '@/components/Layout/Columns'
import SurveyTile from '@/components/Tiles/Survey'
import directus, { collectionsName, surveyCollectionName ***REMOVED*** from '@/lib/directus'
import embedRegistry from '@/utils/embedRegistry'
import { tileIdRegistry ***REMOVED*** from '@/utils/tileIdRegistry'
import { ID ***REMOVED*** from '@directus/sdk'
import { notFound ***REMOVED*** from 'next/navigation'
import getTilesBucket, { BaseTile ***REMOVED*** from '@/utils/fullWidthBucket'

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

const getTileComponent = async (tile: BaseTile) => {
  if (tile.collection === 'survey') {
    return await getSurveyTile(tile.item)
***REMOVED***
  const Tile = getDataTile(tile.item)
  return <Tile key={tile.item***REMOVED*** />
***REMOVED***

const getTileComponents = async (tiles: BaseTile[]) => {
  return Promise.all(
    tiles.map(async t => {
      return await getTileComponent(t)
  ***REMOVED***),
  )
***REMOVED***

const getDataTile = (tileID: keyof typeof tileIdRegistry) => {
  return embedRegistry[tileIdRegistry[tileID]]
***REMOVED***

const getSurveyTile = async (surveyID: ID) => {
  const data = await directus.items(surveyCollectionName).readOne(surveyID)
  if (!data) {
    return <div key={surveyID***REMOVED*** />
***REMOVED***
  return (
    <SurveyTile
      answer={{
        percent: data.answer_percent,
        text: data.answer_text,
    ***REMOVED******REMOVED***
      key={surveyID***REMOVED***
      question={data.question***REMOVED***
    ></SurveyTile>
  )
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
