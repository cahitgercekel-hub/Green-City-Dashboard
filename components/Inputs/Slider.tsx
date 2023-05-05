'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import Title from '../Elements/Title'
import { cva, VariantProps ***REMOVED*** from 'class-variance-authority'

const sliderStyle = cva('relative h-5 flex-1 rounded-full bg-opacity-20', {
  variants: {
    variant: {
      primary: 'bg-primary',
      mobility: 'bg-mobility',
      successStory: 'bg-secondary',
      climate: 'bg-climate',
      energy: 'bg-energy',
      buildings: 'bg-buildings',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    variant: 'primary',
***REMOVED***,
***REMOVED***)

export type SliderProps = SliderPrimitive.SliderProps &
  VariantProps<typeof sliderStyle> & {
    labels?: string[]
***REMOVED***

export default function Slider({ labels, variant, ...props ***REMOVED***: SliderProps) {
  return (
    <div>
      <SliderPrimitive.Root
        aria-label="Volume"
        className="relative flex w-full items-center"
  ***REMOVED***...props***REMOVED***
      >
        <SliderPrimitive.Track className={sliderStyle({ variant ***REMOVED***)***REMOVED*** />
        <SliderPrimitive.Thumb className="block aspect-square h-9 touch-pan-x rounded-full bg-primary shadow shadow-primary" />
      </SliderPrimitive.Root>
***REMOVED***labels && (
        <div className="mt-3 flex w-full justify-between">
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
