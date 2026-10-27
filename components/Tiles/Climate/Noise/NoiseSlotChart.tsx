'use client'

import { ReactECharts } from '@/components/Charts/ReactECharts'
import {
  NOISE_SLOTS,
  type NoisePointProperties,
  type NoiseSlotKey,
} from '@/hooks/useNoiseCampaign'
import type { EChartsOption } from 'echarts'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { noiseColor, UNIT_AXIS } from './noiseScale'

interface NoiseSlotChartProps {
  point: NoisePointProperties
  activeSlot: NoiseSlotKey
}

// Bars = LAeq per time slot, dashed step line = WHO reference (day 53 / night 45 dB)
export default function NoiseSlotChart({
  point,
  activeSlot,
}: NoiseSlotChartProps) {
  const { t } = useTranslation()

  const option = useMemo<EChartsOption>(() => {
    const labels = NOISE_SLOTS.map(s => t(`noise.slotsShort.${s}`))
    return {
      grid: { left: 40, right: 12, top: 36, bottom: 28 },
      tooltip: {
        trigger: 'axis',
        valueFormatter: (v: unknown) => (typeof v === 'number' ? `${v} dB` : '–'),
      },
      xAxis: { type: 'category', data: labels },
      yAxis: { type: 'value', min: 30, max: 90, ...UNIT_AXIS },
      series: [
        {
          name: t('noise.average'),
          type: 'bar',
          data: NOISE_SLOTS.map(s => {
            const v = point.slots[s]?.laeq ?? null
            return {
              value: v,
              itemStyle: {
                color: noiseColor(v),
                opacity: s === activeSlot ? 1 : 0.55,
              },
            }
          }),
          label: { show: true, position: 'top', fontSize: 12 },
        },
        {
          name: t('noise.whoRef'),
          type: 'line',
          step: 'middle',
          symbol: 'none',
          lineStyle: { type: 'dashed', color: '#005b79', width: 1.5 },
          data: NOISE_SLOTS.map(s => (s === 'night' ? 45 : 53)),
        },
      ],
    }
  }, [point, activeSlot, t])

  return <ReactECharts option={option} style={{ height: 220 }} />
}
