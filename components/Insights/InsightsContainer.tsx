import directus, { insightsCollectionName ***REMOVED*** from '@/lib/directus'
import { use ***REMOVED*** from 'react'
import Container from '../Layout/Container'
import InsightsTile from './InsightsTile'

const getInsightsData = async () => {
  const { data ***REMOVED*** = await directus.items(insightsCollectionName).readByQuery({
    filter: {
      status: 'published',
  ***REMOVED***,
    limit: 3,
***REMOVED***)
  return data
***REMOVED***

export default function InsightsContainer() {
  const insights = use(getInsightsData())

  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 -z-10 h-1/3 w-full bg-primary-light"></div>
      <Container>
        <div className="flex w-full flex-col items-center justify-between space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
    ***REMOVED***insights?.map(({ id, title, link, image ***REMOVED***) => (
            <div className="flex-1 self-stretch" key={id***REMOVED***>
              <InsightsTile
                image={`${process.env.NEXT_PUBLIC_DIRECTUS_URL***REMOVED***/assets/${image***REMOVED***`***REMOVED***
                link={link***REMOVED***
                title={title***REMOVED***
              />
            </div>
      ***REMOVED***)***REMOVED***
        </div>
      </Container>
    </div>
  )
***REMOVED***
