import directus, {
  collectionsName,
  ENV_DIRECTUS_ITEM_STATUS,
} from '@/lib/directus'
import withSuspense from '@/utils/withSuspense'
import { readItems } from '@directus/sdk'
import Container from '../Layout/Container'
import InsightsCarousel from './InsightsCarousel'

export const getInsightsData = async () => {
  const data = await directus.request(
    readItems(collectionsName, {
      fields: ['slug', 'title', 'image'],
      status: {
        _eq: ENV_DIRECTUS_ITEM_STATUS,
      },
      limit: 3,
    }),
  )

  return data
}

async function InsightsContainer() {
  const insights = await getInsightsData()

  if (insights.length === 0) {
    return <></>
  }

  return (
    <div className="w-full">
      <Container className="sm:px-0 px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
        {insights && <InsightsCarousel insights={insights} />}
      </Container>
    </div>
  )
}

const Fallback = (
  <div className="w-full">
    <Container>
      <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
        <div className="h-96 w-full flex-1 animate-pulse self-stretch rounded-md bg-zinc-100 lg:rounded-lg" />
        <div className="h-96 w-full flex-1 animate-pulse self-stretch rounded-md bg-zinc-100 lg:rounded-lg" />
        <div className="h-96 w-full flex-1 animate-pulse self-stretch rounded-md bg-zinc-100 lg:rounded-lg" />
      </div>
    </Container>
  </div>
)

export default withSuspense(InsightsContainer, Fallback)
