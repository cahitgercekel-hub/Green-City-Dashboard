'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import { cva, VariantProps ***REMOVED*** from 'class-variance-authority'
import { useState ***REMOVED*** from 'react'
import Title from '../Elements/Title'

const sliderStyle = cva('relative h-3 md:h-5 flex-1 rounded-lg', {
  variants: {
    variant: {
      primary: 'bg-primary/20',
      mobility: 'bg-mobility/20',
      successStory: 'bg-secondary/20',
      climate: 'bg-climate/20',
      energy: 'bg-energy/20',
      buildings: 'bg-buildings/20',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    variant: 'primary',
***REMOVED***,
***REMOVED***)

export type SliderProps = SliderPrimitive.SliderProps &
  VariantProps<typeof sliderStyle> & {
    labels?: string[]
    firstValueMobile?: number
    trackHeight?: string // Optional prop for track height
    thumbHeight?: string // Optional prop for thumb height
***REMOVED***

export default function Slider({
  firstValueMobile,
  labels,
  variant,
  trackHeight = 'md:h-5', // Default height for track
  thumbHeight = 'md:h-9', // Default height for thumb
  ...props
***REMOVED***: SliderProps) {
  const [value, setValue] = useState<number>(firstValueMobile || 0)

  return (
    <div>
      <div className="flex w-full items-center">
  ***REMOVED***labels && (
          <div className="block md:hidden">
            <Title as="h5" className="mr-2" variant={'primary'***REMOVED***>
        ***REMOVED***labels[value]***REMOVED***
            </Title>
          </div>
    ***REMOVED******REMOVED***
        <SliderPrimitive.Root
          aria-label="Volume"
          className="relative flex h-fit w-full cursor-pointer items-center"
    ***REMOVED***...props***REMOVED***
          onValueChange={([e]) => {
            props.onValueChange && props.onValueChange([e])
            setValue(e)
        ***REMOVED******REMOVED***
        >
          <SliderPrimitive.Track
            className={sliderStyle({ variant ***REMOVED***) + ` ${trackHeight***REMOVED***`***REMOVED***
          />
          <SliderPrimitive.Thumb
            className={`block aspect-square h-6 ${thumbHeight***REMOVED*** touch-pan-x rounded-full bg-primary shadow shadow-primary`***REMOVED***
          />
        </SliderPrimitive.Root>
      </div>
***REMOVED***labels && (
        <div className="mt-3 hidden w-full justify-between md:flex">
    ***REMOVED***labels.map((l, i) => (
            <Title as={'h5'***REMOVED*** key={i***REMOVED*** variant={'primary'***REMOVED***>
        ***REMOVED***l***REMOVED***
            </Title>
      ***REMOVED***)***REMOVED***
        </div>
  ***REMOVED******REMOVED***
    </div>
  )
***REMOVED***
