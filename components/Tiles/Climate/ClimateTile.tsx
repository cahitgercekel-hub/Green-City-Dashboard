import SvgWiesbaden from '@/components/Icons/Wiesbaden'
import IconTile, { IconTileProps ***REMOVED*** from '../Base/IconTile'

export type ClimateTileProps = Omit<IconTileProps, 'variant' | 'icon'>

/**
 * A tile that shows climate information
 * @param ClimateTileProps properties of the climate tile
 * @returns Climate Tile
 */
export default function ClimateTile({ children, ...props ***REMOVED***: ClimateTileProps) {
  return (
    <IconTile {...props***REMOVED*** icon={SvgWiesbaden***REMOVED*** variant="climate">
      <>{children***REMOVED***</>
    </IconTile>
  )
***REMOVED***
