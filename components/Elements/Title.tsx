import clsx from 'clsx'

const variants = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  inverse: 'text-white',
***REMOVED***

const sizes = {
  sm: 'md:text-md text-sm font-semibold',
  md: 'md:text-3xl text-xl',
  lg: 'md:text-5xl text-3xl',
***REMOVED***

type TitleProps = {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  children: React.ReactElement | string
***REMOVED***

export default function Title({
  variant = 'primary',
  size = 'md',
  children,
***REMOVED***: TitleProps) {
  return (
    <span className={clsx(variants[variant], sizes[size])***REMOVED***>{children***REMOVED***</span>
  )
***REMOVED***
