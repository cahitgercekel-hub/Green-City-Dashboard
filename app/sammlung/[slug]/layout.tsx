import AnimatedPage from '@/components/Layout/AnimatedPage'
import Container from '@/components/Layout/Container'
import Footer from '@/components/Layout/Footer'
import CollectionNavbar from '@/components/Layout/Navbar/CollectionNavbar'
import Providers from '@/components/Layout/Providers'
import { getCollection as getCollectionFromPrisma } from '@/lib/api/prismaService'
import { notFound } from 'next/navigation'

// revalidate each minute
export const revalidate = 10

const getCollection = async (collectionSlug: string) => {
  const collection = await getCollectionFromPrisma(collectionSlug)
  return collection
}

type Params = Promise<{ slug: string }>

export default async function Layout(props: {
  children: React.ReactNode
  params?: Promise<Params>
}) {
  const params = await props.params

  const { children } = props

  if (!params) {
    return notFound()
  }

  const { slug } = await params

  if (!slug) {
    return notFound()
  }

  const collection = await getCollection(slug)

  if (!collection) {
    return notFound()
  }

  const { title, description } = collection

  return (
    <div className="flex h-screen flex-col">
      <CollectionNavbar description={description || ''} title={title} />
      <Container className="flex-1">
        <Providers>
          <AnimatedPage>{children}</AnimatedPage>
        </Providers>
      </Container>
      <Footer />
    </div>
  )
}
