import Link from 'next/link'

import MoreDetails from '@/components/Elements/MoreDetails'
import { cva, VariantProps ***REMOVED*** from 'class-variance-authority'
import { Download, Share, SquaresPlus ***REMOVED*** from '@/components/Icons'

const tileFooterStyle = cva('flex flex-1 gap-4', {
  variants: {
    variant: {
      primary: 'text-primary fill-primary',
      inverse: 'text-white fill-white',
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
        <SquaresPlus
          className="h-6 cursor-pointer stroke-2 px-1"
          onClick={onEmbedClick***REMOVED***
        />
        <Share
          className="h-6 cursor-pointer stroke-2 px-1"
          onClick={onShareClick***REMOVED***
        />
  ***REMOVED***dataURL && (
          <Link href={dataURL***REMOVED*** target="_blank">
            <Download className="h-6 stroke-2 px-1" />
          </Link>
    ***REMOVED******REMOVED***
      </div>
***REMOVED***
***REMOVED***

  return (
    <div className="mt-6">
      <div className="hidden w-full flex-row items-center justify-between gap-2 lg:flex">
        <IconButtons />
        <div className="flex flex-[2_2_0%] justify-center">{children***REMOVED***</div>
  ***REMOVED***hasMoreDetails && (
          <div className="flex flex-1 justify-end" onClick={onMoreInfoClick***REMOVED***>
            <MoreDetails variant={variant***REMOVED*** />
          </div>
    ***REMOVED******REMOVED***
  ***REMOVED***!hasMoreDetails && <div className="flex flex-1 justify-end"></div>***REMOVED***
      </div>
      <div className="flex flex-col gap-2 lg:hidden">
  ***REMOVED***/* <IconButtons /> */***REMOVED***

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
