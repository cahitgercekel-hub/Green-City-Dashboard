import { TileLayout } from '@/components/Tiles/TileLayout'
import { getPage, getPages } from '@/lib/api/prismaService'
import getTilesBucket, { BaseTile } from '@/utils/fullWidthBucket'
import { sortTiles } from '@/utils/tileLayout'
import { notFound } from 'next/navigation'

export const revalidate = 10

// ISR
export async function generateStaticParams() {
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return []
  }

  const pages = await getPages('PUBLISHED')

  if (!pages || pages.length === 0) {
    return [{ slug: undefined }]
  }

  return pages.map(({ slug }) => ({
    slug,
  }))
}

const toBaseTile = (tile: {
  id: string
  itemId: string
  itemType: string
  sort: number
}): BaseTile => ({
  id: tile.id,
  itemId: tile.itemId,
  itemType: tile.itemType,
  sort: tile.sort,
  item: tile.itemId,
  collection: 'page',
})

export default async function Page(props: { params?: Promise<{ slug: string }> }) {
  const params = await props.params
  if (!params?.slug) {
    return notFound()
  }

  const page = await getPage(params.slug)

  if (!page) {
    return notFound()
  }

  const tiles = page.tiles ?? []
  const sortedTiles = sortTiles(tiles.map(toBaseTile))
  const tileBuckets = await getTilesBucket(sortedTiles)

  return <TileLayout tileBuckets={tileBuckets} />
}
