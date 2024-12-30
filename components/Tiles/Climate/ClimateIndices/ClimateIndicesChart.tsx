'use client'

import climateIndicesData from '@/assets/data/climate_indices.json'
import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import Switch from '@/components/Inputs/Switch'
import { getYear, parse ***REMOVED*** from 'date-fns'
import { LineSeriesOption ***REMOVED*** from 'echarts'

import Title from '@/components/Elements/Title'
import {
  MsKlimadashboardIconsKlimakenntageEis,
  MsKlimadashboardIconsKlimakenntageFrost,
  MsKlimadashboardIconsKlimakenntageHeiss,
  MsKlimadashboardIconsKlimakenntageSommer,
  MsKlimadashboardIconsKlimakenntageTropennacht,
***REMOVED*** from '@/components/Icons/Klima'
import useDevice from '@/hooks/useDevice'
import tailwindConfig from '@/tailwind.config.js'
import { chartFormatter ***REMOVED*** from '@/utils/chartFormatter'
import { ForwardRefExoticComponent, JSX, SVGProps, useState ***REMOVED*** from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'

const { theme ***REMOVED*** = resolveConfig(tailwindConfig)

export type IndicesTypes =
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

const STARTING_YEAR = 1990

const data = climateIndicesData as ClimateIndex[]
const getSeries = (property: keyof ClimateIndex) => {
  const arr = data
    .filter(e => new Date(e.timestamp).getFullYear() >= STARTING_YEAR)
    .map(e => [
      parse(e.timestamp, 'yyyy-MM-dd HH:mm:ssXXX', new Date()),
      e[property],
    ])
    .reduce((acc: Record<string, number>, [timestamp, value]) => {
      const year = getYear(timestamp as Date)

      acc[year] = (acc[year] ?? 0) + (value as number)

      return acc
  ***REMOVED***, {***REMOVED***)

  return Object.entries(arr).map(([year, value]) => [
    `${year***REMOVED***-01-01T00:00:00.000Z`,
    value,
  ])
***REMOVED***

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
    icon: MsKlimadashboardIconsKlimakenntageHeiss,
    seriesOption: {
      name: 'Heiße Tage',
      data: getSeries('heisse_tage'),
      // @ts-ignore
      color: theme?.colors?.energy.DEFAULT || '#6060d6',
  ***REMOVED***,
***REMOVED***,
  sommertage: {
    title: 'Sommertage (>= 25°C)',
    icon: MsKlimadashboardIconsKlimakenntageSommer,
    seriesOption: {
      name: 'Sommertage',
      data: getSeries('sommertage'),
      // @ts-ignore
      color: theme?.colors?.mobility.DEFAULT || '#6060d6',
  ***REMOVED***,
***REMOVED***,
  tropennaechte: {
    title: 'Tropennächte (>= 20°C)',
    icon: MsKlimadashboardIconsKlimakenntageTropennacht,
    seriesOption: {
      name: 'Tropennächte',
      data: getSeries('tropennaechte'),
      // @ts-ignore
      color: theme?.colors?.buildings.DEFAULT || '#6060d6',
  ***REMOVED***,
***REMOVED***,
  frosttage: {
    title: 'Frosttage (Min. < 0°C)',
    seriesOption: {
      name: 'Frosttage',
      data: getSeries('frosttage'),
      // @ts-ignore
      color: theme?.colors?.primary.DEFAULT || '#6060d6',
  ***REMOVED***,
    icon: MsKlimadashboardIconsKlimakenntageFrost,
***REMOVED***,
  eistage: {
    title: 'Eistage (Max. < 0°C)',
    icon: MsKlimadashboardIconsKlimakenntageEis,
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
  checked,
  onChange,
***REMOVED***: {
  type: IndicesTypes
  checked?: boolean
  onChange?: (_checked: boolean) => void
***REMOVED***) {
  const Icon = indices[type].icon
  return (
    <div className="flex w-full flex-row-reverse items-center justify-between gap-2 lg:flex-row lg:justify-normal lg:gap-4">
      <Switch
        // defaultChecked={defaultChecked***REMOVED***
        checked={checked***REMOVED***
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

//Sample function to calculate trendline points
const calculateTrendline = (data: [string, number][]): [number, number][] => {
  // Calculate the trendline using linear regression
  const n = data.length
  const sumX = data.reduce((acc, [date]) => acc + new Date(date).getTime(), 0)
  const sumY = data.reduce((acc, [, value]) => acc + value, 0)
  const sumXY = data.reduce(
    (acc, [date, value]) => acc + new Date(date).getTime() * value,
    0,
  )
  const sumX2 = data.reduce(
    (acc, [date]) => acc + Math.pow(new Date(date).getTime(), 2),
    0,
  )

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - Math.pow(sumX, 2))
  const intercept = (sumY - slope * sumX) / n

  return data.map(([date]) => {
    const x = new Date(date).getTime()
    const y = slope * x + intercept
    return [x, y]
***REMOVED***)
***REMOVED***

// Function to count active toggles
const countActiveToggles = (toggles: Record<IndicesTypes, boolean>): number => {
  return Object.values(toggles).filter(isActive => isActive).length
***REMOVED***

/**
 *
 * @returns The Climate Indices Chart
 */
export default function ClimateIndicesChart() {
  const device = useDevice()

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
      data: indices[e as IndicesTypes].seriesOption.data?.filter(
        // @ts-ignore
        ([date, _val]) => getYear(new Date(date)) !== new Date().getFullYear(),
  ***REMOVED***,
  ***REMOVED***))

  const lastToCurYearSeries: LineSeriesOption[] = Object.keys(indices)
    .filter(e => seriesVisible[e as IndicesTypes])
    .map(e => ({
      ...indices[e as IndicesTypes].seriesOption,
      name: `${indices[e as IndicesTypes].seriesOption.name***REMOVED***`,
      type: 'line',
      itemStyle: {
        opacity: 0,
    ***REMOVED***,
      lineStyle: {
        ...indices[e as IndicesTypes].seriesOption.lineStyle,
        type: 'dashed',
    ***REMOVED***,
      tooltip: {
        show: false,
    ***REMOVED***,
      data: indices[e as IndicesTypes].seriesOption.data?.filter(
        // @ts-ignore
        ([date, _val]) =>
          getYear(new Date(date)) >= new Date().getFullYear() - 1,
  ***REMOVED***,
  ***REMOVED***))

  // this is only added to fix the double tooltip bug
  const onlyCurYearSeries: LineSeriesOption[] = Object.keys(indices)
    .filter(e => seriesVisible[e as IndicesTypes])
    .map(e => ({
      ...indices[e as IndicesTypes].seriesOption,
      name: `${indices[e as IndicesTypes].seriesOption.name***REMOVED***`,
      type: 'line',
      itemStyle: {
        opacity: 0,
    ***REMOVED***,
      lineStyle: {
        ...indices[e as IndicesTypes].seriesOption.lineStyle,
        type: 'dashed',
    ***REMOVED***,
      data: indices[e as IndicesTypes].seriesOption.data?.filter(
        // @ts-ignore
        ([date, _val]) => getYear(new Date(date)) == new Date().getFullYear(),
  ***REMOVED***,
  ***REMOVED***))

  const isAllChecked: boolean =
    seriesVisible.sommertage || seriesVisible.frosttage

  const allData = [...series].flatMap(s => s.data)

  const trendlineData = calculateTrendline(allData as [string, number][])
  const trendlineColor =
    series.length > 0 ? series[0].lineStyle?.color || 'black' : 'black'

  const activeToggleCount = countActiveToggles(seriesVisible)
  const trendlineSeries: LineSeriesOption | null =
    activeToggleCount === 1
      ? {
          type: 'line',
          data: trendlineData,
          name: 'Durchschnitt',
          smooth: true,
          lineStyle: {
            type: 'dotted', // Change to solid line
            color: trendlineColor, // Use the series color
            opacity: 0.3,
        ***REMOVED***,
          symbol: 'none', // Hide small circles on the trendline initially
          emphasis: {
            lineStyle: {
              opacity: 1, // Change color on hover
          ***REMOVED***,
        ***REMOVED***,
          markLine: {***REMOVED***,
      ***REMOVED***
      : null

  return (
    <div className="flex h-full w-full flex-col items-center p-5 2xl:flex-row">
      <div className="h-full w-full flex-1">
        <Title as="h7" font="semibold" variant={'primary'***REMOVED***>
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
              series: [
                ...series,
                ...lastToCurYearSeries,
                ...onlyCurYearSeries,
                ...(trendlineSeries ? [trendlineSeries] : []),
              ],
              xAxis: {
                type: 'time',
                axisLabel: {
                  fontSize: device === 'mobile' ? 12 : 20,
              ***REMOVED***,
                min: parse(
                  `${STARTING_YEAR***REMOVED***-01-01`,
                  'yyyy-MM-dd',
                  new Date(),
            ***REMOVED***.getTime(),
                max: parse(
                  `${new Date().getFullYear()***REMOVED***-01-01`,
                  'yyyy-MM-dd',
                  new Date(),
            ***REMOVED***.getTime(),
            ***REMOVED***,
              tooltip: {
                show: true,
                showDelay: 0,
                trigger: 'axis',
                // formatter: (params: any) => {
                //   console.log(params)

                //   return '{b0***REMOVED***: {c0***REMOVED***<br />{b1***REMOVED***: {c1***REMOVED***'
                // ***REMOVED***,
                // return from x-axis only year
                formatter: chartFormatter,
            ***REMOVED***,
              yAxis: {
                type: 'value',
                interval: isAllChecked ? 10 : 5,
                axisLabel: {
                  fontSize: device === 'mobile' ? 12 : 20,
                  formatter: (val: any) => {
                    if (val === 0) {
                      return ''
                  ***REMOVED***
                    return val
                ***REMOVED***,
              ***REMOVED***,
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
          checked={seriesVisible.heisse_tage***REMOVED***
          onChange={c => setSeriesVisible({ ...seriesVisible, heisse_tage: c ***REMOVED***)***REMOVED***
          type="heisse_tage"
        />
        <ClimateIndiceToggle
          checked={seriesVisible.sommertage***REMOVED***
          onChange={c => setSeriesVisible({ ...seriesVisible, sommertage: c ***REMOVED***)***REMOVED***
          type="sommertage"
        />
        <ClimateIndiceToggle
          checked={seriesVisible.tropennaechte***REMOVED***
          onChange={c =>
            setSeriesVisible({ ...seriesVisible, tropennaechte: c ***REMOVED***)
        ***REMOVED***
          type="tropennaechte"
        />
        <ClimateIndiceToggle
          checked={seriesVisible.frosttage***REMOVED***
          onChange={c => setSeriesVisible({ ...seriesVisible, frosttage: c ***REMOVED***)***REMOVED***
          type="frosttage"
        />
        <ClimateIndiceToggle
          checked={seriesVisible.eistage***REMOVED***
          onChange={c => setSeriesVisible({ ...seriesVisible, eistage: c ***REMOVED***)***REMOVED***
          type="eistage"
        />
      </div>
    </div>
  )
***REMOVED***
