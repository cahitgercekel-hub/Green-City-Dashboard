import embedRegistry from '@/utils/embedRegistry'
import { notFound ***REMOVED*** from 'next/navigation'

export default async function Share({
  params,
***REMOVED***: {
  params: { id: keyof typeof embedRegistry ***REMOVED***
***REMOVED***) {
  const { id ***REMOVED*** = params

  if (!id) {
    return notFound()
***REMOVED***

  const EmbedComponent: () => JSX.Element | Promise<JSX.Element> | undefined =
    embedRegistry[id]

  if (!EmbedComponent) {
    return notFound()
***REMOVED***

  // @ts-expect-error Server Component
  return <EmbedComponent />
***REMOVED***
