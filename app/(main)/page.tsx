import InsightsContainer from '@/components/Insights/InsightsContainer'
import Container from '@/components/Layout/Container'

import AnimatedPage from '@/components/Layout/AnimatedPage'

import Title from '@/components/Elements/Title'
import { MsKlimadashboardIconsKachelIconKlima } from '@/components/Icons/Misc'
import directus, { Section } from '@/lib/directus'
import TileFactory from '@/utils/TileFactory'
import { readItem, readItems } from '@directus/sdk'

export default async function Home() {
  const data = await directus.request(
    readItems('sections', {
      fields: ['title', 'tiles.*'],
    }),
  )

  async function buildSections(data: Section[]) {
    const sections = await Promise.all(
      data.map(async section => {
        const { title, tiles, icon } = section

        if (!tiles) {
          return null
        }

        const tileIds = await Promise.all(
          tiles.map(async tile => {
            return await directus.request(readItem(tile.collection, tile.item))
          }),
        )

        return (
          <div key={title}>
            <div className="my-4 flex w-full items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-14 w-20 rounded-lg border-2 border-primary p-2">
                  <MsKlimadashboardIconsKachelIconKlima className="mx-auto h-full fill-primary" />
                </div>
                <Title as={'h4'} variant={'primary'}>
                  {title}
                </Title>
              </div>
            </div>

            {tileIds.map(tileId => (
              <TileFactory key={tileId.tile_id} type={tileId.tile_id} />
            ))}
          </div>
        )
      }),
    )

    return sections
  }

  return (
    <div className="-translate-y-52">
      <AnimatedPage>
        <InsightsContainer />
        <Container>
          {buildSections(data)}
          {/* <BaseView
            showGoToButton={true}
            showSuccessStories={false}
            showSurveys={false}
            type="climate"
          >
            <CO2EmissionsTile />
            <Columns>
              <WeatherTile />
              <ClimateDevelopmentTile />
            </Columns>
          </BaseView>

          <BaseView
            showGoToButton={true}
            showSuccessStories={false}
            showSurveys={false}
            type="energy"
          >
            <Columns>
              <PhotovoltTile />
              <WindEnergyTile />
              <EnergietraegerTile />
            </Columns>
          </BaseView>

          <BaseView
            showGoToButton={true}
            showSuccessStories={false}
            showSurveys={false}
            type="mobility"
          >
            <TrafficloadTile />
            <Columns>
              <BusTile />
              <BicycleChartTile />
            </Columns>
          </BaseView>

          <BaseView
            showGoToButton={true}
            showSuccessStories={false}
            showSurveys={false}
            type="building"
          >
            <EnergyComsumptionTile />
          </BaseView> */}
        </Container>
      </AnimatedPage>
    </div>
  )
}

export const revalidate = 10
