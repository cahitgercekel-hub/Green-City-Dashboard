import Link from 'next/link'
import {
  ArrowDownTrayIcon,
  ShareIcon,
  SquaresPlusIcon,
***REMOVED*** from '@heroicons/react/24/outline'
import MoreDetails from '@/components/Elements/MoreDetails'
import { cva, VariantProps ***REMOVED*** from 'class-variance-authority'

const tileFooterStyle = cva('flex flex-1 space-x-1', {
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

type TileFooterProps = VariantProps<typeof tileFooterStyle> & {
  onEmbedClick?: () => void
  onMoreInfoClick?: () => void
  onShareClick?: () => void
  children?: React.ReactElement
***REMOVED***

/**
 * A footer for all tiles with sharing, export and embed button as well as a more information link
 * @returns TileFooter
 */
export default function TileFooter({
  onEmbedClick,
  onMoreInfoClick,
  onShareClick,
  children,
  variant,
***REMOVED***: TileFooterProps) {
  return (
    <div className="mt-6 flex w-full items-center justify-between">
      <div className={tileFooterStyle({ variant ***REMOVED***)***REMOVED***>
        <SquaresPlusIcon
          className="h-6 cursor-pointer stroke-2"
          onClick={onEmbedClick***REMOVED***
        />
        <ShareIcon
          className="h-6 cursor-pointer stroke-2"
          onClick={onShareClick***REMOVED***
        />
        <Link href={'#'***REMOVED***>
          <ArrowDownTrayIcon className="h-6 stroke-2" />
        </Link>
      </div>
      <div className="flex flex-[2_2_0%] justify-center">{children***REMOVED***</div>
      <div className="flex flex-1 justify-end" onClick={onMoreInfoClick***REMOVED***>
        <MoreDetails variant={variant***REMOVED*** />
      </div>
    </div>
  )
***REMOVED***
