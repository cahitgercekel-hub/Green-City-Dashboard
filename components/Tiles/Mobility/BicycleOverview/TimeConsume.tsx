import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import OverviewData from './Data'
import { ClockIcon ***REMOVED*** from '@/components/Icons'
import useDevice from '@/hooks/useDevice'

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
  const device = useDevice()
  const result = retriveMonthData(indexofmonth, year)
  const numberOfItems =
    device === 'mobile'
      ? Math.ceil(((result ? result.Zeit : 1) * 48) / maxTime)
      : Math.ceil(((result ? result.Zeit : 1) * 120) / maxTime)
  const totalGridCells = device === 'mobile' ? 48 : 120
  const items = Array.from({ length: numberOfItems ***REMOVED***, (_, index) => index + 1)
  const emptyCells = totalGridCells - numberOfItems

  return (
    <div className="h-1/3 w-full overflow-hidden md:h-full">
      <div className="flex h-full flex-col">
        <div className="overflow-hidde h-4/5 p-2">
          <div className="grid-rows-10  grid h-full max-h-full grid-cols-12 content-end ">
      ***REMOVED***Array.from({ length: emptyCells ***REMOVED***).map((_, index) => (
              <div key={`empty-${index***REMOVED***`***REMOVED*** />
        ***REMOVED***)***REMOVED***

      ***REMOVED***items.map(item => (
              <ClockIcon
                key={item***REMOVED***
                className="inline-block max-h-full max-w-full"
              />
        ***REMOVED***)***REMOVED***
          </div>
        </div>

        <div className="flex h-1/5 flex-col items-center justify-center">
          <h3 className="text-2xl font-bold text-mobility">
            <AnimatedNumber>{result ? result.Zeit : 0***REMOVED***</AnimatedNumber>h
          </h3>
          <strong className="text-xl text-primary md:text-base lg:text-xl">
            Datensammelzeit
          </strong>
        </div>
      </div>
    </div>
  )
***REMOVED***

export default TotalTime
