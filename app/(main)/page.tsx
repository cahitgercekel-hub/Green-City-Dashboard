import InsightsContainer from '@/components/Insights/InsightsContainer'
import Container from '@/components/Layout/Container'

import AnimatedPage from '@/components/Layout/AnimatedPage'

import Title from '@/components/Elements/Title'
import { MsKlimadashboardIconsKachelIconKlima ***REMOVED*** from '@/components/Icons/Misc'
import directus, { Section ***REMOVED*** from '@/lib/directus'
import TileFactory from '@/utils/TileFactory'
import { readItem, readItems ***REMOVED*** from '@directus/sdk'

export default async function Home() {
  const data = await directus.request(
    readItems('sections', {
      fields: ['title', 'tiles.*'],
  ***REMOVED***),
  )

  async function buildSections(data: Section[]) {
    const sections = await Promise.all(
      data.map(async section => {
        const { title, tiles, icon ***REMOVED*** = section

        if (!tiles) {
          return null
      ***REMOVED***

        const tileIds = await Promise.all(
          tiles.map(async tile => {
            return await directus.request(readItem(tile.collection, tile.item))
        ***REMOVED***),
    ***REMOVED***

        return (
          <div key={title***REMOVED***>
            <div className="my-4 flex w-full items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-14 w-20 rounded-lg border-2 border-primary p-2">
                  <MsKlimadashboardIconsKachelIconKlima className="mx-auto h-full fill-primary" />
                </div>
                <Title as={'h4'***REMOVED*** variant={'primary'***REMOVED***>
            ***REMOVED***title***REMOVED***
                </Title>
              </div>
            </div>

      ***REMOVED***tileIds.map(tileId => (
              <TileFactory key={tileId.tile_id***REMOVED*** type={tileId.tile_id***REMOVED*** />
        ***REMOVED***)***REMOVED***
          </div>
    ***REMOVED***
    ***REMOVED***),
***REMOVED***

    return sections
***REMOVED***

  return (
    <div className="-translate-y-52">
      <AnimatedPage>
        <InsightsContainer />
        <Container>
    ***REMOVED***buildSections(data)***REMOVED***
    ***REMOVED***/* <BaseView
            showGoToButton={true***REMOVED***
            showSuccessStories={false***REMOVED***
            showSurveys={false***REMOVED***
            type="climate"
          >
            <CO2EmissionsTile />
            <Columns>
              <WeatherTile />
              <ClimateDevelopmentTile />
            </Columns>
          </BaseView>

          <BaseView
            showGoToButton={true***REMOVED***
            showSuccessStories={false***REMOVED***
            showSurveys={false***REMOVED***
            type="energy"
          >
            <Columns>
              <PhotovoltTile />
              <WindEnergyTile />
              <EnergietraegerTile />
            </Columns>
          </BaseView>

          <BaseView
            showGoToButton={true***REMOVED***
            showSuccessStories={false***REMOVED***
            showSurveys={false***REMOVED***
            type="mobility"
          >
            <TrafficloadTile />
            <Columns>
              <BusTile />
              <BicycleChartTile />
            </Columns>
          </BaseView>

          <BaseView
            showGoToButton={true***REMOVED***
            showSuccessStories={false***REMOVED***
            showSurveys={false***REMOVED***
            type="building"
          >
            <EnergyComsumptionTile />
          </BaseView> */***REMOVED***
        </Container>
      </AnimatedPage>
    </div>
  )
***REMOVED***

export const revalidate = 10
