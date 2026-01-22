'use client'

import { Spacer } from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Container from '../Container'
import StairStepBackground from '../StairStepBackground'
import LanguageSwitcher from './LanguageSwitcher'
import { Theme } from '@prisma/client'

type BaseNavbarProps = {
  actionComponent?: React.ReactElement
  variant?: 'primary' | 'secondary' | 'overlay'
  children?: React.ReactElement | React.ReactElement[]
}

export default function BaseNavbar({
  actionComponent,
  variant = 'primary',
  children,
}: BaseNavbarProps) {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const fetchTheme = async () => {
      const response = await fetch('/api/theme')
      if (response.ok) {
        const theme = await response.json()
        setTheme(theme)
      }
    }
    fetchTheme()
  }, [])

  return (
    <div className="pt-8">
      <div className="container relative z-10 mx-auto flex max-w-[1920px] translate-y-1/2 flex-row justify-end px-2 xs:px-[16px] md:px-[32px] xl:px-[82px]">
        {theme && (
          <Link href={theme.navbarImageLink || '#'} target="_blank">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Logo" className="h-12 w-auto" src={theme.navbarImage} />
          </Link>
        )}
      </div>
      <StairStepBackground variant={variant}>
        <Container>
          {/* <div className="xl:hidden">
            <Collapsible
              trigger={
                <div className="w-fit rounded-lg border-2 border-primary p-2 md:p-4">
                  <Bars3Icon className="w-5 stroke-2 text-primary md:w-6" />
                </div>
              }
            >
              <div className="my-4 flex flex-col flex-wrap gap-2 md:flex-row">
                {links.map(l => (
                  <LinkComponent key={l.link} {...l} />
                ))}
              </div>
            </Collapsible>
            <Spacer size={'sm'} />
          </div> */}
          <div className="flex flex-col justify-between gap-4">
            <Link href={'/'}>
              <Title
                as="h2"
                variant={variant === 'overlay' ? 'inverse' : 'primary'}
              >
                {theme?.title || 'Klimadashboard'}
              </Title>
            </Link>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">{actionComponent}</div>

              <div className="flex items-center gap-4">
                <LanguageSwitcher />
                <div className="hidden h-fit flex-wrap justify-end gap-2 xl:flex">
                  {/* {links.map(l => (
                  <LinkComponent
                    key={l.link}
                    variant={variant === 'overlay' ? 'inverse' : 'primary'}
                    {...l}
                  />
                ))} */}
                </div>
              </div>
            </div>
          </div>
          {children && (
            <>
              <Spacer size={'xl'} />
              {children}
            </>
          )}
        </Container>
      </StairStepBackground>
    </div>
  )
}
