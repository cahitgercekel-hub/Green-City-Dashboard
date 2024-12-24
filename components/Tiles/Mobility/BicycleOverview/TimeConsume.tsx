import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import OverviewData from './Data'
import { ClockIcon ***REMOVED*** from '@/components/Icons'

interface Overview {
  year: string
  index: number
  month: string
  NumberOfBike: number
  TotalDistance: number
  Zeit: number
***REMOVED***

function retriveMonthData(
  indexofmonth: number,
  yearinput: string,
): Overview | null {
  const result = OverviewData.find(
    data => data.index === indexofmonth && data.year === yearinput,
  )
  return result ?? null
***REMOVED***
const totalTimePerMonth = OverviewData.map(data => data.Zeit)
const maxTime = Math.max(...totalTimePerMonth)

interface TotalDistanceProps {
  indexofmonth: number
  year: string
***REMOVED***

function TotalTime({ indexofmonth, year ***REMOVED***: TotalDistanceProps) {
  const result = retriveMonthData(indexofmonth, year)
  const timeDifference = Math.ceil(((result ? result.Zeit : 1) * 24) / maxTime)
  const progress = timeDifference > 1 ? timeDifference : 1
  const items = Array.from({ length: progress ***REMOVED***, (_, index) => index + 1)

  return (
    <div className=" flex h-full flex-col justify-center text-center">
***REMOVED***/* rotate-180 to fill the grid from bottom to top */***REMOVED***
      <div className="relative h-4/5 rotate-180 overflow-hidden p-2">
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 md:grid-cols-4 md:grid-rows-6">
    ***REMOVED***items.map(item => (
            <div className="text-center" key={item***REMOVED***>
              <ClockIcon className="h-full w-full rotate-180" />
            </div>
      ***REMOVED***)***REMOVED***
        </div>
      </div>

      <div className="flex h-1/5 flex-col items-center justify-center text-mobility">
        <h3 className="text-base font-bold underline">
          <AnimatedNumber>{result ? result.Zeit : 0***REMOVED***</AnimatedNumber>
          <span>h</span>
        </h3>
        <strong className=" text-xs md:text-base">Datensammelzeit</strong>
      </div>
    </div>
  )
***REMOVED***

export default TotalTime
