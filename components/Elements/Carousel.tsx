'use client'

import { ChevronLeftIcon, ChevronRightIcon ***REMOVED*** from '@heroicons/react/24/outline'
import { Splide, SplideProps, SplideSlide ***REMOVED*** from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { cva, cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import { useEffect, useRef, useState ***REMOVED*** from 'react'

interface CarouselProps extends SplideProps, VariantProps<typeof arrowStyle> {
  children: React.ReactElement[]
  arrows?: boolean
  pagination?: boolean
***REMOVED***

const arrowStyle = cva('h-6', {
  variants: {
    variant: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      mobility: 'text-mobility',
      successStory: 'text-primary',
      climate: 'text-climate',
      building: 'text-buildings',
      energy: 'text-energy',
      inverse: 'text-white',
      dark: 'text-zinc-900',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    variant: 'primary',
***REMOVED***,
***REMOVED***)

export default function Carousel({
  children,
  arrows = false,
  pagination = false,
  variant,
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
              className={arrowStyle({ variant ***REMOVED***)***REMOVED***
              onClick={() => splideRef.current?.splide?.go('<')***REMOVED***
            />
      ***REMOVED******REMOVED***
    ***REMOVED***pagination && (
            <div className="flex gap-1">
        ***REMOVED***[...Array(children.length)].map((_, i) => (
                <div
                  className={cx(
                    'h-3 w-3 rounded-lg border-2 border-buildings transition-colors',
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
              className={arrowStyle({ variant ***REMOVED***)***REMOVED***
              onClick={() => splideRef.current?.splide?.go('>')***REMOVED***
            />
      ***REMOVED******REMOVED***
        </div>
  ***REMOVED******REMOVED***
    </div>
  )
***REMOVED***
