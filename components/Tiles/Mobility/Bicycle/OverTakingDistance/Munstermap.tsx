'use client'

import React, { useEffect, useRef, useState ***REMOVED*** from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const MuensterMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const [map, setMap] = useState<maplibregl.Map | null>(null)

  // GeoJSON object directly in the component
  const geomap = {
    type: 'FeatureCollection',
    features: [
***REMOVED***
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [7.6157, 51.95],
      ***REMOVED***,
        properties: {
          traffic_density: 10,
      ***REMOVED***,
    ***REMOVED***,
***REMOVED***
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [7.625, 51.9505],
      ***REMOVED***,
        properties: {
          traffic_density: 20,
      ***REMOVED***,
    ***REMOVED***,
    ],
***REMOVED***

  useEffect(() => {
    if (!mapContainerRef.current) return

    const mapInstance = new maplibregl.Map({
      container: mapContainerRef.current,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json', // Base map style
      center: [7.6286, 51.9607], // Coordinates of Münster
      zoom: 12,
  ***REMOVED***)

    setMap(mapInstance)

    // Cleanup on unmount
    return () => mapInstance.remove()
***REMOVED***, [])

  useEffect(() => {
    if (!map) return

    map.on('load', () => {
      map.addSource('streets', {
        type: 'geojson',
        data: geomap,
    ***REMOVED***)

      map.addLayer({
        id: 'heatmap',
        type: 'heatmap',
        source: 'streets',
        maxzoom: 15,
        paint: {
          // Heatmap color settings
          'heatmap-weight': [
            'interpolate',
            ['linear'],
            ['get', 'traffic_density'],
            0,
            0,
            100,
            1,
          ],
          'heatmap-intensity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            12,
            1,
            15,
            3,
          ],
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0,
            'rgba(0,0,255,0)',
            0.1,
            'rgb(0,0,255)',
            0.3,
            'rgb(0,255,255)',
            0.5,
            'rgb(0,255,0)',
            0.7,
            'rgb(255,255,0)',
            1,
            'rgb(255,0,0)',
          ],
          'heatmap-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            12,
            2,
            15,
            10,
          ],
          'heatmap-opacity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            14,
            1,
            15,
            0,
          ],
      ***REMOVED***,
    ***REMOVED***)
  ***REMOVED***)
***REMOVED***, [map])

  return (
    <div
      ref={mapContainerRef***REMOVED***
      style={{ width: '100%', height: '500px' ***REMOVED******REMOVED*** // Map container size
    />
  )
***REMOVED***

export default MuensterMap

// import React, { useEffect, useRef ***REMOVED*** from 'react'
// import maplibregl from 'maplibre-gl'
// import 'maplibre-gl/dist/maplibre-gl.css'

// const MunsterMap: React.FC = () => {
//   const mapContainerRef = useRef<HTMLDivElement | null>(null)

//   useEffect(() => {
//     if (!mapContainerRef.current) return

//     // Initialize the map
//     const map = new maplibregl.Map({
//       container: mapContainerRef.current, // Use the ref instead of an ID
//       style:
//         'https://api.maptiler.com/maps/streets-v2/style.json?key=OkGRwvJGHklpL2XFjQW0',
//       center: [7.6256, 51.9607], // Münster coordinates
//       zoom: 12,
//   ***REMOVED***)

//     // GeoJSON data with additional points and lines
//     const geojsonData = {
//       type: 'FeatureCollection',
//       features: [
//   ***REMOVED***
//           type: 'Feature',
//           geometry: {
//             type: 'LineString',
//             coordinates: [
//               [7.6256, 51.9607],
//               [7.63, 51.965],
//               [7.62, 51.958],
//               [7.635, 51.97],
//             ],
//         ***REMOVED***,
//           properties: {
//             intensity: 1,
//         ***REMOVED***,
//       ***REMOVED***,
//   ***REMOVED***
//           type: 'Feature',
//           geometry: {
//             type: 'Point',
//             coordinates: [7.63, 51.965],
//         ***REMOVED***,
//           properties: {
//             intensity: 0.8,
//         ***REMOVED***,
//       ***REMOVED***,
//   ***REMOVED***
//           type: 'Feature',
//           geometry: {
//             type: 'Point',
//             coordinates: [7.62, 51.958],
//         ***REMOVED***,
//           properties: {
//             intensity: 0.6,
//         ***REMOVED***,
//       ***REMOVED***,
//   ***REMOVED***
//           type: 'Feature',
//           geometry: {
//             type: 'Point',
//             coordinates: [7.64, 51.9675],
//         ***REMOVED***,
//           properties: {
//             intensity: 0.9,
//         ***REMOVED***,
//       ***REMOVED***,
//   ***REMOVED***
//           type: 'Feature',
//           geometry: {
//             type: 'Point',
//             coordinates: [7.615, 51.955],
//         ***REMOVED***,
//           properties: {
//             intensity: 0.7,
//         ***REMOVED***,
//       ***REMOVED***,
//   ***REMOVED***
//           type: 'Feature',
//           geometry: {
//             type: 'Point',
//             coordinates: [7.645, 51.973],
//         ***REMOVED***,
//           properties: {
//             intensity: 1.0,
//         ***REMOVED***,
//       ***REMOVED***,
//       ],
//   ***REMOVED***

//     map.on('load', () => {
//       // Add the data source
//       map.addSource('geojson-data', {
//         type: 'geojson',
//         data: geojsonData,
//     ***REMOVED***)

//       // Add a heatmap layer
//       map.addLayer({
//         id: 'heatmap-layer',
//         type: 'heatmap',
//         source: 'geojson-data',
//         paint: {
//           'heatmap-weight': ['get', 'intensity'],
//           'heatmap-intensity': 1,
//           'heatmap-color': [
//             'interpolate',
//             ['linear'],
//             ['heatmap-density'],
//             0,
//             'rgba(0, 0, 255, 0)',
//             0.5,
//             'rgba(0, 255, 0, 0.5)',
//             1,
//             'rgba(255, 0, 0, 1)',
//           ],
//           'heatmap-radius': 20,
//           'heatmap-opacity': 0.8,
//       ***REMOVED***,
//     ***REMOVED***)

//       // Add a line layer
//       map.addLayer({
//         id: 'line-layer',
//         type: 'line',
//         source: 'geojson-data',
//         filter: ['==', '$type', 'LineString'],
//         paint: {
//           'line-width': 4,
//           'line-color': 'blue',
//       ***REMOVED***,
//     ***REMOVED***)

//       // Add a circle layer for points
//       map.addLayer({
//         id: 'circle-layer',
//         type: 'circle',
//         source: 'geojson-data',
//         filter: ['==', '$type', 'Point'],
//         paint: {
//           'circle-radius': [
//             'interpolate',
//             ['linear'],
//             ['get', 'intensity'],
//             0,
//             4,
//             1,
//             10,
//           ],
//           'circle-color': [
//             'interpolate',
//             ['linear'],
//             ['get', 'intensity'],
//             0,
//             'blue',
//             0.5,
//             'green',
//             1,
//             'red',
//           ],
//           'circle-opacity': 0.8,
//       ***REMOVED***,
//     ***REMOVED***)
//   ***REMOVED***)

//     return () => map.remove() // Cleanup map instance on component unmount
// ***REMOVED***, [])

//   return (
//     <div
//       ref={mapContainerRef***REMOVED***
//       className="absolute bottom-0 left-0 right-0 top-0"
//     />
//   )
// ***REMOVED***

// export default MunsterMap
