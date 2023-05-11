'use client'

import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import Slider from '@/components/Inputs/Slider'
import { useState ***REMOVED*** from 'react'
import ToggleGroup from '@/components/Inputs/ToggleGroup'
import Title from '@/components/Elements/Title'

// @ts-ignore
import StromerzeugungBereitstellung from '@/assets/data/Stromerzeugung_bereitstellung.csv'
// @ts-ignore
import Stromemissionen from '@/assets/data/stromemissionen.csv'

type StromDataType = {
  Jahr: number
  'GUD (Erdgas)': number
  'reg. Bezug (Bundesmix)': number
  Windkraft: number
  'Anteil EE (%)': number
  'PV,Biogas': number
  'Stromverbrauch ges.': number
  'BHKW (Erdgas)': number
  'Klär-Deponiegas': number
  Wasserkraft: number
  'BHKW (Biomethan)': number
***REMOVED***

export default function EnergietraegerChart() {
  const [yearIndex, setYearIndex] = useState(0)

  const [mode, setMode] = useState<'stromerzeugung' | 'stromemissionen'>(
    'stromerzeugung',
  )

  const data: StromDataType[] =
    mode === 'stromerzeugung' ? StromerzeugungBereitstellung : Stromemissionen

  return (
    <div className="flex h-full flex-col">
      <ToggleGroup
        items={[
    ***REMOVED***
            element: (
              <Title as="h5" className="mx-auto w-max">
                Anteilige Stromerzeugung
              </Title>
        ***REMOVED***,
            value: 'stromerzeugung',
        ***REMOVED***,
    ***REMOVED***
            element: (
              <Title as="h5" className="mx-auto w-max">
                CO₂ pro Energieträger
              </Title>
        ***REMOVED***,
            value: 'co2',
        ***REMOVED***,
        ]***REMOVED***
        onChange={val => setMode(val as typeof mode)***REMOVED***
        variant={'primary'***REMOVED***
      />
      <div className="flex h-full w-full flex-1 flex-col">
        <div className="flex-1">
          <ReactECharts
            option={{
              series: [
          ***REMOVED***
                  type: 'treemap',
                  breadcrumb: {
                    show: false,
                ***REMOVED***,
                  itemStyle: {
                    gapWidth: 4,
                ***REMOVED***,
                  label: {
                    position: 'insideBottomLeft',
                    distance: 10,
                ***REMOVED***,
                  roam: false,
                  nodeClick: undefined,
                  levels: [
              ***REMOVED***
                      itemStyle: {
                        color: '#f28443',
                    ***REMOVED***,
                  ***REMOVED***,
                  ],
                  data: Object.keys(data[yearIndex])
                    .filter(
                      k =>
                        ![
                          'Jahr',
                          'Stromverbrauch ges.',
                          'Emissionen ges.',
                          'Anteil EE an Gesamtemissionen (%)',
                          'Anteil EE (%)',
                          'reg. Bezug (Bundesmix)',
                        ].includes(k),
                ***REMOVED***
                    .map(key => ({
                      name: key,
                      value: data[yearIndex][key as keyof StromDataType],
                  ***REMOVED***)),
              ***REMOVED***,
              ],
          ***REMOVED******REMOVED***
          />
        </div>
        <Slider
          defaultValue={[0]***REMOVED***
          labels={data.map(e => e.Jahr.toString())***REMOVED***
          max={data.length - 1***REMOVED***
          min={0***REMOVED***
          onValueChange={([index]) => setYearIndex(index)***REMOVED***
          variant={'energy'***REMOVED***
        />
      </div>
    </div>
  )
***REMOVED***
