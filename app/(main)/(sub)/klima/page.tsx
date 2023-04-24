import Columns from '@/components/Layout/Columns'
import CO2EmissionsTile from '@/components/Tiles/Climate/CO2EmissionsTile'
import ClimateIndicesTile from '@/components/Tiles/Climate/ClimateIndices'
import ClimateDevelopmentTile from '@/components/Tiles/Climate/Devlopment'
import GarbageTile from '@/components/Tiles/Climate/Garbage'
import WeatherTile from '@/components/Tiles/Climate/WeatherTile'

export default function Climate() {
  return (
    <>
      <Columns>
        <WeatherTile />
        <ClimateDevelopmentTile />
      </Columns>
***REMOVED***/* @ts-expect-error Server Component */***REMOVED***
      <CO2EmissionsTile />
***REMOVED***/* @ts-expect-error Server Component */***REMOVED***
      <ClimateIndicesTile />
***REMOVED***/* @ts-expect-error Server Component */***REMOVED***
      <GarbageTile />
    </>
  )
***REMOVED***
