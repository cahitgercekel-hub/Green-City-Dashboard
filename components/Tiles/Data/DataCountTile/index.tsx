import Title from '@/components/Elements/Title'

// @ts-ignore
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import DataTile from '../DataTile'
import { Daten ***REMOVED*** from '@/components/Icons'
import getTileData from '@/lib/api/getTileData'

export default async function DataCountTile() {
  const data = await getTileData('climate-data')
  const infoText = data?.info ?? ''

  return (
    <DataTile
      dataRetrieval="05.06.2023"
      dataSource="Stadt Münster &ndash; Stabsstelle Smart City"
      embedId={'climate-data'***REMOVED***
      title={
        <>
          <AnimatedNumber className="font-medium">{12***REMOVED***</AnimatedNumber>{' '***REMOVED***
          Datenkacheln
        </>
    ***REMOVED***
    >
      <div>
        <div className="flex flex-row justify-center gap-6">
          <span className="flex flex-col justify-center">
            <Daten className="h-20 text-primary md:h-44" />
          </span>
          <Title as={'subtitle'***REMOVED***>{infoText***REMOVED***</Title>
        </div>
      </div>
    </DataTile>
  )
***REMOVED***
