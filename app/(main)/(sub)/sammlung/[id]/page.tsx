import Columns from '@/components/Layout/Columns'
import directus, { collectionsName ***REMOVED*** from '@/lib/directus'
import embedRegistry from '@/utils/embedRegistry'
import { tileIdRegistry ***REMOVED*** from '@/utils/tileIdRegistry'
import { notFound ***REMOVED*** from 'next/navigation'

// ISR
export async function generateStaticParams() {
  const { data ***REMOVED*** = await directus.items(collectionsName).readByQuery({
    fields: ['id'],
    filter: {
      status: 'published',
  ***REMOVED***,
***REMOVED***)

  if (!data) {
    return
***REMOVED***

  return data.map(({ id ***REMOVED***) => ({
    id,
***REMOVED***))
***REMOVED***

// revalidate each minute
export const revalidate = 60

const getCollection = async (collectionId: string) => {
  const data = await directus.items(collectionsName).readOne(collectionId, {
    fields: ['title', 'description', 'tiles.tiles_id'],
***REMOVED***)

  return data
***REMOVED***

const getTileComponent = (tileID: keyof typeof tileIdRegistry) => {
  return embedRegistry[tileIdRegistry[tileID]]
***REMOVED***

export default async function Collection({
  params,
***REMOVED***: {
  params: { id: string ***REMOVED***
***REMOVED***) {
  const { id ***REMOVED*** = params

  if (!id) {
    return notFound()
***REMOVED***

  const collection = await getCollection(id)

  if (!collection) {
    return notFound()
***REMOVED***

  const { title, description, tiles ***REMOVED*** = collection

  return (
    <Columns>
***REMOVED***tiles &&
        tiles.map(t => {
          const Tile = getTileComponent(t.tiles_id)
          return <Tile key={t.tiles_id***REMOVED*** />
      ***REMOVED***)***REMOVED***
    </Columns>
  )
***REMOVED***
