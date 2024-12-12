'use client'

import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import {
  MsKlimadashboardIconsButtonAktivEnergieV1,
  MsKlimadashboardIconsButtonAktivGebaeude,
  MsKlimadashboardIconsButtonAktivKlima,
  MsKlimadashboardIconsButtonAktivMobil,
***REMOVED*** from '@/components/Icons/Misc'
import directus, { directusImage, Theme ***REMOVED*** from '@/lib/directus'
import { Bars3Icon ***REMOVED*** from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useEffect, useState ***REMOVED*** from 'react'
import Collapsible from '../../Elements/Collapsible'
import Container from '../Container'
import StairStepBackground from '../StairStepBackground'
import LinkComponent, { LinkProps ***REMOVED*** from './LinkComponent'

const links: LinkProps[] = [
  {
    title: 'Klima in Münster',
    icon: MsKlimadashboardIconsButtonAktivKlima,
    link: '/klima',
    hover: 'climate',
***REMOVED***,
  {
    title: 'Energie',
    icon: MsKlimadashboardIconsButtonAktivEnergieV1,
    link: '/energie',
    hover: 'energy',
***REMOVED***,
  {
    title: 'Mobilität',
    icon: MsKlimadashboardIconsButtonAktivMobil,
    link: '/mobilitaet',
    hover: 'mobility',
***REMOVED***,
  {
    title: 'Gebäude',
    icon: MsKlimadashboardIconsButtonAktivGebaeude,
    link: '/gebaeude',
    hover: 'buildings',
***REMOVED***,
]

type BaseNavbarProps = {
  actionComponent?: React.ReactElement
  variant?: 'primary' | 'secondary' | 'overlay'
  children?: React.ReactElement | React.ReactElement[]
***REMOVED***

export default function BaseNavbar({
  actionComponent,
  variant = 'primary',
  children,
***REMOVED***: BaseNavbarProps) {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const fetchTheme = async () => {
      const { data ***REMOVED*** = await directus.items('theme').readByQuery({
        limit: 1,
    ***REMOVED***)

      if (!data) {
        return
    ***REMOVED***

      // @ts-ignore
      setTheme(data as Theme)
  ***REMOVED***

    fetchTheme()
***REMOVED***, [])

  return (
    <div className="pt-8">
      <div className="container relative z-10 mx-auto flex max-w-[1920px] translate-y-1/2 flex-row justify-end px-2 xs:px-[16px] md:px-[32px] xl:px-[82px]">
  ***REMOVED***theme && (
          <Link href={theme.navbar_image_link || '#'***REMOVED*** target="_blank">
      ***REMOVED***/* eslint-disable-next-line @next/next/no-img-element */***REMOVED***
            <img
              alt="Logo der Stadt Münster"
              className="h-12 w-auto"
              src={directusImage(theme.navbar_image)***REMOVED***
            />
          </Link>
    ***REMOVED******REMOVED***
      </div>
      <StairStepBackground variant={variant***REMOVED***>
        <Container>
          <div className="xl:hidden">
            <Collapsible
              trigger={
                <div className="w-fit rounded-lg border-2 border-primary p-2 md:p-4">
                  <Bars3Icon className="w-5 stroke-2 text-primary md:w-6" />
                </div>
            ***REMOVED***
            >
              <div className="my-4 flex flex-col flex-wrap gap-2 md:flex-row">
          ***REMOVED***links.map(l => (
                  <LinkComponent key={l.link***REMOVED*** {...l***REMOVED*** />
            ***REMOVED***)***REMOVED***
              </div>
            </Collapsible>
            <Spacer size={'sm'***REMOVED*** />
          </div>
          <div className="flex flex-col justify-between gap-4">
            <Link href={'/'***REMOVED***>
              <Title
                as="h2"
                variant={variant === 'overlay' ? 'inverse' : 'primary'***REMOVED***
              >
          ***REMOVED***theme?.title || 'Klimadashboard'***REMOVED***
              </Title>
            </Link>
            <div className="flex items-center justify-between">
        ***REMOVED***actionComponent***REMOVED***

              <div className="hidden h-fit flex-wrap justify-end gap-2 xl:flex">
          ***REMOVED***links.map(l => (
                  <LinkComponent
                    key={l.link***REMOVED***
                    variant={variant === 'overlay' ? 'inverse' : 'primary'***REMOVED***
              ***REMOVED***...l***REMOVED***
                  />
            ***REMOVED***)***REMOVED***
              </div>
            </div>
          </div>
    ***REMOVED***children && (
            <>
              <Spacer size={'xl'***REMOVED*** />
        ***REMOVED***children***REMOVED***
            </>
      ***REMOVED******REMOVED***
        </Container>
      </StairStepBackground>
    </div>
  )
***REMOVED***
