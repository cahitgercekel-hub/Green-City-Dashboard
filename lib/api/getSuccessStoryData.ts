import { SuccessStoryTileProps } from '@/components/Tiles/SuccessStory'
import { getSuccessStoryData as getSuccessStoryDataFromPrisma } from './prismaService'

export const getSuccessStoryData = async (successStoryID: string) => {
  try {
    const data = await getSuccessStoryDataFromPrisma(successStoryID)

    if (!data) {
      return undefined
    }

    const props: SuccessStoryTileProps = {
      id: data.id ?? '',
      link: data.link ?? '',
      text: data.text ?? '',
      image: data.image ?? '',
      imagePosition: data.imagePosition,
      moreInfo: data.details ?? '',
    }
    return props
  } catch (e) {
    return undefined
  }
}
