import { Directus, ID ***REMOVED*** from '@directus/sdk'

const directusUrl =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055'

export const collectionsName = 'collections'
export const tileCollectionName = 'tiles'
export const surveyCollectionName = 'survey'
export const successStoriesCollectionName = 'klima_success_stories'

export type DirectusStatus = 'draft' | 'archived' | 'published'

export type Collection = {
  id: ID
  status: DirectusStatus
  title: string
  description?: string
  image: string
  slug?: string
  tiles: {
    id: ID
    collections_id: ID
    item: ID
    collection: typeof tileCollectionName | typeof surveyCollectionName
    sort: number
***REMOVED***[]
***REMOVED***

export type Tile = {
  id: ID
  name: string
  group: any
  full_width: boolean
***REMOVED***

export type SuccessStory = {
  id: ID
  status: DirectusStatus
  text: string
  link: string
  image?: string
  image_position: 'left' | 'right'
***REMOVED***

export type Survey = {
  id: ID
  status: DirectusStatus
  question: string
  answer_percent: number
  answer_text: string
***REMOVED***

// Map your collections to its respective types. The SDK will
// infer its types based on usage later.
type DirectusCollection = {
  collections: Collection
  tiles: Tile
  klima_success_stories: SuccessStory
  survey: Survey
***REMOVED***

const directus = new Directus<DirectusCollection>(directusUrl)

export default directus

export function directusImage(image?: string) {
  if (!image) {
    return undefined
***REMOVED***

  return `${process.env.NEXT_PUBLIC_DIRECTUS_URL***REMOVED***/assets/${image***REMOVED***`
***REMOVED***
