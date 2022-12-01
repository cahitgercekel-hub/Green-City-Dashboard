import { animated, useSpring ***REMOVED*** from 'react-spring'
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

  const props = useSpring({ to: { val: count ***REMOVED***, config: { duration: 100 ***REMOVED*** ***REMOVED***)

  return (
    <div className="my-2 flex w-full items-center">
      <div className="w-40 flex-none">
        <p className="text-primary">{name***REMOVED***</p>
        <animated.p className="text-3xl text-green-500">
    ***REMOVED***props.val.to(e =>
            e.toFixed(0).replace(/\B(?=(\d{3***REMOVED***)+(?!\d))/g, '.'),
      ***REMOVED******REMOVED***
        </animated.p>
      </div>
      <div className="flex-1">
        <BicycleProgress progress={progress***REMOVED*** />
      </div>
    </div>
  )
***REMOVED***
