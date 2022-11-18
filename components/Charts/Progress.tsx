'use client'

import * as ProgressPrimitive from '@radix-ui/react-progress'

interface Props {
  progress: number
***REMOVED***

function Progress({ progress ***REMOVED***: Props) {
  return (
    <div className="rounded-full border-2 border-blue-900 p-[.25rem]">
      <ProgressPrimitive.Root
        className="h-3 w-full overflow-hidden rounded-full"
        value={progress***REMOVED***
      >
        <ProgressPrimitive.Indicator
          className="h-full rounded-full bg-blue-500 duration-300 ease-in-out"
          style={{ width: `${progress***REMOVED***%` ***REMOVED******REMOVED***
        />
      </ProgressPrimitive.Root>
    </div>
  )
***REMOVED***

export default Progress
