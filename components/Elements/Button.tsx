import clsx from 'clsx'
import * as React from 'react'

import { Spinner ***REMOVED*** from '@/components/Elements/Spinner'

const variants = {
  primary: 'border-primary',
  inverse: 'bg-white text-green hover:bg-green:text-white',
  danger: 'bg-red-600 text-white hover:bg-red-50:text-red-600',
***REMOVED***

const sizes = {
  sm: 'py-1 px-3 text-sm',
  md: 'py-2 px-4 text-md',
  lg: 'py-3 px-5 text-lg',
***REMOVED***

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never ***REMOVED***
  | { endIcon: React.ReactElement; startIcon?: never ***REMOVED***
  | { endIcon?: undefined; startIcon?: undefined ***REMOVED***

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  isLoading?: boolean
***REMOVED*** & IconProps

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
  ***REMOVED***,
    ref,
  ) => {
    return (
      <button
        className={clsx(
          'flex items-center justify-center rounded-full border-2 font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-70',
          variants[variant],
          sizes[size],
          className,
    ***REMOVED******REMOVED***
        ref={ref***REMOVED***
        type={type***REMOVED***
  ***REMOVED***...props***REMOVED***
      >
  ***REMOVED***isLoading && <Spinner className="text-current" size="sm" />***REMOVED***
  ***REMOVED***!isLoading && startIcon***REMOVED***
        <span className="mx-2">{props.children***REMOVED***</span> {!isLoading && endIcon***REMOVED***
      </button>
***REMOVED***
***REMOVED***,
)

Button.displayName = 'Button'
