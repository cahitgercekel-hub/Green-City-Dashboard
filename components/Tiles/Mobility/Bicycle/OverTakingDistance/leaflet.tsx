// 'use client'
// import React, { useEffect ***REMOVED*** from 'react'
// import { MapContainer, TileLayer, useMap ***REMOVED*** from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
// import HeatData from './Munsterheat.json'
// import L from 'leaflet'
// import 'leaflet.heat'

// interface FeatureProperties {
//   intensity: number
// ***REMOVED***

// interface GeoJsonFeature {
//   type: 'Feature'
//   geometry: {
//     type: 'Point'
//     coordinates: [number, number] // [longitude, latitude]
// ***REMOVED***
//   properties: FeatureProperties
// ***REMOVED***

// interface HeatmapLayerProps {
//   data: {
//     type: 'FeatureCollection'
//     features: GeoJsonFeature[]
// ***REMOVED***
// ***REMOVED***

// // Heatmap Component
// const HeatmapLayer: React.FC<HeatmapLayerProps> = ({ data ***REMOVED***) => {
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
//     ***REMOVED***,
//   ***REMOVED***).addTo(map)

//     // Cleanup when component unmounts
//     return () => {
//       map.removeLayer(heatLayer)
//   ***REMOVED***
// ***REMOVED***, [map, data])

//   return null // No JSX needed, just adding a heat layer to the map
// ***REMOVED***

// const MyMap: React.FC = () => {
//   console.log(HeatData)
//   return (
//     <div>
//       <h1 style={{ textAlign: 'center' ***REMOVED******REMOVED***>
//         Münster, Germany - Dentistry Heatmap
//       </h1>
//       <MapContainer
//         center={[51.9607, 7.6256]***REMOVED*** // Münster center
//         zoom={13***REMOVED*** // Initial zoom level
//         minZoom={11***REMOVED*** // Prevent zooming out too much
//         maxBounds={[
//           [51.8, 7.4],
//           [52.1, 7.8],
//         ]***REMOVED*** // Restrict movement within Münster area
//         style={{ height: '80vh', width: '100%' ***REMOVED******REMOVED***
//       >
//   ***REMOVED***/* Tile Layer (OpenStreetMap) */***REMOVED***
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s***REMOVED***.basemaps.cartocdn.com/light_all/{z***REMOVED***/{x***REMOVED***/{y***REMOVED***.png"
//         />

//   ***REMOVED***/* Heatmap Layer */***REMOVED***
//         <HeatmapLayer data={HeatData***REMOVED*** />
//       </MapContainer>
//     </div>
//   )
// ***REMOVED***

// export default MyMap

'use client'
import React, { useEffect ***REMOVED*** from 'react'
import { MapContainer, TileLayer, useMap ***REMOVED*** from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import HeatData from './Munsterheat.json'
import L from 'leaflet'
import 'leaflet.heat'

interface FeatureProperties {
  intensity: number
***REMOVED***

interface GeoJsonFeature {
  type: 'Feature'
  geometry: {
    type: 'Point'
    coordinates: [number, number]
***REMOVED***
  properties: FeatureProperties
***REMOVED***

interface MyMapProps {
  intensityThreshold: number // Accept intensity as a prop
***REMOVED***

interface HeatmapLayerProps {
  data: {
    type: 'FeatureCollection'
    features: GeoJsonFeature[]
***REMOVED***
***REMOVED***

const KeepMunsterCentered = () => {
  const map = useMap()
  useEffect(() => {
    map.on('zoomend', () => {
      const center = map.getCenter()
      if (center.lat > 52.0 || center.lat < 51.6) {
        map.setView([51.9607, 7.6256], map.getZoom())
    ***REMOVED***
  ***REMOVED***)
***REMOVED***, [map])
  return null
***REMOVED***

const HeatmapLayer: React.FC<HeatmapLayerProps> = ({ data ***REMOVED***) => {
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
    ***REMOVED***,
  ***REMOVED***).addTo(map)

    return () => {
      map.removeLayer(heatLayer)
  ***REMOVED***
***REMOVED***, [map, data])

  return null
***REMOVED***

const MyMap: React.FC<MyMapProps> = ({ intensityThreshold ***REMOVED***) => {
  const filteredData = {
    ...HeatData,
    features: HeatData.features.filter(
      feature => feature.properties.intensity >= intensityThreshold,
***REMOVED***,
***REMOVED***

  return (
    <div>
      <MapContainer
        center={[51.9607, 7.6256]***REMOVED***
        zoom={14***REMOVED***
        minZoom={10***REMOVED***
        maxBounds={[
          [51.5, 7.3],
          [52.15, 7.9],
        ]***REMOVED***
        zoomControl={false***REMOVED***
        style={{ height: '100vh', width: '100%' ***REMOVED******REMOVED***
        attributionControl={false***REMOVED***
      >
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s***REMOVED***.basemaps.cartocdn.com/light_all/{z***REMOVED***/{x***REMOVED***/{y***REMOVED***.png"
        />
        <KeepMunsterCentered />
        <HeatmapLayer data={filteredData***REMOVED*** />
      </MapContainer>
    </div>
  )
***REMOVED***

export default MyMap
