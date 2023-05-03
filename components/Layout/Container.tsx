import { cx ***REMOVED*** from 'class-variance-authority'
import { HTMLAttributes ***REMOVED*** from 'react'

export type ContainerProps = HTMLAttributes<HTMLDivElement>

export default function Container({
  className,
  children,
  ...props
***REMOVED***: ContainerProps) {
  return (
    <div
      className={cx(
        'container mx-auto px-2 py-4 md:px-[82px] md:py-10',
        className,
  ***REMOVED******REMOVED***
***REMOVED***...props***REMOVED***
    >
***REMOVED***children***REMOVED***
    </div>
  )
***REMOVED***
