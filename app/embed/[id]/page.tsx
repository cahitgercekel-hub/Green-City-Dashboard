import TileFactory, { TileType ***REMOVED*** from '@/utils/TileFactory'
import { notFound ***REMOVED*** from 'next/navigation'

export default async function Embed({ params ***REMOVED***: { params: { id: TileType ***REMOVED*** ***REMOVED***) {
  const { id ***REMOVED*** = params

  if (!id) {
    return notFound()
***REMOVED***

  // @ts-expect-error Server Component
  return <TileFactory type={id***REMOVED*** />
***REMOVED***
