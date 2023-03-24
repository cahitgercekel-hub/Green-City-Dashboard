import Image from 'next/image'
import StairStepBackground from '../StairStepBackground'
import MSLogo from '@/assets/logos/stadtlogo-muenster.png'
import { Button ***REMOVED*** from '../../Elements/Button'
import Link from 'next/link'
import Collapsible from '../../Elements/Collapsible'
import Container from '../Container'
import {
  BicycleIcon,
  BuildingIcon,
  EnergyIcon,
  MuensterIcon,
***REMOVED*** from '@/components/Icons'
import { Bars3Icon, InformationCircleIcon ***REMOVED*** from '@heroicons/react/24/outline'
import Title from '@/components/Elements/Title'

export default function Navbar() {
  return (
    <div className="pt-8">
      <div className="container mx-auto translate-y-1/2 px-4 md:px-12">
        <Image
          alt="Logo der Stadt Münster"
          className="ml-auto h-12 w-auto"
          src={MSLogo***REMOVED***
        />
      </div>
      <StairStepBackground>
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
                <Link href={'/klima'***REMOVED***>
                  <Button
                    startIcon={<MuensterIcon className="h-6 text-primary" />***REMOVED***
                  >
                    Klima in Münster
                  </Button>
                </Link>
                <Link href={'/energie'***REMOVED***>
                  <Button
                    startIcon={<EnergyIcon className="h-6 text-primary" />***REMOVED***
                  >
                    Energien
                  </Button>
                </Link>
                <Link href={'/mobilitaet'***REMOVED***>
                  <Button
                    startIcon={<BicycleIcon className="h-6 text-primary" />***REMOVED***
                  >
                    Mobilität
                  </Button>
                </Link>
                <Link href={'/gebaeude'***REMOVED***>
                  <Button
                    startIcon={<BuildingIcon className="h-6 text-primary" />***REMOVED***
                  >
                    Gebäude
                  </Button>
                </Link>
              </div>
            </Collapsible>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <Link href={'/'***REMOVED***>
              <Title as="h2" variant={'primary'***REMOVED***>
                Klimadashboard Münster
              </Title>
            </Link>
            <div className="flex items-center justify-between">
              <Collapsible
                trigger={
                  <Button
                    startIcon={<InformationCircleIcon className="h-[34px]" />***REMOVED***
                    variant={'secondary'***REMOVED***
                  >
                    <Title as="h5">So helfen Daten dem Klima</Title>
                  </Button>
              ***REMOVED***
              >
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reiciendis, cupiditate! Tempora cum maiores soluta rem enim
                  beatae, quis illum, sunt, quaerat minima nemo odit.
                  Consequatur harum laboriosam doloremque impedit sed.
                </div>
              </Collapsible>

              <div className="hidden h-fit flex-wrap gap-2 xl:flex">
                <Link href={'/klima'***REMOVED***>
                  <Button
                    startIcon={
                      <MuensterIcon className="h-[34px] text-primary" />
                  ***REMOVED***
                  >
                    <Title as="h5">Klima in Münster</Title>
                  </Button>
                </Link>
                <Link href={'/energie'***REMOVED***>
                  <Button
                    startIcon={<EnergyIcon className="h-[34px] text-primary" />***REMOVED***
                  >
                    <Title as="h5">Energien</Title>
                  </Button>
                </Link>
                <Link href={'/mobilitaet'***REMOVED***>
                  <Button
                    startIcon={
                      <BicycleIcon className="h-[34px] text-primary" />
                  ***REMOVED***
                  >
                    <Title as="h5">Mobilität</Title>
                  </Button>
                </Link>
                <Link href={'/gebaeude'***REMOVED***>
                  <Button
                    startIcon={
                      <BuildingIcon className="h-[34px] text-primary" />
                  ***REMOVED***
                  >
                    <Title as="h5">Gebäude</Title>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </StairStepBackground>
    </div>
  )
***REMOVED***
