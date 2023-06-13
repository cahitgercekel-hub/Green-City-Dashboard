import { EnergyIcon ***REMOVED*** from '@/components/Icons'
import IconTile, { IconTileProps ***REMOVED*** from '../Base/IconTile'

export type EnergyTileProps = Omit<IconTileProps, 'variant' | 'icon'>

/**
 * A tile that shows Energy information
 * @param EnergyTileProps properties of the Energy tile
 * @returns Energy Tile
 */
export default function DataTile({ children, ...props ***REMOVED***: EnergyTileProps) {
  return (
    <IconTile {...props***REMOVED*** icon={EnergyIcon***REMOVED*** variant="data">
      <>{children***REMOVED***</>
    </IconTile>
  )
***REMOVED***
