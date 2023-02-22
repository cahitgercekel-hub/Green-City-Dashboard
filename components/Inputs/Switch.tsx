import * as SwitchPrimitive from '@radix-ui/react-switch'
import { useState ***REMOVED*** from 'react'
import type { VariantProps ***REMOVED*** from 'class-variance-authority'
import { cva ***REMOVED*** from 'class-variance-authority'

const switchThumbStyle = cva(
  'flex h-5 w-5 items-center justify-center rounded-full transition-all',
  {
    variants: {
      variant: {
        primary: 'bg-zinc-800',
    ***REMOVED***,
      checked: {
        true: 'translate-x-full',
    ***REMOVED***,
  ***REMOVED***,
    defaultVariants: {
      variant: 'primary',
  ***REMOVED***,
***REMOVED***,
)

const switchThumbInnerStyle = cva(
  'h-4 w-4 rounded-full bg-white transition-opacity',
  {
    variants: {
      checked: {
        false: 'opacity-100',
        true: 'opacity-0',
    ***REMOVED***,
  ***REMOVED***,
***REMOVED***,
)

const switchBorderStyle = cva(
  'w-[3.25rem] p-1 rounded-full bg-white border-2',
  {
    variants: {
      variant: {
        primary: 'border-zinc-800',
    ***REMOVED***,
  ***REMOVED***,
    defaultVariants: {
      variant: 'primary',
  ***REMOVED***,
***REMOVED***,
)

type SwitchProps = SwitchPrimitive.SwitchProps &
  VariantProps<typeof switchBorderStyle> & {
    label?: string
***REMOVED***

export default function Switch({ label, variant, ...props ***REMOVED***: SwitchProps) {
  const [checked, setChecked] = useState(props.defaultChecked)

  return (
    <div className="flex items-center space-x-4">
      <SwitchPrimitive.Root
  ***REMOVED***...props***REMOVED***
        className={switchBorderStyle({ variant ***REMOVED***)***REMOVED***
        onCheckedChange={val => {
          if (props.onCheckedChange) {
            props.onCheckedChange(val)
        ***REMOVED***
          setChecked(val)
      ***REMOVED******REMOVED***
      >
        <SwitchPrimitive.Thumb asChild>
          <div className={switchThumbStyle({ variant, checked ***REMOVED***)***REMOVED***>
            <div className={switchThumbInnerStyle({ checked ***REMOVED***)***REMOVED*** />
          </div>
        </SwitchPrimitive.Thumb>
      </SwitchPrimitive.Root>
***REMOVED***label && <label className="text-primary">{label***REMOVED***</label>***REMOVED***
    </div>
  )
***REMOVED***
