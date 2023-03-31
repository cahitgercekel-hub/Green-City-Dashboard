import Title from '@/components/Elements/Title'
import BaseNavbar from './BaseNavbar'
import Back from '@/components/Elements/Back'

type Props = {
  title: string
  description: string
***REMOVED***

export default function CollectionNavbar({ title, description ***REMOVED***: Props) {
  return (
    <BaseNavbar actionComponent={<Back />***REMOVED*** variant="secondary">
      <div className="flex w-full flex-col-reverse gap-2 md:flex-row">
        <Title as={'h5'***REMOVED*** className="flex-[2_2_0%]" variant="primary">
    ***REMOVED***description***REMOVED***
        </Title>
        <div className="hidden flex-1 md:block" />
        <Title as={'h2'***REMOVED*** className="flex-1" variant="secondary">
    ***REMOVED***title***REMOVED***
        </Title>
      </div>
    </BaseNavbar>
  )
***REMOVED***
