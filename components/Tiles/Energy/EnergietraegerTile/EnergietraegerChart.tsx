'use client'

import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import Title from '@/components/Elements/Title'
import Slider from '@/components/Inputs/Slider'
import ToggleGroup from '@/components/Inputs/ToggleGroup'
import { useState ***REMOVED*** from 'react'

// @ts-ignore
import StromerzeugungBereitstellung from '@/assets/data/verbrauch-erzeugung-strom.csv'
// @ts-ignore
import Stromemissionen from '@/assets/data/emissionen-strom.csv'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import MobileSlider from '@/components/Inputs/MobileSlider'
import { useWindowSize ***REMOVED*** from 'react-use'

type StromVerbrauchErzeugung = {
  ZEIT: number
  'Stromerzeugung/-bereitstellung nach Energieträgern - Anteil EE (%)': number
  'Stromerzeugung/-bereitstellung nach Energieträgern - BHKW (Biomethan)': number
  'Stromerzeugung/-bereitstellung nach Energieträgern - BHKW (Erdgas)': number
  'Stromerzeugung/-bereitstellung nach Energieträgern - Biogas': number
  'Stromerzeugung/-bereitstellung nach Energieträgern - GUD (Erdgas)': number
  'Stromerzeugung/-bereitstellung nach Energieträgern - HKW (Kohle)': number
  'Stromerzeugung/-bereitstellung nach Energieträgern - Klär-Deponiegas': number
  'Stromerzeugung/-bereitstellung nach Energieträgern - PV': number
  'Stromerzeugung/-bereitstellung nach Energieträgern - Stromverbrauch ges.': number
  'Stromerzeugung/-bereitstellung nach Energieträgern - Wasserkraft': number
  'Stromerzeugung/-bereitstellung nach Energieträgern - Windkraft': number
  'Stromerzeugung/-bereitstellung nach Energieträgern - reg. Bezug (Bundesmix)': number
***REMOVED***

type StromEmissionen = {
  ZEIT: number
  'Strom-Emissionen nach Energieträgern (t) - Windkraft': number
  'Strom-Emissionen nach Energieträgern - Anteil EE an Gesamtemissionen (%)': number
  'Strom-Emissionen nach Energieträgern - BHKW (Biomethan)': number
  'Strom-Emissionen nach Energieträgern - BHKW (Erdgas)': number
  'Strom-Emissionen nach Energieträgern - Biogas': number
  'Strom-Emissionen nach Energieträgern - Emissionen ges.': number
  'Strom-Emissionen nach Energieträgern - GUD (Erdgas)': number
  'Strom-Emissionen nach Energieträgern - Klär-Deponiegas': number
  'Strom-Emissionen nach Energieträgern - PV': number
  'Strom-Emissionen nach Energieträgern - Wasserkraft': number
  'Strom-Emissionen nach Energieträgern - reg. Bezug (Bundesmix)': number
***REMOVED***

export default function EnergietraegerChart() {
  const [mode, setMode] = useState<'stromerzeugung' | 'stromemissionen'>(
    'stromerzeugung',
  )

  const data: (StromVerbrauchErzeugung | StromEmissionen)[] =
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
                          'ZEIT',
                          'Stromerzeugung/-bereitstellung nach Energieträgern - Stromverbrauch ges.',
                          'Strom-Emissionen nach Energieträgern - Emissionen ges.',
                          'Stromerzeugung/-bereitstellung nach Energieträgern - Anteil EE (%)',
                          'Strom-Emissionen nach Energieträgern - Anteil EE an Gesamtemissionen (%)',
                          'Stromerzeugung/-bereitstellung nach Energieträgern - reg. Bezug (Bundesmix)',
                          'Strom-Emissionen nach Energieträgern - reg. Bezug (Bundesmix)',
                        ].includes(k),
                ***REMOVED***
                    .map(key => ({
                      name: key
                        .replace(
                          'Stromerzeugung/-bereitstellung nach Energieträgern - ',
                          '',
                    ***REMOVED***
                        .replace('Strom-Emissionen nach Energieträgern - ', ''),
                      value:
                        data[yearIndex][
                          key as keyof (
                            | StromVerbrauchErzeugung
                            | StromEmissionen
                      ***REMOVED***
                        ],
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
            labels={data.map(e => e.ZEIT.toString())***REMOVED***
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
            labels={data.map(e => e.ZEIT.toString())***REMOVED***
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
