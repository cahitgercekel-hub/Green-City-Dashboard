import { readItems ***REMOVED*** from '@directus/sdk'
import directus, {
  ENV_DIRECTUS_ITEM_STATUS,
  successStoriesCollectionName,
***REMOVED*** from '../directus'

export default async function getSuccessStoriesForCategory(category: string) {
  return await directus.request(
    readItems(successStoriesCollectionName, {
      filter: {
        category: {
          _eq: category,
      ***REMOVED***,
        status: {
          _eq: ENV_DIRECTUS_ITEM_STATUS,
      ***REMOVED***,
    ***REMOVED***,
      limit: 3,
  ***REMOVED***),
  )
***REMOVED***
