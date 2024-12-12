import directus, {
  collectionsName,
  ENV_DIRECTUS_ITEM_STATUS,
***REMOVED*** from '@/lib/directus'
import withSuspense from '@/utils/withSuspense'
import Container from '../Layout/Container'
import InsightsCarousel from './InsightsCarousel'

const getInsightsData = async () => {
  const { data ***REMOVED*** = await directus.items(collectionsName).readByQuery({
    fields: ['slug', 'title', 'image'],
    filter: {
      status: ENV_DIRECTUS_ITEM_STATUS,
  ***REMOVED***,
    limit: 3,
***REMOVED***)

  return data
***REMOVED***

async function InsightsContainer() {
  const insights = await getInsightsData()

  return (
    <div className="w-full">
      <Container className="sm:px-0 px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
  ***REMOVED***insights && <InsightsCarousel insights={insights***REMOVED*** />***REMOVED***
      </Container>
    </div>
  )
***REMOVED***

const Fallback = (
  <div className="w-full">
    <Container>
      <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
        <div className="h-96 w-full flex-1 animate-pulse self-stretch rounded-lg rounded-md bg-zinc-100" />
        <div className="h-96 w-full flex-1 animate-pulse self-stretch rounded-lg rounded-md bg-zinc-100" />
        <div className="h-96 w-full flex-1 animate-pulse self-stretch rounded-lg rounded-md bg-zinc-100" />
      </div>
    </Container>
  </div>
)

export default withSuspense(InsightsContainer, Fallback)
