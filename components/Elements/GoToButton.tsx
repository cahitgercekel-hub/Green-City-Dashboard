'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { Button } from './Button'

interface ButtonProps {
  type: 'climate' | 'mobility' | 'energy' | 'building'
}

export function GoToButton({ type }: ButtonProps) {
  const { t } = useTranslation()
  if (type === 'climate') {
    return (
      <Link href="/klima">
        <Button size={'link'} variant={'goToClimate'}>
          {t('goToButton.climate')}
        </Button>
      </Link>
    )
  }
  if (type === 'mobility') {
    return (
      <Link href={'/mobilitaet'}>
        <Button size={'link'} variant={'goToMobility'}>
          {t('goToButton.mobility')}
        </Button>
      </Link>
    )
  }
  if (type === 'energy') {
    return (
      <Link href={'/energie'}>
        <Button size={'link'} variant={'goToEnergy'}>
          {t('goToButton.energy')}
        </Button>
      </Link>
    )
  }
  if (type === 'building') {
    return (
      <Link href={'/gebaeude'}>
        <Button size={'link'} variant={'goToBuildings'}>
          {t('goToButton.building')}
        </Button>
      </Link>
    )
  }

  // this should never be reached
  return <Button>{t('goToButton.default')}</Button>
}
