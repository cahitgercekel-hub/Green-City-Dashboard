import { FeatureCollection, Point ***REMOVED*** from 'geojson'
import { useEffect, useState ***REMOVED*** from 'react'

export type AirQualityStationData = {
  Station: string
  'Station-ID': string
  Zeitpunkt: string
  Luftqualitätsindex: number
  'Feinstaub (PM₁₀)': number
  'Ozon (O₃)': string | number
  'Stickstoffdioxid (NO₂)': number
  'Feinstaub (PM₂,₅)': number
  'Fehlender Wert'?: string
***REMOVED***

type AirQualityFeatureCollection = FeatureCollection<
  Point,
  AirQualityStationData
>

export default function useAirquality() {
  const [data, setData] = useState<AirQualityFeatureCollection | null>(null)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://www.muenster01.de/luftqualitaet/data/luftqualitaet_muenster.geojson',
***REMOVED***
      .then(res => res.json())
      .then(airQualityData => {
        setData(airQualityData)
    ***REMOVED***)
      .catch(err => {
        console.error(err)
    ***REMOVED***)
      .finally(() => {
        setIsLoading(false)
    ***REMOVED***)
***REMOVED***, [])

  return { data, isLoading ***REMOVED***
***REMOVED***
