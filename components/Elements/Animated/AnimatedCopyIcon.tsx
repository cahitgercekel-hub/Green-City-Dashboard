import { CheckIcon, ClipboardDocumentIcon ***REMOVED*** from '@heroicons/react/24/outline'
import { animated, useTransition ***REMOVED*** from '@react-spring/web'
import { useEffect, useState ***REMOVED*** from 'react'

type AnimatedCopyIconProps = {
  onClick: () => void
***REMOVED***

export default function AnimatedCopyIcon({ onClick ***REMOVED***: AnimatedCopyIconProps) {
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!success) {
      return
  ***REMOVED***

    setTimeout(() => setSuccess(false), 2000)
***REMOVED***, [success])

  const transitions = useTransition(success, {
    from: { opacity: 0 ***REMOVED***,
    enter: { opacity: 1 ***REMOVED***,
    leave: { opacity: 0 ***REMOVED***,
***REMOVED***)

  const handleOnClick = () => {
    onClick()
    setSuccess(true)
***REMOVED***

  return transitions((styles, isSuccess) => (
    <animated.div
      className="absolute top-0 cursor-pointer rounded-lg bg-transparent p-2 hover:bg-zinc-100"
      onClick={handleOnClick***REMOVED***
      style={styles***REMOVED***
    >
***REMOVED***isSuccess ? (
        <CheckIcon className="w-5 stroke-2 text-secondary" />
  ***REMOVED*** : (
        <ClipboardDocumentIcon className="w-5 stroke-2 text-primary" />
  ***REMOVED******REMOVED***
    </animated.div>
  ))
***REMOVED***
