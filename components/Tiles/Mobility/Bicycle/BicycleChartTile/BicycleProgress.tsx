import { BicycleEnd, BicycleStart ***REMOVED*** from '@/components/Icons'

export default function BicycleProgress({ progress ***REMOVED***: { progress: number ***REMOVED***) {
  return (
    <div className="flex w-full">
      <div className="w-8 translate-x-[4px]">
        <BicycleStart />
      </div>
      <div className="flex flex-1">
        <div
          className={
            'mt-2 h-2 -translate-y-[1px] rounded-b-sm bg-mobility transition-all'
        ***REMOVED***
          style={{ width: `${progress***REMOVED***%` ***REMOVED******REMOVED***
        ></div>
        <div className="w-8 -translate-x-[1px]">
          <BicycleEnd />
        </div>
      </div>
    </div>
  )
***REMOVED***
