import Title from '@/components/Elements/Title'
import { ReactMarkdown ***REMOVED*** from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

// @ts-ignore
import impressumText from './impressum.md'

export default function Impressum() {
  return (
    <main className="mx-auto max-w-[1136px]">
      <ReactMarkdown
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
          p: props => (
            <Title as="h5" className="mb-4" font={'normal'***REMOVED*** {...props***REMOVED*** />
      ***REMOVED***,
          a: props => <a className="underline" {...props***REMOVED*** />,
      ***REMOVED******REMOVED***
        linkTarget={'_blank'***REMOVED***
        remarkPlugins={[remarkGfm]***REMOVED***
      >
  ***REMOVED***impressumText***REMOVED***
      </ReactMarkdown>
    </main>
  )
***REMOVED***
