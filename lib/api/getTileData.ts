import directus, { tileCollectionName ***REMOVED*** from '../directus'

export default async function getTileData(id: string) {
  const { data ***REMOVED*** = await directus.items(tileCollectionName).readByQuery({
    filter: {
      tile_id: id,
  ***REMOVED***,
***REMOVED***)

  return data?.[0]
***REMOVED***
