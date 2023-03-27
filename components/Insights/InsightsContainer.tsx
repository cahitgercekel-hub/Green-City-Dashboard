import directus, { collectionsName ***REMOVED*** from '@/lib/directus'
import withSuspense from '@/utils/withSuspense'
import Container from '../Layout/Container'
import InsightsCarousel from './InsightsCarousel'

const getInsightsData = async () => {
  const { data ***REMOVED*** = await directus.items(collectionsName).readByQuery({
    fields: ['slug', 'title', 'image'],
    filter: {
      status: 'published',
  ***REMOVED***,
    limit: 3,
***REMOVED***)

  return data
***REMOVED***

async function InsightsContainer() {
  const insights = await getInsightsData()

  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 -z-10 h-1/3 w-full bg-primary-light"></div>
      <Container className="px-0 md:px-0">
  ***REMOVED***insights && <InsightsCarousel insights={insights***REMOVED*** />***REMOVED***
  ***REMOVED***/* <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row ">

        </div> */***REMOVED***
      </Container>
    </div>
  )
***REMOVED***

const Fallback = (
  <div className="relative w-full">
    <Container>
      <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
        <div className="h-96 w-full flex-1 animate-pulse self-stretch rounded-KD bg-zinc-100" />
        <div className="h-96 w-full flex-1 animate-pulse self-stretch rounded-KD bg-zinc-100" />
        <div className="h-96 w-full flex-1 animate-pulse self-stretch rounded-KD bg-zinc-100" />
      </div>
    </Container>
  </div>
)

export default withSuspense(InsightsContainer, Fallback)
