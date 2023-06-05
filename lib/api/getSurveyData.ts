import { SurveyTileProps ***REMOVED*** from '@/components/Tiles/Survey'
import directus, { surveyCollectionName ***REMOVED*** from '../directus'
import { ID ***REMOVED*** from '@directus/sdk'

export const getSurveyData = async (surveyID: ID) => {
***REMOVED***
    const data = await directus.items(surveyCollectionName).readOne(surveyID)
    const props: SurveyTileProps = {
      title: data?.title ?? '',
      answer: {
        text: data?.answer_text ?? '',
        percent: data?.answer_percent ?? 0,
    ***REMOVED***,
      question: data?.question ?? '',
      id: data?.id ?? '',
  ***REMOVED***
    return props
***REMOVED*** catch (e) {
    return undefined
***REMOVED***
***REMOVED***
