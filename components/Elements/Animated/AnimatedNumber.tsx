'use client'

import { animated, useSpring ***REMOVED*** from 'react-spring'

type AnimatedNumberProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: number
  decimals?: number
***REMOVED***

export default function AnimatedNumber({
  children,
  decimals,
  ...props
***REMOVED***: AnimatedNumberProps) {
  const springProps = useSpring({ val: children ***REMOVED***)

  return (
    <animated.span {...props***REMOVED***>
***REMOVED***springProps.val.to(val => val.toFixed(decimals || 0))***REMOVED***
    </animated.span>
  )
***REMOVED***
