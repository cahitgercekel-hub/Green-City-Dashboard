import { SurveyTileProps ***REMOVED*** from '@/components/Tiles/Survey'
import { readItem ***REMOVED*** from '@directus/sdk'
import directus, { surveyCollectionName ***REMOVED*** from '../directus'

export const getSurveyData = async (surveyID: string) => {
***REMOVED***
    const data = await directus.request(
      readItem(surveyCollectionName, surveyID),
***REMOVED***
    const props: SurveyTileProps = {
      title: data?.title ?? '',
      answer: {
        text: data?.answer_text ?? '',
        percent: data?.answer_percent ?? 0,
    ***REMOVED***,
      question: data?.question ?? '',
      dataSource: data?.dataSource ?? '',
      dataRetrieval: data?.dataRetrieval ?? new Date(),
      id: data?.id ?? '',
  ***REMOVED***
    return props
***REMOVED*** catch (e) {
    return undefined
***REMOVED***
***REMOVED***
