import { MsKlimadashboardIconsButtonAktivEnergieV1 ***REMOVED*** from '@/components/Icons/Button:Übergeordnet'
import IconTile, { IconTileProps ***REMOVED*** from '../Base/IconTile'

export type EnergyTileProps = Omit<IconTileProps, 'variant' | 'icon'>

/**
 * A tile that shows Energy information
 * @param EnergyTileProps properties of the Energy tile
 * @returns Energy Tile
 */
export default function DataTile({ children, ...props ***REMOVED***: EnergyTileProps) {
  return (
    <IconTile {...props***REMOVED*** icon={MsKlimadashboardIconsButtonAktivEnergieV1***REMOVED*** variant="data">
      <>{children***REMOVED***</>
    </IconTile>
  )
***REMOVED***
