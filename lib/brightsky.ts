import { BrightSkyResponse, Condition ***REMOVED*** from '@/types/brightsky'

export type dwd_station_id = string
export type coordinates = { lat: number; lng: number ***REMOVED***

const BRIGHTSKY_BASEURL = 'https://api.brightsky.dev/weather'

const getWeather = async (
  location: dwd_station_id | coordinates,
  date = new Date(),
) => {
  let locationQuery: { dwd_station_id: string ***REMOVED*** | { lat: string; lon: string ***REMOVED***
  if (typeof location === 'string' || location instanceof String) {
    locationQuery = {
      // @ts-ignore
      dwd_station_id: location,
  ***REMOVED***
***REMOVED*** else {
    locationQuery = {
      lat: location.lat.toString(),
      lon: location.lng.toString(),
  ***REMOVED***
***REMOVED***

  const query = new URLSearchParams({
    ...locationQuery,
    date: date.toISOString(),
***REMOVED***)
  const res = await fetch(`${BRIGHTSKY_BASEURL***REMOVED***?${query.toString()***REMOVED***`)
  return (await res.json()) as Promise<BrightSkyResponse>
***REMOVED***
export default getWeather

type ConditionMapping = {
  [_key in Condition]: string
***REMOVED***

// In Münster ist es gerade ...
export const conditionMapping: ConditionMapping = {
  dry: 'trocken',
  fog: 'nebelig',
  hail: 'am hageln',
  rain: 'regnerisch',
  sleet: 'am Schneeregnen',
  snow: 'am schneien',
  thunderstorm: 'am Gewittern',
***REMOVED***
