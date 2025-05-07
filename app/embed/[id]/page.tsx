import Title from '@/components/Elements/Title'
import directus, { directusImage } from '@/lib/directus'
import TileFactory, { TileType } from '@/utils/TileFactory'
import { readSingleton } from '@directus/sdk'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 10

type Params = Promise<{ id: TileType }>

export default async function Embed({ params }: { params: Params }) {
  const { id } = await params

  if (!id) {
    return notFound()
  }

  const theme = await directus.request(readSingleton('theme'))

  return (
    <div className="relative">
      <TileFactory type={id} />
      {/* <div className="sticky bottom-0 right-0 flex flex-col justify-end gap-4 bg-white py-2 md:flex-row md:items-center">
        <Image
          alt="Logo"
          className="h-10 w-fit"
          layout="fill"
          src={directusImage(theme.navbar_image)}
        />
        <Title as="h7" className="leading-normal" variant={'primary'}>
          Mehr Daten zum Klimaschutz und zur Klimaanpassung
          <br />
          gibt es auf{' '}
          <Link
            className="underline"
            href="https://klimadashboard.ms/"
            target="_blank"
          >
            klimadashboard.ms
          </Link>
        </Title>
      </div> */}
    </div>
  )
}
