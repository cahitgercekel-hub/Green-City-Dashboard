import { BuildingIcon ***REMOVED*** from '@/components/Icons'
import { EmbedTileProps ***REMOVED*** from '../Base/BaseTile'
import IconTile, { DataSourceProps, IconTileProps ***REMOVED*** from '../Base/IconTile'

export type BuildingTileProps = DataSourceProps &
  EmbedTileProps &
  Pick<IconTileProps, 'children' | 'title' | 'subtitle' | 'live'>

/**
 * A tile that shows building information
 * @param BuildingTileProps properties of the building tile
 * @returns Building Tile
 */
export default function BuildingTile({
  children,
  live,
  title,
  subtitle,
  dataSource,
  dataRetrieval,
  embedId,
***REMOVED***: BuildingTileProps) {
  return (
    <IconTile
      dataRetrieval={dataRetrieval***REMOVED***
      dataSource={dataSource***REMOVED***
      embedId={embedId***REMOVED***
      icon={BuildingIcon***REMOVED***
      live={live***REMOVED***
      subtitle={subtitle***REMOVED***
      title={title***REMOVED***
      variant="building"
    >
      <>{children***REMOVED***</>
    </IconTile>
  )
***REMOVED***
