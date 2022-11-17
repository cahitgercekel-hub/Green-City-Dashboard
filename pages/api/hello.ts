// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse ***REMOVED*** from 'next'

type Data = {
  name: string
***REMOVED***

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' ***REMOVED***)
***REMOVED***
