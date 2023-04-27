import Title from '@/components/Elements/Title'

interface Props {
  children: string
***REMOVED***

export default function LabelSeperator({ children ***REMOVED***: Props) {
  return (
    <div className="flex w-full items-center gap-2">
      <div className="flex-none">
        <Title as={'h5'***REMOVED*** className="w-fit" variant={'primary'***REMOVED***>
    ***REMOVED***children***REMOVED***
        </Title>
      </div>
      <hr className="flex-1 border-[#707070]" />
    </div>
  )
***REMOVED***
