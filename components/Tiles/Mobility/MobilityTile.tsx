import SvgBicycleIcon from '@/components/Icons/BicycleIcon'
import IconTile from '../Base/IconTile'

export type MobilityTileProps = {
  children: React.ReactElement | React.ReactElement[]
  title: string
  subtitle?: string
  live?: boolean
***REMOVED***

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
***REMOVED***: MobilityTileProps) {
  return (
    <IconTile
      icon={SvgBicycleIcon***REMOVED***
      live={live***REMOVED***
      subtitle={subtitle***REMOVED***
      title={title***REMOVED***
      variant="mobility"
    >
      <>{children***REMOVED***</>
    </IconTile>
  )
***REMOVED***
