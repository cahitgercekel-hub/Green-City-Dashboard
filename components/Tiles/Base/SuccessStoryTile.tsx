import { Button ***REMOVED*** from '@/components/Elements/Button'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
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
      <Title variant="inverse">Erfolgsgeschichte</Title>
      <Spacer />
      <>{children***REMOVED***</>
    </BaseTile>
  )
***REMOVED***
