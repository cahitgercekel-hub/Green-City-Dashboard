'use client'

import { Button ***REMOVED*** from '@/components/Elements/Button'
import Title from '@/components/Elements/Title'
import { MsKlimadashboardIconsNaviDownload ***REMOVED*** from '@/components/Icons/Misc/Navi'
import { EnvelopeIcon ***REMOVED*** from '@heroicons/react/24/outline'
import Link from 'next/link'

function UnCryptMailto(s: string) {
  var n = 0
  var r = ''
  for (var i = 0; i < s.length; i++) {
    n = s.charCodeAt(i)
    if (n >= 8364) {
      n = 128
  ***REMOVED***
    r += String.fromCharCode(n - 1)
***REMOVED***
  return r
***REMOVED***

function linkTo_UnCryptMailto(s: string) {
  location.href = UnCryptMailto(s)
***REMOVED***

export default function Impressum() {
  return (
    <main className="mx-auto max-w-[1136px]">
      <div className="h-12 md:h-24 lg:h-64" />
      <Title as="h3" id="use-dashboard" variant={'primary'***REMOVED***>
        Sie wollen das Dashboard selbst nutzen?
      </Title>
      <div className="h-6" />
      <Title className="text-2xl">
        Das Projekt hat Ihr Interesse geweckt und Sie möchten ein eigenes
        Dashboard nach münsterschem Vorbild realisieren? Nachfolgend können Sie
        eine Anleitung herunterladen, die Hinweise zur Nutzung und
        Implementierung der Freien Software des Klimadashboards Münster enthält.
      </Title>
      <div className="h-10" />
      <Link
        href="/StadtMS_Dashboard_KommunenKit_Kurzversion_231031.pdf"
        target="_blank"
      >
        <Button
          startIcon={
            <MsKlimadashboardIconsNaviDownload className="h-5 fill-secondary" />
        ***REMOVED***
          variant="secondary"
        >
          Anleitung herunterladen
        </Button>
      </Link>
      <div className="h-32" />
      <Title as="h3" id="feedback" variant={'primary'***REMOVED***>
        Sie haben Feedback?
      </Title>
      <div className="h-6" />
      <Title className="text-2xl">
        Wir arbeiten stetig daran, unser Dashboard zu optimieren und freuen uns
        über Feedback. Ihnen fehlen entscheidende Informationen? Sie stoßen auf
        technische Probleme? Sie haben Ideen für Verbesserungen, von denen das
        Klimadashboard Münster profitieren könnte? Wenden Sie sich gerne an
        klima@stadt-muenster.de.
      </Title>
      <div className="h-10" />
      <Button
        onClick={() => linkTo_UnCryptMailto('nbjmup;lmjnbAtubeu.nvfotufs/ef')***REMOVED***
        startIcon={<EnvelopeIcon className="h-6" />***REMOVED***
        variant="secondary"
      >
        Kontakt aufnehmen
      </Button>
      <div className="h-12 md:h-24 lg:h-64" />
    </main>
  )
***REMOVED***
