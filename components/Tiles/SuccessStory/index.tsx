import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import Link from 'next/link'
import Image from 'next/image'

import { BaseTile ***REMOVED*** from '../Base/BaseTile'
import { directusImage ***REMOVED*** from '@/lib/directus'

export type SuccessStoryTileProps = {
  text: string
  link: string
  image?: string
  imagePosition?: 'left' | 'right'
***REMOVED***

/**
 * A tile that represents a success story
 * @param SuccessStoryTileProps properties of the success story tile
 * @returns SuccessStoryTileProps
 */
export default function SuccessStoryTile({
  text,
  link,
  image,
  imagePosition = 'left',
***REMOVED***: SuccessStoryTileProps) {
  const Content = (
    <>
      <Title as="h5" font={'semibold'***REMOVED*** variant={'primary'***REMOVED***>
        Erfolgsgeschichte
      </Title>
      <Spacer size="sm" />
      <Title as="h3" variant={'primary'***REMOVED***>
  ***REMOVED***text***REMOVED***
      </Title>
      <Spacer />
      <Link href={link***REMOVED***>
        <Title as="h6" className="underline" variant={'primary'***REMOVED***>
          Hier können Sie aktiv werden
        </Title>
      </Link>
    </>
  )

  if (!image) {
    return <BaseTile variant="successStory">{Content***REMOVED***</BaseTile>
***REMOVED***

  const StoryImage = (
    <div className="relative min-h-[20rem] overflow-hidden md:min-h-[30rem] md:w-2/3">
      <Image
        alt={'Image'***REMOVED***
        className="object-cover object-top transition-all group-hover:scale-105"
        fill
        src={directusImage(image)***REMOVED***
      />
    </div>
  )

  if (imagePosition === 'right') {
    return (
      <BaseTile endImage={StoryImage***REMOVED*** variant="successStory">
  ***REMOVED***Content***REMOVED***
      </BaseTile>
***REMOVED***
***REMOVED***

  return (
    <BaseTile startImage={StoryImage***REMOVED*** variant="successStory">
***REMOVED***Content***REMOVED***
    </BaseTile>
  )
***REMOVED***
