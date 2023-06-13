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
    <div className="w-full">
      <Container className="px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
  ***REMOVED***insights && <InsightsCarousel insights={insights***REMOVED*** />***REMOVED***
      </Container>
    </div>
  )
***REMOVED***

const Fallback = (
  <div className="w-full">
    <Container>
      <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
        <div className="h-96 w-full flex-1 animate-pulse self-stretch rounded-[36px] bg-zinc-100 md:rounded-[56px]" />
        <div className="h-96 w-full flex-1 animate-pulse self-stretch rounded-[36px] bg-zinc-100 md:rounded-[56px]" />
        <div className="h-96 w-full flex-1 animate-pulse self-stretch rounded-[36px] bg-zinc-100 md:rounded-[56px]" />
      </div>
    </Container>
  </div>
)

export default withSuspense(InsightsContainer, Fallback)
