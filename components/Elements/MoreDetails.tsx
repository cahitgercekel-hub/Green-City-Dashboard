import { InformationCircleIcon ***REMOVED*** from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'

const variants = {
  primary: 'text-primary',
  inverse: 'text-white',
***REMOVED***

export type MoreDetailsProps = {
  link?: string
  variant?: keyof typeof variants
  className?: string
***REMOVED***

export default function MoreDetails({
  link,
  variant = 'primary',
  className,
***REMOVED***: MoreDetailsProps) {
  const Details = (
    <div
      className={clsx(
        'flex cursor-pointer items-center space-x-1',
        variants[variant],
        className,
  ***REMOVED******REMOVED***
    >
      <InformationCircleIcon className="h-5" />
      <span className="text-sm font-semibold underline">Mehr Details</span>
    </div>
  )

  if (!link) {
    return Details
***REMOVED***

  return <Link href={link***REMOVED***>{Details***REMOVED***</Link>
***REMOVED***
