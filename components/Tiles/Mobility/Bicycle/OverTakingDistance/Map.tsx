'use client'

// in case of base map
// import React, { useState ***REMOVED*** from 'react'
// import { Map as ReactMapGL, ViewState ***REMOVED*** from 'react-map-gl' // Rename imported Map to ReactMapGL
// import 'maplibre-gl/dist/maplibre-gl.css'

// interface IProps {***REMOVED***

// export default function Map({***REMOVED***: IProps) {
//   const [viewport, setViewport] = useState<ViewState>({
//     longitude: 7.6261,
//     latitude: 51.9607,
//     zoom: 12,
//     bearing: 0, // Map rotation (default is 0)
//     pitch: 0, // Map tilt (default is 0)
//     padding: { top: 0, bottom: 0, left: 0, right: 0 ***REMOVED***,
// ***REMOVED***)

//   const MUNSTER_BOUNDS: [number, number, number, number] = [
//     7.5, 51.9, 7.75, 52.02,
//   ]

//   return (
//     <div className="h-full w-full">
//       <ReactMapGL
//   ***REMOVED***...viewport***REMOVED***
//         style={{ width: '100%', height: '100%' ***REMOVED******REMOVED***
//         mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" // Example MapLibre style
//         onMove={evt => setViewport(evt.viewState)***REMOVED***
//         mapLib={require('maplibre-gl')***REMOVED***
//         maxBounds={MUNSTER_BOUNDS***REMOVED***
//       />
//     </div>
//   )
// ***REMOVED***

import * as React from 'react'
import Map, { NavigationControl, Marker ***REMOVED*** from 'react-map-gl'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

export default function CreatingMap() {
  // Define bounds for Münster

  return (
    <Map
      mapLib={maplibregl***REMOVED***
      initialViewState={{
        longitude: 7.6261,
        latitude: 51.9607,
        zoom: 12,
        bearing: 0,
        pitch: 0,
        padding: { top: 0, bottom: 0, left: 0, right: 0 ***REMOVED***,
    ***REMOVED******REMOVED***
      style={{ width: '100%', height: '100%' ***REMOVED******REMOVED***
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    >
      <NavigationControl position="top-left" />
      <Marker longitude={7.6261***REMOVED*** latitude={51.9607***REMOVED*** color="red" />
    </Map>
  )
***REMOVED***
