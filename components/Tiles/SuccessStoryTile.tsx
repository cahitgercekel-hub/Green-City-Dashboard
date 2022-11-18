import { Button ***REMOVED*** from '../Elements/Button'
import { BaseTile, ImageProps ***REMOVED*** from './BaseTile'

export type SuccessStoryTileProps = {
  children: React.ReactElement | React.ReactElement[]
***REMOVED*** & ImageProps

/**
 * A tile that represents a success story
 * @param SuccessStoryTileProps properties of the success story tile
 * @returns SuccessStoryTileProps
 */
export default function SuccessStoryTile({
  children,
  ...props
***REMOVED***: SuccessStoryTileProps) {
  return (
    <BaseTile
      footerCenterElement={<Button>Weitere Informationen</Button>***REMOVED***
      variant="successStory"
***REMOVED***...props***REMOVED***
    >
      <h1>Erfolgsgeschichte</h1>
      <>{children***REMOVED***</>
    </BaseTile>
  )
***REMOVED***
