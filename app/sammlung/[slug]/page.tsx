import { SuccessStoryTileProps } from '@/components/Tiles/SuccessStory'
import { SurveyTileProps } from '@/components/Tiles/Survey'
import { TileLayout } from '@/components/Tiles/TileLayout'
import { fetchCollection } from '@/lib/api/directusService'
import { getSuccessStoryData } from '@/lib/api/getSuccessStoryData'
import { getSurveyData } from '@/lib/api/getSurveyData'
import directus, {
  collectionsName,
  ENV_DIRECTUS_ITEM_STATUS,
  tileCollectionName,
} from '@/lib/directus'
import getTilesBucket, { BaseTile } from '@/utils/fullWidthBucket'
import TileFactory, { TileType } from '@/utils/TileFactory'
import { sortTiles } from '@/utils/tileLayout'
import { readItem, readItems } from '@directus/sdk'
import { notFound } from 'next/navigation'

export const revalidate = 10

// ISR
export async function generateStaticParams() {
  const data = await directus.request(
    readItems(collectionsName, {
      fields: ['slug'],
      status: {
        _eq: ENV_DIRECTUS_ITEM_STATUS,
      },
    }),
  )

  if (!data) {
    return [{ slug: undefined }]
  }

  return data.map(({ slug }) => ({
    slug,
  }))
}

const getCollection = async (collectionSlug: string) => {
  const data = await directus.request(
    readItems(collectionsName, {
      filter: {
        slug: {
          _eq: collectionSlug,
        },
        status: {
          _eq: ENV_DIRECTUS_ITEM_STATUS,
        },
      },
      fields: ['title', 'description', 'tiles.*'],
    }),
  )

  return data
}

const getTileType = async (tileID: string) => {
  const data = await directus.request(
    readItem(tileCollectionName, tileID, {
      fields: ['tile_id'],
    }),
  )

  return data?.tile_id
}

const getTileComponent = async (tile: BaseTile) => {
  let props:
    | { surveyData?: SurveyTileProps; successStoryData?: SuccessStoryTileProps }
    | undefined
  let type: TileType
  if (tile.collection === 'survey') {
    const surveyData = await getSurveyData(tile.item)
    props = { surveyData }
    type = 'survey'
  } else if (tile.collection === 'successStory') {
    console.log(tile)
    const successStoryData = await getSuccessStoryData(tile.item)
    props = { successStoryData }
    type = 'successStory'
  } else {
    type = (await getTileType(tile.item as string)) as TileType
  }

  return <TileFactory key={tile.item} type={type} {...props} />
}

const getTileComponents = async (tiles: BaseTile[]) => {
  return Promise.all(
    tiles.map(async t => {
      return await getTileComponent(t)
    }),
  )
}

export default async function Collection({
  params,
}: {
  params?: { slug: string }
}) {
  if (!params?.slug) {return notFound()}

  const collection = await fetchCollection(
    params.slug,
    ENV_DIRECTUS_ITEM_STATUS,
  )
  if (!collection?.[0]) {return notFound()}

  const { tiles } = collection[0]
  const sortedTiles = sortTiles(tiles)
  const tileBuckets = await getTilesBucket(sortedTiles)

  return <TileLayout tileBuckets={tileBuckets} />
}
