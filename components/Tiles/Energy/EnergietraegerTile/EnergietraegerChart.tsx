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
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import MobileSlider from '@/components/Inputs/MobileSlider'
import { useWindowSize ***REMOVED*** from 'react-use'

type StromDataType = {
  Jahr: number
  'GUD (Erdgas)': number
  'Stromeinkauf (Bundesmix)': number
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
  const [mode, setMode] = useState<'stromerzeugung' | 'stromemissionen'>(
    'stromerzeugung',
  )

  const data: StromDataType[] =
    mode === 'stromerzeugung' ? StromerzeugungBereitstellung : Stromemissionen

  const [yearIndex, setYearIndex] = useState(data.length - 1)

  const unit = mode === 'stromerzeugung' ? 'MWh' : 't'

  const { width ***REMOVED*** = useWindowSize()

  return (
    <div className="flex h-full flex-col">
      <div className="z-10 w-full">
        <ToggleGroup
          items={[
      ***REMOVED***
              element: (
                <Title as="h5" className="2xl:mx-auto">
                  Anteilige Stromerzeugung
                </Title>
          ***REMOVED***,
              value: 'stromerzeugung',
          ***REMOVED***,
      ***REMOVED***
              element: (
                <Title as="h5" className="2xl:mx-auto">
                  CO₂ pro Quelle
                </Title>
          ***REMOVED***,
              value: 'co2',
          ***REMOVED***,
          ]***REMOVED***
          onChange={val => setMode(val as typeof mode)***REMOVED***
          variant={'primary'***REMOVED***
        />
      </div>
      <div className="flex h-full w-full flex-1 -translate-y-4 flex-col">
        <div className="flex-1">
          <ReactECharts
            option={{
              // @ts-ignore
              tooltip: {
                formatter: params => {
                  const percent =
                    // @ts-ignore
                    params.value / params.treeAncestors[0].value

                  if (percent === 1) {
                    return undefined
                ***REMOVED***

                  // @ts-ignore
                  return `<p>${params.name***REMOVED***<p>
                  <p>${new Intl.NumberFormat('de-DE', {
                    maximumFractionDigits: 0,
                    // @ts-ignore
                ***REMOVED***).format(params.value)***REMOVED***${unit***REMOVED***<p>
                  <p>${(percent * 100).toFixed(1)***REMOVED***%<p>`
              ***REMOVED***,
            ***REMOVED***,
              series: [
          ***REMOVED***
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  type: 'treemap',
                  breadcrumb: {
                    show: false,
                ***REMOVED***,
                  itemStyle: {
                    gapWidth: 4,
                ***REMOVED***,
                  label: {
                    position: ['0%', '100%'],
                    offset: [0 + 8, -70 - 8],
                    distance: 10,
                    formatter(params) {
                      const percent =
                        // @ts-ignore
                        params.value / params.treeAncestors[0].value

                      if (percent < 0.05) {
                        return ''
                    ***REMOVED***

                      return `{name|${params.name***REMOVED******REMOVED***\n{value|${(
                        percent * 100
                  ***REMOVED***.toFixed(0)***REMOVED***%***REMOVED***`
                  ***REMOVED***,
                    rich: {
                      name: {
                        padding: [0, 0, 4, 0],
                    ***REMOVED***,
                      value: {
                        fontSize: 40,
                    ***REMOVED***,
                  ***REMOVED***,
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
                          'Stromeinkauf (Bundesmix)',
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
        <Spacer size={'xs'***REMOVED*** />
  ***REMOVED***width < 1800 && (
          <MobileSlider
            defaultValue={[data.length - 1]***REMOVED***
            firstValueMobile={data.length - 1***REMOVED***
            labels={data.map(e => e.Jahr.toString())***REMOVED***
            max={data.length - 1***REMOVED***
            min={0***REMOVED***
            onValueChange={([index]) => setYearIndex(index)***REMOVED***
            variant={'energy'***REMOVED***
          />
    ***REMOVED******REMOVED***
  ***REMOVED***width >= 1800 && (
          <Slider
            defaultValue={[data.length - 1]***REMOVED***
            firstValueMobile={data.length - 1***REMOVED***
            labels={data.map(e => e.Jahr.toString())***REMOVED***
            max={data.length - 1***REMOVED***
            min={0***REMOVED***
            onValueChange={([index]) => setYearIndex(index)***REMOVED***
            variant={'energy'***REMOVED***
          />
    ***REMOVED******REMOVED***
      </div>
    </div>
  )
***REMOVED***
