import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import OverviewData from './Data'
import { LocationIcon } from '@/components/Icons'
import useDevice from '@/hooks/useDevice'
import { max } from 'date-fns'

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
  const result = retriveMonthData(indexofmonth, year)
  const numberOfItems =
    device === 'mobile'
      ? Math.ceil(((result ? result.Zeit : 1) * 48) / maxNumOfBikes)
      : Math.ceil(((result ? result.Zeit : 1) * 120) / maxNumOfBikes)
  const totalGridCells = device === 'mobile' ? 48 : 120
  const items = Array.from({ length: numberOfItems }, (_, index) => index + 1)
  const emptyCells = totalGridCells - numberOfItems

  return (
    <div className="h-1/3 w-full overflow-hidden md:h-full">
      <div className="flex h-full flex-col">
        <div className="h-4/5 overflow-hidden p-2">
          <div className="grid-rows-10 grid h-full grid-cols-12 content-end">
            {Array.from({ length: emptyCells }).map((_, index) => (
              <div key={`empty-${index}`} />
            ))}

            {items.map(item => (
              <LocationIcon
                key={item}
                className="inline-block max-h-full max-w-full"
              />
            ))}
          </div>
        </div>

        <div className="flex h-1/5 flex-col items-center justify-center">
          <h3 className="text-2xl font-bold text-mobility">
            <AnimatedNumber>{result ? result.NumberOfBike : 0}</AnimatedNumber>
          </h3>
          <strong className="text-xl text-primary md:text-base lg:text-xl">
            Registrierte Fahrten
          </strong>
        </div>
      </div>
    </div>
  )
}

export default TotalBikes
