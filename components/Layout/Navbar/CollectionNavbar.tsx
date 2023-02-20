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
import { Bars3Icon ***REMOVED*** from '@heroicons/react/24/outline'
import Title from '@/components/Elements/Title'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'

type Props = {
  title: string
  description: string
***REMOVED***

export default function CollectionNavbar({ title, description ***REMOVED***: Props) {
  return (
    <div className="pt-8">
      <div className="translate-y-4 px-8">
        <Image
          alt="Logo der Stadt Münster"
          className="ml-auto h-12 w-auto"
          src={MSLogo***REMOVED***
        />
      </div>
      <StairStepBackground variant={'secondary'***REMOVED***>
        <Container>
          <div className="md:hidden">
            <Collapsible
              trigger={
                <div className="w-fit rounded-full border-2 border-primary p-2">
                  <Bars3Icon className="w-5 stroke-2 text-primary" />
                </div>
            ***REMOVED***
            >
              <div className="my-4 flex flex-col gap-2">
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
          <div className="flex justify-between">
            <div className="flex-1">
              <Link href={'/'***REMOVED***>
                <Title as="h2" variant={'primary'***REMOVED***>
                  <span>
                    Klimadashboard <br />
                    Münster
                  </span>
                </Title>
              </Link>
            </div>
            <div className="hidden h-fit flex-wrap gap-2 md:flex">
              <Link href={'/klima'***REMOVED***>
                <Button
                  startIcon={<MuensterIcon className="h-6 text-primary" />***REMOVED***
                >
                  Klima in Münster
                </Button>
              </Link>
              <Link href={'/energie'***REMOVED***>
                <Button startIcon={<EnergyIcon className="h-6 text-primary" />***REMOVED***>
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
          </div>
          <Spacer size={'lg'***REMOVED*** />
          <div className="flex w-full flex-col-reverse gap-2 md:flex-row">
            <Title as={'h5'***REMOVED*** className="flex-[2_2_0%]" variant="primary">
        ***REMOVED***description***REMOVED***
            </Title>
            <div className="hidden flex-1 md:block" />
            <Title as={'h2'***REMOVED*** className="flex-1" variant="secondary">
        ***REMOVED***title***REMOVED***
            </Title>
          </div>
        </Container>
      </StairStepBackground>
    </div>
  )
***REMOVED***
