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
    <BaseTile variant="successStory" {...props***REMOVED***>
      <h1>Erfolgsgeschichte</h1>
      <>{children***REMOVED***</>
    </BaseTile>
  )
***REMOVED***
