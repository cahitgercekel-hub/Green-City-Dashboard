'use client'

import Title from '@/components/Elements/Title'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../Container'
import StairStepBackground from '../StairStepBackground'

import BMWSBLogo from '@/assets/logos/BMWSB.png'
import StadtwerkeLogo from '@/assets/logos/Stadtwerke_Muenster_Logo.png'
import KFW from '@/assets/logos/kfw.png'
import WFMLogo from '@/assets/logos/logo_wfm.png'
import DezernatSmartCity from '@/assets/logos/Wiesbaden_footer_logo.jpg'
import WiesbadenLogo from '@/assets/logos/Wiesbaden_smart city_4c.png'

export default function Footer() {
  return (
    <StairStepBackground>
      <Container>
        <div className="items-top flex w-full flex-col justify-around pb-10 lg:flex-row lg:gap-20 xl:pb-20 2xl:gap-44">
          <div className="flex-1">
            <Title as={'h4'} className="py-10 md:py-20">
              Ein Projekt von
            </Title>
            <div className="flex w-full grid-cols-2 flex-col gap-8 lg:gap-16 xl:grid">
              <div className="relative h-28 w-full rounded-md bg-white md:h-36">
                <Link
                  href="https://smart-city-findet-stadt.de/"
                  target="_blank"
                >
                  <Image
                    alt="Smart City Wiesbaden Logo"
                    className="object-contain"
                    fill
                    src={WiesbadenLogo}
                  />
                </Link>
              </div>
              <div className="relative h-28 w-full rounded-md bg-white md:h-36">
                <Link
                  href="https://www.wiesbaden.de/vv/oe/07/Dezernat-VII"
                  target="_blank"
                >
                  <Image
                    alt="Dezernat für Smart City, Europa und Ordnung"
                    className="object-contain"
                    fill
                    src={DezernatSmartCity}
                  />
                </Link>
              </div>
            </div>
            {/* <Title as={'h4'} className="py-10 md:py-20">
              Unterstützt durch
            </Title>
            <div className="flex w-full grid-cols-2 flex-col gap-8 lg:gap-16 xl:grid">
              <div className="relative h-28 w-full md:h-36">
                <Link
                  href="https://www.stadtwerke-muenster.de/"
                  target="_blank"
                >
                  <Image
                    alt="Stadtwerke Münster Logo"
                    className="object-contain"
                    fill
                    src={StadtwerkeLogo}
                  />
                </Link>
              </div>
              <div className="relative h-28 w-full md:h-36">
                <Link href="https://www.wfm-muenster.de/" target="_blank">
                  <Image
                    alt="Wirtschaftsförderung Münster Logo"
                    className="object-contain"
                    fill
                    src={WFMLogo}
                  />
                </Link>
              </div>
            </div> */}
          </div>
          {/* <div className="flex-1">
            <Title as={'h4'} className="py-10 md:py-20">
              Gefördert durch
            </Title>
            <div className="flex w-full grid-cols-2 flex-col gap-8 lg:gap-16 xl:grid">
              <div className="relative h-28 w-full md:h-36">
                <Image
                  alt="BMWSB Logo"
                  className="object-contain"
                  fill
                  src={BMWSBLogo}
                />
              </div>
              <div className="relative h-28 w-full md:h-36">
                <Image
                  alt="KfW  Logo"
                  className="object-contain"
                  fill
                  src={KFW}
                />
              </div>
            </div>
          </div> */}
          <div className="sm:hidden flex flex-1 flex-col 2xl:flex">
            <Title as={'h4'} className="py-10 opacity-0 md:py-20">
              Impressum
            </Title>
            <div className="flex flex-1 flex-col justify-between gap-8">
              <Link href="/impressum">
                <Title as="h5" className="underline" variant={'primary'}>
                  Impressum
                </Title>
              </Link>
              <Link href="/datenschutz">
                <Title as="h5" className="underline" variant={'primary'}>
                  Datenschutz
                </Title>
              </Link>
              {/* <Link href="/feedback#use-dashboard">
                <Title as="h5" className="underline" variant={'primary'}>
                  Dieses Dashboard adaptieren
                </Title>
              </Link>
              <Link href="/feedback#feedback">
                <Title as="h5" className="underline" variant={'primary'}>
                  Feedback geben
                </Title>
              </Link> */}
            </div>
          </div>
        </div>
        <div className="sm:flex hidden justify-between 2xl:hidden">
          <Link href="/impressum">
            <Title as="h5" className="underline" variant={'primary'}>
              Impressum
            </Title>
          </Link>
          <Link href="/datenschutz">
            <Title as="h5" className="underline" variant={'primary'}>
              Datenschutz
            </Title>
          </Link>
          <Link href="/feedback#use-dashboard">
            <Title as="h5" className="underline" variant={'primary'}>
              Dieses Dashboard adaptieren
            </Title>
          </Link>
          <Link href="/feedback#feedback">
            <Title as="h5" className="underline" variant={'primary'}>
              Feedback geben
            </Title>
          </Link>
        </div>
      </Container>
    </StairStepBackground>
  )
}
