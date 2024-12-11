import directus, { tileCollectionName } from '@/lib/directus'
import TileFactory, { TileType } from '@/utils/TileFactory'
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
    },
    // {
    //   id: 'mobility-masterplan',
    //   id: 'mobility-masterplan',
    //   collections_id: 'mobility',
    //   collection: 'mobility',
    // },
    // {
    //   id: 'mobility-stadtradeln',
    //   id: 'mobility-stadtradeln',
    //   collections_id: 'mobility',
    //   collection: 'mobility',
    // },
    // { id: 'mobility-bus', collections_id: 'mobility', collection: 'mobility' },
    // { id: 'mobility-bus', collections_id: 'mobility', collection: 'mobility' },
    // { id: 'mobility-awm', collections_id: 'mobility', collection: 'mobility' },
    // { id: 'mobility-awm', collections_id: 'mobility', collection: 'mobility' },
    // {
    //   id: 'mobility-passenger',
    //   id: 'mobility-passenger',
    //   collections_id: 'mobility',
    //   collection: 'mobility',
    // },
    // {
    //   id: 'mobility-modal-split',
    //   id: 'mobility-modal-split',
    //   collections_id: 'mobility',
    //   collection: 'mobility',
    // },
    // {
    //   id: 'mobility-trafficload',
    //   id: 'mobility-trafficload',
    //   collections_id: 'mobility',
    //   collection: 'mobility',
    // },
  ]

  const data = await directus
    .items(tileCollectionName)
    .readOne('mobility-bicycle')
  console.log(data)

  // @ts-ignore
  const tileBuckets = await getTilesBucket(sortedTiles)

  return (
    <BaseView type="mobility">
      {await Promise.all(
        tileBuckets.map(async ({ tiles, isFullWidth }, i) => {
          if (isFullWidth) {
            return tiles.map(async t => (
              <TileFactory key={t.id} type={t.id as TileType} />
            ))
          }

          return (
            <Columns key={i}>
              {tiles.map(async t => (
                <TileFactory key={t.id} type={t.id as TileType} />
              ))}
            </Columns>
          )
        }),
      )}

      <TileFactory type={'mobility-bicycle'} />
      {/* <Columns>
        <BicycleChartTile />
        <MasterplanTile />

        <StadtradelnTile />
        <BusTile />

        <AWMTile />
        <PassengerTile />
      </Columns>

      <ModalSplitTile />

      <TrafficloadTile /> */}
    </BaseView>
  )
}
