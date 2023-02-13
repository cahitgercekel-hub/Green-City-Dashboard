'use client'

import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cva, VariantProps ***REMOVED*** from 'class-variance-authority'

const ProgressStyle = cva('flex h-full rounded-full duration-300 ease-in-out', {
  variants: {
    variant: {
      primary: 'bg-white',
      mobility: 'bg-mobility',
      climate: 'bg-climate',
      building: 'bg-buildings',
      energy: 'bg-energy',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    variant: 'primary',
***REMOVED***,
***REMOVED***)

type ProgressBarProps = VariantProps<typeof ProgressStyle> & {
  progress: number
***REMOVED***

function ProgressBar({ progress, variant ***REMOVED***: ProgressBarProps) {
  return (
    <div className="rounded-full border-2 border-primary p-[.25rem]">
      <ProgressPrimitive.Root
        className="h-3 w-full overflow-hidden rounded-full bg-primary"
        value={progress***REMOVED***
      >
        <ProgressPrimitive.Indicator
          className={ProgressStyle({ variant ***REMOVED***)***REMOVED***
          style={{ width: `${progress***REMOVED***%` ***REMOVED******REMOVED***
        />
      </ProgressPrimitive.Root>
    </div>
  )
***REMOVED***

export default ProgressBar
