import { readItems } from '@directus/sdk'
import directus, {
  ENV_DIRECTUS_ITEM_STATUS,
  surveyCollectionName,
} from '../directus'

export default async function getSurveysForCategory(category: string) {
  return await directus.request(
    readItems(surveyCollectionName, {
      filter: {
        category: {
          _eq: category,
        },
        status: {
          _eq: ENV_DIRECTUS_ITEM_STATUS,
        },
      },
    }),
  )
}
