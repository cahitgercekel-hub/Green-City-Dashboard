import { Spacer ***REMOVED*** from '../Elements/Spacer'
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
      footerCenterElement={live ? <LiveBadge /> : undefined***REMOVED***
      variant="mobility"
***REMOVED***...props***REMOVED***
    >
      <h1 className="text-6xl font-light text-green-500">{title***REMOVED***</h1>
      <h3 className="text-xl">{subtitle***REMOVED***</h3>
      <Spacer />
      <>{children***REMOVED***</>
    </BaseTile>
  )
***REMOVED***
