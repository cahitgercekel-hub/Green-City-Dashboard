import { GoToButton ***REMOVED*** from '../Elements/GoToButton'
import { Spacer ***REMOVED*** from '../Elements/Spacer'
import SectionHeader from '../Layout/SectionHeader'

interface ViewProps {
  type: 'climate' | 'mobility' | 'energy' | 'building'
  children: React.ReactNode | React.ReactNode[]
***REMOVED***

export default function BaseView({ type, children ***REMOVED***: ViewProps) {
  return (
    <>
      <SectionHeader variant={type***REMOVED*** />
***REMOVED***children***REMOVED***
      <Spacer size={'sm'***REMOVED*** />
      <GoToButton type={type***REMOVED*** />
      <Spacer size={'lg'***REMOVED*** />
    </>
  )
***REMOVED***
