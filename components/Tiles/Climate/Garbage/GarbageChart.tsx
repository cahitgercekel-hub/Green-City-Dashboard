'use client'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config.js'
import useGarbageData from '@/hooks/useGarbageData'
import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import { SeriesOption ***REMOVED*** from 'echarts'
import { TrashIcon ***REMOVED*** from '@heroicons/react/24/outline'
import Title from '@/components/Elements/Title'
import Slider from '@/components/Inputs/Slider'
import { useState ***REMOVED*** from 'react'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'

const { theme ***REMOVED*** = resolveConfig(tailwindConfig)

function getSeries(name: string, data: any[], color: string): SeriesOption {
  return {
    name,
    type: 'line',
    stack: 'Total',
    areaStyle: {
      color,
      opacity: 0.23,
  ***REMOVED***,
    lineStyle: {
      color,
      width: 4,
  ***REMOVED***,
    itemStyle: {
      opacity: 0,
  ***REMOVED***,
    emphasis: {
      focus: 'series',
  ***REMOVED***,
    data,
***REMOVED***
***REMOVED***

/**
 *
 * @returns The Garbage Chart
 */
export default function GarbageChart() {
  const data = useGarbageData()

  const totalData = data.filter(
    e => e.KATEGORIE === 'Abfallaufkommen in kg pro Einwohner/Jahr Gesamt',
  )
  const wertstoffeData = data.filter(
    e => e.KATEGORIE === 'Wertstoffe in kg pro Einwohner/Jahr',
  )

  const years = wertstoffeData.map(e => e.JAHR.toString())

  const [yearIndex, setYearIndex] = useState(0)

  return (
    <div className="flex h-full w-full items-center p-5">
      <div className="h-full flex-1">
        <ReactECharts
          option={{
            series: [
              getSeries(
                'Wertstoffe',
                wertstoffeData.map(e => e.WERT),
                // @ts-ignore
                theme?.colors?.energy.DEFAULT || '#f28443',
          ***REMOVED***,
              getSeries(
                'Gesamt',
                totalData.map(e => e.WERT),
                // @ts-ignore
                theme?.colors?.mobility.DEFAULT || '#34c17b',
          ***REMOVED***,
            ],
            xAxis: [
        ***REMOVED***
                type: 'category',
                data: wertstoffeData.map(e => e.JAHR),
                show: false,
            ***REMOVED***,
            ],
            yAxis: {
              type: 'value',
              interval: 200,
          ***REMOVED***,
            animation: true,
        ***REMOVED******REMOVED***
          settings={{
            notMerge: true,
        ***REMOVED******REMOVED***
        />
        <div className="flex w-full -translate-y-10 gap-12 pl-20 pr-40">
          <Title as={'h5'***REMOVED*** variant={'primary'***REMOVED***>
            Jahr
          </Title>
          <div className="flex-1">
            <Slider
              defaultValue={[yearIndex]***REMOVED***
              labels={years***REMOVED***
              max={years.length - 1***REMOVED***
              min={0***REMOVED***
              onValueChange={([e]) => {
                setYearIndex(e)
            ***REMOVED******REMOVED***
            />
          </div>
        </div>
      </div>
      <div className="flex h-full flex-col justify-evenly">
        <div className="flex w-48 items-center gap-2">
          <TrashIcon className="h-14 text-mobility" />
          <div>
            <Title as={'h5'***REMOVED*** variant={'primary'***REMOVED***>
              Gesamt
            </Title>
            <Title as={'h3'***REMOVED*** variant={'primary'***REMOVED***>
              <AnimatedNumber>
          ***REMOVED***totalData.find(e => e.JAHR.toString() === years[yearIndex])
                  ?.WERT ?? 0***REMOVED***
              </AnimatedNumber>
              kg
            </Title>
          </div>
        </div>
        <div className="flex w-48 items-center gap-2">
          <TrashIcon className="h-14 text-energy" />
          <div>
            <Title as={'h5'***REMOVED*** variant={'primary'***REMOVED***>
              Wertstoffe
            </Title>
            <Title as={'h3'***REMOVED*** variant={'primary'***REMOVED***>
              <AnimatedNumber>
          ***REMOVED***wertstoffeData.find(
                  e => e.JAHR.toString() === years[yearIndex],
            ***REMOVED***?.WERT ?? 0***REMOVED***
              </AnimatedNumber>
              kg
            </Title>
          </div>
        </div>
      </div>
    </div>
  )
***REMOVED***
