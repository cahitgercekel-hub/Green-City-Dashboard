import InsightsContainer, {
  getInsightsData,
***REMOVED*** from '@/components/Insights/InsightsContainer'
import Container from '@/components/Layout/Container'

import AnimatedPage from '@/components/Layout/AnimatedPage'

import Title from '@/components/Elements/Title'
import SvgWiesbaden from '@/components/Icons/Wiesbaden'
import { TileLayout ***REMOVED*** from '@/components/Tiles/TileLayout'
import directus, { Section ***REMOVED*** from '@/lib/directus'
import getTilesBucket from '@/utils/fullWidthBucket'
import { sortTiles ***REMOVED*** from '@/utils/tileLayout'
import { readItems ***REMOVED*** from '@directus/sdk'
import { cx ***REMOVED*** from 'class-variance-authority'

export default async function Home() {
  const data = await directus.request(
    readItems('sections', {
      // @ts-ignore
      fields: ['*', { tiles: ['*'] ***REMOVED***],
  ***REMOVED***),
  )

  async function buildSections(data: Section[]) {
    const sections = await Promise.all(
      data.map(async section => {
        const { title, tiles, icon ***REMOVED*** = section

        if (!tiles) {
          return null
      ***REMOVED***

        const sortedTiles = sortTiles(tiles)
        const tileBuckets = await getTilesBucket(sortedTiles)

        return (
          <div key={title***REMOVED***>
            <div className="my-4 flex w-full items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-14 w-20 rounded-lg border-2 border-primary p-2">
                  <SvgWiesbaden className="mx-auto h-full fill-primary stroke-primary" />
                </div>
                <Title as={'h4'***REMOVED*** variant={'primary'***REMOVED***>
            ***REMOVED***title***REMOVED***
                </Title>
              </div>
            </div>

            <TileLayout tileBuckets={tileBuckets***REMOVED*** />
          </div>
    ***REMOVED***
    ***REMOVED***),
***REMOVED***

    return sections
***REMOVED***

  const insights = await getInsightsData()

  return (
    <div className={cx(insights.length > 0 && '-translate-y-52')***REMOVED***>
      <AnimatedPage>
        <InsightsContainer />
        <Container>{buildSections(data)***REMOVED***</Container>
      </AnimatedPage>
    </div>
  )
***REMOVED***

export const revalidate = 10
