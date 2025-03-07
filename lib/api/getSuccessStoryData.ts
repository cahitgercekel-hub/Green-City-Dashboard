import { SuccessStoryTileProps } from '@/components/Tiles/SuccessStory'
import { readItem } from '@directus/sdk'
import directus, { successStoriesCollectionName } from '../directus'

export const getSuccessStoryData = async (successStoryID: string) => {
  try {
    const data = await directus.request(
      readItem(successStoriesCollectionName, successStoryID),
    )
    const props: SuccessStoryTileProps = {
      id: data?.id ?? '',
      link: data?.link ?? '',
      text: data?.text ?? '',
      image: data?.image ?? '',
      imagePosition: data?.image_position,
      moreInfo: data?.details ?? '',
    }
    return props
  } catch (e) {
    return undefined
  }
}
