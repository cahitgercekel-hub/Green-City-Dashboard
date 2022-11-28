import clsx from 'clsx'

const variants = {
  primary: 'bg-primary-50',
***REMOVED***

export type StairStepBackgroundProps = {
  variant?: keyof typeof variants
  children: React.ReactNode
***REMOVED***

export default function StairStepBackground({
  variant = 'primary',
  children,
***REMOVED***: StairStepBackgroundProps) {
  return (
    <div>
      <div className="hidden h-12 w-full md:flex">
        <div className="flex-[2_2_0%]"></div>
        <div className={clsx('flex-[3_3_0%]', variants[variant])***REMOVED***></div>
      </div>
      <div className={variants[variant]***REMOVED***>{children***REMOVED***</div>
    </div>
  )
***REMOVED***
