import { MuensterIcon ***REMOVED*** from '@/components/Icons'
import IconTile from '../Base/IconTile'

export type ClimateTileProps = {
  children: React.ReactElement | React.ReactElement[]
  title: string | React.ReactElement
  subtitle?: string
  live?: boolean
***REMOVED***

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
***REMOVED***: ClimateTileProps) {
  return (
    <IconTile
      icon={MuensterIcon***REMOVED***
      live={live***REMOVED***
      subtitle={subtitle***REMOVED***
      title={title***REMOVED***
      variant="climate"
    >
      <>{children***REMOVED***</>
    </IconTile>
  )
***REMOVED***
