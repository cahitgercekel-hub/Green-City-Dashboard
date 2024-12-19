// utils/tileUtils.ts
import { fetchTileType ***REMOVED*** from '@/lib/api/directusService'
import { getSuccessStoryData ***REMOVED*** from '@/lib/api/getSuccessStoryData'
import { getSurveyData ***REMOVED*** from '@/lib/api/getSurveyData'
import TileFactory, { TileType ***REMOVED*** from '@/utils/TileFactory'
import { BaseTile ***REMOVED*** from './fullWidthBucket'

export const getTilePropsAndType = async (tile: BaseTile) => {
  if (tile.collection === 'survey') {
    const surveyData = await getSurveyData(tile.item)
    return { type: 'survey' as TileType, props: { surveyData ***REMOVED*** ***REMOVED***
***REMOVED***

  if (tile.collection === 'successStory') {
    const successStoryData = await getSuccessStoryData(tile.item)
    return { type: 'successStory' as TileType, props: { successStoryData ***REMOVED*** ***REMOVED***
***REMOVED***

  const type = (await fetchTileType(tile.item)).tile_id as TileType
  return { type, props: {***REMOVED*** ***REMOVED***
***REMOVED***

export const renderTileComponent = async (tile: BaseTile) => {
  const { type, props ***REMOVED*** = await getTilePropsAndType(tile)
  return <TileFactory key={tile.item***REMOVED*** type={type***REMOVED*** {...props***REMOVED*** />
***REMOVED***

export const renderTileComponents = async (tiles: BaseTile[]) => {
  return Promise.all(tiles.map(tile => renderTileComponent(tile)))
***REMOVED***
