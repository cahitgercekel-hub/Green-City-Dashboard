import Image from 'next/image'
import Link from 'next/link'
import Title from '../Elements/Title'

type InsightsTileProps = {
  title: string
  link: string
  image: string
***REMOVED***

export default function InsightsTile({
  title,
  link,
  image,
***REMOVED***: InsightsTileProps) {
  return (
    <div className="h-full overflow-hidden rounded-[36px] bg-white md:rounded-[56px]">
      <Link href={link***REMOVED***>
        <div className="group flex h-full w-full flex-col  bg-secondary transition-all hover:bg-[#f6f7e6]">
          <div className="flex w-full flex-1 justify-between gap-2 py-[33px] pl-[52px] pr-12">
            <Title
              as="h6"
              className="mt-2 flex-[2_2_0%] underline group-hover:text-secondary"
              variant={'inverse'***REMOVED***
            >
              Kacheln filtern
            </Title>
            <Title
              as={'h4'***REMOVED***
              className="flex-[3_3_0%] group-hover:text-secondary"
              variant="inverse"
            >
        ***REMOVED***title***REMOVED***
            </Title>
          </div>
          <div className="relative h-44 overflow-hidden">
            <Image
              alt={'Image'***REMOVED***
              className="object-cover transition-all group-hover:scale-105"
              fill
              src={image***REMOVED***
            />
          </div>
        </div>
      </Link>
    </div>
  )
***REMOVED***
