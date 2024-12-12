import directus, { Theme ***REMOVED*** from '@/lib/directus'
import '@/styles/globals.css'
import { Viewport ***REMOVED*** from 'next'
import { Inter ***REMOVED*** from 'next/font/google'
import Script from 'next/script'
import Cookies from './Cookies'
import Matomo from './Matomo'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' ***REMOVED***)

export const metadata = {
  title: 'Klimadashboard Münster',
  description: 'Das Klimadashboard der Stadt Münster',
  icons: '/favicon.ico',
  metadataBase: new URL('https://klimadashboard.ms'),
***REMOVED***

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
***REMOVED***

function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2***REMOVED***)([a-f\d]{2***REMOVED***)([a-f\d]{2***REMOVED***)$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)***REMOVED*** ${parseInt(result[2], 16)***REMOVED*** ${parseInt(
        result[3],
        16,
  ***REMOVED******REMOVED***`
    : null
***REMOVED***

export default async function RootLayout({
  children,
***REMOVED***: {
  children: React.ReactNode
***REMOVED***) {
  const { data ***REMOVED*** = await directus.items('theme').readByQuery({
    limit: 1,
***REMOVED***)

  // @ts-ignore
  const theme = data as Theme

  let style: React.CSSProperties = {***REMOVED***

  if (theme) {
    style = {
      '--color-primary': hexToRgb(theme.primary),
      '--color-primary-light': hexToRgb(theme.primary_light),
      '--color-secondary': hexToRgb(theme.secondary),
      '--color-secondary-light': hexToRgb(theme.secondary_light),
      '--color-climate': hexToRgb(theme.climate),
      '--color-climate-light': hexToRgb(theme.climate_light),
      '--color-mobility': hexToRgb(theme.mobility),
      '--color-mobility-light': hexToRgb(theme.mobility_light),
      '--color-energy': hexToRgb(theme.energy),
      '--color-energy-light': hexToRgb(theme.energy_light),
      '--color-buildings': hexToRgb(theme.buildings),
      '--color-buildings-light': hexToRgb(theme.buildings_light),
      '--border-radius-md': `${
        theme.border_radius * 12 * (theme.border_radius / 3)
    ***REMOVED***px`,
      '--border-radius-lg': `${
        theme.border_radius * 17.3 * (theme.border_radius / 3)
    ***REMOVED***px`,
  ***REMOVED*** as React.CSSProperties
***REMOVED***

  return (
    <html className={inter.className***REMOVED*** lang="de">
***REMOVED***/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */***REMOVED***
      <head />
      <body style={style***REMOVED***>
  ***REMOVED***children***REMOVED***
        <Cookies />
      </body>
      <Matomo />
      <Script
        async
        src="https://www.stadt-muenster.de/ms/js/iframeResizer.contentWindow.min.js"
        type="text/javascript"
      />
    </html>
  )
***REMOVED***
