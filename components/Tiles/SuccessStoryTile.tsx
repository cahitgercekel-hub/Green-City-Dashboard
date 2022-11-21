import { Button ***REMOVED*** from '../Elements/Button'
import { Spacer ***REMOVED*** from '../Elements/Spacer'
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
      <h1 className="text-lg font-semibold text-blue-900">Erfolgsgeschichte</h1>
      <Spacer />
      <>{children***REMOVED***</>
    </BaseTile>
  )
***REMOVED***
