'use client'

// in case of base map
// import React, { useState } from 'react'
// import { Map as ReactMapGL, ViewState } from 'react-map-gl' // Rename imported Map to ReactMapGL
// import 'maplibre-gl/dist/maplibre-gl.css'

// interface IProps {}

// export default function Map({}: IProps) {
//   const [viewport, setViewport] = useState<ViewState>({
//     longitude: 7.6261,
//     latitude: 51.9607,
//     zoom: 12,
//     bearing: 0, // Map rotation (default is 0)
//     pitch: 0, // Map tilt (default is 0)
//     padding: { top: 0, bottom: 0, left: 0, right: 0 },
//   })

//   const MUNSTER_BOUNDS: [number, number, number, number] = [
//     7.5, 51.9, 7.75, 52.02,
//   ]

//   return (
//     <div className="h-full w-full">
//       <ReactMapGL
//         {...viewport}
//         style={{ width: '100%', height: '100%' }}
//         mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" // Example MapLibre style
//         onMove={evt => setViewport(evt.viewState)}
//         mapLib={require('maplibre-gl')}
//         maxBounds={MUNSTER_BOUNDS}
//       />
//     </div>
//   )
// }

import * as React from 'react'
import Map, { NavigationControl, Marker } from 'react-map-gl'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

export default function CreatingMap() {
  // Define bounds for Münster

  return (
    <Map
      mapLib={maplibregl}
      initialViewState={{
        longitude: 7.6261,
        latitude: 51.9607,
        zoom: 12,
        bearing: 0,
        pitch: 0,
        padding: { top: 0, bottom: 0, left: 0, right: 0 },
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    >
      <NavigationControl position="top-left" />
      <Marker longitude={7.6261} latitude={51.9607} color="red" />
    </Map>
  )
}
