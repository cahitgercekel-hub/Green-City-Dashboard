import Image from 'next/image'
import StairStepBackground from '../StairStepBackground'
import MSLogo from '@/assets/logos/stadtlogo-muenster.png'
import Link from 'next/link'
import Collapsible from '../../Elements/Collapsible'
import Container from '../Container'
import {
  BicycleIcon,
  BuildingIcon,
  EnergyIcon,
  MuensterIcon,
***REMOVED*** from '@/components/Icons'
import { Bars3Icon ***REMOVED*** from '@heroicons/react/24/outline'
import Title from '@/components/Elements/Title'
import LinkComponent, { LinkProps ***REMOVED*** from './LinkComponent'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'

const links: LinkProps[] = [
  {
    title: 'zu den Klimadaten',
    icon: MuensterIcon,
    link: '/klima',
***REMOVED***,
  {
    title: 'zu den Energiedaten',
    icon: EnergyIcon,
    link: '/energie',
***REMOVED***,
  {
    title: 'zu den Mobilitätsdaten',
    icon: BicycleIcon,
    link: '/mobilitaet',
***REMOVED***,
  {
    title: 'zu den Gebäudedaten',
    icon: BuildingIcon,
    link: '/gebaeude',
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
  return (
    <div className="pt-8">
      <div className="container relative z-10 mx-auto translate-y-1/2 px-4 md:px-12">
        <Image
          alt="Logo der Stadt Münster"
          className="ml-auto h-12 w-auto"
          src={MSLogo***REMOVED***
        />
      </div>
      <StairStepBackground variant={variant***REMOVED***>
        <Container>
          <div className="xl:hidden">
            <Collapsible
              trigger={
                <div className="w-fit rounded-full border-2 border-primary p-2">
                  <Bars3Icon className="w-5 stroke-2 text-primary" />
                </div>
            ***REMOVED***
            >
              <div className="my-4 flex flex-col gap-2 md:flex-row">
          ***REMOVED***links.map(l => (
                  <LinkComponent key={l.link***REMOVED*** {...l***REMOVED*** />
            ***REMOVED***)***REMOVED***
              </div>
            </Collapsible>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <Link href={'/'***REMOVED***>
              <Title
                as="h2"
                variant={variant === 'overlay' ? 'inverse' : 'primary'***REMOVED***
              >
                Klimadashboard Münster
              </Title>
            </Link>
            <div className="flex items-center justify-between">
        ***REMOVED***actionComponent***REMOVED***

              <div className="hidden h-fit flex-wrap gap-2 xl:flex">
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
