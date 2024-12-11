import directus, { tileCollectionName ***REMOVED*** from '@/lib/directus'
import TileFactory, { TileType ***REMOVED*** from '@/utils/TileFactory'
import getTilesBucket from '@/utils/fullWidthBucket'
import Columns from '../Layout/Columns'
import BaseView from './BaseView'

export default async function MobilityView() {
  const sortedTiles = [
    {
      id: 'mobility-bicycle',
      item: 'mobility-bicycle',
      collections_id: 'mobility',
      collection: 'mobility',
  ***REMOVED***,
    // {
    //   id: 'mobility-masterplan',
    //   id: 'mobility-masterplan',
    //   collections_id: 'mobility',
    //   collection: 'mobility',
    // ***REMOVED***,
    // {
    //   id: 'mobility-stadtradeln',
    //   id: 'mobility-stadtradeln',
    //   collections_id: 'mobility',
    //   collection: 'mobility',
    // ***REMOVED***,
    // { id: 'mobility-bus', collections_id: 'mobility', collection: 'mobility' ***REMOVED***,
    // { id: 'mobility-bus', collections_id: 'mobility', collection: 'mobility' ***REMOVED***,
    // { id: 'mobility-awm', collections_id: 'mobility', collection: 'mobility' ***REMOVED***,
    // { id: 'mobility-awm', collections_id: 'mobility', collection: 'mobility' ***REMOVED***,
    // {
    //   id: 'mobility-passenger',
    //   id: 'mobility-passenger',
    //   collections_id: 'mobility',
    //   collection: 'mobility',
    // ***REMOVED***,
    // {
    //   id: 'mobility-modal-split',
    //   id: 'mobility-modal-split',
    //   collections_id: 'mobility',
    //   collection: 'mobility',
    // ***REMOVED***,
    // {
    //   id: 'mobility-trafficload',
    //   id: 'mobility-trafficload',
    //   collections_id: 'mobility',
    //   collection: 'mobility',
    // ***REMOVED***,
  ]

  const data = await directus
    .items(tileCollectionName)
    .readOne('mobility-bicycle')
  console.log(data)

  // @ts-ignore
  const tileBuckets = await getTilesBucket(sortedTiles)

  return (
    <BaseView type="mobility">
***REMOVED***await Promise.all(
        tileBuckets.map(async ({ tiles, isFullWidth ***REMOVED***, i) => {
          if (isFullWidth) {
            return tiles.map(async t => (
              <TileFactory key={t.id***REMOVED*** type={t.id as TileType***REMOVED*** />
        ***REMOVED***)
        ***REMOVED***

          return (
            <Columns key={i***REMOVED***>
        ***REMOVED***tiles.map(async t => (
                <TileFactory key={t.id***REMOVED*** type={t.id as TileType***REMOVED*** />
          ***REMOVED***)***REMOVED***
            </Columns>
      ***REMOVED***
      ***REMOVED***),
  ***REMOVED******REMOVED***

      <TileFactory type={'mobility-bicycle'***REMOVED*** />
***REMOVED***/* <Columns>
        <BicycleChartTile />
        <MasterplanTile />

        <StadtradelnTile />
        <BusTile />

        <AWMTile />
        <PassengerTile />
      </Columns>

      <ModalSplitTile />

      <TrafficloadTile /> */***REMOVED***
    </BaseView>
  )
***REMOVED***
