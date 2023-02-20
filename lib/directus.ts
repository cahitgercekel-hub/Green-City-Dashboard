import { Directus, ID ***REMOVED*** from '@directus/sdk'

const directusUrl =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055'

export const collectionsName = 'collections'
export const successStoriesCollectionName = 'klima_success_stories'
export const surveyCollectionName = 'klima_survey'

export type Collection = {
  id: ID
  status: 'draft' | 'archived' | 'published'
  title: string
  description?: string
  image: string
  tiles: {
    id: ID
    collections_id: ID
    tiles_id: string
***REMOVED***[]
***REMOVED***

export type SuccessStory = {
  id: ID
  status: 'draft' | 'archived' | 'published'
  text: string
  link: string
  image?: string
  image_position: 'left' | 'right'
***REMOVED***

export type Survey = {
  id: ID
  status: 'draft' | 'archived' | 'published'
  question: string
  answer_percent: number
  answer_text: string
***REMOVED***

// Map your collections to its respective types. The SDK will
// infer its types based on usage later.
type DirectusCollection = {
  collections: Collection
  klima_success_stories: SuccessStory
  klima_survey: Survey
***REMOVED***

const directus = new Directus<DirectusCollection>(directusUrl)

export default directus

export function directusImage(image?: string) {
  if (!image) {
    return undefined
***REMOVED***

  return `${process.env.NEXT_PUBLIC_DIRECTUS_URL***REMOVED***/assets/${image***REMOVED***`
***REMOVED***
