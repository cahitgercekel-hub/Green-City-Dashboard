import WeatherTile from '@/components/Tiles/Climate/WeatherTile'
import Collapsible from '@/components/Elements/Collapsible'
import MoreDetails from '@/components/Elements/MoreDetails'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import StairStepBackground from '@/components/Layout/StairStepBackground'
import Title from '@/components/Elements/Title'
import InsightsContainer from '@/components/Insights/InsightsContainer'
import BicycleChartTile from '@/components/Tiles/Mobility/Bicycle/BicycleChartTile'
import CO2EmissionsTile from '@/components/Tiles/Climate/CO2EmissionsTile'
import Container from '@/components/Layout/Container'
import Columns from '@/components/Layout/Columns'
import SuccessStoryTile from '@/components/Tiles/SuccessStory'
import directus, {
  directusImage,
  successStoriesCollectionName,
***REMOVED*** from '@/lib/directus'

export default async function Home() {
  const { data: successStories ***REMOVED*** = await directus
    .items(successStoriesCollectionName)
    .readByQuery({
      filter: {
        status: 'published',
    ***REMOVED***,
      limit: 2,
  ***REMOVED***)

  return (
    <div>
      <InsightsContainer />
      <StairStepBackground variant="secondary">
        <Container>
          <Title size="lg">Daten im Fokus</Title>
          <Collapsible trigger={<MoreDetails className="mt-4" />***REMOVED***>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              neque reprehenderit. Unde distinctio ipsa temporibus aliquam
              minima asperiores perferendis harum vel, vero, impedit ratione ut
              eligendi, tenetur sed accusantium nesciunt.
            </div>
          </Collapsible>
        </Container>
      </StairStepBackground>
      <Container>
        <Columns>
          <BicycleChartTile />
          <WeatherTile />
        </Columns>
        <CO2EmissionsTile />
        <Spacer />
  ***REMOVED***successStories && successStories[0] && (
          <SuccessStoryTile
            image={directusImage(successStories[0].image)***REMOVED***
            imagePosition={successStories[0].image_position***REMOVED***
            link={successStories[0].link***REMOVED***
            text={successStories[0].text***REMOVED***
          ></SuccessStoryTile>
    ***REMOVED******REMOVED***
  ***REMOVED***successStories && successStories[1] && (
          <SuccessStoryTile
            image={directusImage(successStories[1].image)***REMOVED***
            imagePosition={successStories[1].image_position***REMOVED***
            link={successStories[1].link***REMOVED***
            text={successStories[1].text***REMOVED***
          ></SuccessStoryTile>
    ***REMOVED******REMOVED***
      </Container>
    </div>
  )
***REMOVED***
