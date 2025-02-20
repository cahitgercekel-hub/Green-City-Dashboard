import * as SwitchPrimitive from '@radix-ui/react-switch'
import type { VariantProps ***REMOVED*** from 'class-variance-authority'
import { cva ***REMOVED*** from 'class-variance-authority'
import { useEffect, useState ***REMOVED*** from 'react'
import Title from '../Elements/Title'

const switchThumbStyle = cva(
  'flex h-3 w-3 md:h-5 md:w-5 items-center justify-center rounded-lg transition-all',
  {
    variants: {
      variant: {
        primary: 'bg-primary',
        mobility: 'bg-mobility',
        successStory: 'bg-secondary',
        climate: 'bg-climate',
        eistage: 'bg-climate',
        frosttage: 'bg-primary',
        heisse_tage: 'bg-energy',
        sommertage: 'bg-mobility',
        tropennaechte: 'bg-buildings',
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
  'h-[10px] w-[10px] md:h-4 md:w-4 rounded-lg bg-white transition-opacity',
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
  'w-[2.25rem] md:w-[3.25rem] p-1 rounded-lg bg-white border-[1px] md:border-2 shadow-inner',
  {
    variants: {
      variant: {
        primary: 'border-primary',
        mobility: 'border-mobility',
        successStory: 'border-secondary',
        climate: 'border-climate',
        eistage: 'border-climate',
        frosttage: 'border-primary',
        heisse_tage: 'border-energy',
        sommertage: 'border-mobility',
        tropennaechte: 'border-buildings',
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

  useEffect(() => {
    setChecked(props.checked)
***REMOVED***, [props.checked])

  return (
    <div className="flex items-center space-x-4">
      <SwitchPrimitive.Root
        className={switchBorderStyle({ variant ***REMOVED***)***REMOVED***
  ***REMOVED***...props***REMOVED***
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
***REMOVED***label && (
        <Title as={'h5'***REMOVED*** variant={'primary'***REMOVED***>
    ***REMOVED***label***REMOVED***
        </Title>
  ***REMOVED******REMOVED***
    </div>
  )
***REMOVED***
