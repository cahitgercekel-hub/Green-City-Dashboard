import { MsKlimadashboardIconsWetterGewitter, MsKlimadashboardIconsWetterHagel, MsKlimadashboardIconsWetterNeblig, MsKlimadashboardIconsWetterRegnerisch, MsKlimadashboardIconsWetterSchnee, MsKlimadashboardIconsWetterSchneeregen, MsKlimadashboardIconsWetterSonnig ***REMOVED*** from '@/components/Icons/Klima';
import { BrightSkyResponse, Condition ***REMOVED*** from '@/types/brightsky'
import { SVGProps ***REMOVED*** from 'react';

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

type ConditionMappingIcon = {
  [_key in Condition]: (_props: SVGProps<SVGSVGElement>) => React.JSX.Element
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

// In Münster ist es gerade ...
export const conditionMappingIcon: ConditionMappingIcon = {
  dry: MsKlimadashboardIconsWetterSonnig,
  fog: MsKlimadashboardIconsWetterNeblig,
  hail: MsKlimadashboardIconsWetterHagel,
  rain: MsKlimadashboardIconsWetterRegnerisch,
  sleet: MsKlimadashboardIconsWetterSchneeregen,
  snow: MsKlimadashboardIconsWetterSchnee,
  thunderstorm: MsKlimadashboardIconsWetterGewitter,
***REMOVED***
