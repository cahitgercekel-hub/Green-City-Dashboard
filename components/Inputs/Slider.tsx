'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import Title from '../Elements/Title'

export type SliderProps = SliderPrimitive.SliderProps & {
  labels?: string[]
***REMOVED***

export default function Slider({ labels, ...props ***REMOVED***: SliderProps) {
  return (
    <div>
      <SliderPrimitive.Root
        aria-label="Volume"
        className="relative flex w-full items-center"
  ***REMOVED***...props***REMOVED***
      >
        <SliderPrimitive.Track className="relative h-5 flex-1 rounded-full bg-gray-500 mix-blend-color-burn" />
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
