import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import Image from 'next/image'

import { directusImage ***REMOVED*** from '@/lib/directus'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import remarkGfm from 'remark-gfm'
import { BaseTile ***REMOVED*** from '../Base/BaseTile'

export type SuccessStoryTileProps = {
  text: string
  link: string
  image?: string
  imagePosition?: 'left' | 'right'
  moreInfo?: string
  id: string
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
    <div className="flex h-full flex-col justify-between">
      <Title as="h5" font={'semibold'***REMOVED*** variant={'primary'***REMOVED***>
        Stimmen für Münster
      </Title>
      <Spacer size="md" />
      <Markdown
        className="flex flex-1 flex-col justify-between"
        components={{
          h1: props => (
            <Title
              as={'h2'***REMOVED***
              className="mb-4 md:mb-6"
              variant={'primary'***REMOVED***
        ***REMOVED***...props***REMOVED***
            />
      ***REMOVED***,
          h2: props => (
            <Title
              as={'h3'***REMOVED***
              className="mb-4 md:mb-6"
              variant={'primary'***REMOVED***
        ***REMOVED***...props***REMOVED***
            />
      ***REMOVED***,
          h3: props => (
            <Title
              as={'h4'***REMOVED***
              className="mb-4 md:mb-6"
              variant={'primary'***REMOVED***
        ***REMOVED***...props***REMOVED***
            />
      ***REMOVED***,
          h4: props => <Title as={'h5'***REMOVED*** variant={'primary'***REMOVED*** {...props***REMOVED*** />,
          h5: props => (
            <Title
              as={'h6'***REMOVED***
              className="mb-4 md:mb-6"
              variant={'primary'***REMOVED***
        ***REMOVED***...props***REMOVED***
            />
      ***REMOVED***,
          h6: props => (
            <Title
              as={'h7'***REMOVED***
              className="mb-4 md:mb-6"
              variant={'primary'***REMOVED***
        ***REMOVED***...props***REMOVED***
            />
      ***REMOVED***,
          ul: props => <ul className="list-disc px-6" {...props***REMOVED*** />,
          p: props => (
            <Title
              as="h3"
              className="mb-6 md:mb-8"
              variant={'primary'***REMOVED***
        ***REMOVED***...props***REMOVED***
            />
      ***REMOVED***,
      ***REMOVED******REMOVED***
        rehypePlugins={[
          [rehypeExternalLinks, { target: '_blank', rel: 'noopener' ***REMOVED***],
        ]***REMOVED***
        remarkPlugins={[remarkGfm]***REMOVED***
      >
  ***REMOVED***text***REMOVED***
      </Markdown>
    </div>
  )

  if (!image) {
    return <BaseTile variant="successStory">{Content***REMOVED***</BaseTile>
***REMOVED***

  const StoryImage = (
    <div className="relative min-h-[20rem] overflow-hidden md:min-h-[40rem] md:w-4/5">
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
