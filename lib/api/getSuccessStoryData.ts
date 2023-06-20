import directus, { successStoriesCollectionName ***REMOVED*** from '../directus'
import { ID ***REMOVED*** from '@directus/sdk'
import { SuccessStoryTileProps ***REMOVED*** from '@/components/Tiles/SuccessStory'

export const getSuccessStoryData = async (successStoryID: ID) => {
***REMOVED***
    const data = await directus
      .items(successStoriesCollectionName)
      .readOne(successStoryID)
    const props: SuccessStoryTileProps = {
      id: data?.id ?? '',
      link: data?.link ?? '',
      text: data?.text ?? '',
      image: data?.image ?? '',
      imagePosition: data?.image_position,
      moreInfo: data?.details ?? '',
  ***REMOVED***
    return props
***REMOVED*** catch (e) {
    return undefined
***REMOVED***
***REMOVED***
