import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import { cva, cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import { SVGProps ***REMOVED*** from 'react'
import { BaseTile ***REMOVED*** from './BaseTile'
import LiveBadge from './LiveBadge'

const iconTileTitleStyle = cva('text-4xl md:text-6xl font-light', {
  variants: {
    variant: {
      primary: 'text-primary',
      mobility: 'text-mobility',
      successStory: 'text-primary',
      climate: 'text-climate',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    variant: 'primary',
***REMOVED***,
***REMOVED***)

export type DataSourceProps = {
  dataRetrieval?: string
  dataSource: string
***REMOVED***

export type IconTileProps = VariantProps<typeof iconTileTitleStyle> &
  DataSourceProps & {
    children: React.ReactElement | React.ReactElement[]
    title: string | React.ReactElement
    icon: (_props: SVGProps<SVGSVGElement>) => JSX.Element
    subtitle?: string
    live?: boolean
***REMOVED***

/**
 * A tile that shows mobility information
 * @param MobilityTileProps properties of the mobility tile
 * @returns Mobility Tile
 */
export default function IconTile({
  children,
  live,
  title,
  icon,
  subtitle,
  variant,
  dataRetrieval,
  dataSource,
***REMOVED***: IconTileProps) {
  const Icon = icon

  return (
    <BaseTile
      footerCenterElement={live ? <LiveBadge variant={variant***REMOVED*** /> : undefined***REMOVED***
      variant={variant***REMOVED***
    >
      <div
        className={cx('flex justify-between', iconTileTitleStyle({ variant ***REMOVED***))***REMOVED***
      >
        <span>{title***REMOVED***</span>
        <Icon className="h-10 w-12" />
      </div>
      <span className="text-lg md:text-xl">{subtitle***REMOVED***</span>
      <Spacer />
      <>{children***REMOVED***</>
      <Spacer />
      <div className="flex space-x-2 text-xs text-primary">
        <span className="font-semibold">
          Datenstand: {dataRetrieval ?? (live ? 'live' : 'undefined')***REMOVED***
        </span>
        <span>Quelle: {dataSource***REMOVED***</span>
      </div>
    </BaseTile>
  )
***REMOVED***
