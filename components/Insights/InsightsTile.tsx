import Image from 'next/image'
import lastenrad from '@/assets/images/lastenrad.jpg'

type InsightsTileProps = {
  title: string
***REMOVED***

export default function InsightsTile({ title ***REMOVED***: InsightsTileProps) {
  return (
    <div className="group w-full overflow-hidden rounded-t rounded-b-xl bg-green-500 transition-all hover:bg-green-200">
      <div className="p-8 text-white group-hover:text-green-500">
        <p className="text-4xl">{title***REMOVED***</p>
        <p className="mt-8 underline">Alle anzeigen</p>
      </div>
      <div className="relative">
        <Image alt={'Image'***REMOVED*** src={lastenrad***REMOVED*** />
      </div>
    </div>
  )
***REMOVED***
