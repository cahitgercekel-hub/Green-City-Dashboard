import { cva, cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import { ForwardRefExoticComponent, HTMLAttributes, SVGProps ***REMOVED*** from 'react'

interface IconFactoryProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconStyle> {
  icon:
    | ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
    | ((_props: SVGProps<SVGSVGElement>) => JSX.Element)
***REMOVED***

const iconStyle = cva('stroke-[4]', {
  variants: {
    variant: {
      primary: 'stroke-primary text-primary',
      mobility: 'stroke-mobility text-mobility',
      successStory: 'stroke-secondary text-secondary',
      climate: 'stroke-climate text-climate',
      eistage: 'stroke-climate text-climate',
      frosttage: 'stroke-primary text-primary',
      heisse_tage: 'stroke-energy text-energy',
      sommertage: 'stroke-mobility text-mobility',
      tropennaechte: 'stroke-buildings text-buildings',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    variant: 'primary',
***REMOVED***,
***REMOVED***)

export default function IconFactory({
  icon,
  variant,
  className,
***REMOVED***: IconFactoryProps) {
  const Icon = icon

  return <Icon className={cx(iconStyle({ variant ***REMOVED***), className)***REMOVED*** />
***REMOVED***
