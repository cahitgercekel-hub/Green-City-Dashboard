import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import Providers from '@/components/Layout/Providers'

export default function Layout({ children ***REMOVED***: { children: React.ReactNode ***REMOVED***) {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <Providers>{children***REMOVED***</Providers>
      </div>
      <Footer />
    </div>
  )
***REMOVED***
