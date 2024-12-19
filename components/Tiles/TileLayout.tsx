// components/TileLayout.tsx
import Columns from '@/components/Layout/Columns'
import { TilesBucket ***REMOVED*** from '@/utils/fullWidthBucket'
import { renderTileComponents ***REMOVED*** from '@/utils/tileUtils'

export function TileLayout({
  tileBuckets,
***REMOVED***: {
  tileBuckets: TilesBucket[]
***REMOVED***) {
  return (
    <>
***REMOVED***await Promise.all(
        tileBuckets.map(async ({ tiles, isFullWidth ***REMOVED***, i) => {
          const components = await renderTileComponents(tiles)
          return isFullWidth ? (
            <div key={i***REMOVED***>{components***REMOVED***</div>
      ***REMOVED*** : (
            <Columns key={i***REMOVED***>{components***REMOVED***</Columns>
      ***REMOVED***
      ***REMOVED***),
  ***REMOVED******REMOVED***
    </>
  )
***REMOVED***
