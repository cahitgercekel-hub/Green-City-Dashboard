import type { VariantProps ***REMOVED*** from 'class-variance-authority'
import { cva, cx ***REMOVED*** from 'class-variance-authority'
import * as React from 'react'

import { Spinner ***REMOVED*** from '@/components/Elements/Spinner'

const button = cva(
  'flex items-center justify-center rounded-lg border-2 font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 group transition-colors',
  {
    variants: {
      variant: {
        primary: 'border-primary text-primary',
        secondary: 'border-secondary text-secondary',
        inverse: 'text-white border-white',
        danger: 'bg-red-600 text-white hover:bg-red-50:text-red-600',
        goToClimate: 'border-climate text-primary',
        goToMobility: 'border-mobility text-primary',
        goToEnergy: 'border-energy text-primary',
        goToBuildings: 'border-buildings text-primary',
        overlay: 'border-secondary text-white',
    ***REMOVED***,
      size: {
        sm: 'py-1 px-3 text-sm',
        md: 'py-2 px-5 text-md',
        lg: 'py-3 px-5 text-lg',
        link: 'pr-6 md:pr-10 pl-5 md:pl-8 py-2 md:py-3 text-xl md:text-2xl',
    ***REMOVED***,
      hover: {
        climate: 'hover:border-climate',
        energy: 'hover:border-energy',
        mobility: 'hover:border-mobility',
        buildings: 'hover:border-buildings',
    ***REMOVED***,
  ***REMOVED***,
    defaultVariants: {
      variant: 'primary',
      size: 'md',
  ***REMOVED***,
***REMOVED***,
)

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never ***REMOVED***
  | { endIcon: React.ReactElement; startIcon?: never ***REMOVED***
  | { endIcon?: undefined; startIcon?: undefined ***REMOVED***

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> &
  IconProps & {
    isLoading?: boolean
***REMOVED***

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant,
      size,
      hover,
      isLoading = false,
      startIcon,
      endIcon,
      ...props
  ***REMOVED***,
    ref,
  ) => {
    return (
      <button
        className={cx(className, button({ variant, size, hover ***REMOVED***))***REMOVED***
        ref={ref***REMOVED***
        type={type***REMOVED***
  ***REMOVED***...props***REMOVED***
      >
  ***REMOVED***isLoading && <Spinner className="text-current" size="sm" />***REMOVED***
  ***REMOVED***!isLoading && startIcon && (
          <div className="mr-1 md:mr-4">{startIcon***REMOVED***</div>
    ***REMOVED******REMOVED***
        <span className="mx-2">{props.children***REMOVED***</span> {!isLoading && endIcon***REMOVED***
      </button>
***REMOVED***
***REMOVED***,
)

Button.displayName = 'Button'
