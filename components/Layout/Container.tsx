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
        'container mx-auto px-2 py-4 xs:px-[16px] md:px-[32px] md:py-10 xl:px-[82px]',
        className,
  ***REMOVED******REMOVED***
***REMOVED***...props***REMOVED***
    >
***REMOVED***children***REMOVED***
    </div>
  )
***REMOVED***
