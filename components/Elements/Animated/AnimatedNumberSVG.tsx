'use client'

import { animated, useSpring ***REMOVED*** from '@react-spring/web'

type AnimatedNumberProps = React.SVGAttributes<SVGTSpanElement> & {
  children: number
  decimals?: number
***REMOVED***

export default function AnimatedNumberSVG({
  children,
  decimals,
  ...props
***REMOVED***: AnimatedNumberProps) {
  const springProps = useSpring({ val: children, from: { val: 0 ***REMOVED*** ***REMOVED***)

  return (
    <animated.tspan {...props***REMOVED***>
***REMOVED***springProps.val.to(val =>
        new Intl.NumberFormat('de-DE', {
          maximumFractionDigits: decimals || 0,
      ***REMOVED***).format(val),
  ***REMOVED******REMOVED***
    </animated.tspan>
  )
***REMOVED***
