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

export default function RootLayout({
  children,
***REMOVED***: {
  children: React.ReactNode
***REMOVED***) {
  return (
    <html className={inter.className***REMOVED*** lang="de">
***REMOVED***/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */***REMOVED***
      <head />
      <body>
  ***REMOVED***children***REMOVED***
        <Cookies />
      </body>
      <Matomo />
      <Script
        async
        src="https://cdn.jsdelivr.net/npm/@iframe-resizer/child"
        type="text/javascript"
      />
    </html>
  )
***REMOVED***
