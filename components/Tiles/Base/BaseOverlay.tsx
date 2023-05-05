import { XMarkIcon ***REMOVED*** from '@heroicons/react/24/outline'
import { ComponentPropsWithRef ***REMOVED*** from 'react'
import { animated, AnimatedProps ***REMOVED*** from '@react-spring/web'

type BaseOverlayProps = AnimatedProps<ComponentPropsWithRef<'div'>> & {
  children: React.ReactNode | React.ReactNode[]
  onClose?: () => void
***REMOVED***

export default function BaseOverlay({
  children,
  onClose,
  ...props
***REMOVED***: BaseOverlayProps) {
  return (
    <animated.div
***REMOVED***...props***REMOVED***
      className="absolute left-0 top-0 z-20 h-full w-full bg-primary bg-opacity-90 p-8 backdrop-blur md:p-12"
    >
      <div className="flex w-full justify-end">
        <XMarkIcon
          className="h-6 cursor-pointer text-white"
          onClick={onClose***REMOVED***
        />
      </div>
***REMOVED***children***REMOVED***
    </animated.div>
  )
***REMOVED***
