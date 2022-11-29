import Image from 'next/image'

type InsightsTileProps = {
  title: string
***REMOVED***

export default function InsightsTile({ title ***REMOVED***: InsightsTileProps) {
  return (
    <div className="group w-full overflow-hidden rounded-t rounded-b-3xl bg-secondary-500 transition-all hover:bg-secondary-100">
      <div className="p-8 text-white group-hover:text-secondary-500">
        <p className="text-4xl">{title***REMOVED***</p>
        <p className="mt-8 underline">Alle anzeigen</p>
      </div>
      <div className="relative h-56">
        <Image
          alt={'Image'***REMOVED***
          className="object-cover"
          fill
          src={
            'https://doinggeoandethics.files.wordpress.com/2022/11/grafik-19.png'
        ***REMOVED***
        />
      </div>
    </div>
  )
***REMOVED***
