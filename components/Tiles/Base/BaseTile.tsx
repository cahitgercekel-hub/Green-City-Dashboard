import clsx from 'clsx'
import TileFooter from './TileFooter'

const variants = {
  primary: 'bg-primary-100',
  mobility: 'bg-green-100',
  successStory: 'bg-primary-100',
  climate: 'bg-sky-100',
***REMOVED***

export type ImageProps =
  | { startImage: React.ReactElement; endImage?: never ***REMOVED***
  | { endImage: React.ReactElement; startImage?: never ***REMOVED***
  | { endImage?: undefined; startImage?: undefined ***REMOVED***

export type BaseTileProps = {
  children: React.ReactElement | React.ReactElement[]
  variant?: keyof typeof variants
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
  variant = 'primary',
  className = '',
  startImage,
  endImage,
  footerCenterElement,
***REMOVED***: BaseTileProps) {
  return (
    <div className="pb-8">
      <div
        className={clsx(
          'flex h-fit overflow-hidden rounded-3xl',
          variants[variant],
          className,
    ***REMOVED******REMOVED***
      >
  ***REMOVED***startImage***REMOVED***
        <div className="flex w-full flex-col justify-between p-12">
          <div>{children***REMOVED***</div>
          <TileFooter>{footerCenterElement***REMOVED***</TileFooter>
        </div>
  ***REMOVED***endImage***REMOVED***
      </div>
    </div>
  )
***REMOVED***
