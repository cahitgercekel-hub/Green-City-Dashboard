import { animated, useTransition ***REMOVED*** from 'react-spring'

type AnimatedRollingElementProps = {
  children: React.ReactElement | React.ReactElement[]
***REMOVED***

export default function AnimatedRollingElement({
  children,
***REMOVED***: AnimatedRollingElementProps) {
  const transitions = useTransition(children, {
    from: {
      opacity: 0,
      transform: 'translate3d(0,100%,0)',
  ***REMOVED***,
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' ***REMOVED***,
    leave: { opacity: 0, transform: 'translate3d(0,-100%,0)' ***REMOVED***,
***REMOVED***)

  return transitions((style, item) => (
    <animated.div className="absolute" style={style***REMOVED***>
***REMOVED***item***REMOVED***
    </animated.div>
  ))
***REMOVED***
