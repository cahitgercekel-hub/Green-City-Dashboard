'use client'

import InsightsTile from './InsightsTile'
import { directusImage ***REMOVED*** from '@/lib/directus'
import useDevice from '@/hooks/useDevice'
import Carousel from '../Elements/Carousel'

const pages = {
  desktop: 3,
  tablet: 2,
  mobile: 1,
***REMOVED***

const padding = {
  desktop: '82px',
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

  return (
    <Carousel
      arrows={device != 'desktop'***REMOVED***
      options={{
        gap: '1.5rem',
        padding: padding[device],
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
