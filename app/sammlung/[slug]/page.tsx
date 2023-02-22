import Columns from '@/components/Layout/Columns'
import SurveyTile from '@/components/Tiles/Survey'
import directus, {
  collectionsName,
  surveyCollectionName,
  tileCollectionName,
***REMOVED*** from '@/lib/directus'
import embedRegistry from '@/utils/embedRegistry'
import { tileIdRegistry ***REMOVED*** from '@/utils/tileIdRegistry'
import { notFound ***REMOVED*** from 'next/navigation'

// ISR
export async function generateStaticParams() {
  const { data ***REMOVED*** = await directus.items(collectionsName).readByQuery({
    fields: ['slug'],
    filter: {
      status: 'published',
  ***REMOVED***,
***REMOVED***)

  if (!data) {
    return
***REMOVED***

  return data.map(({ slug ***REMOVED***) => ({
    slug,
***REMOVED***))
***REMOVED***

// revalidate each minute
export const revalidate = 60

const getCollection = async (collectionSlug: string) => {
  const { data ***REMOVED*** = await directus.items(collectionsName).readByQuery({
    filter: {
      slug: collectionSlug,
  ***REMOVED***,
    fields: ['title', 'description', 'tiles.tiles_id', 'surveys.*'],
***REMOVED***)

  return data
***REMOVED***

const isFullWidth = async (tileId: string) => {
  const data = await directus.items(tileCollectionName).readOne(tileId, {
    fields: ['full_width'],
***REMOVED***)

  return data?.full_width === true
***REMOVED***

const getTileComponent = (tileID: keyof typeof tileIdRegistry) => {
  return embedRegistry[tileIdRegistry[tileID]]
***REMOVED***

const getSurvey = async (surveyID: string) => {
  return await directus.items(surveyCollectionName).readOne(surveyID)
***REMOVED***

export default async function Collection({
  params,
***REMOVED***: {
  params: { slug: string ***REMOVED***
***REMOVED***) {
  const { slug ***REMOVED*** = params

  if (!slug) {
    return notFound()
***REMOVED***

  const collection = await getCollection(slug)

  if (!collection || !collection[0]) {
    return notFound()
***REMOVED***

  const { tiles, surveys ***REMOVED*** = collection[0]

  const tileIDs = tiles.map(({ tiles_id ***REMOVED***) => tiles_id)
  const surveyIDs = surveys.map(({ survey_id ***REMOVED***) => survey_id)

  // super complex and probably overkill function to seperate fill width from normal tiles
  type TilesBucket = {
    tiles: string[]
    isFullWidth: boolean
***REMOVED***
  let bucketIndex = 0
  const fullWidthIndex = await tileIDs.reduce(async function (aP, e) {
    const a = await aP
    if (!a[bucketIndex]) {
      a[bucketIndex] = {
        tiles: [],
        isFullWidth: false,
    ***REMOVED***
  ***REMOVED***
    if (!(await isFullWidth(e))) {
      a[bucketIndex].tiles.push(e)
  ***REMOVED*** else {
      bucketIndex++
      a[bucketIndex] = {
        tiles: [],
        isFullWidth: true,
    ***REMOVED***
      a[bucketIndex].tiles.push(e)
      bucketIndex++
  ***REMOVED***
    return a
***REMOVED***, Promise.resolve<TilesBucket[]>([]))

  return (
    <>
***REMOVED***fullWidthIndex.map(({ tiles, isFullWidth ***REMOVED***, i) => {
        if (isFullWidth) {
          return tiles.map(t => {
            const Tile = getTileComponent(t)
            return <Tile key={t***REMOVED*** />
        ***REMOVED***)
      ***REMOVED***

        return (
          <Columns key={i***REMOVED***>
      ***REMOVED***tiles.map(t => {
              const Tile = getTileComponent(t)
              return <Tile key={t***REMOVED*** />
          ***REMOVED***)***REMOVED***
          </Columns>
    ***REMOVED***
    ***REMOVED***)***REMOVED***
      <Columns>
  ***REMOVED***await Promise.all(
          surveyIDs.map(async sID => {
            const data = await getSurvey(sID)
            if (!data) {
              return <></>
          ***REMOVED***
            return (
              <SurveyTile
                answer={{
                  percent: data.answer_percent,
                  text: data.answer_text,
              ***REMOVED******REMOVED***
                key={sID***REMOVED***
                question={data.question***REMOVED***
              ></SurveyTile>
        ***REMOVED***
        ***REMOVED***),
    ***REMOVED******REMOVED***
      </Columns>
    </>
  )
***REMOVED***
