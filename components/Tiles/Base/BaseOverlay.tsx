import { XMarkIcon ***REMOVED*** from '@heroicons/react/24/outline'
import { animated, AnimatedProps ***REMOVED*** from '@react-spring/web'
import { cva, VariantProps ***REMOVED*** from 'class-variance-authority'
import { ComponentPropsWithRef ***REMOVED*** from 'react'

export const overlayStyle = cva(
  'absolute left-0 top-0 z-20 h-full w-full md:pt-20 md:pr-20 md:pl-[70px] md:pb-[70px] backdrop-blur p-8 flex flex-col-reverse md:flex-row',
  {
    variants: {
      variant: {
        primary: 'bg-primary/90',
        secondary: 'bg-secondary/90',
        mobility: 'bg-mobility/90',
        successStory: 'bg-primary/90',
        climate: 'bg-climate/90',
        building: 'bg-buildings/90',
        energy: 'bg-energy/90',
        data: 'bg-secondary/90',
    ***REMOVED***,
  ***REMOVED***,
    defaultVariants: {
      variant: 'primary',
  ***REMOVED***,
***REMOVED***,
)

type BaseOverlayProps = VariantProps<typeof overlayStyle> &
  AnimatedProps<ComponentPropsWithRef<'div'>> & {
    children: React.ReactNode | React.ReactNode[]
    onClose?: () => void
***REMOVED***

export default function BaseOverlay({
  variant,
  children,
  onClose,
  ...props
***REMOVED***: BaseOverlayProps) {
  return (
    <animated.div {...props***REMOVED*** className={overlayStyle({ variant ***REMOVED***)***REMOVED***>
      <div className="w-full flex-1 overflow-hidden">{children***REMOVED***</div>
      <XMarkIcon
        className="h-6 cursor-pointer self-end text-white md:ml-[35px] md:self-auto"
        onClick={onClose***REMOVED***
      />
    </animated.div>
  )
***REMOVED***
