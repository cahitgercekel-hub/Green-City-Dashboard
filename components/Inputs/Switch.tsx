import * as SwitchPrimitive from '@radix-ui/react-switch'
import clsx from 'clsx'
import { useState ***REMOVED*** from 'react'

const variants = {
  primary: 'bg-primary',
  mobility: 'bg-green-500',
  successStory: 'bg-secondary',
  climate: 'bg-sky-500',
***REMOVED***

const borderVariants = {
  primary: 'outline-primary',
  mobility: 'outline-green-500',
  successStory: 'outline-secondary',
  climate: 'outline-sky-500',
***REMOVED***

type SwitchProps = {
  label?: string
  variant?: keyof typeof variants
***REMOVED***

export default function Switch({ label, variant = 'primary' ***REMOVED***: SwitchProps) {
  const [checked, setChecked] = useState(false)
  return (
    <div className="flex items-center space-x-4">
      <SwitchPrimitive.Root
        className={clsx(
          'w-12 rounded-full bg-white p-1 outline outline-2',
          borderVariants[variant],
    ***REMOVED******REMOVED***
        onCheckedChange={setChecked***REMOVED***
      >
        <SwitchPrimitive.Thumb asChild>
          <div
            className={clsx(
              'flex h-5 w-5 items-center justify-center rounded-full transition-all',
              checked ? 'translate-x-full' : 'translate-x-0',
              variants[variant],
        ***REMOVED******REMOVED***
          >
            <div
              className={clsx(
                'h-4 w-4 rounded-full bg-white transition-opacity',
                checked ? 'opacity-100' : 'opacity-0',
          ***REMOVED******REMOVED***
            />
          </div>
        </SwitchPrimitive.Thumb>
      </SwitchPrimitive.Root>
***REMOVED***label && <label className="text-primary">{label***REMOVED***</label>***REMOVED***
    </div>
  )
***REMOVED***
