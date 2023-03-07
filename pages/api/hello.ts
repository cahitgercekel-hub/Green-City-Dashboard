// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import directus, { collectionsName ***REMOVED*** from '@/lib/directus'
import type { NextApiRequest, NextApiResponse ***REMOVED*** from 'next'

type Data = {
  msg: string
***REMOVED***

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { data ***REMOVED*** = await directus.items(collectionsName).readByQuery({
    fields: ['slug'],
    filter: {
      status: 'published',
  ***REMOVED***,
***REMOVED***)

  if (!data) {
    return res.status(200).json({ msg: 'No data' ***REMOVED***)
***REMOVED***

  const revalidatedPaths: string[] = []

  data.forEach(({ slug ***REMOVED***) => {
    const path = `/sammlung/${slug***REMOVED***`
    revalidatedPaths.push(path)
    res.revalidate(path)
***REMOVED***)

  res.status(200).json({ msg: 'Revalidated ' + revalidatedPaths.join(', ') ***REMOVED***)
***REMOVED***
