import Title from '@/components/Elements/Title'
import Script from 'next/script'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import remarkGfm from 'remark-gfm'

// @ts-ignore
import datenschutzText from './datenschutz.md'

export default function Datenschutz() {
  return (
    <main className="mx-auto max-w-[1136px]">
      <Markdown
        components={{
          h1: props => (
            <Title as={'h2'***REMOVED*** className="mb-2" variant={'primary'***REMOVED*** {...props***REMOVED*** />
      ***REMOVED***,
          h2: props => (
            <Title as={'h3'***REMOVED*** className="mb-2" variant={'primary'***REMOVED*** {...props***REMOVED*** />
      ***REMOVED***,
          h3: props => (
            <Title as={'h4'***REMOVED*** className="mb-2" variant={'primary'***REMOVED*** {...props***REMOVED*** />
      ***REMOVED***,
          h4: props => (
            <Title as={'h5'***REMOVED*** className="mb-2" variant={'primary'***REMOVED*** {...props***REMOVED*** />
      ***REMOVED***,
          h5: props => (
            <Title as={'h6'***REMOVED*** className="mb-2" variant={'primary'***REMOVED*** {...props***REMOVED*** />
      ***REMOVED***,
          h6: props => <Title as={'h7'***REMOVED*** className="mb-2" {...props***REMOVED*** />,
          ul: props => <ul className="list-disc px-6" {...props***REMOVED*** />,
          li: props => (
            <li className="list-disc px-6">
              <Title as="h5" className="mb-4" font={'normal'***REMOVED*** {...props***REMOVED*** />
            </li>
      ***REMOVED***,
          p: props => (
            <Title as="h5" className="mb-4" font={'normal'***REMOVED*** {...props***REMOVED*** />
      ***REMOVED***,
          a: props => <a className="underline" {...props***REMOVED*** />,
      ***REMOVED******REMOVED***
        rehypePlugins={[
          [rehypeExternalLinks, { target: '_blank', rel: 'noopener' ***REMOVED***],
        ]***REMOVED***
        remarkPlugins={[remarkGfm]***REMOVED***
      >
  ***REMOVED***datenschutzText***REMOVED***
      </Markdown>

      <Title as={'h3'***REMOVED*** className="mb-2" variant={'primary'***REMOVED***>
        Matomo Opt Out
      </Title>
      <div id="matomo-opt-out"></div>
      <Script src="https://internet-webanalyse.stadt-muenster.de/index.php?module=CoreAdminHome&action=optOutJS&divId=matomo-opt-out&language=auto&showIntro=1" />
    </main>
  )
***REMOVED***
