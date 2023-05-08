'use client'

import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import climateIndicesData from '@/assets/data/climate_indices.json'
import { LineSeriesOption ***REMOVED*** from 'echarts'
import { differenceInYears, parse ***REMOVED*** from 'date-fns'
import Switch from '@/components/Inputs/Switch'
import { Eis, Frost, Heiss, Sommer, Tropen ***REMOVED*** from '@/components/Icons'
import Title from '@/components/Elements/Title'
import { ForwardRefExoticComponent, SVGProps, useState ***REMOVED*** from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config.js'

const { theme ***REMOVED*** = resolveConfig(tailwindConfig)

type IndicesTypes =
  | 'eistage'
  | 'frosttage'
  | 'heisse_tage'
  | 'sommertage'
  | 'tropennaechte'

type ClimateIndex = {
  dwd_station_id: number
  eistage: number
  frosttage: number
  heisse_tage: number
  observation_type: string
  sommertage: number
  timestamp: string
  tropennaechte: number
***REMOVED***

const TIME_DELTA_IN_YEARS = 20

const data = climateIndicesData as ClimateIndex[]
const getSeries = (property: keyof ClimateIndex) =>
  data
    .filter(
      e =>
        differenceInYears(
          new Date(),
          parse(e.timestamp, 'yyyy-MM-dd HH:mm:ssXXX', new Date()),
    ***REMOVED*** <= TIME_DELTA_IN_YEARS,
***REMOVED***
    .map(e => [
      parse(e.timestamp, 'yyyy-MM-dd HH:mm:ssXXX', new Date()),
      e[property],
    ])

/**
 * All the indices that are on the chart
 */
const indices: Record<
  IndicesTypes,
  {
    title: string
    icon:
      | ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
      | ((_props: SVGProps<SVGSVGElement>) => JSX.Element)
    seriesOption: LineSeriesOption
***REMOVED***
> = {
  heisse_tage: {
    title: 'Heiße Tage (>= 30°C)',
    icon: Heiss,
    seriesOption: {
      name: 'Heiße Tage',
      data: getSeries('heisse_tage'),
      // @ts-ignore
      color: theme?.colors?.energy.DEFAULT || '#6060d6',
  ***REMOVED***,
***REMOVED***,
  sommertage: {
    title: 'Sommertage (>= 25°C)',
    icon: Sommer,
    seriesOption: {
      name: 'Sommertage',
      data: getSeries('sommertage'),
      // @ts-ignore
      color: theme?.colors?.mobility.DEFAULT || '#6060d6',
  ***REMOVED***,
***REMOVED***,
  tropennaechte: {
    title: 'Tropennächte (>= 20°C)',
    icon: Tropen,
    seriesOption: {
      name: 'Tropennächte',
      data: getSeries('tropennaechte'),
      // @ts-ignore
      color: theme?.colors?.buildings.DEFAULT || '#6060d6',
  ***REMOVED***,
***REMOVED***,
  frosttage: {
    title: 'Frosttage (mind. < 0°C)',
    seriesOption: {
      name: 'Frosttage',
      data: getSeries('frosttage'),
      // @ts-ignore
      color: theme?.colors?.primary.DEFAULT || '#6060d6',
  ***REMOVED***,
    icon: Frost,
***REMOVED***,
  eistage: {
    title: 'Eistage (max. < 0°C)',
    icon: Eis,
    seriesOption: {
      name: 'Eistage',
      data: getSeries('eistage'),
      // @ts-ignore
      color: theme?.colors?.climate.DEFAULT || '#6060d6',
  ***REMOVED***,
***REMOVED***,
***REMOVED***

/**
 *
 * @param type: the type of the icon
 * @param onChange: on toggle change
 * @returns Toggle with Icon and text
 */
function ClimateIndiceToggle({
  type,
  defaultChecked,
  onChange,
***REMOVED***: {
  type: IndicesTypes
  defaultChecked?: boolean
  onChange?: (_checked: boolean) => void
***REMOVED***) {
  const Icon = indices[type].icon
  return (
    <div className="flex w-full flex-row-reverse items-center justify-between gap-2 lg:flex-row lg:justify-normal lg:gap-4">
      <Switch
        defaultChecked={defaultChecked***REMOVED***
        onCheckedChange={onChange***REMOVED***
        variant={type***REMOVED***
      />
      <div className="flex items-center gap-2 md:w-max md:gap-4">
        <Icon className="aspect-square h-5 md:h-8" />
        <Title as="h5" variant={type***REMOVED***>
    ***REMOVED***indices[type].title***REMOVED***
        </Title>
      </div>
    </div>
  )
***REMOVED***

/**
 *
 * @returns The Climate Indices Chart
 */
export default function ClimateIndicesChart() {
  const [seriesVisible, setSeriesVisible] = useState<
    Record<IndicesTypes, boolean>
  >({
    eistage: false,
    frosttage: false,
    heisse_tage: true,
    sommertage: false,
    tropennaechte: false,
***REMOVED***)

  const series: LineSeriesOption[] = Object.keys(indices)
    .filter(e => seriesVisible[e as IndicesTypes])
    .map(e => ({
      ...indices[e as IndicesTypes].seriesOption,
      type: 'line',
      itemStyle: {
        opacity: 0,
    ***REMOVED***,
  ***REMOVED***))

  return (
    <div className="flex h-full w-full flex-col items-center p-5 2xl:flex-row">
      <div className="h-full w-full flex-1">
        <Title as="h7" variant={'primary'***REMOVED***>
          Anzahl <br />
          der Tage
        </Title>
        <div className="h-[235px] w-full md:h-[440px]">
          <ReactECharts
            option={{
              grid: {
                top: 20,
                bottom: 40,
                left: 40,
                right: 40,
            ***REMOVED***,
              series,
              xAxis: {
                type: 'time',
            ***REMOVED***,
              yAxis: {
                type: 'value',
                interval: 5,
            ***REMOVED***,
              animation: true,
          ***REMOVED******REMOVED***
            settings={{
              notMerge: true,
          ***REMOVED******REMOVED***
          />
        </div>
      </div>
      <div className="flex h-full flex-col justify-evenly gap-1">
        <ClimateIndiceToggle
          defaultChecked={seriesVisible.heisse_tage***REMOVED***
          onChange={c => setSeriesVisible({ ...seriesVisible, heisse_tage: c ***REMOVED***)***REMOVED***
          type="heisse_tage"
        />
        <ClimateIndiceToggle
          defaultChecked={seriesVisible.sommertage***REMOVED***
          onChange={c => setSeriesVisible({ ...seriesVisible, sommertage: c ***REMOVED***)***REMOVED***
          type="sommertage"
        />
        <ClimateIndiceToggle
          defaultChecked={seriesVisible.tropennaechte***REMOVED***
          onChange={c =>
            setSeriesVisible({ ...seriesVisible, tropennaechte: c ***REMOVED***)
        ***REMOVED***
          type="tropennaechte"
        />
        <ClimateIndiceToggle
          defaultChecked={seriesVisible.frosttage***REMOVED***
          onChange={c => setSeriesVisible({ ...seriesVisible, frosttage: c ***REMOVED***)***REMOVED***
          type="frosttage"
        />
        <ClimateIndiceToggle
          defaultChecked={seriesVisible.eistage***REMOVED***
          onChange={c => setSeriesVisible({ ...seriesVisible, eistage: c ***REMOVED***)***REMOVED***
          type="eistage"
        />
      </div>
    </div>
  )
***REMOVED***
