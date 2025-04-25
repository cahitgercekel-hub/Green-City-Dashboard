import { TileType } from '@/utils/TileFactory'
import { rest } from '@directus/sdk'

const directusUrl =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055'

export const mainPageName = 'MainPage'
export const collectionsName = 'collections'
export const tileCollectionName = 'tiles'
export const surveyCollectionName = 'survey'
export const successStoriesCollectionName = 'successStory'
export const themeCollectionName = 'theme'
export const impressumCollectionName = 'impressum'
export const datenschutzCollectionName = 'datenschutz'

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
  }[]
}

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
  }[]
}

export type CollectionTile = {
  id: string
  collections_id: string
  item: string
  collection:
    | typeof tileCollectionName
    | typeof surveyCollectionName
    | typeof successStoriesCollectionName
  sort: number
}

export type Tile = {
  // id: string
  name: string
  // group: any
  full_width: boolean
  tile_id: string & TileType
  details: string
  data_url: string
  info: string
}

export type SuccessStory = {
  id: string
  status: DirectusStatus
  text: string
  link: string
  image?: string
  image_position: 'left' | 'right'
  category: string
  details: string
}

export type Survey = {
  id: string
  status: DirectusStatus
  title: string
  question: string
  answer_value: number
  answer_text: string
  category: string
  dataSource: string
  dataRetrieval: Date
  answer_unit: string
}

export type Theme = {
  id: string
  status: DirectusStatus
  title: string
  // navbar
  navbar_image: string
  navbar_image_link: string
  about_button_title: string
  about_button_text: string
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
  // font
  font: string
  // success stories
  success_stories_title: string
}

export type Datenschutz = {
  id: string
  datenschutz: string
}

export type Section = {
  title: string
  tiles: CollectionTile[]
  icon: string
}

export type Impressum = {
  id: string
  impressum: string
}

interface DirectusSchema {
  theme: Theme
  collections: Collection[]
  tiles: Tile[]
  survey: Survey[]
  successStory: SuccessStory[]
  sections: Section[]
  impressum: Impressum
  datenschutz: Datenschutz
}

// const directus = new Directus<DirectusCollection>(directusUrl)

import { createDirectus } from '@directus/sdk'

const directus = createDirectus<DirectusSchema>(
  process.env.NEXT_PUBLIC_DIRECTUS_URL!,
).with(rest())

export default directus

export function directusImage(image: string) {
  return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${image}`
}

function parseStatus(input: string | undefined): DirectusStatus | undefined {
  if (input === 'published' || input === 'draft' || input === 'archived') {
    return input as DirectusStatus
  }

  return undefined
}

export const ENV_DIRECTUS_ITEM_STATUS: DirectusStatus =
  parseStatus(process.env.DIRECTUS_ITEM_STATUS) || 'published'
