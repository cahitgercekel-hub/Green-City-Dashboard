import useCO2Data from '@/hooks/useCO2Data'
import { parse ***REMOVED*** from 'date-fns'
import { SeriesOption ***REMOVED*** from 'echarts'
import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config'
import Title from '@/components/Elements/Title'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import useDevice from '@/hooks/useDevice'
import { linearRegression ***REMOVED*** from 'simple-statistics'
import { useWindowSize ***REMOVED*** from 'react-use'

type CO2ChartProps = {
  showFuture?: boolean
  mode: 'co2' | 'endenergie'
***REMOVED***

const { theme ***REMOVED*** = resolveConfig(tailwindConfig)

export default function CO2Chart({ showFuture = false, mode ***REMOVED***: CO2ChartProps) {
  const data = useCO2Data(mode)
  const device = useDevice()
  const { width ***REMOVED*** = useWindowSize()

  /**
   * Adds the future data to the data
   * @param baseData The base data
   * @returns The data with the future data
   */
  const withFuture = (baseData: number[][]) => {
    const { m, b ***REMOVED*** = linearRegression(baseData)
    const x = parse('01-01-2030', 'dd-MM-yyyy', new Date()).getTime()

    const y = showFuture ? m * x + b : 0
    return [
      ...baseData,
      [parse('01-01-2030', 'dd-MM-yyyy', new Date()).getTime(), y],
    ]
***REMOVED***

  /**
   * Prepares the data for the chart
   * @param key The key to prepare
   * @returns The prepared data
   */
  const prepareData = (key: keyof (typeof data)[0]) => {
    if (mode === 'endenergie') {
      return data.map(e => [
        parse(`01-01-${e.Jahr***REMOVED***`, 'dd-MM-yyyy', new Date()).getTime(),
        e[key],
      ])
  ***REMOVED***

    return withFuture(
      data.map(e => [
        parse(`01-01-${e.Jahr***REMOVED***`, 'dd-MM-yyyy', new Date()).getTime(),
        e[key],
      ]),
***REMOVED***
***REMOVED***

  const series: SeriesOption[] = [
    {
      type: 'line',
      name: 'Verkehr',
      data: prepareData('Verkehr'),
      showSymbol: false,
      // @ts-ignore
      color: theme?.colors?.mobility.DEFAULT || '#34c17b',
      lineStyle: {
        width: 3,
    ***REMOVED***,
  ***REMOVED***,
    {
      type: 'line',
      name: 'Industrie',
      data: prepareData('Industrie'),
      showSymbol: false,
      // @ts-ignore
      color: theme?.colors?.primary.DEFAULT || '#005b79',
      lineStyle: {
        width: 3,
    ***REMOVED***,
  ***REMOVED***,
    {
      type: 'line',
      name: 'Gewerbe und Sonstiges',
      data: prepareData('Gewerbe + Sonstiges'),
      showSymbol: false,
      // @ts-ignore
      color: '#f3e500',
      lineStyle: {
        width: 3,
    ***REMOVED***,
  ***REMOVED***,
    {
      type: 'line',
      name: 'Private Haushalte',
      data: prepareData('Private Haushalte'),
      showSymbol: false,
      // @ts-ignore
      color: theme?.colors?.energy.DEFAULT || '#f28443',
      lineStyle: {
        width: 3,
    ***REMOVED***,
  ***REMOVED***,
  ]

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex-1">
        <ReactECharts
          option={{
            grid: {
              top: 24,
              right: 0,
              bottom: 48,
              left: ['mobile', 'tablet'].includes(device) ? 40 : 80,
          ***REMOVED***,
            xAxis: {
              type: 'time',
              max: parse('01-01-2030', 'dd-MM-yyyy', new Date()).getTime(),
              axisLabel: {
                fontSize: device === 'mobile' ? 12 : 20,
            ***REMOVED***,
          ***REMOVED***,
            yAxis: {
              type: 'value',
              axisLabel: {
                fontSize: device === 'mobile' ? 12 : 20,
                formatter: (val: any) => {
                  if (val === 0) {
                    return ''
                ***REMOVED***
                  return new Intl.NumberFormat('de-DE', {
                    maximumFractionDigits: 0,
                ***REMOVED***).format(val / (mode === 'co2' ? 1000 : 1))
              ***REMOVED***,
            ***REMOVED***,
          ***REMOVED***,
            series: series,
            legend: {
              show: false,
          ***REMOVED***,
        ***REMOVED******REMOVED***
          renderer="svg"
          style={{
            height: width < 1024 ? '200px' : '100%',
        ***REMOVED******REMOVED***
        />
      </div>
      <Spacer />
      <div className="flex flex-wrap items-center gap-4 md:ml-[80px]">
  ***REMOVED***series.map((s, i) => (
          <div className="flex min-w-[8rem] items-center gap-2" key={i***REMOVED***>
            <div
              className="h-1 w-8 rounded-full"
              style={{ backgroundColor: s.color as string ***REMOVED******REMOVED***
            ></div>
            <Title as="h5" variant={'primary'***REMOVED***>
        ***REMOVED***s.name***REMOVED***
            </Title>
          </div>
    ***REMOVED***)***REMOVED***
      </div>
    </div>
  )
***REMOVED***
