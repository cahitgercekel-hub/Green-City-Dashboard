import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import OverviewData from './Data'
import { DottedPath, Bike } from '@/components/Icons'
import mapBetween from '@/utils/mapBetween'

interface Overview {
  year: string
  index: number
  month: string
  NumberOfBike: number
  TotalDistance: number
  Zeit: number
}

function retriveMonthData(indexOfMonth: number, year: string): Overview | null {
  return (
    OverviewData.find(
      ({ index, year: dataYear }) =>
        index === indexOfMonth && dataYear === year,
    ) ?? null
  )
}

const distancePerMonth = OverviewData.map(data => data.TotalDistance)
const maxDistance = Math.max(...distancePerMonth)
const minDistance = Math.min(...distancePerMonth)

interface TotalDistanceProps {
  indexofmonth: number
  year: string
}

function TotalDistance({ indexofmonth, year }: TotalDistanceProps) {
  const result = retriveMonthData(indexofmonth, year)

  const progress = mapBetween(
    result ? result.TotalDistance : 0,
    minDistance,
    maxDistance,
    4.5,
    100,
  )

  return (
    <div className="h-1/3 w-full overflow-hidden  md:h-full">
      <div className="flex h-full flex-col">
        <div className="relative h-4/5 overflow-hidden p-2">
          <DottedPath
            className="absolute bottom-4"
            progressPercent={progress}
          />

          <Bike className="absolute bottom-2 right-[10%] h-6 w-20 bg-white px-2 xl:scale-150 xl:transform" />
        </div>
        <div className="flex h-1/5 flex-col items-center justify-center">
          <h3 className="text-2xl font-bold text-mobility">
            <AnimatedNumber>{result ? result.TotalDistance : 0}</AnimatedNumber>
            <span>km</span>
          </h3>
          <strong className="text-xl text-primary md:text-base lg:text-xl">
            Distanzübersicht
          </strong>
        </div>
      </div>
    </div>
  )
}

export default TotalDistance
