import Back from '@/components/Elements/Back'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import AnimatedPage from '@/components/Layout/AnimatedPage'
import Container from '@/components/Layout/Container'
import Footer from '@/components/Layout/Footer'
import CollectionNavbar from '@/components/Layout/Navbar/CollectionNavbar'
import Providers from '@/components/Layout/Providers'
import directus, { collectionsName ***REMOVED*** from '@/lib/directus'
import { notFound ***REMOVED*** from 'next/navigation'

// ISR
export async function generateStaticParams() {
  const { data ***REMOVED*** = await directus.items(collectionsName).readByQuery({
    fields: ['slug'],
    filter: {
      status: 'published',
  ***REMOVED***,
***REMOVED***)

  if (!data) {
    return [{ slug: undefined ***REMOVED***]
***REMOVED***

  return data.map(({ slug ***REMOVED***) => ({
    slug,
***REMOVED***))
***REMOVED***

// revalidate each minute
export const revalidate = 60

const getCollection = async (collectionSlug: string) => {
  const { data ***REMOVED*** = await directus.items(collectionsName).readByQuery({
    filter: {
      slug: collectionSlug,
  ***REMOVED***,
    fields: ['title', 'description'],
***REMOVED***)

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

  const { slug ***REMOVED*** = params

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
          <Back />
          <Spacer />
          <AnimatedPage>{children***REMOVED***</AnimatedPage>
        </Providers>
      </Container>
      <Footer />
    </div>
  )
***REMOVED***
