'use client'

import ClimateTile from '../ClimateTile'
import GarbageChart from './GarbageChart'

export default function GarbageTile() {
  return (
    <ClimateTile
      dataRetrieval={'01.01.2022'***REMOVED***
      dataSource="awm"
      embedId="garbage"
      subtitle={
        'So viel KG Abfall wurden bisher in Münster pro Einwohner:in produziert'
    ***REMOVED***
      title="Abfall pro Kopf"
    >
      <div className="h-[30rem] rounded bg-white">
        <GarbageChart />
      </div>
    </ClimateTile>
  )
***REMOVED***
