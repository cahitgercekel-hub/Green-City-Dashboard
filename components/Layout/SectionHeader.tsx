import { ArrowsUpDownIcon ***REMOVED*** from '@heroicons/react/24/outline'
import { cva, cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import Collapsible from '../Elements/Collapsible'
import Title from '../Elements/Title'
import { BicycleIcon, BuildingIcon, MuensterIcon ***REMOVED*** from '../Icons'

const sectionHeaderStyle = cva('', {
  variants: {
    variant: {
      climate: 'text-climate border-climate',
      mobility: 'text-mobility border-mobility',
      building: 'text-buildings border-buildings',
  ***REMOVED***,
***REMOVED***,
***REMOVED***)

export default function SectionHeader({
  variant,
***REMOVED***: VariantProps<typeof sectionHeaderStyle>) {
  let title = 'Münster'
  let Icon = MuensterIcon

  if (variant === 'climate') {
    title = 'Klima in Münster'
***REMOVED***
  if (variant === 'mobility') {
    title = 'Mobilität'
    Icon = BicycleIcon
***REMOVED***
  if (variant === 'building') {
    title = 'Gebäude'
    Icon = BuildingIcon
***REMOVED***

  return (
    <div className="my-4 flex w-full items-center justify-between">
      <div className="flex items-center space-x-4">
        <div
          className={cx(
            'h-14 w-20 rounded-full border-2 p-2',
            sectionHeaderStyle({ variant ***REMOVED***),
      ***REMOVED******REMOVED***
        >
          <Icon className="mx-auto h-full" />
        </div>
        <Title as="h4" variant={'primary'***REMOVED***>
    ***REMOVED***title***REMOVED***
        </Title>
      </div>
      <Collapsible
        trigger={
          <div className="flex items-center space-x-2 text-primary">
            <ArrowsUpDownIcon className="h-4 w-4" />

            <span className="underline underline-offset-2">
              Kacheln sortieren
            </span>
          </div>
      ***REMOVED***
      >
        <div>Hello World</div>
      </Collapsible>
    </div>
  )
***REMOVED***
