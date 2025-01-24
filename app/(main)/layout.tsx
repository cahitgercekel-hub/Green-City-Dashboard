import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import Providers from '@/components/Layout/Providers'
import directus from '@/lib/directus'
import { readItems, readSingleton ***REMOVED*** from '@directus/sdk'

export default async function Layout({
  children,
***REMOVED***: {
  children: React.ReactNode
***REMOVED***) {
  const hasCollections =
    (await directus.request(readItems('collections'))).length > 0

  const theme = await directus.request(readSingleton('theme'))

  return (
    <div className="flex h-screen flex-col font-inter">
      <Navbar
        aboutButton={{
          title: theme.about_button_title,
          text: theme.about_button_text,
      ***REMOVED******REMOVED***
        large={hasCollections***REMOVED***
      />
      <div className="flex-1">
        <Providers>{children***REMOVED***</Providers>
      </div>
      <Footer />
    </div>
  )
***REMOVED***
