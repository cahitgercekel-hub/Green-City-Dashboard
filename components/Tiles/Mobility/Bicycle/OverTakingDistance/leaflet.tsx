// 'use client'
// import React, { useEffect } from 'react'
// import { MapContainer, TileLayer, useMap } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
// import HeatData from './Munsterheat.json'
// import L from 'leaflet'
// import 'leaflet.heat'

// interface FeatureProperties {
//   intensity: number
// }

// interface GeoJsonFeature {
//   type: 'Feature'
//   geometry: {
//     type: 'Point'
//     coordinates: [number, number] // [longitude, latitude]
//   }
//   properties: FeatureProperties
// }

// interface HeatmapLayerProps {
//   data: {
//     type: 'FeatureCollection'
//     features: GeoJsonFeature[]
//   }
// }

// // Heatmap Component
// const HeatmapLayer: React.FC<HeatmapLayerProps> = ({ data }) => {
//   const map = useMap() // Get map instance
//   console.log('heat', HeatData)
//   useEffect(() => {
//     if (!map) return

//     const points = data.features.map(feature => [
//       feature.geometry.coordinates[1], // Latitude
//       feature.geometry.coordinates[0], // Longitude
//       feature.properties.intensity || 1, // Default intensity if missing
//     ])

//     //@ts-ignore
//     const heatLayer = L.heatLayer(points, {
//       radius: 30,
//       blur: 2,
//       maxZoom: 5,
//       gradient: {
//         0.2: 'blue', // Low intensity
//         0.4: 'cyan', // Medium-low
//         0.6: 'lime', // Medium intensity
//         0.8: 'yellow', // High intensity
//         1.0: 'red', // Maximum intensity
//       },
//     }).addTo(map)

//     // Cleanup when component unmounts
//     return () => {
//       map.removeLayer(heatLayer)
//     }
//   }, [map, data])

//   return null // No JSX needed, just adding a heat layer to the map
// }

// const MyMap: React.FC = () => {
//   console.log(HeatData)
//   return (
//     <div>
//       <h1 style={{ textAlign: 'center' }}>
//         Münster, Germany - Dentistry Heatmap
//       </h1>
//       <MapContainer
//         center={[51.9607, 7.6256]} // Münster center
//         zoom={13} // Initial zoom level
//         minZoom={11} // Prevent zooming out too much
//         maxBounds={[
//           [51.8, 7.4],
//           [52.1, 7.8],
//         ]} // Restrict movement within Münster area
//         style={{ height: '80vh', width: '100%' }}
//       >
//         {/* Tile Layer (OpenStreetMap) */}
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
//         />

//         {/* Heatmap Layer */}
//         <HeatmapLayer data={HeatData} />
//       </MapContainer>
//     </div>
//   )
// }

// export default MyMap

'use client'
import React, { useEffect } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import HeatData from './Munsterheat.json'
import L from 'leaflet'
import 'leaflet.heat'

interface FeatureProperties {
  intensity: number
}

interface GeoJsonFeature {
  type: 'Feature'
  geometry: {
    type: 'Point'
    coordinates: [number, number]
  }
  properties: FeatureProperties
}

interface MyMapProps {
  intensityThreshold: number // Accept intensity as a prop
}

interface HeatmapLayerProps {
  data: {
    type: 'FeatureCollection'
    features: GeoJsonFeature[]
  }
}

const KeepMunsterCentered = () => {
  const map = useMap()
  useEffect(() => {
    map.on('zoomend', () => {
      const center = map.getCenter()
      if (center.lat > 52.0 || center.lat < 51.6) {
        map.setView([51.9607, 7.6256], map.getZoom())
      }
    })
  }, [map])
  return null
}

const HeatmapLayer: React.FC<HeatmapLayerProps> = ({ data }) => {
  const map = useMap()
  useEffect(() => {
    if (!map) return

    const points = data.features.map(feature => [
      feature.geometry.coordinates[1],
      feature.geometry.coordinates[0],
      feature.properties.intensity || 1,
    ])

    // @ts-ignore
    const heatLayer = L.heatLayer(points, {
      radius: 8,
      blur: 6,
      maxZoom: 5,
      gradient: {
        0.2: 'blue',
        0.4: 'cyan',
        0.6: 'lime',
        0.8: 'yellow',
        1.0: 'red',
      },
    }).addTo(map)

    return () => {
      map.removeLayer(heatLayer)
    }
  }, [map, data])

  return null
}

const MyMap: React.FC<MyMapProps> = ({ intensityThreshold }) => {
  const filteredData = {
    ...HeatData,
    features: HeatData.features.filter(
      feature => feature.properties.intensity >= intensityThreshold,
    ),
  }

  return (
    <div>
      <MapContainer
        center={[51.9607, 7.6256]}
        zoom={14}
        minZoom={10}
        maxBounds={[
          [51.5, 7.3],
          [52.15, 7.9],
        ]}
        zoomControl={false}
        style={{ height: '100vh', width: '100%' }}
        attributionControl={false}
      >
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        />
        <KeepMunsterCentered />
        <HeatmapLayer data={filteredData} />
      </MapContainer>
    </div>
  )
}

export default MyMap
