import { MuensterIcon ***REMOVED*** from '@/components/Icons'
import IconTile, { IconTileProps ***REMOVED*** from '../Base/IconTile'

export type ClimateTileProps = Omit<IconTileProps, 'variant' | 'icon'>

/**
 * A tile that shows climate information
 * @param ClimateTileProps properties of the climate tile
 * @returns Climate Tile
 */
export default function ClimateTile({ children, ...props ***REMOVED***: ClimateTileProps) {
  return (
    // @ts-expect-error Server Component
    <IconTile {...props***REMOVED*** icon={MuensterIcon***REMOVED*** variant="climate">
      <>{children***REMOVED***</>
    </IconTile>
  )
***REMOVED***
