import { cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import { cva ***REMOVED*** from 'class-variance-authority'
import { HTMLAttributes ***REMOVED*** from 'react'

const TitleStyle = cva('block', {
  variants: {
    as: {
      h1: 'text-7xl leading-[5.5rem]',
      h2: 'text-5xl leading-[3.5rem] tracking-tight',
      h3: 'text-4xl leading-[3rem]',
      h4: 'text-3xl leading-[3rem]',
      h5: 'text-xl leading-6 tracking-wide',
      h6: 'text-lg tracking-wide',
      h7: 'text-base leading-7 tracking-wide',
  ***REMOVED***,
    variant: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      mobility: 'text-mobility',
      successStory: 'text-primary',
      climate: 'text-climate',
      building: 'text-buildings',
      energy: 'text-energy',
      inverse: 'text-white',
      dark: 'text-zinc-900',
  ***REMOVED***,
***REMOVED***,
***REMOVED***)

type TitleProps = VariantProps<typeof TitleStyle> &
  HTMLAttributes<HTMLSpanElement>

export default function Title({
  as,
  variant,
  children,
  className,
  ...props
***REMOVED***: TitleProps) {
  return (
    <span
***REMOVED***...props***REMOVED***
      className={cx(TitleStyle({ as, variant ***REMOVED***), className)***REMOVED***
      style={{ hyphens: 'auto' ***REMOVED******REMOVED***
    >
***REMOVED***children***REMOVED***
    </span>
  )
***REMOVED***
