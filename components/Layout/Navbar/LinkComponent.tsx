import { Button ***REMOVED*** from '@/components/Elements/Button'
import Title from '@/components/Elements/Title'
import { cx ***REMOVED*** from 'class-variance-authority'
import Link from 'next/link'
import { SVGProps ***REMOVED*** from 'react'

export type LinkProps = {
  title: string
  icon: (_props: SVGProps<SVGSVGElement>) => JSX.Element
  link: string
  variant?: 'primary' | 'inverse'
  hover?: 'climate' | 'energy' | 'mobility' | 'buildings'
***REMOVED***

export default function LinkComponent({
  title,
  link,
  icon,
  variant = 'primary',
  hover,
***REMOVED***: LinkProps) {
  const Icon = icon
  return (
    <Link href={link***REMOVED***>
      <Button
        hover={hover***REMOVED***
        startIcon={
          <Icon
            className={cx(
              'h-[34px] transition-colors',
              variant === 'primary' ? 'text-primary' : 'text-white',
              hover === 'climate' && 'group-hover:text-climate',
              hover === 'energy' && 'group-hover:text-energy',
              hover === 'mobility' && 'group-hover:text-mobility',
              hover === 'buildings' && 'group-hover:text-buildings',
        ***REMOVED******REMOVED***
          />
      ***REMOVED***
        variant={variant***REMOVED***
      >
        <Title as="h5" variant={variant***REMOVED***>
    ***REMOVED***title***REMOVED***
        </Title>
      </Button>
    </Link>
  )
***REMOVED***
