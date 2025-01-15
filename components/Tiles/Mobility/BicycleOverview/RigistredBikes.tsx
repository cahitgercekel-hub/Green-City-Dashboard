import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import OverviewData from './Data'
import { LocationIcon } from '@/components/Icons'
import useDevice from '@/hooks/useDevice'

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

const numOfBikesPerMonth = OverviewData.map(data => data.NumberOfBike)
const maxNumOfBikes = Math.max(...numOfBikesPerMonth)

interface TotalBikesProps {
  indexofmonth: number
  year: string
}

function TotalBikes({ indexofmonth, year }: TotalBikesProps) {
  const device = useDevice()
  const countOfGridItem = device === 'mobile' ? 48 : 120
  const numberofRows = device === 'mobile' ? 4 : 10

  const result = retriveMonthData(indexofmonth, year)
  const numberOfItems = Math.ceil(
    ((result ? result.NumberOfBike : 1) * countOfGridItem) / maxNumOfBikes,
  )
  const items = Array.from({ length: numberOfItems }, (_, index) => index + 1)

  return (
    <div className="flex h-full flex-col gap-4">
      {/* rotate-180 to fill the grid from bottom to top  */}
      <div className="relative h-4/5 rotate-180 overflow-hidden p-2">
        <div
          className={`absolute grid grid-cols-12 ${
            numberofRows ? `grid-rows-${numberofRows}` : ''
          }`}
        >
          {items.map(item => (
            <div className="text-center" key={item}>
              <LocationIcon className="h-full w-full rotate-180" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex h-1/5 flex-col items-center justify-center ">
        <h3 className="text-2xl font-bold text-mobility">
          <AnimatedNumber>{result ? result.NumberOfBike : 0}</AnimatedNumber>
        </h3>
        <strong className="text-xl text-primary md:text-base lg:text-xl">
          Registrierte Fahrten
        </strong>
      </div>
    </div>
  )
}

export default TotalBikes
