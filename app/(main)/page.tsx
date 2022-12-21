import WeatherTile from '@/components/Tiles/Climate/WeatherTile'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import InsightsContainer from '@/components/Insights/InsightsContainer'
import BicycleChartTile from '@/components/Tiles/Mobility/Bicycle/BicycleChartTile'
import CO2EmissionsTile from '@/components/Tiles/Climate/CO2EmissionsTile'
import Container from '@/components/Layout/Container'
import Columns from '@/components/Layout/Columns'
import SuccessStoryTile from '@/components/Tiles/SuccessStory'
import directus, {
  directusImage,
  successStoriesCollectionName,
  surveyCollectionName,
***REMOVED*** from '@/lib/directus'
import AnimatedPage from '@/components/Layout/AnimatedPage'
import StadtradelnTile from '@/components/Tiles/Mobility/Bicycle/Stadtradeln'
import SurveyTile from '@/components/Tiles/Survey'
import BusTile from '@/components/Tiles/Mobility/Bus'
import ClimateDevelopmentTile from '@/components/Tiles/Climate/Devlopment'
import SectionHeader from '@/components/Layout/SectionHeader'
import ClimateIndicesTile from '@/components/Tiles/Climate/ClimateIndices'

export default async function Home() {
  const { data: successStories ***REMOVED*** = await directus
    .items(successStoriesCollectionName)
    .readByQuery({
      filter: {
        status: 'published',
    ***REMOVED***,
      limit: 2,
  ***REMOVED***)

  const { data: surveys ***REMOVED*** = await directus
    .items(surveyCollectionName)
    .readByQuery({
      filter: {
        status: 'published',
    ***REMOVED***,
      limit: 2,
  ***REMOVED***)

  return (
    <AnimatedPage>
      <InsightsContainer />
      <Container>
        <SectionHeader variant="climate" />

        <Columns>
          <WeatherTile />
          <ClimateDevelopmentTile />
        </Columns>
        <CO2EmissionsTile />
        <ClimateIndicesTile />
        <Columns>
    ***REMOVED***surveys && surveys[0] && (
            <SurveyTile
              answer={{
                percent: surveys[0].answer_percent,
                text: surveys[0].answer_text,
            ***REMOVED******REMOVED***
              question={surveys[0].question***REMOVED***
            />
      ***REMOVED******REMOVED***
        </Columns>
        <SectionHeader variant="mobility" />
        <Columns>
          <BicycleChartTile />
          <StadtradelnTile />
          <BusTile />
    ***REMOVED***surveys && surveys[1] && (
            <SurveyTile
              answer={{
                percent: surveys[1].answer_percent,
                text: surveys[1].answer_text,
            ***REMOVED******REMOVED***
              question={surveys[1].question***REMOVED***
            />
      ***REMOVED******REMOVED***
        </Columns>
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
    </AnimatedPage>
  )
***REMOVED***

export const revalidate = 60
