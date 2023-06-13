import { InformationCircleIcon ***REMOVED*** from '@heroicons/react/24/outline'
import Link from 'next/link'
import type { VariantProps ***REMOVED*** from 'class-variance-authority'
import { cva, cx ***REMOVED*** from 'class-variance-authority'
import Title from './Title'

const style = cva('flex cursor-pointer items-center gap-1 md:gap-3', {
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
  lessDetails?: boolean
  onClick?: () => void
***REMOVED***

export default function MoreDetails({
  link,
  variant,
  className,
  lessDetails,
  onClick,
***REMOVED***: MoreDetailsProps) {
  const Details = (
    <div className={cx(style({ variant ***REMOVED***), className)***REMOVED*** onClick={onClick***REMOVED***>
      <InformationCircleIcon className="h-6" />
      <Title as="h6" className="underline">
  ***REMOVED***lessDetails ? 'Weniger Details' : 'Mehr Details'***REMOVED***
      </Title>
    </div>
  )

  if (!link) {
    return Details
***REMOVED***

  return <Link href={link***REMOVED***>{Details***REMOVED***</Link>
***REMOVED***
