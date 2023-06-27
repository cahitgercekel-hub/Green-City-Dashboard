import directus, {
  ENV_DIRECTUS_ITEM_STATUS,
  successStoriesCollectionName,
***REMOVED*** from '../directus'

export default async function getSuccessStoriesForCategory(category: string) {
  const { data ***REMOVED*** = await directus
    .items(successStoriesCollectionName)
    .readByQuery({
      filter: {
        category,
        status: ENV_DIRECTUS_ITEM_STATUS,
    ***REMOVED***,
      limit: 3,
  ***REMOVED***)

  return data
***REMOVED***
