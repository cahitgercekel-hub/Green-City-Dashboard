// lib/directusService.ts
import directus, { DirectusStatus } from '@/lib/directus'
import { readItem, readItems } from '@directus/sdk'

export const fetchCollection = async (slug: string, status: DirectusStatus) => {
  return directus.request(
    readItems('collections', {
      filter: {
        slug: { _eq: slug },
        status: { _eq: status },
      },
      fields: ['title', 'description', 'tiles.*'],
    }),
  )
}

export const fetchTileType = async (tileID: string) => {
  return directus.request(
    readItem('tiles', tileID, {
      fields: ['tile_id'],
    }),
  )
}
