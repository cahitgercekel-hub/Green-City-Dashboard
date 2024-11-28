'use client'

import QualityBar from '@/components/Charts/QualityBar/QualityBar'
import Title from '@/components/Elements/Title'
import {
  MsKlimadashboardIconsLuftqualitaet,
  MsKlimadashboardIconsLuftqualitaetMittel,
  MsKlimadashboardIconsLuftqualitaetNegativ,
  MsKlimadashboardIconsLuftqualitaetPositiv,
***REMOVED*** from '@/components/Icons/Klima'
import useAirquality, { AirQualityStationData ***REMOVED*** from '@/hooks/useAirquality'
import Phenomenon from '../WeatherTile/Phenomenon'

const qualityMapping: Record<number, string> = {
  0: 'sehr gut',
  1: 'gut',
  2: 'mäßig',
  3: 'schlecht',
  4: 'sehr schlecht',
***REMOVED***

const phenomenonToQuality = (
  phenomenon: keyof AirQualityStationData,
  value: number,
) => {
  switch (phenomenon) {
    case 'Stickstoffdioxid (NO₂)': {
      if (value <= 20) {
        return 0
    ***REMOVED***
      if (value <= 40) {
        return 1
    ***REMOVED***
      if (value <= 100) {
        return 2
    ***REMOVED***
      if (value <= 200) {
        return 3
    ***REMOVED***
      return 4
  ***REMOVED***
    case 'Feinstaub (PM₁₀)': {
      if (value <= 20) {
        return 0
    ***REMOVED***
      if (value <= 35) {
        return 1
    ***REMOVED***
      if (value <= 50) {
        return 2
    ***REMOVED***
      if (value <= 100) {
        return 3
    ***REMOVED***
      return 4
  ***REMOVED***
    case 'Feinstaub (PM₂,₅)': {
      if (value <= 10) {
        return 0
    ***REMOVED***
      if (value <= 20) {
        return 1
    ***REMOVED***
      if (value <= 25) {
        return 2
    ***REMOVED***
      if (value <= 50) {
        return 3
    ***REMOVED***
      return 4
  ***REMOVED***
    case 'Ozon (O₃)': {
      if (value <= 60) {
        return 0
    ***REMOVED***
      if (value <= 120) {
        return 1
    ***REMOVED***
      if (value <= 180) {
        return 2
    ***REMOVED***
      if (value <= 240) {
        return 3
    ***REMOVED***
      return 4
  ***REMOVED***
    default: {
      return 0
  ***REMOVED***
***REMOVED***
***REMOVED***

const qualityToIcon = (quality: number) => {
  if (quality <= 1) {
    return MsKlimadashboardIconsLuftqualitaetPositiv
***REMOVED***
  if (quality <= 3) {
    return MsKlimadashboardIconsLuftqualitaetMittel
***REMOVED***
  return MsKlimadashboardIconsLuftqualitaetNegativ
***REMOVED***

export default function AirqualityChart() {
  // const [timestamp, setTimestamp] = useState(new Date())

  const { data, isLoading ***REMOVED*** = useAirquality()

  if (data && !isLoading) {
    const properties = data.features[1].properties

    return (
      <div>
        <div className="mb-8 flex flex-col gap-4">
          <div className="flex flex-1 items-center gap-6 md:gap-2">
            <MsKlimadashboardIconsLuftqualitaet className="h-20 text-primary md:mr-12 md:h-36" />
            <div className="my-4 grow">
              <Title as={'h4'***REMOVED***>
                in Münster ist aktuell{' '***REMOVED***
                <span className="text-climate">
            ***REMOVED***qualityMapping[properties.Luftqualitätsindex]***REMOVED***
                </span>
              </Title>
              <div className="pt-4">
                <QualityBar
                  progress={(properties.Luftqualitätsindex / 5) * 100***REMOVED***
                ></QualityBar>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-8">
            <Phenomenon
              icon={qualityToIcon(
                phenomenonToQuality(
                  'Stickstoffdioxid (NO₂)',
                  properties['Stickstoffdioxid (NO₂)'],
            ***REMOVED***,
          ***REMOVED******REMOVED***
              phenomenon="no2"
              size="md"
              value={properties['Stickstoffdioxid (NO₂)']***REMOVED***
            />
            <Phenomenon
              icon={qualityToIcon(
                phenomenonToQuality(
                  'Feinstaub (PM₁₀)',
                  properties['Feinstaub (PM₁₀)'],
            ***REMOVED***,
          ***REMOVED******REMOVED***
              phenomenon="pm10"
              size="md"
              value={properties['Feinstaub (PM₁₀)']***REMOVED***
            />
      ***REMOVED***
              // check if O3 is a string or a number
              typeof properties['Ozon (O₃)'] === 'number' ? (
                <Phenomenon
                  icon={qualityToIcon(
                    phenomenonToQuality('Ozon (O₃)', properties['Ozon (O₃)']),
              ***REMOVED******REMOVED***
                  phenomenon="o3"
                  size="md"
                  value={properties['Ozon (O₃)']***REMOVED***
                />
          ***REMOVED*** : null
          ***REMOVED***
            <Phenomenon
              icon={qualityToIcon(
                phenomenonToQuality(
                  'Feinstaub (PM₂,₅)',
                  properties['Feinstaub (PM₂,₅)'],
            ***REMOVED***,
          ***REMOVED******REMOVED***
              phenomenon="pm25"
              size="md"
              value={properties['Feinstaub (PM₂,₅)']***REMOVED***
            />
          </div>
        </div>
      </div>
***REMOVED***
***REMOVED***

  return <p>Loading...</p>
***REMOVED***
