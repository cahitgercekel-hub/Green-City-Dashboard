import { TileType ***REMOVED*** from '@/utils/TileFactory'
import { readItems ***REMOVED*** from '@directus/sdk'
import directus from '../directus'

export default async function getTileData(id: TileType) {
  const [data] = await directus.request(
    readItems('tiles', {
      filter: {
        tile_id: {
          _eq: id,
      ***REMOVED***,
    ***REMOVED***,
  ***REMOVED***),
  )
  return data
***REMOVED***
