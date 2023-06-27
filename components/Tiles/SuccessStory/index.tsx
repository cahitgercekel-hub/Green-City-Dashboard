import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import Image from 'next/image'

import { BaseTile ***REMOVED*** from '../Base/BaseTile'
import { directusImage ***REMOVED*** from '@/lib/directus'
import { ID ***REMOVED*** from '@directus/sdk'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export type SuccessStoryTileProps = {
  text: string
  link: string
  image?: string
  imagePosition?: 'left' | 'right'
  moreInfo?: string
  id: string | ID
***REMOVED***

/**
 * A tile that represents a success story
 * @param SuccessStoryTileProps properties of the success story tile
 * @returns SuccessStoryTileProps
 */
export default function SuccessStoryTile({
  text,
  // eslint-disable-next-line unused-imports/no-unused-vars
  link,
  image,
  imagePosition = 'left',
  moreInfo,
  id,
***REMOVED***: SuccessStoryTileProps) {
  const Content = (
    <>
      <Title as="h5" font={'semibold'***REMOVED*** variant={'primary'***REMOVED***>
        Stimmen für Münster
      </Title>
      <Spacer size="sm" />
      <ReactMarkdown
        components={{
          h1: props => (
            <Title
              as="h3"
              className="mb-4 md:mb-6"
              variant={'primary'***REMOVED***
        ***REMOVED***...props***REMOVED***
            />
      ***REMOVED***,
          h2: props => (
            <Title
              as="h3"
              className="mb-4 md:mb-6"
              variant={'primary'***REMOVED***
        ***REMOVED***...props***REMOVED***
            />
      ***REMOVED***,
          h3: props => (
            <Title
              as="h3"
              className="mb-4 md:mb-6"
              variant={'primary'***REMOVED***
        ***REMOVED***...props***REMOVED***
            />
      ***REMOVED***,
          h4: props => (
            <Title
              as="h3"
              className="mb-4 md:mb-6"
              variant={'primary'***REMOVED***
        ***REMOVED***...props***REMOVED***
            />
      ***REMOVED***,
          h5: props => (
            <Title
              as="h3"
              className="mb-4 md:mb-6"
              variant={'primary'***REMOVED***
        ***REMOVED***...props***REMOVED***
            />
      ***REMOVED***,
          h6: props => (
            <Title
              as="h3"
              className="mb-4 md:mb-6"
              variant={'primary'***REMOVED***
        ***REMOVED***...props***REMOVED***
            />
      ***REMOVED***,
          p: props => (
            <Title
              as="h3"
              className="mb-4 md:mb-6"
              variant={'primary'***REMOVED***
        ***REMOVED***...props***REMOVED***
            />
      ***REMOVED***,
          a: props => (
            <Title
              as="h3"
              className="mb-4 md:mb-6"
              variant={'primary'***REMOVED***
        ***REMOVED***...props***REMOVED***
            />
      ***REMOVED***,
      ***REMOVED******REMOVED***
        linkTarget={'_blank'***REMOVED***
        remarkPlugins={[remarkGfm]***REMOVED***
      >
  ***REMOVED***text***REMOVED***
      </ReactMarkdown>
      <Spacer />
    </>
  )

  if (!image) {
    return <BaseTile variant="successStory">{Content***REMOVED***</BaseTile>
***REMOVED***

  const StoryImage = (
    <div className="relative min-h-[20rem] overflow-hidden md:min-h-[30rem] md:w-2/3">
      <Image
        alt={'Image'***REMOVED***
        className="object-cover object-center transition-all group-hover:scale-105"
        fill
        src={directusImage(image)***REMOVED***
      />
    </div>
  )

  if (imagePosition === 'right') {
    return (
      <BaseTile
        embedId={`successStory-${id***REMOVED***`***REMOVED***
        endImage={StoryImage***REMOVED***
        moreInfo={moreInfo***REMOVED***
        variant="successStory"
      >
  ***REMOVED***Content***REMOVED***
      </BaseTile>
***REMOVED***
***REMOVED***

  return (
    <BaseTile
      embedId={`successStory-${id***REMOVED***`***REMOVED***
      moreInfo={moreInfo***REMOVED***
      startImage={StoryImage***REMOVED***
      variant="successStory"
    >
***REMOVED***Content***REMOVED***
    </BaseTile>
  )
***REMOVED***
