'use client'

import Title from '@/components/Elements/Title'
import { useState ***REMOVED*** from 'react'
import Phenomenon from '../WeatherTile/Phenomenon'
import QualityBar from '@/components/Charts/QualityBar/QualityBar'
import useAirquality from '@/hooks/useAirquality'
import MsKlimadashboardIconsButtonAktivKlima from '@/components/Icons/Misc/MsKlimadashboardIconsButtonAktivKlima'

type QualityMappingType = {
  [_key in number]: string
***REMOVED***

const qualityMapping: QualityMappingType = {
  0: 'sehr gut',
  1: 'gut',
  2: 'mäßig',
  3: 'schlecht',
  4: 'sehr schlecht',
***REMOVED***

export default function AirqualityChart() {
  const [timestamp, setTimestamp] = useState(new Date())

  const { airqualityData, parameterData ***REMOVED*** = useAirquality(timestamp)

  if (airqualityData) {
    const Icon = MsKlimadashboardIconsButtonAktivKlima

    return (
      <div>
  ***REMOVED***airqualityData && (
          <div className="mb-8 flex flex-col gap-4">
            <div className="flex flex-1 items-center gap-6 md:gap-2">
              <Icon className="h-20 text-primary md:mr-12 md:h-36" />
              <div className="my-4 grow">
                <Title as={'h4'***REMOVED***>
                  In Münster ist aktuell{' '***REMOVED***
                  <span className="text-climate">
              ***REMOVED***qualityMapping[airqualityData[1]]***REMOVED***
                  </span>
                </Title>
                <div className="pt-4">
                  <QualityBar
                    progress={(airqualityData[1] / 5) * 100***REMOVED***
                  ></QualityBar>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-8">
        ***REMOVED***parameterData && (
                <>
                  <Phenomenon
                    phenomenon="no2"
                    size="md"
                    value={parameterData[5] ?? 'NoData'***REMOVED***
                  />
                  <Phenomenon
                    phenomenon="pm10"
                    size="md"
                    value={parameterData[1] ?? 'NoData'***REMOVED***
                  />
                  <Phenomenon
                    phenomenon="o3"
                    size="md"
                    value={parameterData[3] ?? 'NoData'***REMOVED***
                  />
                  <Phenomenon
                    phenomenon="pm25"
                    size="md"
                    value={parameterData[9] ?? 'NoData'***REMOVED***
                  />
                </>
          ***REMOVED******REMOVED***
            </div>
          </div>
    ***REMOVED******REMOVED***
      </div>
***REMOVED***
***REMOVED***

  return <p>Loading...</p>
***REMOVED***
