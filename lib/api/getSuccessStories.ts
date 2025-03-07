import { readItems } from '@directus/sdk'
import directus, {
  ENV_DIRECTUS_ITEM_STATUS,
  successStoriesCollectionName,
} from '../directus'

export default async function getSuccessStoriesForCategory(category: string) {
  return await directus.request(
    readItems(successStoriesCollectionName, {
      filter: {
        category: {
          _eq: category,
        },
        status: {
          _eq: ENV_DIRECTUS_ITEM_STATUS,
        },
      },
      limit: 3,
    }),
  )
}
