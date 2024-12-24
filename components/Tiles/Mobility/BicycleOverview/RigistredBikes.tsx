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
  const countOfGridItem = device === 'mobile' ? 60 : 120
  const numberofRows = device === 'mobile' ? 5 : 10

  const result = retriveMonthData(indexofmonth, year)
  const numberOfItems = Math.ceil(
    ((result ? result.NumberOfBike : 1) * countOfGridItem) / maxNumOfBikes,
  )
  const items = Array.from({ length: numberOfItems }, (_, index) => index + 1)

  return (
    <div className="flex h-full flex-col justify-center">
      {/* rotate-180 to fill the grid from bottom to top  */}
      <div className="relative h-4/5 rotate-180 overflow-hidden">
        <div
          className="absolute inset-0 grid"
          style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: `repeat(${numberofRows}, 1fr)`,
          }}
        >
          {items.map(item => (
            <div className="grid-item" key={item}>
              <LocationIcon className="h-full w-full rotate-180" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex h-1/5 flex-col items-center justify-center text-mobility">
        <h3 className="text-base font-bold underline">
          <AnimatedNumber>{result ? result.NumberOfBike : 0}</AnimatedNumber>
        </h3>
        <strong className="text-xs md:text-base">Registrierte Fahrten</strong>
      </div>
    </div>
  )
}

export default TotalBikes
