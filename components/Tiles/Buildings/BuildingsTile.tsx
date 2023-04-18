import { BuildingIcon ***REMOVED*** from '@/components/Icons'
import IconTile, { IconTileProps ***REMOVED*** from '../Base/IconTile'

export type BuildingTileProps = Omit<IconTileProps, 'variant' | 'icon'>

/**
 * A tile that shows building information
 * @param BuildingTileProps properties of the building tile
 * @returns Building Tile
 */
export default function BuildingTile({
  children,
  ...props
***REMOVED***: BuildingTileProps) {
  return (
    // @ts-expect-error Server Component
    <IconTile {...props***REMOVED*** icon={BuildingIcon***REMOVED*** variant="building">
      <>{children***REMOVED***</>
    </IconTile>
  )
***REMOVED***
