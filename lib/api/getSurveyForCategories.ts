import directus, {
  ENV_DIRECTUS_ITEM_STATUS,
  surveyCollectionName,
***REMOVED*** from '../directus'

export default async function getSurveysForCategory(category: string) {
  const { data ***REMOVED*** = await directus.items(surveyCollectionName).readByQuery({
    filter: {
      category,
      status: ENV_DIRECTUS_ITEM_STATUS,
  ***REMOVED***,
***REMOVED***)

  return data
***REMOVED***
