import { MsKlimadashboardIconsButtonAktivKlima ***REMOVED*** from '@/components/Icons/Misc'
import IconTile, { IconTileProps ***REMOVED*** from '../Base/IconTile'

export type ClimateTileProps = Omit<IconTileProps, 'variant' | 'icon'>

/**
 * A tile that shows climate information
 * @param ClimateTileProps properties of the climate tile
 * @returns Climate Tile
 */
export default function ClimateTile({ children, ...props ***REMOVED***: ClimateTileProps) {
  return (
    <IconTile {...props***REMOVED*** icon={MsKlimadashboardIconsButtonAktivKlima***REMOVED*** variant="climate">
      <>{children***REMOVED***</>
    </IconTile>
  )
***REMOVED***
