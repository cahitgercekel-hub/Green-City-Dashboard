'use client'

import monatsmittelwerte from '@/assets/data/trafficload.json'
import Title from '@/components/Elements/Title'
import Slider from '@/components/Inputs/Slider'
import ToggleGroup from '@/components/Inputs/ToggleGroup'
import { useState } from 'react'
import TotalDistance from './DistanceOverview'
import TotalTime from './TimeConsume'
import TotalBikes from './RigistredBikes'

function Toggle({ onChange }: { onChange: (_val: string) => void }) {
  const minYear = 2020
  const maxYear = new Date().getFullYear() - 1

  const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => {
    return {
      element: (
        <Title as="h6" className="2xl:w-max">
          {minYear + i}
        </Title>
      ),
      value: (minYear + i).toString(),
    }
  })

  return (
    <ToggleGroup
      defaultValue="2024"
      items={years}
      onChange={onChange}
      scrollX
      variant={'mobility'}
    />
  )
}

export default function BicycleOverviewContent() {
  const currentYear = new Date().getFullYear()
  const latestMonthWithData = monatsmittelwerte.features
    .filter(f => f.properties.year === currentYear)
    .map(f => f.properties.month)
    .sort((a, b) => b - a)[0]

  const [monthIndex, setMonthIndex] = useState(latestMonthWithData)
  const [mode, setMode] = useState('2024')
  console.log('datta', monthIndex, mode)
  return (
    <>
      <div className="relative flex h-[60rem] flex-1 flex-col rounded border bg-white px-6 pb-4 pt-8 md:h-[28rem]  xl:h-[32rem]">
        <div className="absolute -top-4 left-0 w-full md:-top-6 md:w-auto">
          <Toggle onChange={val => setMode(val as typeof mode)} />
        </div>
        <div className="flex h-full w-full flex-col gap-4 overflow-hidden py-2 md:flex-row">
          <TotalBikes indexofmonth={monthIndex} year={mode} />
          <TotalDistance indexofmonth={monthIndex} year={mode} />
          <TotalTime indexofmonth={monthIndex} year={mode} />
        </div>
      </div>

      <Slider
        defaultValue={[monthIndex - 1]}
        firstValueMobile={monthIndex} // MONAT MAI NUR FÜR DEMO
        labels={[
          'JAN',
          'FEB',
          'MAR',
          'APR',
          'MAI',
          'JUN',
          'JUL',
          'AUG',
          'SEP',
          'OKT',
          'NOV',
          'DEZ',
        ]}
        max={11}
        min={0}
        onValueChange={([e]) => {
          setMonthIndex(e)
        }}
        variant={'mobility'}
      />
    </>
  )
}
