import directus, {
  collectionsName,
  ENV_DIRECTUS_ITEM_STATUS,
***REMOVED*** from '@/lib/directus'
import { readItems ***REMOVED*** from '@directus/sdk'
import { revalidatePath ***REMOVED*** from 'next/cache'
***REMOVED***

export async function GET() {
  const data = await directus.request(
    readItems(collectionsName, {
      fields: ['slug'],
      status: {
        _eq: ENV_DIRECTUS_ITEM_STATUS,
    ***REMOVED***,
  ***REMOVED***),
  )

  if (!data) {
***REMOVED***{ msg: 'No data' ***REMOVED***)
***REMOVED***

  const revalidatedPaths: string[] = []

  data.forEach(({ slug ***REMOVED***) => {
    const path = `/sammlung/${slug***REMOVED***`
    revalidatedPaths.push(path)
    revalidatePath(path)
***REMOVED***)

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    paths: revalidatedPaths,
***REMOVED***)
***REMOVED***
