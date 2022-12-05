import type { VariantProps ***REMOVED*** from 'class-variance-authority'
import { cva ***REMOVED*** from 'class-variance-authority'

const title = cva('', {
  variants: {
    variant: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      inverse: 'text-white',
  ***REMOVED***,
    size: {
      sm: 'md:text-md text-sm font-semibold',
      md: 'md:text-3xl text-xl',
      lg: 'md:text-5xl text-3xl',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    variant: 'primary',
    size: 'md',
***REMOVED***,
***REMOVED***)

type TitleProps = VariantProps<typeof title> & {
  children: React.ReactElement | string
***REMOVED***

export default function Title({ variant, size, children ***REMOVED***: TitleProps) {
  return <span className={title({ variant, size ***REMOVED***)***REMOVED***>{children***REMOVED***</span>
***REMOVED***
