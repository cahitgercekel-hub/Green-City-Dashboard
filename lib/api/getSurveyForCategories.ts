import { readItems ***REMOVED*** from '@directus/sdk'
import directus, {
  ENV_DIRECTUS_ITEM_STATUS,
  surveyCollectionName,
***REMOVED*** from '../directus'

export default async function getSurveysForCategory(category: string) {
  return await directus.request(
    readItems(surveyCollectionName, {
      filter: {
        category: {
          _eq: category,
      ***REMOVED***,
        status: {
          _eq: ENV_DIRECTUS_ITEM_STATUS,
      ***REMOVED***,
    ***REMOVED***,
  ***REMOVED***),
  )
***REMOVED***
