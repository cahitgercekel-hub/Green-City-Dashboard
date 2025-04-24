import { SurveyTileProps } from '@/components/Tiles/Survey'
import { readItem } from '@directus/sdk'
import directus, { surveyCollectionName } from '../directus'

export const getSurveyData = async (surveyID: string) => {
  try {
    const data = await directus.request(
      readItem(surveyCollectionName, surveyID),
    )
    const props: SurveyTileProps = {
      title: data?.title ?? '',
      answer: {
        text: data?.answer_text ?? '',
        percent: data?.answer_percent ?? 0,
        unit: data?.answer_unit ?? '%',
      },
      question: data?.question ?? '',
      dataSource: data?.dataSource ?? '',
      dataRetrieval: data?.dataRetrieval ?? new Date(),
      id: data?.id ?? '',
    }
    return props
  } catch (e) {
    return undefined
  }
}
