'use client'

import { ChevronLeftIcon, ChevronRightIcon ***REMOVED*** from '@heroicons/react/24/outline'
import { Splide, SplideProps, SplideSlide ***REMOVED*** from '@splidejs/react-splide'
import { cx ***REMOVED*** from 'class-variance-authority'
import { useEffect, useRef, useState ***REMOVED*** from 'react'
import '@splidejs/react-splide/css'

interface CarouselProps extends SplideProps {
  children: React.ReactElement[]
  arrows?: boolean
  pagination?: boolean
***REMOVED***

export default function Carousel({
  children,
  arrows = false,
  pagination = false,
  ...props
***REMOVED***: CarouselProps) {
  const splideRef = useRef<Splide>(null)

  const [curIndex, setCurIndex] = useState(0)

  useEffect(() => {
    splideRef.current &&
      splideRef.current.splide?.on('move', e => setCurIndex(e))
***REMOVED***)

  return (
    <div className="relative">
      <Splide
        ref={splideRef***REMOVED***
  ***REMOVED***...props***REMOVED***
        options={{
          ...props.options,
          arrows: false,
          pagination: false,
      ***REMOVED******REMOVED***
      >
  ***REMOVED***children?.map(child => (
          <SplideSlide key={child.key***REMOVED***>{child***REMOVED***</SplideSlide>
    ***REMOVED***)***REMOVED***
      </Splide>
***REMOVED***(arrows || pagination) && (
        <div className="flex w-full items-center justify-between">
    ***REMOVED***arrows && (
            <ChevronLeftIcon
              className="h-6 text-buildings"
              onClick={() => splideRef.current?.splide?.go('<')***REMOVED***
            />
      ***REMOVED******REMOVED***
    ***REMOVED***pagination && (
            <div className="flex gap-1">
        ***REMOVED***[...Array(children.length)].map((_, i) => (
                <div
                  className={cx(
                    'h-3 w-3 rounded-full border-2 border-buildings transition-colors',
                    curIndex === i ? 'bg-buildings' : 'bg-transparent',
              ***REMOVED******REMOVED***
                  key={i***REMOVED***
                  onClick={() => splideRef.current?.splide?.go(i)***REMOVED***
                />
          ***REMOVED***)***REMOVED***
            </div>
      ***REMOVED******REMOVED***
    ***REMOVED***arrows && (
            <ChevronRightIcon
              className="h-6 text-buildings"
              onClick={() => splideRef.current?.splide?.go('>')***REMOVED***
            />
      ***REMOVED******REMOVED***
        </div>
  ***REMOVED******REMOVED***
    </div>
  )
***REMOVED***
