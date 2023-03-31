import SectionTitle from './SectionTitle'

export default function SectionHeader({
  variant,
***REMOVED***: {
  variant: 'climate' | 'mobility' | 'energy' | 'building'
***REMOVED***) {
  return (
    <div className="my-4 flex w-full items-center justify-between">
      <SectionTitle variant={variant***REMOVED*** />
***REMOVED***/* <SortTiles /> */***REMOVED***
    </div>
  )
***REMOVED***
