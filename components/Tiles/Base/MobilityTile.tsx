import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import SvgBicycleIcon from '@/components/Icons/BicycleIcon'
import { BaseTile, BaseTileProps ***REMOVED*** from './BaseTile'
import LiveBadge from './LiveBadge'

export type MobilityTileProps = {
  children: React.ReactElement | React.ReactElement[]
  title: string
  subtitle?: string
  live?: boolean
***REMOVED*** & BaseTileProps

/**
 * A tile that shows mobility information
 * @param MobilityTileProps properties of the mobility tile
 * @returns Mobility Tile
 */
export default function MobilityTile({
  children,
  live,
  title,
  subtitle,
  ...props
***REMOVED***: MobilityTileProps) {
  return (
    <BaseTile
      footerCenterElement={live ? <LiveBadge variant="mobility" /> : undefined***REMOVED***
      variant="mobility"
***REMOVED***...props***REMOVED***
    >
      <div className="flex justify-between">
        <span className="text-6xl font-light text-mobility">{title***REMOVED***</span>
        <SvgBicycleIcon className="h-10 w-10" />
      </div>
      <br />
      <span className="text-xl">{subtitle***REMOVED***</span>
      <Spacer />
      <>{children***REMOVED***</>
    </BaseTile>
  )
***REMOVED***
