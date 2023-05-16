import directus from '@/lib/directus'
import { ID ***REMOVED*** from '@directus/sdk'

// super complex and probably overkill function to seperate fill width from normal tiles
export type BaseTile = {
  id: ID
  collections_id: ID
  item: ID
  collection: string
  sort: number
***REMOVED***

type TilesBucket = {
  tiles: BaseTile[]
  isFullWidth: boolean
***REMOVED***

const isFullWidth = async (tile: BaseTile) => {
  if (tile.collection === 'successStory') {
    return true
***REMOVED***

  if (tile.collection === 'survey') {
    return false
***REMOVED***

  const data = await directus.items(tile.collection).readOne(tile.item, {
    fields: ['full_width'],
***REMOVED***)

  return data?.full_width === true
***REMOVED***

/**
 * Some tiles must be displayed full width, while others are displayed as pairs in columns.
 * This function gets a list of tiles and places them into buckets
 * Each bucket has a list of tiles and the property whether the included
 * tile(s) should be rendered as full width tiles. A full width tile is always alone in its
 * bucket 😞
 *
 * @example
 * ```
   // this will be the full width tile (as defined in the directus CMS)
   const tileA = {
    id: "A",
    collections_id: "ABC"
    ...
 ***REMOVED***
   const tileB = {
    id: "B",
    collections_id: "ABC"
    ...
 ***REMOVED***
   const tileC = {
    id: "C",
    collections_id: "ABC"
    ...
 ***REMOVED***

   const buckets = await getTilesBucket([tileA, tileB, tileC])

   [
    {
        tiles: [{id: "A", collections_id: "ABC" ...***REMOVED***],
        isFullWidth: true
  ***REMOVED***
    {
        tiles: [{id: "B", collections_id: "ABC" ...***REMOVED***, {id: "C", collections_id: "ABC" ...***REMOVED***],
        isFullWidth: false
  ***REMOVED***
   ]
   ```
 *
 * @param tiles all tiles that should be sorted into buckets
 * @returns a list of buckets
 */
const getTilesBucket = async (tiles: BaseTile[]) => {
  let bucketIndex = 0
  const fullWidthIndex = await tiles.reduce(async function (aP, e) {
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

  return fullWidthIndex
***REMOVED***

export default getTilesBucket
