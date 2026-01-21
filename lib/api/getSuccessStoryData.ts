import { SuccessStoryTileProps } from '@/components/Tiles/SuccessStory'
import { getSuccessStoryData as getSuccessStoryDataFromPrisma } from './prismaService'

export const getSuccessStoryData = async (
  successStoryID: string,
  locale?: string,
) => {
  try {
    const data = await getSuccessStoryDataFromPrisma(successStoryID, locale)

    if (!data) {
      return undefined
    }

    const props: SuccessStoryTileProps = {
      id: data.id ?? '',
      link: data.link ?? '',
      text: data.text ?? '',
      image: data.image ?? '',
      imagePosition: data.imagePosition === 'RIGHT' ? 'right' : 'left',
      moreInfo: data.details ?? '',
    }
    return props
  } catch (e) {
    return undefined
  }
}
