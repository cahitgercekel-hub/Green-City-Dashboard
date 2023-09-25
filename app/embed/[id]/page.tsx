import Title from '@/components/Elements/Title'
import TileFactory, { TileType ***REMOVED*** from '@/utils/TileFactory'
import Link from 'next/link'
import { notFound ***REMOVED*** from 'next/navigation'
import MSLogo from '@/assets/logos/stadtlogo-muenster.png'
import Image from 'next/image'

export const revalidate = 10

export default async function Embed({ params ***REMOVED***: { params: { id: TileType ***REMOVED*** ***REMOVED***) {
  const { id ***REMOVED*** = params

  if (!id) {
    return notFound()
***REMOVED***

  return (
    <div>
      <TileFactory type={id***REMOVED*** />
      <div className="mt-4 flex h-full w-full flex-col justify-end gap-4 md:flex-row md:items-center">
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
