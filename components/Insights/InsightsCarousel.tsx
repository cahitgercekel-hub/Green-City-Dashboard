'use client'

import InsightsTile from './InsightsTile'
import { directusImage ***REMOVED*** from '@/lib/directus'
import useDevice from '@/hooks/useDevice'
import Carousel from '../Elements/Carousel'
import { useWindowSize ***REMOVED*** from 'react-use'

const pages = {
  desktop: 3,
  tablet: 2,
  mobile: 1,
***REMOVED***

const padding = {
  desktop: '0px',
  tablet: '16px',
  mobile: '16px',
***REMOVED***

type Insight = {
  image: string
  slug?: string | undefined
  title: string
***REMOVED***

export default function InsightsCarousel({
  insights,
***REMOVED***: {
  insights: Insight[]
***REMOVED***) {
  const device = useDevice()
  const { width ***REMOVED*** = useWindowSize()

  return (
    <Carousel
      arrows={device != 'desktop'***REMOVED***
      options={{
        gap: '1.5rem',
        // sorry for this quick and dirty hack
        padding:
          width < 1440 && width > 1024
            ? '2.5rem'
            : width >= 1920
            ? '82px'
            : padding[device],
        perPage: pages[device],
    ***REMOVED******REMOVED***
    >
***REMOVED***insights?.map(({ slug, title, image ***REMOVED***) => (
        <InsightsTile
          image={directusImage(image)***REMOVED***
          key={slug***REMOVED***
          link={`/sammlung/${slug***REMOVED***`***REMOVED***
          title={title***REMOVED***
        />
  ***REMOVED***)***REMOVED***
    </Carousel>
  )
***REMOVED***
