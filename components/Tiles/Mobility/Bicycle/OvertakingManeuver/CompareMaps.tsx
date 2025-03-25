'use client'

import React, { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

import '@maplibre/maplibre-gl-compare/dist/maplibre-gl-compare.css'
// @ts-ignore
import MaplibreCompare from '@maplibre/maplibre-gl-compare'

const MapComparison: React.FC = () => {
  const beforeMapContainer = useRef<HTMLDivElement>(null)
  const afterMapContainer = useRef<HTMLDivElement>(null)
  const comparisonContainer = useRef<HTMLDivElement>(null)
  const compareInstance = useRef<MaplibreCompare | null>(null)
  const [legendUrl] = useState<string>(
    'https://www.wms.nrw.de/wms/unfallatlas?request=GetLegendGraphic&version=1.3.0&format=image/png&layer=Beteiligung_Fahrrad_250',
  )

  useEffect(() => {
    if (
      !beforeMapContainer.current ||
      !afterMapContainer.current ||
      !comparisonContainer.current
    )
      return

    // Initialize both maps
    const beforeMap = new maplibregl.Map({
      container: beforeMapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: [7.6257, 51.9607], // Münster coordinates
      zoom: 16,
      attributionControl: false,
      maxBounds: [
        [7.4, 51.8],
        [7.9, 52.1],
      ],
    })

    const afterMap = new maplibregl.Map({
      container: afterMapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
      center: [7.6257, 51.9607],
      zoom: 12,
      attributionControl: false,
      maxBounds: [
        [7.4, 51.8],
        [7.9, 52.1],
      ],
    })

    // Add WMS layers when maps load
    beforeMap.on('load', () => {
      beforeMap.addSource('wms-left', {
        type: 'raster',
        tiles: [
          'https://www.wms.nrw.de/wms/unfallatlas?service=WMS&request=GetMap&version=1.3.0&layers=Unfallorte&styles=&format=image/png&transparent=true&width=256&height=256&crs=EPSG:3857&bbox={bbox-epsg-3857}',
        ],
        tileSize: 256,
      })
      beforeMap.addLayer({
        id: 'wms-layer-left',
        type: 'raster',
        source: 'wms-left',
        paint: {},
      })
    })

    afterMap.on('load', () => {
      afterMap.addSource('wms-right', {
        type: 'raster',
        tiles: [
          'https://www.wms.nrw.de/wms/unfallatlas?service=WMS&request=GetMap&version=1.3.0&layers=Beteiligung_Fahrrad_250&styles=&format=image/png&transparent=true&width=256&height=256&crs=EPSG:3857&bbox={bbox-epsg-3857}',
        ],
        tileSize: 256,
      })
      afterMap.addLayer({
        id: 'wms-layer-right',
        type: 'raster',
        source: 'wms-right',
        paint: {},
      })

      // Initialize comparison after both maps are ready
      compareInstance.current = new MaplibreCompare(
        beforeMap,
        afterMap,
        comparisonContainer.current,
        {
          mousemove: false,
          orientation: 'vertical',
        },
      )

      // Example of event listener
      // compareInstance.current.on('slideend', e => {
      //   console.log('Slider position:', e.currentPosition)
      // })
    })

    return () => {
      // Cleanup
      compareInstance.current?.remove()
      beforeMap.remove()
      afterMap.remove()
    }
  }, [])

  return (
    <div
      ref={comparisonContainer}
      className="rounded-md"
      style={{
        position: 'relative',
        width: '100%',
        height: '500px',
        overflow: 'hidden',
      }}
    >
      <div
        ref={beforeMapContainer}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />

      <div
        ref={afterMapContainer}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        <div className="absolute right-3 top-3 z-10 rounded bg-black bg-opacity-70 px-2 py-1 text-xs text-white">
          <a href="https://unfallatlas.statistikportal.de/">
            Map Data © Unfallatlas
          </a>
        </div>
        <div className="absolute bottom-3 right-3 z-10 rounded bg-white bg-opacity-80 p-1 shadow-md">
          <img
            src={legendUrl}
            alt="Map Legend"
            className="h-auto max-w-[150px]"
          />
        </div>
      </div>
    </div>
  )
}

export default MapComparison
