import directus, { successStoriesCollectionName ***REMOVED*** from '../directus'

export default async function getSuccessStoriesForCategory(category: string) {
  const { data ***REMOVED*** = await directus
    .items(successStoriesCollectionName)
    .readByQuery({
      filter: {
        category,
    ***REMOVED***,
      limit: 3,
  ***REMOVED***)

  return data
***REMOVED***
