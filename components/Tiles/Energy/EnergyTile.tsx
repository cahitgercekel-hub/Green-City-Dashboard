import { MsKlimadashboardIconsButtonAktivEnergieV1 ***REMOVED*** from '@/components/Icons/Misc'
import IconTile, { IconTileProps ***REMOVED*** from '../Base/IconTile'

export type EnergyTileProps = Omit<IconTileProps, 'variant' | 'icon'>

/**
 * A tile that shows Energy information
 * @param EnergyTileProps properties of the Energy tile
 * @returns Energy Tile
 */
export default function EnergyTile({ children, ...props ***REMOVED***: EnergyTileProps) {
  return (
    <IconTile {...props***REMOVED*** icon={MsKlimadashboardIconsButtonAktivEnergieV1***REMOVED*** variant="energy">
      <>{children***REMOVED***</>
    </IconTile>
  )
***REMOVED***
