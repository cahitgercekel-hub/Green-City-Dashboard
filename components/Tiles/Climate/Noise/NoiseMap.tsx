'use client'

import type {
  NoisePointFeature,
  NoiseSlotKey,
} from '@/hooks/useNoiseCampaign'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { formatDb, NOISE_STEPS, noiseColor } from './noiseScale'

interface NoiseMapProps {
  features: NoisePointFeature[]
  slot: NoiseSlotKey
  selectedId: string | null
  onSelect: (_pointId: string) => void
}

export default function NoiseMap({
  features,
  slot,
  selectedId,
  onSelect,
}: NoiseMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)
  const markersRef = useRef<maplibregl.Marker[]>([])
  const { t } = useTranslation()

  // Create the map once and fit it to all measuring points
  useEffect(() => {
    if (!mapContainer.current || features.length === 0 || mapRef.current) {
      return
    }
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: features[0].geometry.coordinates,
      zoom: 14,
      attributionControl: false,
    })
    map.addControl(new maplibregl.NavigationControl(), 'top-right')
    if (features.length > 1) {
      const bounds = new maplibregl.LngLatBounds()
      for (const f of features) {
        bounds.extend(f.geometry.coordinates)
      }
      map.fitBounds(bounds, { padding: 50, animate: false })
    }
    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [features])

  // Redraw the markers whenever the time slot or the selection changes
  useEffect(() => {
    const map = mapRef.current
    if (!map) {
      return
    }
    for (const m of markersRef.current) {
      m.remove()
    }
    markersRef.current = features.map(f => {
      const stats = f.properties.slots[slot]
      const db = stats?.laeq ?? null
      const selected = f.properties.point_id === selectedId

      const el = document.createElement('button')
      el.type = 'button'
      el.title = f.properties.name
      el.textContent = formatDb(db)
      el.style.width = selected ? '38px' : '30px'
      el.style.height = selected ? '38px' : '30px'
      el.style.borderRadius = f.properties.is_static ? '6px' : '50%'
      el.style.backgroundColor = noiseColor(db)
      el.style.color = 'white'
      el.style.fontSize = '12px'
      el.style.fontWeight = '600'
      el.style.border = selected ? '3px solid #005b79' : '2px solid white'
      el.style.boxShadow = '0 1px 4px rgba(0,0,0,0.35)'
      el.style.cursor = 'pointer'
      el.addEventListener('click', e => {
        e.stopPropagation()
        onSelect(f.properties.point_id)
      })

      return new maplibregl.Marker({ element: el })
        .setLngLat(f.geometry.coordinates)
        .addTo(map)
    })
  }, [features, slot, selectedId, onSelect])

  return (
    <div className="relative h-full">
      <div
        className="min-h-[400px] w-full overflow-hidden rounded-lg lg:h-full"
        ref={mapContainer}
      />
      <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 rounded-md bg-white/90 px-2.5 py-2 text-xs text-gray-700 shadow">
        <span>{t('noise.legendQuiet')}</span>
        {NOISE_STEPS.map(step => (
          <span
            className="inline-block h-2.5 w-5"
            key={step.color}
            style={{ backgroundColor: step.color }}
            title={Number.isFinite(step.min) ? `≥ ${step.min} dB` : '< 45 dB'}
          />
        ))}
        <span>{t('noise.legendLoud')}</span>
      </div>
    </div>
  )
}
