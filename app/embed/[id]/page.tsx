import MSLogo from '@/assets/logos/stadtlogo-muenster.png'
import Title from '@/components/Elements/Title'
import TileFactory, { TileType ***REMOVED*** from '@/utils/TileFactory'
import Image from 'next/image'
import Link from 'next/link'
import { notFound ***REMOVED*** from 'next/navigation'

export const revalidate = 10

export default async function Embed({ params ***REMOVED***: { params: { id: TileType ***REMOVED*** ***REMOVED***) {
  const { id ***REMOVED*** = params

  if (!id) {
    return notFound()
***REMOVED***

  return (
    <div className="relative">
      <TileFactory type={id***REMOVED*** />
      <div className="sticky bottom-0 right-0 flex flex-col justify-end gap-4 bg-white py-2 md:flex-row md:items-center">
        <Image
          alt="Logo der Stadt Münster"
          className="h-10 w-fit"
          src={MSLogo***REMOVED***
        />
        <Title as="h7" className="leading-normal" variant={'primary'***REMOVED***>
          Mehr Daten zum Klimaschutz und zur Klimaanpassung
          <br />
          in Münster gibt es auf{' '***REMOVED***
          <Link
            className="underline"
            href="https://klimadashboard.ms/"
            target="_blank"
          >
            klimadashboard.ms
          </Link>
        </Title>
      </div>
    </div>
  )
***REMOVED***
