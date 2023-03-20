import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import Title from '@/components/Elements/Title'
import BicycleProgress from './BicycleProgress'

type BicycleRowProps = {
  name: string
  count: number
  min: number
  max: number
***REMOVED***

function mapBetween(
  currentNum: number,
  min: number,
  max: number,
  minAllowed = 0,
  maxAllowed = 100,
) {
  return (
    ((maxAllowed - minAllowed) * (currentNum - min)) / (max - min) + minAllowed
  )
***REMOVED***

export default function BicycleRow({ name, count, min, max ***REMOVED***: BicycleRowProps) {
  const progress = mapBetween(count, min * 0.9, max * 1.1)

  return (
    <div className="my-2 flex w-full items-end">
      <div className="w-28 flex-none md:w-40">
        <Title as={'h5'***REMOVED*** variant={'primary'***REMOVED***>
    ***REMOVED***name***REMOVED***
        </Title>
        <Title as={'h3'***REMOVED*** variant={'mobility'***REMOVED***>
          <AnimatedNumber>{count***REMOVED***</AnimatedNumber>
        </Title>
      </div>
      <div className="flex-1">
        <BicycleProgress progress={progress***REMOVED*** />
      </div>
    </div>
  )
***REMOVED***
