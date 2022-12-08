import { BicycleEnd, BicycleStart ***REMOVED*** from '@/components/Icons'

export default function BicycleProgress({ progress ***REMOVED***: { progress: number ***REMOVED***) {
  return (
    <div className="flex w-full">
      <div className="h-8 w-8">
        <BicycleStart />
      </div>
      <div className="flex flex-1 -translate-x-[4px]">
        <div
          className={
            'mt-2 h-2 -translate-y-[1px] rounded-b-sm bg-mobility transition-all'
        ***REMOVED***
          style={{ width: `${progress***REMOVED***%` ***REMOVED******REMOVED***
        ></div>
        <div className="h-8 w-8">
          <BicycleEnd />
        </div>
      </div>
    </div>
  )
***REMOVED***
