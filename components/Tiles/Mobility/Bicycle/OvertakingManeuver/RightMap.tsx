'use client'

import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

export function RightMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!mapContainer.current) {return}

    const center: [number, number] = [7.6257, 51.9607]
    const maxBounds: maplibregl.LngLatBoundsLike = [
      [7.4, 51.8],
      [7.9, 52.1],
    ]

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: center,
      zoom: 18,
      maxBounds: maxBounds,
    })

    map.on('load', () => {
      const wmsSourceId = 'unfallatlas-wms'
      const wmsLayerId = 'unfallatlas-layer'
      const wmsLayerName = 'Unfallorte'

      map.addSource(wmsSourceId, {
        type: 'raster',
        tiles: [
          'https://www.wms.nrw.de/wms/unfallatlas?service=WMS&request=GetMap&version=1.3.0&layers=Unfallorte&styles=&format=image/png&transparent=true&width=256&height=256&crs=EPSG:3857&bbox={bbox-epsg-3857}',
        ],
        tileSize: 256,
      })

      map.addLayer({
        id: wmsLayerId,
        type: 'raster',
        source: wmsSourceId,
        paint: {},
      })

      map.on('sourcedata', e => {
        if (e.sourceId === wmsSourceId && e.isSourceLoaded) {
          console.log('WMS source loaded:', e)
        }
      })

      map.on('error', e => {
        console.error('Map error:', e.error)
      })
    })

    return () => {
      map.remove()
    }
  }, [])

  return <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />
}

export function DynamicZoomMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!mapContainer.current) {return}

    const center: [number, number] = [7.6257, 51.9607]
    const maxBounds: maplibregl.LngLatBoundsLike = [
      [7.4, 51.8],
      [7.9, 52.1],
    ]

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: center,
      zoom: 12,
      maxBounds: maxBounds,
    })

    map.on('load', () => {
      map.addSource('fahrrad-layer', {
        type: 'raster',
        tiles: [
          'https://www.wms.nrw.de/wms/unfallatlas?service=WMS&request=GetMap&version=1.3.0&layers=Beteiligung_Fahrrad_250&styles=&format=image/png&transparent=true&width=256&height=256&crs=EPSG:3857&bbox={bbox-epsg-3857}',
        ],
        tileSize: 256,
      })

      map.addSource('unfallorte-layer', {
        type: 'raster',
        tiles: [
          'https://www.wms.nrw.de/wms/unfallatlas?service=WMS&request=GetMap&version=1.3.0&layers=Unfallorte&styles=&format=image/png&transparent=true&width=256&height=256&crs=EPSG:3857&bbox={bbox-epsg-3857}',
        ],
        tileSize: 256,
      })

      map.addLayer({
        id: 'fahrrad-layer',
        type: 'raster',
        source: 'fahrrad-layer',
        paint: {},
      })

      map.addLayer({
        id: 'unfallorte-layer',
        type: 'raster',
        source: 'unfallorte-layer',
        paint: {},
        layout: {
          visibility: 'none',
        },
      })

      const ZOOM_THRESHOLD = 15

      const updateLayers = () => {
        const zoom = map.getZoom()
        if (zoom >= ZOOM_THRESHOLD) {
          map.setLayoutProperty('fahrrad-layer', 'visibility', 'none')
          map.setLayoutProperty('unfallorte-layer', 'visibility', 'visible')
        } else {
          map.setLayoutProperty('fahrrad-layer', 'visibility', 'visible')
          map.setLayoutProperty('unfallorte-layer', 'visibility', 'none')
        }
      }

      updateLayers()
      map.on('zoom', updateLayers)
      map.on('moveend', updateLayers)
    })

    return () => {
      map.remove()
    }
  }, [])

  return <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />
}

export function CombinedLayersMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!mapContainer.current) {return}

    const center: [number, number] = [7.6257, 51.9607]
    const maxBounds: maplibregl.LngLatBoundsLike = [
      [7.4, 51.8],
      [7.9, 52.1],
    ]

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: center,
      zoom: 14,
      maxBounds: maxBounds,
    })

    map.on('load', () => {
      map.addSource('fahrrad-layer', {
        type: 'raster',
        tiles: [
          'https://www.wms.nrw.de/wms/unfallatlas?service=WMS&request=GetMap&version=1.3.0&layers=Beteiligung_Fahrrad_250&styles=&format=image/png&transparent=true&width=256&height=256&crs=EPSG:3857&bbox={bbox-epsg-3857}',
        ],
        tileSize: 256,
      })

      map.addSource('unfallorte-layer', {
        type: 'raster',
        tiles: [
          'https://www.wms.nrw.de/wms/unfallatlas?service=WMS&request=GetMap&version=1.3.0&layers=Unfallorte&styles=&format=image/png&transparent=true&width=256&height=256&crs=EPSG:3857&bbox={bbox-epsg-3857}',
        ],
        tileSize: 256,
      })

      map.addLayer({
        id: 'fahrrad-layer',
        type: 'raster',
        source: 'fahrrad-layer',
        paint: {
          'raster-opacity': 0.7,
        },
      })

      map.addLayer({
        id: 'unfallorte-layer',
        type: 'raster',
        source: 'unfallorte-layer',
        paint: {
          'raster-opacity': 0.9,
        },
      })

      const updateLayerVisibility = () => {
        const zoom = map.getZoom()
        const fahrradOpacity = zoom > 15 ? 0.4 : 0.7
        map.setPaintProperty('fahrrad-layer', 'raster-opacity', fahrradOpacity)
      }

      map.on('zoom', updateLayerVisibility)
      map.on('moveend', updateLayerVisibility)
    })

    return () => {
      map.remove()
    }
  }, [])

  return <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />
}
