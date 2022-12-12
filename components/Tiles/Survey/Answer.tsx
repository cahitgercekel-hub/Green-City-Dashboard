'use client'

import { ComponentPropsWithRef, useEffect ***REMOVED*** from 'react'
import { animated, AnimatedProps, useSpring ***REMOVED*** from 'react-spring'

export type SurveyAnswerProps = AnimatedProps<ComponentPropsWithRef<'div'>> & {
  percent: number
  text: string
***REMOVED***

export default function SurveyAnswer({
  percent,
  text,
  ...props
***REMOVED***: SurveyAnswerProps) {
  const [animatedNumber, api] = useSpring({ val: 0 ***REMOVED***, [])

  useEffect(() => {
    api({ val: percent ***REMOVED***)
***REMOVED***, [percent])

  return (
    <animated.div className="absolute top-0 left-0 w-full" style={{ ...props ***REMOVED******REMOVED***>
      <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-4">
        <span className="text-5xl font-medium md:text-7xl">
          <animated.span>
      ***REMOVED***animatedNumber.val.to(val => val.toFixed(0))***REMOVED***
          </animated.span>
          %
        </span>
        <p className="text-lg">{text***REMOVED***</p>
      </div>
    </animated.div>
  )
***REMOVED***
