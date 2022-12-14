import Image from 'next/image'
import StairStepBackground from '../StairStepBackground'
import MSLogo from '@/assets/logos/stadtlogo-muenster.png'
import { Button ***REMOVED*** from '../../Elements/Button'
import MoreDetails from '../../Elements/MoreDetails'
import Title from '../../Elements/Title'
import Link from 'next/link'
import Collapsible from '../../Elements/Collapsible'
import Container from '../Container'
import {
  BicycleIcon,
  BuildingIcon,
  EnergyIcon,
  MuensterIcon,
***REMOVED*** from '@/components/Icons'

export default function Navbar() {
  return (
    <div className="pt-8">
      <div className="translate-y-4 px-8">
        <Image
          alt="Logo der Stadt Münster"
          className="ml-auto h-12 w-auto"
          src={MSLogo***REMOVED***
        />
      </div>
      <StairStepBackground>
        <Container>
          <div className="flex justify-between">
            <div className="flex-1">
              <Link href={'/'***REMOVED***>
                <Title size="lg">
                  <span>
                    Klimadashboard <br />
                    Münster
                  </span>
                </Title>
              </Link>
              <Collapsible trigger={<MoreDetails className="mt-4" />***REMOVED***>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reiciendis, cupiditate! Tempora cum maiores soluta rem enim
                  beatae, quis illum, sunt, quaerat minima nemo odit.
                  Consequatur harum laboriosam doloremque impedit sed.
                </div>
              </Collapsible>
            </div>
            <div className="flex h-fit flex-wrap space-x-2">
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
        </Container>
      </StairStepBackground>
    </div>
  )
***REMOVED***
