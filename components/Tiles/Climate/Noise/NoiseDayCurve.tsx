'use client'

import { ReactECharts } from '@/components/Charts/ReactECharts'
import type { EChartsOption } from 'echarts'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { UNIT_AXIS } from './noiseScale'

interface NoiseDayCurveProps {
  // ISO timestamp + level in dB(A)
  series: { t: string; value: number }[]
}

// Day/night curve at the fixed station (live from openSenseMap, otherwise from the campaign dataset)
export default function NoiseDayCurve({ series }: NoiseDayCurveProps) {
  const { t } = useTranslation()

  const option = useMemo<EChartsOption>(
    () => ({
      grid: { left: 40, right: 16, top: 36, bottom: 32 },
      tooltip: {
        trigger: 'axis',
        valueFormatter: (v: unknown) => (typeof v === 'number' ? `${v} dB` : '–'),
      },
      xAxis: { type: 'time' },
      yAxis: { type: 'value', min: 30, max: 90, ...UNIT_AXIS },
      series: [
        {
          name: t('noise.average'),
          type: 'line',
          smooth: true,
          showSymbol: false,
          lineStyle: { color: '#005b79', width: 2 },
          areaStyle: { color: '#005b79', opacity: 0.08 },
          data: series.map(p => [p.t, p.value]),
          markLine: {
            symbol: 'none',
            lineStyle: { type: 'dashed', color: '#e34a33' },
            label: { formatter: '{b}', position: 'insideEndTop', fontSize: 11 },
            data: [
              { name: t('noise.whoDay'), yAxis: 53 },
              { name: t('noise.whoNight'), yAxis: 45 },
            ],
          },
        },
      ],
    }),
    [series, t],
  )

  return <ReactECharts option={option} style={{ height: 240 }} />
}
