import { TileType ***REMOVED*** from '@/utils/TileFactory'
import { rest ***REMOVED*** from '@directus/sdk'

const directusUrl =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055'

export const mainPageName = 'MainPage'
export const collectionsName = 'collections'
export const tileCollectionName = 'tiles'
export const surveyCollectionName = 'survey'
export const successStoriesCollectionName = 'successStory'
export const themeCollectionName = 'theme'

export type DirectusStatus = 'draft' | 'archived' | 'published'

export type MainPage = {
  id: string
  status: DirectusStatus
  tiles: {
    id: string
    collections_id: string
    item: string
    collection: typeof tileCollectionName | typeof surveyCollectionName
    sort: number
***REMOVED***[]
***REMOVED***

export type Collection = {
  id: string
  status: DirectusStatus
  title: string
  description?: string
  image: string
  slug?: string
  tiles: {
    id: string
    collections_id: string
    item: string
    collection: typeof tileCollectionName | typeof surveyCollectionName
    sort: number
***REMOVED***[]
***REMOVED***

export type Tile = {
  // id: string
  name: string
  // group: any
  full_width: boolean
  tile_id: string & TileType
  details: string
  data_url: string
  info: string
***REMOVED***

export type SuccessStory = {
  id: string
  status: DirectusStatus
  text: string
  link: string
  image?: string
  image_position: 'left' | 'right'
  category: string
  details: string
***REMOVED***

export type Survey = {
  id: string
  status: DirectusStatus
  title: string
  question: string
  answer_percent: number
  answer_text: string
  category: string
  dataSource: string
  dataRetrieval: Date
***REMOVED***

export type Theme = {
  id: string
  status: DirectusStatus
  title: string
  // navbar
  navbar_image: string
  navbar_image_link: string
  // colors
  primary: string
  primary_light: string
  secondary: string
  secondary_light: string
  climate: string
  climate_light: string
  buildings: string
  buildings_light: string
  mobility: string
  mobility_light: string
  energy: string
  energy_light: string
  // border radius
  border_radius: number
***REMOVED***

export type Section = {
  title: string
  tiles: Tile[]
  icon: string
***REMOVED***

interface DirectusSchema {
  theme: Theme
  collections: Collection[]
  tiles: Tile[]
  survey: Survey[]
  successStory: SuccessStory[]
  sections: Section[]
***REMOVED***

// const directus = new Directus<DirectusCollection>(directusUrl)

import { createDirectus ***REMOVED*** from '@directus/sdk'

const directus = createDirectus<DirectusSchema>(
  process.env.NEXT_PUBLIC_DIRECTUS_URL!,
).with(rest())

export default directus

export function directusImage(image: string) {
  return `${process.env.NEXT_PUBLIC_DIRECTUS_URL***REMOVED***/assets/${image***REMOVED***`
***REMOVED***

function parseStatus(input: string | undefined): DirectusStatus | undefined {
  if (input === 'published' || input === 'draft' || input === 'archived') {
    return input as DirectusStatus
***REMOVED***

  return undefined
***REMOVED***

export const ENV_DIRECTUS_ITEM_STATUS: DirectusStatus =
  parseStatus(process.env.DIRECTUS_ITEM_STATUS) || 'published'
