import AnimatedPage from '@/components/Layout/AnimatedPage'
import Container from '@/components/Layout/Container'
import Footer from '@/components/Layout/Footer'
import CollectionNavbar from '@/components/Layout/Navbar/CollectionNavbar'
import Providers from '@/components/Layout/Providers'
import directus, {
  collectionsName,
  ENV_DIRECTUS_ITEM_STATUS,
} from '@/lib/directus'
import { readItems } from '@directus/sdk'
import { notFound } from 'next/navigation'

// revalidate each minute
export const revalidate = 10

const getCollection = async (collectionSlug: string) => {
  const data = await directus.request(
    readItems(collectionsName, {
      filter: {
        slug: {
          _eq: collectionSlug,
        },
        status: {
          _eq: ENV_DIRECTUS_ITEM_STATUS,
        },
      },
      fields: ['title', 'description'],
    }),
  )

  return data
}

type Params = Promise<{ slug: string }>

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params?: Params
}) {
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

  const { title, description } = collection[0]

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
