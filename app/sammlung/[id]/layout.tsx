import Back from '@/components/Elements/Back'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import AnimatedPage from '@/components/Layout/AnimatedPage'
import Container from '@/components/Layout/Container'
import Footer from '@/components/Layout/Footer'
import CollectionNavbar from '@/components/Layout/Navbar/CollectionNavbar'
import Providers from '@/components/Layout/Providers'
import directus, { collectionsName ***REMOVED*** from '@/lib/directus'
import { notFound ***REMOVED*** from 'next/navigation'

const getCollection = async (collectionId: string) => {
  const data = await directus.items(collectionsName).readOne(collectionId, {
    fields: ['title', 'description'],
***REMOVED***)

  return data
***REMOVED***

export default async function Layout({
  children,
  params,
***REMOVED***: {
  children: React.ReactNode
  params: { id: string ***REMOVED***
***REMOVED***) {
  const { id ***REMOVED*** = params

  if (!id) {
    return notFound()
***REMOVED***

  const collection = await getCollection(id)

  if (!collection) {
    return notFound()
***REMOVED***

  const { title, description ***REMOVED*** = collection

  return (
    <div className="flex h-screen flex-col">
      <CollectionNavbar description={description || ''***REMOVED*** title={title***REMOVED*** />
      <div className="flex-1">
        <Providers>
          <Container>
            <Back />
            <Spacer />
            <AnimatedPage>{children***REMOVED***</AnimatedPage>
          </Container>
        </Providers>
      </div>
      <Footer />
    </div>
  )
***REMOVED***
