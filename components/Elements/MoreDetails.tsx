import { InformationCircleIcon ***REMOVED*** from '@heroicons/react/24/outline'
import Link from 'next/link'
import type { VariantProps ***REMOVED*** from 'class-variance-authority'
import { cva, cx ***REMOVED*** from 'class-variance-authority'

const style = cva('flex cursor-pointer items-center space-x-1', {
  variants: {
    variant: {
      primary: 'text-primary',
      inverse: 'text-white',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    variant: 'primary',
***REMOVED***,
***REMOVED***)

export type MoreDetailsProps = VariantProps<typeof style> & {
  link?: string
  className?: string
***REMOVED***

export default function MoreDetails({
  link,
  variant,
  className,
***REMOVED***: MoreDetailsProps) {
  const Details = (
    <div className={cx(style({ variant ***REMOVED***), className)***REMOVED***>
      <InformationCircleIcon className="h-5" />
      <span className="text-sm font-semibold underline">Mehr Details</span>
    </div>
  )

  if (!link) {
    return Details
***REMOVED***

  return <Link href={link***REMOVED***>{Details***REMOVED***</Link>
***REMOVED***
