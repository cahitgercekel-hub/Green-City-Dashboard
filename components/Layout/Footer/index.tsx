'use client'

import Title from '@/components/Elements/Title'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../Container'
import StairStepBackground from '../StairStepBackground'

import reeduLogo from '@/assets/logos/reedu_Logo_horizontal_orange.jpg'
import arkadiaLogo from '@/assets/logos/Wortmarke.svg'

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
                <Link href="https://arkadia.hn/" target="_blank">
                  <Image
                    alt="Arkadia Logo"
                    className="object-contain"
                    fill
                    src={arkadiaLogo}
                  />
                </Link>
              </div>
              <div className="relative h-28 w-full rounded-md bg-white md:h-36">
                <Link href="https://reedu.de/" target="_blank">
                  <Image
                    alt="Reedu Logo"
                    className="object-contain"
                    fill
                    src={reeduLogo}
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
