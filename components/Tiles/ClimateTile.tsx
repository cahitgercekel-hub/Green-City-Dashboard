import { Spacer ***REMOVED*** from '../Elements/Spacer'
import { BaseTile, BaseTileProps ***REMOVED*** from './BaseTile'
import LiveBadge from './LiveBadge'

export type ClimateTileProps = {
  children: React.ReactElement | React.ReactElement[]
  title: string | React.ReactElement
  subtitle?: string
  live?: boolean
***REMOVED*** & BaseTileProps

/**
 * A tile that shows mobility information
 * @param MobilityTileProps properties of the mobility tile
 * @returns Mobility Tile
 */
export default function ClimateTile({
  children,
  live,
  title,
  subtitle,
  ...props
***REMOVED***: ClimateTileProps) {
  return (
    <BaseTile
      footerCenterElement={live ? <LiveBadge /> : undefined***REMOVED***
      variant="climate"
***REMOVED***...props***REMOVED***
    >
      <h1 className="text-6xl font-light text-sky-500">{title***REMOVED***</h1>
      <h3 className="text-xl">{subtitle***REMOVED***</h3>
      <Spacer />
      <>{children***REMOVED***</>
    </BaseTile>
  )
***REMOVED***
