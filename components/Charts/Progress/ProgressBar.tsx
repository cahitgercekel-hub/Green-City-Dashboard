'use client'

import * as ProgressPrimitive from '@radix-ui/react-progress'

interface Props {
  progress: number
***REMOVED***

function ProgressBar({ progress ***REMOVED***: Props) {
  return (
    <div className="rounded-full border-2 border-primary p-[.25rem]">
      <ProgressPrimitive.Root
        className="h-3 w-full overflow-hidden rounded-full"
        value={progress***REMOVED***
      >
        <ProgressPrimitive.Indicator
          className="flex h-full rounded-full bg-primary duration-300 ease-in-out"
          style={{ width: `${progress***REMOVED***%` ***REMOVED******REMOVED***
        />
      </ProgressPrimitive.Root>
    </div>
  )
***REMOVED***

export default ProgressBar
