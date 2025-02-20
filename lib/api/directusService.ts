// lib/directusService.ts
import directus, { DirectusStatus ***REMOVED*** from '@/lib/directus'
import { readItem, readItems ***REMOVED*** from '@directus/sdk'

export const fetchCollection = async (slug: string, status: DirectusStatus) => {
  return directus.request(
    readItems('collections', {
      filter: {
        slug: { _eq: slug ***REMOVED***,
        status: { _eq: status ***REMOVED***,
    ***REMOVED***,
      fields: ['title', 'description', 'tiles.*'],
  ***REMOVED***),
  )
***REMOVED***

export const fetchTileType = async (tileID: string) => {
  return directus.request(
    readItem('tiles', tileID, {
      fields: ['tile_id'],
  ***REMOVED***),
  )
***REMOVED***
