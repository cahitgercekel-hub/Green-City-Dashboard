import getWeather from '@/lib/brightsky'
import { Weather ***REMOVED*** from '@/types/brightsky'
import { isEqual ***REMOVED*** from 'date-fns'
import { useEffect, useState ***REMOVED*** from 'react'

type stationId = string
type coordinates = { lat: number; lng: number ***REMOVED***

export default function useWeather(
  location: stationId | coordinates,
  timestamp: Date,
) {
  const [weatherCache, setWeatherCache] = useState<Weather[]>([])

  useEffect(() => {
    const match = weatherCache?.find(w =>
      isEqual(new Date(w.timestamp), timestamp),
***REMOVED***
    if (match) {
      return
  ***REMOVED***

    async function getData() {
      const { weather, sources: _sources ***REMOVED*** = await getWeather(
        location,
        timestamp,
  ***REMOVED***

      const weatherMap = new Map<string, Weather>()

      // Concating arrays with duplicates
      const newWeather: Weather[] = [...weatherCache, ...weather]

      // Removing duplicates items
      newWeather.forEach(w => {
        if (!weatherMap.has(w.timestamp)) {
          weatherMap.set(w.timestamp, w)
      ***REMOVED***
    ***REMOVED***)

      const newWeatherCache = Array.from(weatherMap.values()).sort(
        (a, b) =>
          new Date(a.timestamp).getDate() - new Date(b.timestamp).getDate(),
  ***REMOVED***

      setWeatherCache(newWeatherCache)
  ***REMOVED***

    getData()
***REMOVED***, [location, timestamp])

  timestamp.setMinutes(0)
  timestamp.setSeconds(0)
  timestamp.setMilliseconds(0)

  const match = weatherCache?.find(w =>
    isEqual(new Date(w.timestamp), timestamp),
  )

  if (match) {
    return match
***REMOVED***
***REMOVED***
