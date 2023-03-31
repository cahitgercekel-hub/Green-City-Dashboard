'use client'

import { Button ***REMOVED*** from '../../Elements/Button'

import { InformationCircleIcon, XMarkIcon ***REMOVED*** from '@heroicons/react/24/outline'
import Title from '@/components/Elements/Title'
import Back from '@/components/Elements/Back'
import { usePathname ***REMOVED*** from 'next/navigation'
import BaseNavbar from './BaseNavbar'
import { useState ***REMOVED*** from 'react'
import SectionTitle from '../SectionTitle'

const routeToType: {
  [key: string]: 'climate' | 'mobility' | 'energy' | 'building'
***REMOVED*** = {
  klima: 'climate',
  mobilitaet: 'mobility',
  energie: 'energy',
  gebaeude: 'building',
***REMOVED***

export default function Navbar() {
  const pathname = usePathname()

  const [showOverlay, setShowOverlay] = useState(false)

  if (!pathname) {
    return <BaseNavbar></BaseNavbar>
***REMOVED***

  const isIndexPage = pathname === '/'

  const ActionComponent = isIndexPage ? (
    <Button
      onClick={() => setShowOverlay(true)***REMOVED***
      startIcon={<InformationCircleIcon className="h-[34px]" />***REMOVED***
      variant={'secondary'***REMOVED***
    >
      <Title as="h5">So helfen Daten dem Klima</Title>
    </Button>
  ) : (
    <Back />
  )

  const InfoText = (
    <div className="w-1/3">
      <Title as={'h5'***REMOVED*** variant={'inverse'***REMOVED***>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis qui
        omnis ad repellat illum hic. Repellendus numquam, sit eos maxime
        voluptatum eaque totam laborum provident beatae minima mollitia
        consequuntur esse?
      </Title>
    </div>
  )

  const OverlayNavbar = (
    <BaseNavbar
      actionComponent={
        <Button
          onClick={() => setShowOverlay(false)***REMOVED***
          startIcon={<XMarkIcon className="h-[34px] text-white" />***REMOVED***
          variant={'secondary'***REMOVED***
        >
          <Title as="h5" variant={'inverse'***REMOVED***>
            Informationen ausblenden
          </Title>
        </Button>
    ***REMOVED***
      variant="overlay"
    >
***REMOVED***InfoText***REMOVED***
    </BaseNavbar>
  )

  if (isIndexPage) {
    return (
      <div className="relative">
        <BaseNavbar actionComponent={ActionComponent***REMOVED***>
          <div className="opacity-0">{InfoText***REMOVED***</div>
        </BaseNavbar>
  ***REMOVED***showOverlay && (
          <div className="absolute top-0 left-0 z-10 h-full w-full">
      ***REMOVED***OverlayNavbar***REMOVED***
          </div>
    ***REMOVED******REMOVED***
      </div>
***REMOVED***
***REMOVED***

  const [_, route] = pathname?.split('/')

  if (['klima', 'energie', 'mobilitaet', 'gebaeude'].includes(route)) {
    return (
      <BaseNavbar actionComponent={ActionComponent***REMOVED***>
        <div className="flex">
          <div className="flex-1"></div>
          <div className="flex flex-1 justify-end">
            <SectionTitle large variant={routeToType[route]***REMOVED*** />
          </div>
        </div>
      </BaseNavbar>
***REMOVED***
***REMOVED***

  return <BaseNavbar actionComponent={ActionComponent***REMOVED***></BaseNavbar>
***REMOVED***
