'use client'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config.js'
import useGarbageData from '@/hooks/useGarbageData'
import { SeriesOption ***REMOVED*** from 'echarts'
import Title from '@/components/Elements/Title'
import { useState ***REMOVED*** from 'react'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { TrashGesamt, TrashWertstoffe ***REMOVED*** from '@/components/Icons'
import MobileSlider from '@/components/Inputs/MobileSlider'
import { useWindowSize ***REMOVED*** from 'react-use'
import Slider from '@/components/Inputs/Slider'
import { ReactECharts ***REMOVED*** from '@/components/Charts/ReactECharts'
import useDevice from '@/hooks/useDevice'

const { theme ***REMOVED*** = resolveConfig(tailwindConfig)

function getSeries(name: string, data: any[], color: string): SeriesOption {
  return {
    name,
    type: 'line',
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

  const { width ***REMOVED*** = useWindowSize()
  const device = useDevice()

  const totalData = data.filter(
    e => e.KATEGORIE === 'Abfallaufkommen in kg pro Einwohner/Jahr Gesamt',
  )
  const wertstoffeData = data.filter(
    e => e.KATEGORIE === 'Wertstoffe in kg pro Einwohner/Jahr',
  )

  const years = wertstoffeData.map(e => e.JAHR.toString())

  const [yearIndex, setYearIndex] = useState(0)

  return (
    <div className="flex h-full w-full flex-col items-center 2xl:flex-row">
      <div className="flex h-full w-full flex-1 flex-col">
        <div className="h-full w-full flex-1">
          <ReactECharts
            option={{
              grid: {
                top: 20,
                left: 60,
                bottom: 20,
                right: 20,
            ***REMOVED***,
              series: [
                getSeries(
                  'Gesamt',
                  totalData.map(e => e.WERT),
                  // @ts-ignore
                  theme?.colors?.mobility.DEFAULT || '#34c17b',
            ***REMOVED***,
                getSeries(
                  'Wertstoffe',
                  wertstoffeData.map(e => e.WERT),
                  // @ts-ignore
                  theme?.colors?.energy.DEFAULT || '#f28443',
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
                interval: 100,
            ***REMOVED***,
              animation: true,
          ***REMOVED******REMOVED***
            settings={{
              notMerge: true,
          ***REMOVED******REMOVED***
            style={{
              height: ['tablet', 'mobile'].includes(device) ? '200px' : '100%',
              width: '100%',
          ***REMOVED******REMOVED***
          />
        </div>
        <div className="mt-4 flex w-full gap-12 py-4 pl-4 pr-16">
          <Title as={'h5'***REMOVED*** variant={'primary'***REMOVED***>
            Jahr
          </Title>
          <div className="flex-1">
      ***REMOVED***width < 1800 && (
              <MobileSlider
                defaultValue={[yearIndex]***REMOVED***
                labels={years***REMOVED***
                max={years.length - 1***REMOVED***
                min={0***REMOVED***
                onValueChange={([e]) => {
                  setYearIndex(e)
              ***REMOVED******REMOVED***
                variant={'climate'***REMOVED***
              />
        ***REMOVED******REMOVED***
      ***REMOVED***width >= 1800 && (
              <Slider
                defaultValue={[yearIndex]***REMOVED***
                labels={years***REMOVED***
                max={years.length - 1***REMOVED***
                min={0***REMOVED***
                onValueChange={([e]) => {
                  setYearIndex(e)
              ***REMOVED******REMOVED***
                variant={'climate'***REMOVED***
              />
        ***REMOVED******REMOVED***
          </div>
        </div>
      </div>
      <div className="flex h-full flex-row justify-evenly 2xl:flex-col">
        <div className="flex h-fit w-48 items-center gap-2">
          <TrashGesamt className="h-14" />
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
        <div className="flex h-fit w-48 items-center gap-2">
          <TrashWertstoffe className="h-14 text-energy" />
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
