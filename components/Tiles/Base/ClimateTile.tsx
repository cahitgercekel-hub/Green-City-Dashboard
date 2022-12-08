import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
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
      footerCenterElement={live ? <LiveBadge variant="climate" /> : undefined***REMOVED***
      variant="climate"
***REMOVED***...props***REMOVED***
    >
      <span className="text-6xl font-light text-climate">{title***REMOVED***</span>
      <br />
      <span className="text-xl">{subtitle***REMOVED***</span>
      <Spacer />
      <>{children***REMOVED***</>
    </BaseTile>
  )
***REMOVED***
