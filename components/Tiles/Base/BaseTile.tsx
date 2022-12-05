import { cva, cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import TileFooter from './TileFooter'

const baseTileStyle = cva('flex h-fit overflow-hidden rounded-3xl', {
  variants: {
    variant: {
      primary: 'bg-primary-100',
      mobility: 'bg-green-100',
      successStory: 'bg-primary-100',
      climate: 'bg-sky-100',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    variant: 'primary',
***REMOVED***,
***REMOVED***)

export type ImageProps =
  | { startImage: React.ReactElement; endImage?: never ***REMOVED***
  | { endImage: React.ReactElement; startImage?: never ***REMOVED***
  | { endImage?: undefined; startImage?: undefined ***REMOVED***

export type BaseTileProps = VariantProps<typeof baseTileStyle> & {
  children: React.ReactElement | React.ReactElement[]
  className?: string
  footerCenterElement?: React.ReactElement
***REMOVED*** & ImageProps

/**
 * A basic configruable tile
 * @param BaseTileProps basic properties of the tile
 * @returns BaseTile
 */
export function BaseTile({
  children,
  variant,
  className = '',
  startImage,
  endImage,
  footerCenterElement,
***REMOVED***: BaseTileProps) {
  return (
    <div className="pb-4 md:pb-8">
      <div className={cx(baseTileStyle({ variant ***REMOVED***), className)***REMOVED***>
  ***REMOVED***startImage***REMOVED***
        <div className="flex w-full flex-col justify-between p-8 md:p-12">
          <div>{children***REMOVED***</div>
          <TileFooter>{footerCenterElement***REMOVED***</TileFooter>
        </div>
  ***REMOVED***endImage***REMOVED***
      </div>
    </div>
  )
***REMOVED***
