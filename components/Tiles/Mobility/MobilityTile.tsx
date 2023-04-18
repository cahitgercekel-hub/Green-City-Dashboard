import { BicycleIcon ***REMOVED*** from '@/components/Icons'
import IconTile, { IconTileProps ***REMOVED*** from '../Base/IconTile'

export type MobilityTileProps = Omit<IconTileProps, 'variant' | 'icon'>

/**
 * A tile that shows Mobility information
 * @param MobilityTileProps properties of the mobility tile
 * @returns Mobility Tile
 */
export default function MobilityTile({
  children,
  ...props
***REMOVED***: MobilityTileProps) {
  return (
    // @ts-expect-error Server Component
    <IconTile {...props***REMOVED*** icon={BicycleIcon***REMOVED*** variant="mobility">
      <>{children***REMOVED***</>
    </IconTile>
  )
***REMOVED***
