import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import { cva, VariantProps ***REMOVED*** from 'class-variance-authority'
import { SVGProps ***REMOVED*** from 'react'
import { BaseTile ***REMOVED*** from './BaseTile'
import LiveBadge from './LiveBadge'

const iconTileTitleStyle = cva('text-6xl font-light', {
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

export type IconTileProps = VariantProps<typeof iconTileTitleStyle> & {
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
***REMOVED***: IconTileProps) {
  const Icon = icon

  return (
    <BaseTile
      footerCenterElement={live ? <LiveBadge variant={variant***REMOVED*** /> : undefined***REMOVED***
      variant={variant***REMOVED***
    >
      <div className="flex justify-between">
        <span className={iconTileTitleStyle({ variant ***REMOVED***)***REMOVED***>{title***REMOVED***</span>
        <Icon className="h-10 w-12" />
      </div>
      <br />
      <span className="text-xl">{subtitle***REMOVED***</span>
      <Spacer />
      <>{children***REMOVED***</>
    </BaseTile>
  )
***REMOVED***
