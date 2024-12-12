import AnimatedPage from '@/components/Layout/AnimatedPage'
import Container from '@/components/Layout/Container'
import Footer from '@/components/Layout/Footer'
import CollectionNavbar from '@/components/Layout/Navbar/CollectionNavbar'
import Providers from '@/components/Layout/Providers'
import directus, {
  collectionsName,
  ENV_DIRECTUS_ITEM_STATUS,
***REMOVED*** from '@/lib/directus'
import { readItems ***REMOVED*** from '@directus/sdk'
import { notFound ***REMOVED*** from 'next/navigation'

// revalidate each minute
export const revalidate = 10

const getCollection = async (collectionSlug: string) => {
  const data = await directus.request(
    readItems(collectionsName, {
      filter: {
        slug: {
          _eq: collectionSlug,
      ***REMOVED***,
        status: {
          _eq: ENV_DIRECTUS_ITEM_STATUS,
      ***REMOVED***,
    ***REMOVED***,
      fields: ['title', 'description'],
  ***REMOVED***),
  )

  return data
***REMOVED***

export default async function Layout({
  children,
  params,
***REMOVED***: {
  children: React.ReactNode
  params?: { slug: string ***REMOVED***
***REMOVED***) {
  if (!params) {
    return notFound()
***REMOVED***

  const { slug ***REMOVED*** = await params

  if (!slug) {
    return notFound()
***REMOVED***

  const collection = await getCollection(slug)

  if (!collection) {
    return notFound()
***REMOVED***

  const { title, description ***REMOVED*** = collection[0]

  return (
    <div className="flex h-screen flex-col">
      <CollectionNavbar description={description || ''***REMOVED*** title={title***REMOVED*** />
      <Container className="flex-1">
        <Providers>
          <AnimatedPage>{children***REMOVED***</AnimatedPage>
        </Providers>
      </Container>
      <Footer />
    </div>
  )
***REMOVED***
