import clsx from 'clsx'
import TileFooter from './TileFooter'

const variants = {
  primary: 'bg-green-100 rounded-3xl',
  successStory: 'bg-blue-100 rounded-lg',
***REMOVED***

export type ImageProps =
  | { startImage: React.ReactElement; endImage?: never ***REMOVED***
  | { endImage: React.ReactElement; startImage?: never ***REMOVED***
  | { endImage?: undefined; startImage?: undefined ***REMOVED***

export type BaseTileProps = {
  children: React.ReactElement | React.ReactElement[]
  variant?: keyof typeof variants
  className?: string
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
***REMOVED***: BaseTileProps) {
  return (
    <div className={clsx('flex overflow-hidden', variants[variant], className)***REMOVED***>
***REMOVED***startImage***REMOVED***
      <div className="flex w-full flex-col justify-between p-4">
        <div>{children***REMOVED***</div>
        <TileFooter />
      </div>
***REMOVED***endImage***REMOVED***
    </div>
  )
***REMOVED***
