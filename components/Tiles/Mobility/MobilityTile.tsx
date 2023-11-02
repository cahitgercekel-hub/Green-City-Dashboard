import { MsKlimadashboardIconsButtonAktivMobil ***REMOVED*** from '@/components/Icons/Button:Übergeordnet'
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
    <IconTile {...props***REMOVED*** icon={MsKlimadashboardIconsButtonAktivMobil***REMOVED*** variant="mobility">
      <>{children***REMOVED***</>
    </IconTile>
  )
***REMOVED***
