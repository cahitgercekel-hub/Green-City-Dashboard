'use client'

import { useRef, useEffect, useState } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import GeoData from './overtaking.json'

// Define TypeScript interfaces
interface Link {
  type?: string
  rel: string
  title: string
  href: string
}

interface OvertakingFeatureProperties {
  'Average Normalized Overtaking Distance': number
  'Average Overtaking Manoeuvre': number
  'Average Overtaking Distance': number
  'Number of Points': number
  'Average Distance to Road': number
}

interface LineString {
  type: 'LineString'
  coordinates: number[][]
}

interface OvertakingFeature {
  type: 'Feature'
  properties: OvertakingFeatureProperties
  id: number
  geometry: LineString
}

interface OvertakingFeatureCollection {
  type: 'FeatureCollection'
  numberMatched: number
  numberReturned: number
  links: Link[]
  timeStamp: string
  features: OvertakingFeature[]
}

function LeftMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<maplibregl.Map | null>(null)
  const [loaded, setLoaded] = useState(false)
  const geoJsonData = GeoData as OvertakingFeatureCollection

  useEffect(() => {
    if (!map.current && mapContainer.current && geoJsonData) {
      // Initialize the map
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style:
          'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
        center: [7.6257, 51.9607],
        zoom: 12,
        attributionControl: false,
        maxBounds: [
          [7.4, 51.8],
          [7.9, 52.1],
        ],
      })

      map.current.on('load', () => {
        if (!map.current) return

        // Add the GeoJSON source
        map.current.addSource('overtaking-data', {
          type: 'geojson',
          data: geoJsonData,
        })

        // Add the layer with style based on properties
        map.current.addLayer({
          id: 'overtaking-lines',
          type: 'line',
          source: 'overtaking-data',
          paint: {
            'line-color': [
              'case',
              ['has', 'Average Normalized Overtaking Distance'],
              [
                'interpolate',
                ['linear'],
                ['get', 'Average Normalized Overtaking Distance'],
                0,
                '#00ff00',
                0.5,
                '#ffff00',
                1,
                '#ff0000',
              ],
              '#ccc',
            ],
            'line-opacity': [
              'case',
              ['has', 'Number of Points'],
              [
                'interpolate',
                ['linear'],
                ['get', 'Number of Points'],
                1,
                0.3,
                10,
                0.7,
                100,
                0.9,
              ],
              0.5,
            ],
            'line-width': 3,
          },
        })

        // Add a legend
        const legend = document.getElementById('legend')
        if (legend) {
          legend.innerHTML = `
            <div><strong>Average Normalized Overtaking Distance</strong></div>
            <div><span style="display:inline-block; width:20px; height:10px; background:#00ff00;"></span> Low</div>
            <div><span style="display:inline-block; width:20px; height:10px; background:#ffff00;"></span> Medium</div>
            <div><span style="display:inline-block; width:20px; height:10px; background:#ff0000;"></span> High</div>
            <div style="margin-top:10px;"><strong>Transparency</strong></div>
            <div>More transparent = fewer measurements</div>
          `
        }

        setLoaded(true)
      })
    }

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [geoJsonData])

  return (
    <div style={{ position: 'relative', width: '100%', height: '600px' }}>
      <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
      <div
        id="legend"
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '0 0 5px rgba(0,0,0,0.3)',
          zIndex: 1,
        }}
      ></div>
    </div>
  )
}

export default LeftMap
