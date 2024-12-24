import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import OverviewData from './Data'
import { DottedPath, BikeIcon ***REMOVED*** from '@/components/Icons'
import mapBetween from '@/utils/mapBetween'

interface Overview {
  year: string
  index: number
  month: string
  NumberOfBike: number
  TotalDistance: number
  Zeit: number
***REMOVED***

function retriveMonthData(indexOfMonth: number, year: string): Overview | null {
  return (
    OverviewData.find(
      ({ index, year: dataYear ***REMOVED***) =>
        index === indexOfMonth && dataYear === year,
***REMOVED*** ?? null
  )
***REMOVED***

const distancePerMonth = OverviewData.map(data => data.TotalDistance)
const maxDistance = Math.max(...distancePerMonth)
const minDistance = Math.min(...distancePerMonth)

interface TotalDistanceProps {
  indexofmonth: number
  year: string
***REMOVED***

function TotalDistance({ indexofmonth, year ***REMOVED***: TotalDistanceProps) {
  const result = retriveMonthData(indexofmonth, year)

  const progress = mapBetween(
    result ? result.TotalDistance : 0,
    minDistance,
    maxDistance,
    4.5,
    100,
  )

  return (
    <div className="flex h-full flex-col justify-center text-center">
      <div className="relative h-4/5 overflow-hidden">
        <DottedPath className="absolute bottom-0" progressPercent={progress***REMOVED*** />

        <BikeIcon className="absolute bottom-[-4%] right-[10%] h-5 w-16 bg-white px-2 xs:bottom-[-2%]" />
      </div>
      <div className="flex h-1/5 flex-col items-center justify-center text-mobility">
        <h3 className="text-base font-bold underline">
          <AnimatedNumber>{result ? result.TotalDistance : 0***REMOVED***</AnimatedNumber>
          <span>km</span>
        </h3>
        <strong className="text-xs md:text-base">Distanzübersicht</strong>
      </div>
    </div>
  )
***REMOVED***

export default TotalDistance
