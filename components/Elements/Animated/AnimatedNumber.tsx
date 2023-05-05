'use client'

import { animated, useSpring ***REMOVED*** from '@react-spring/web'

type AnimatedNumberProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: number
  decimals?: number
***REMOVED***

export default function AnimatedNumber({
  children,
  decimals,
  ...props
***REMOVED***: AnimatedNumberProps) {
  const springProps = useSpring({ val: children, from: { val: 0 ***REMOVED*** ***REMOVED***)

  return (
    <animated.span {...props***REMOVED***>
***REMOVED***springProps.val.to(val =>
        new Intl.NumberFormat('de-DE', {
          maximumFractionDigits: decimals || 0,
      ***REMOVED***).format(val),
  ***REMOVED******REMOVED***
    </animated.span>
  )
***REMOVED***
