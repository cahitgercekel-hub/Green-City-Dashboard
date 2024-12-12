import { SuccessStoryTileProps ***REMOVED*** from '@/components/Tiles/SuccessStory'
import { readItem ***REMOVED*** from '@directus/sdk'
import directus, { successStoriesCollectionName ***REMOVED*** from '../directus'

export const getSuccessStoryData = async (successStoryID: string) => {
***REMOVED***
    const data = await directus.request(
      readItem(successStoriesCollectionName, successStoryID),
***REMOVED***
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
