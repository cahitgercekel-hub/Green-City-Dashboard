'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'

export type SliderProps = SliderPrimitive.SliderProps & {
  labels?: string[]
***REMOVED***

export default function Slider({ labels, ...props ***REMOVED***: SliderProps) {
  return (
    <div className="mt-1 p-1">
      <SliderPrimitive.Root
        aria-label="Volume"
        className="relative flex w-full items-center"
  ***REMOVED***...props***REMOVED***
      >
        <SliderPrimitive.Track className="relative h-4 flex-1 rounded-full bg-gray-500 mix-blend-color-burn" />
        <SliderPrimitive.Thumb className="block h-6 w-6 touch-pan-x rounded-full bg-primary shadow shadow-primary" />
      </SliderPrimitive.Root>
***REMOVED***labels && (
        <div className="mt-2 flex w-full justify-between">
    ***REMOVED***labels.map((l, i) => (
            <span className="text-primary" key={i***REMOVED***>
        ***REMOVED***l***REMOVED***
            </span>
      ***REMOVED***)***REMOVED***
        </div>
  ***REMOVED******REMOVED***
    </div>
  )
***REMOVED***
