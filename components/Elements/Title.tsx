import clsx from 'clsx'

const variants = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  inverse: 'text-white',
***REMOVED***

const sizes = {
  sm: 'text-md font-semibold',
  md: 'text-3xl',
  lg: 'text-5xl',
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
