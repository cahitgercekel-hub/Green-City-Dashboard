'use client'

import ToggleGroup from '@/components/Inputs/ToggleGroup'
import useNoiseCampaign, {
  NOISE_SLOTS,
  type NoiseSlotKey,
  useNoiseRoute,
} from '@/hooks/useNoiseCampaign'
import type { SenseBox } from '@/hooks/useOpenSenseMap'
import { formatDistanceToNow } from 'date-fns'
import { de } from 'date-fns/locale'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import NoiseDayCurve from './NoiseDayCurve'
import NoiseMap from './NoiseMap'
import NoiseSlotChart from './NoiseSlotChart'
import { formatDb, noiseColor } from './noiseScale'

// openSenseMap grouptag of the LärmBoxes. Sensor titles must be exactly "LAeq", "LAmax", "LA90".
export const NOISE_GROUPTAG = 'LaermLupe'
const LIVE_THRESHOLD_MS = 15 * 60 * 1000
const LIVE_POLL_MS = 60 * 1000

// Boxes of the grouptag, refreshed every minute (the route caches openSenseMap for 60 s),
// so the live card updates without a page reload.
function useLiveBoxes(grouptag: string) {
  const [boxes, setBoxes] = useState<SenseBox[]>([])
  const [tick, setTick] = useState(0)
  useEffect(() => {
    let active = true
    fetch(`/api/noise?grouptag=${encodeURIComponent(grouptag)}`)
      .then(r => (r.ok ? r.json() : []))
      .then(d => {
        if (active && Array.isArray(d)) {
          setBoxes(d as SenseBox[])
        }
      })
      .catch(() => undefined)
    const timer = setTimeout(() => setTick(t => t + 1), LIVE_POLL_MS)
    return () => {
      active = false
      clearTimeout(timer)
    }
  }, [grouptag, tick])
  return { boxes, tick }
}

export default function NoiseContent() {
  const { t } = useTranslation()
  const { data: campaign, isLoading } = useNoiseCampaign()
  const { boxes, tick } = useLiveBoxes(NOISE_GROUPTAG)
  const route = useNoiseRoute()
  const [slot, setSlot] = useState<NoiseSlotKey>('evening')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [liveSeries, setLiveSeries] = useState<{ t: string; value: number }[]>(
    [],
  )

  const features = useMemo(() => campaign?.features ?? [], [campaign])

  // No manual selection: pick the loudest point in the active time slot
  const activeId = useMemo(() => {
    if (selectedId) {
      return selectedId
    }
    let best: { id: string; db: number } | null = null
    for (const f of features) {
      const db = f.properties.slots[slot]?.laeq
      if (typeof db === 'number' && (!best || db > best.db)) {
        best = { id: f.properties.point_id, db }
      }
    }
    return best?.id ?? null
  }, [features, slot, selectedId])

  const selected = features.find(f => f.properties.point_id === activeId)
  const stats = selected?.properties.slots[slot]

  // Live value: first LärmBox that has a sensor titled "LAeq" with a recent measurement
  const live = useMemo(() => {
    for (const box of boxes) {
      const sensor = box.sensors.find(s => s.title.toLowerCase() === 'laeq')
      if (!sensor?.lastMeasurement) {
        continue
      }
      const age = Date.now() - new Date(sensor.lastMeasurement.createdAt).getTime()
      return {
        box,
        sensor,
        value: Number(sensor.lastMeasurement.value),
        createdAt: sensor.lastMeasurement.createdAt,
        isFresh: age < LIVE_THRESHOLD_MS,
      }
    }
    return null
  }, [boxes])

  useEffect(() => {
    if (!live) {
      return
    }
    const params = new URLSearchParams({
      boxId: live.box._id,
      sensorId: live.sensor._id,
      hours: '24',
    })
    fetch(`/api/noise?${params}`)
      .then(r => (r.ok ? r.json() : []))
      .then(d => setLiveSeries(Array.isArray(d) ? d : []))
      .catch(() => setLiveSeries([]))
  }, [live?.box._id, live?.sensor._id, tick])

  // Day/night curve: live series if available, otherwise the hourly values of the fixed station from the campaign
  const curve = useMemo(() => {
    if (liveSeries.length > 0) {
      return liveSeries
    }
    const staticSeries = campaign?.meta.static_series?.[0]
    return staticSeries
      ? staticSeries.hours.map(h => ({ t: h.t, value: h.laeq }))
      : []
  }, [liveSeries, campaign])

  if (isLoading) {
    return (
      <div className="flex h-40 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-climate border-t-transparent" />
      </div>
    )
  }

  if (!campaign || features.length === 0) {
    return <p className="text-sm text-gray-500">{t('noise.noData')}</p>
  }

  const usedMinutes = Math.round((campaign.meta.excluded?.used_seconds ?? 0) / 60)

  return (
    <div className="space-y-4">
      <ToggleGroup
        defaultValue={slot}
        items={NOISE_SLOTS.map(s => ({
          element: t(`noise.slots.${s}`),
          value: s,
        }))}
        onChange={v => setSlot(v as NoiseSlotKey)}
        scrollX
        variant="climate"
      />

      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="lg:w-1/2">
          <NoiseMap
            features={features}
            onSelect={setSelectedId}
            route={route}
            selectedId={activeId}
            slot={slot}
          />
        </div>

        <div className="flex flex-col gap-3 lg:w-1/2">
          {live && (
            <div className="flex items-center justify-between rounded-lg bg-white/60 px-3 py-2">
              <div className="min-w-0">
                <p className="text-xs text-gray-600">
                  <span
                    className={`mr-1.5 inline-block h-2.5 w-2.5 rounded-full ${
                      live.isFresh ? 'bg-green-400' : 'bg-gray-300'
                    }`}
                  />
                  {t('noise.liveNow')} · {live.box.name}
                </p>
                <p className="text-xs text-gray-500">
                  {t('noise.updated')}{' '}
                  {formatDistanceToNow(new Date(live.createdAt), {
                    addSuffix: true,
                    locale: de,
                  })}
                </p>
              </div>
              <p
                className="text-3xl font-bold"
                style={{ color: noiseColor(live.value) }}
              >
                {formatDb(live.value)}
                <span className="ml-1 text-sm font-normal text-gray-500">
                  dB
                </span>
              </p>
            </div>
          )}

          {selected ? (
            <div className="rounded-lg bg-white/60 p-3">
              <p className="text-sm font-medium">{selected.properties.name}</p>
              <p className="text-xs text-gray-500">
                {t(`noise.categories.${selected.properties.category}`, {
                  defaultValue: selected.properties.category,
                })}
                {selected.properties.road_name
                  ? ` · ${selected.properties.road_name}`
                  : ''}
                {selected.properties.maxspeed
                  ? ` · ${selected.properties.maxspeed} km/h`
                  : ''}
              </p>

              {stats ? (
                <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p
                      className="text-2xl font-bold"
                      style={{ color: noiseColor(stats.laeq) }}
                    >
                      {formatDb(stats.laeq)}
                    </p>
                    <p className="text-xs text-gray-600">{t('noise.average')}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-climate">
                      {formatDb(stats.la90)}
                    </p>
                    <p className="text-xs text-gray-600">
                      {t('noise.background')}
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-climate">
                      {formatDb(stats.lamax)}
                    </p>
                    <p className="text-xs text-gray-600">{t('noise.peak')}</p>
                  </div>
                </div>
              ) : (
                <p className="mt-2 text-sm text-gray-500">
                  {t('noise.noSlotData')}
                </p>
              )}

              <NoiseSlotChart activeSlot={slot} point={selected.properties} />
            </div>
          ) : (
            <p className="text-sm text-gray-500">{t('noise.selectPoint')}</p>
          )}
        </div>
      </div>

      {curve.length > 0 && (
        <div className="rounded-lg bg-white/60 p-3">
          <p className="text-sm font-medium">{t('noise.dayCurve')}</p>
          <NoiseDayCurve series={curve} />
        </div>
      )}

      <p className="text-xs text-gray-500">
        {t('noise.disclaimer', { minutes: usedMinutes })}
      </p>
    </div>
  )
}
