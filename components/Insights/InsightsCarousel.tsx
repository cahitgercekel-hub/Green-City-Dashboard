'use client'

import { Splide, SplideSlide ***REMOVED*** from '@splidejs/react-splide'
import InsightsTile from './InsightsTile'
import { directusImage ***REMOVED*** from '@/lib/directus'
import '@splidejs/react-splide/css'
import useDevice from '@/hooks/useDevice'

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
    <Splide
      options={{
        arrows: false,
        gap: '1.5rem',
        padding: padding[device],
        pagination: false,
        perPage: pages[device],
    ***REMOVED******REMOVED***
    >
***REMOVED***insights?.map(({ slug, title, image ***REMOVED***) => (
        <SplideSlide key={slug***REMOVED***>
          <InsightsTile
            image={directusImage(image)***REMOVED***
            link={`/sammlung/${slug***REMOVED***`***REMOVED***
            title={title***REMOVED***
          />
        </SplideSlide>
  ***REMOVED***)***REMOVED***
    </Splide>
  )
***REMOVED***
