import TileFactory, { TileType ***REMOVED*** from '@/utils/TileFactory'
import { notFound ***REMOVED*** from 'next/navigation'

export const revalidate = 10

type Params = Promise<{ id: TileType ***REMOVED***>

export default async function Share({ params ***REMOVED***: { params: Params ***REMOVED***) {
  const { id ***REMOVED*** = await params

  if (!id) {
    return notFound()
***REMOVED***

  return <TileFactory type={id***REMOVED*** />
***REMOVED***
