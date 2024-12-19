import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import Providers from '@/components/Layout/Providers'
import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const hasCollections =
    (await directus.request(readItems('collections'))).length > 0

  return (
    <div className="flex h-screen flex-col font-inter">
      <Navbar large={hasCollections} />
      <div className="flex-1">
        <Providers>{children}</Providers>
      </div>
      <Footer />
    </div>
  )
}
