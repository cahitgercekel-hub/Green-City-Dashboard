import { MuensterIcon ***REMOVED*** from '@/components/Icons'
import { EmbedTileProps ***REMOVED*** from '../Base/BaseTile'
import IconTile, { DataSourceProps ***REMOVED*** from '../Base/IconTile'

export type ClimateTileProps = DataSourceProps &
  EmbedTileProps & {
    children: React.ReactElement | React.ReactElement[]
    title: string | React.ReactElement
    subtitle?: string
    live?: boolean
***REMOVED***

/**
 * A tile that shows mobility information
 * @param MobilityTileProps properties of the mobility tile
 * @returns Mobility Tile
 */
export default function ClimateTile({
  children,
  live,
  title,
  subtitle,
  dataSource,
  dataRetrieval,
  embedId,
***REMOVED***: ClimateTileProps) {
  return (
    <IconTile
      dataRetrieval={dataRetrieval***REMOVED***
      dataSource={dataSource***REMOVED***
      embedId={embedId***REMOVED***
      icon={MuensterIcon***REMOVED***
      live={live***REMOVED***
      subtitle={subtitle***REMOVED***
      title={title***REMOVED***
      variant="climate"
    >
      <>{children***REMOVED***</>
    </IconTile>
  )
***REMOVED***
