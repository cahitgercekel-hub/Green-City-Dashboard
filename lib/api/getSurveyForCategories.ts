import directus, { surveyCollectionName ***REMOVED*** from '../directus'

export default async function getSurveysForCategory(category: string) {
  const { data ***REMOVED*** = await directus.items(surveyCollectionName).readByQuery({
    filter: {
      category,
  ***REMOVED***,
***REMOVED***)

  return data
***REMOVED***
