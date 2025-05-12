import { Spacer } from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'

import directus, { directusImage } from '@/lib/directus'
import { readSingleton } from '@directus/sdk'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import remarkGfm from 'remark-gfm'
import { BaseTile } from '../Base/BaseTile'

export type SuccessStoryTileProps = {
  text: string
  link: string
  image?: string
  imagePosition?: 'left' | 'right'
  moreInfo?: string
  id: string
}

/**
 * A tile that represents a success story
 * @param SuccessStoryTileProps properties of the success story tile
 * @returns SuccessStoryTileProps
 */
export default async function SuccessStoryTile({
  text,
  // eslint-disable-next-line unused-imports/no-unused-vars
  link,
  image,
  imagePosition = 'left',
  moreInfo,
  id,
}: SuccessStoryTileProps) {
  const theme = await directus.request(readSingleton('theme'))

  const Content = (
    <div className="flex h-full flex-col justify-between">
      <Title as="h5" font={'semibold'} variant={'primary'}>
        {theme.success_stories_title}
      </Title>
      <Spacer size="md" />
      <Markdown
        className="flex flex-1 flex-col justify-between"
        components={{
          h1: props => (
            <Title
              as={'h2'}
              className="mb-4 md:mb-6"
              variant={'primary'}
              {...props}
            />
          ),
          h2: props => (
            <Title
              as={'h3'}
              className="mb-4 md:mb-6"
              variant={'primary'}
              {...props}
            />
          ),
          h3: props => (
            <Title
              as={'h4'}
              className="mb-4 md:mb-6"
              variant={'primary'}
              {...props}
            />
          ),
          h4: props => <Title as={'h5'} variant={'primary'} {...props} />,
          h5: props => (
            <Title
              as={'h6'}
              className="mb-4 md:mb-6"
              variant={'primary'}
              {...props}
            />
          ),
          h6: props => (
            <Title
              as={'h7'}
              className="mb-4 md:mb-6"
              variant={'primary'}
              {...props}
            />
          ),
          ul: props => <ul className="list-disc px-6" {...props} />,
          p: props => (
            <Title
              as="h3"
              className="mb-6 md:mb-8"
              variant={'primary'}
              {...props}
            />
          ),
        }}
        rehypePlugins={[
          [rehypeExternalLinks, { target: '_blank', rel: 'noopener' }],
        ]}
        remarkPlugins={[remarkGfm]}
      >
        {text}
      </Markdown>
    </div>
  )

  if (!image) {
    return <BaseTile variant="successStory">{Content}</BaseTile>
  }

  const StoryImage = (
    <div className="relative min-h-[20rem] overflow-hidden md:min-h-[40rem] md:w-4/5">
      <img
        alt={'Image'}
        className="h-full w-full object-cover object-left transition-all group-hover:scale-105"
        src={directusImage(image)}
      />
    </div>
  )

  if (imagePosition === 'right') {
    return (
      <BaseTile
        embedId={`successStory-${id}`}
        endImage={StoryImage}
        moreInfo={moreInfo}
        variant="successStory"
      >
        {Content}
      </BaseTile>
    )
  }

  return (
    <BaseTile
      embedId={`successStory-${id}`}
      moreInfo={moreInfo}
      startImage={StoryImage}
      variant="successStory"
    >
      {Content}
    </BaseTile>
  )
}
