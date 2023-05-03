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
  dataURL?: string
  hasMoreDetails?: boolean
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
  dataURL,
  hasMoreDetails,
***REMOVED***: TileFooterProps) {
  function IconButtons() {
    return (
      <div className={tileFooterStyle({ variant ***REMOVED***)***REMOVED***>
        <SquaresPlusIcon
          className="h-6 cursor-pointer stroke-2"
          onClick={onEmbedClick***REMOVED***
        />
        <ShareIcon
          className="h-6 cursor-pointer stroke-2"
          onClick={onShareClick***REMOVED***
        />
  ***REMOVED***dataURL && (
          <Link href={dataURL***REMOVED*** target="_blank">
            <ArrowDownTrayIcon className="h-6 stroke-2" />
          </Link>
    ***REMOVED******REMOVED***
      </div>
***REMOVED***
***REMOVED***

  return (
    <div className="mt-6 flex w-full flex-col justify-between gap-2 md:flex-row md:items-center">
      <div className="hidden md:block">
        <IconButtons />
        <div className="flex flex-[2_2_0%] justify-center">{children***REMOVED***</div>
  ***REMOVED***hasMoreDetails && (
          <div className="flex flex-1 justify-end" onClick={onMoreInfoClick***REMOVED***>
            <MoreDetails variant={variant***REMOVED*** />
          </div>
    ***REMOVED******REMOVED***
  ***REMOVED***!hasMoreDetails && <div className="flex flex-1 justify-end"></div>***REMOVED***
      </div>
      <div className="flex flex-col gap-2 md:hidden">
        <IconButtons />

        <div className="flex w-full items-center justify-between">
    ***REMOVED***hasMoreDetails && (
            <div
              className="flex flex-1 justify-start"
              onClick={onMoreInfoClick***REMOVED***
            >
              <MoreDetails variant={variant***REMOVED*** />
            </div>
      ***REMOVED******REMOVED***
    ***REMOVED***!hasMoreDetails && <div className="flex flex-1 justify-start"></div>***REMOVED***
          <div className="flex flex-1 justify-end">{children***REMOVED***</div>
        </div>
      </div>
    </div>
  )
***REMOVED***
