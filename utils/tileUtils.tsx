// utils/tileUtils.ts
import { fetchTileType } from '@/lib/api/directusService'
import { getSuccessStoryData } from '@/lib/api/getSuccessStoryData'
import { getSurveyData } from '@/lib/api/getSurveyData'
import TileFactory, { TileType } from '@/utils/TileFactory'
import { BaseTile } from './fullWidthBucket'

export const getTilePropsAndType = async (tile: BaseTile) => {
  if (tile.collection === 'survey') {
    const surveyData = await getSurveyData(tile.item)
    return { type: 'survey' as TileType, props: { surveyData } }
  }

  if (tile.collection === 'successStory') {
    const successStoryData = await getSuccessStoryData(tile.item)
    return { type: 'successStory' as TileType, props: { successStoryData } }
  }

  const type = (await fetchTileType(tile.item)).tile_id as TileType
  return { type, props: {} }
}

export const renderTileComponent = async (tile: BaseTile) => {
  const { type, props } = await getTilePropsAndType(tile)
  return <TileFactory key={tile.item} type={type} {...props} />
}

export const renderTileComponents = async (tiles: BaseTile[]) => {
  return Promise.all(tiles.map(tile => renderTileComponent(tile)))
}
