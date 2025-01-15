import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import OverviewData from './Data'
import { ClockIcon } from '@/components/Icons'

interface Overview {
  year: string
  index: number
  month: string
  NumberOfBike: number
  TotalDistance: number
  Zeit: number
}

function retriveMonthData(
  indexofmonth: number,
  yearinput: string,
): Overview | null {
  const result = OverviewData.find(
    data => data.index === indexofmonth && data.year === yearinput,
  )
  return result ?? null
}
const totalTimePerMonth = OverviewData.map(data => data.Zeit)
const maxTime = Math.max(...totalTimePerMonth)

interface TotalDistanceProps {
  indexofmonth: number
  year: string
}

function TotalTime({ indexofmonth, year }: TotalDistanceProps) {
  const result = retriveMonthData(indexofmonth, year)
  const timeDifference = Math.ceil(((result ? result.Zeit : 1) * 48) / maxTime)
  const progress = timeDifference > 1 ? timeDifference : 1
  const items = Array.from({ length: progress }, (_, index) => index + 1)

  return (
    <div className=" flex h-full flex-col justify-center gap-4 text-center">
      {/* rotate-180 to fill the grid from bottom to top */}
      <div className="relative h-4/5 rotate-180 overflow-hidden p-2">
        <div className="absolute grid grid-cols-8 grid-rows-2 md:grid-cols-8 md:grid-rows-5">
          {items.map(item => (
            <div className="text-center" key={item}>
              <ClockIcon className="h-full w-full rotate-180" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex h-1/5 flex-col items-center justify-center text-mobility">
        <h3 className="text-2xl font-bold">
          <AnimatedNumber>{result ? result.Zeit : 0}</AnimatedNumber>
          <span>h</span>
        </h3>
        <strong className=" text-xl text-primary md:text-base lg:text-xl">
          Datensammelzeit
        </strong>
      </div>
    </div>
  )
}

export default TotalTime
