import type { VariantProps ***REMOVED*** from 'class-variance-authority'
import { cva ***REMOVED*** from 'class-variance-authority'

const phenomenonStyle = cva('flex-[3_3_0%]', {
  variants: {
    variant: {
      primary: 'bg-primary-light',
      secondary: 'bg-secondar/20',
      overlay: 'bg-primary/90 backdrop-blur',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    variant: 'primary',
***REMOVED***,
***REMOVED***)

export type StairStepBackgroundProps = VariantProps<typeof phenomenonStyle> & {
  children: React.ReactNode
***REMOVED***

export default function StairStepBackground({
  variant,
  children,
***REMOVED***: StairStepBackgroundProps) {
  return (
    <div>
      <div className="hidden h-12 w-full md:flex">
        <div className="flex-[2_2_0%]"></div>
        <div className={phenomenonStyle({ variant ***REMOVED***)***REMOVED***></div>
      </div>
      <div className={phenomenonStyle({ variant ***REMOVED***)***REMOVED***>{children***REMOVED***</div>
    </div>
  )
***REMOVED***
