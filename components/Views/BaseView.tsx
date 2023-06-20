import getSurveysForCategory from '@/lib/api/getSurveyForCategories'
import { GoToButton ***REMOVED*** from '../Elements/GoToButton'
import { Spacer ***REMOVED*** from '../Elements/Spacer'
import SectionHeader from '../Layout/SectionHeader'
import Columns from '../Layout/Columns'
import SurveyTile from '../Tiles/Survey'
import getSuccessStoriesForCategory from '@/lib/api/getSuccessStories'
import SuccessStoryTile from '../Tiles/SuccessStory'

interface ViewProps {
  type: 'climate' | 'mobility' | 'energy' | 'building'
  children: React.ReactNode | React.ReactNode[]
  showSuccessStories?: boolean
  showSurveys?: boolean
  showGoToButton?: boolean
***REMOVED***

// TODO: read from directus
const categoryID = {
  climate: '8f6f89ac-d6bf-4e6c-8445-d1503075963a',
  mobility: '4fa0c731-13d7-4ce9-8407-91a8a71da1cb',
  energy: '0c7620c0-7d0c-45e7-b801-0bc44715f731',
  building: '84ff5cfe-184a-41dd-885d-ff9c2c8c9dcf',
***REMOVED***

export default async function BaseView({
  type,
  children,
  showSurveys = true,
  showSuccessStories = true,
  showGoToButton = false,
***REMOVED***: ViewProps) {
  const surveys = await getSurveysForCategory(categoryID[type])
  const success = await getSuccessStoriesForCategory(categoryID[type])

  return (
    <>
      <SectionHeader variant={type***REMOVED*** />
***REMOVED***children***REMOVED***
***REMOVED***showSurveys && surveys && (
        <Columns>
    ***REMOVED***surveys.map(survey => (
            <SurveyTile
              answer={{
                text: survey.answer_text,
                percent: survey.answer_percent,
            ***REMOVED******REMOVED***
              dataRetrieval={survey.dataRetrieval***REMOVED***
              dataSource={survey.dataSource***REMOVED***
              id={survey.id***REMOVED***
              key={survey.id***REMOVED***
              question={survey.question***REMOVED***
              title={survey.title***REMOVED***
            />
      ***REMOVED***)***REMOVED***
        </Columns>
  ***REMOVED******REMOVED***
***REMOVED***showSuccessStories && success && (
        <>
    ***REMOVED***success.map(success => (
            <SuccessStoryTile
              id={success.id***REMOVED***
              image={success.image***REMOVED***
              imagePosition={success.image_position***REMOVED***
              key={success.id***REMOVED***
              link={success.link***REMOVED***
              moreInfo={success.details***REMOVED***
              text={success.text***REMOVED***
            />
      ***REMOVED***)***REMOVED***
        </>
  ***REMOVED******REMOVED***
***REMOVED***showGoToButton && (
        <>
          <Spacer size={'sm'***REMOVED*** />
          <GoToButton type={type***REMOVED*** />
        </>
  ***REMOVED******REMOVED***
      <Spacer size={'xl'***REMOVED*** />
    </>
  )
***REMOVED***
