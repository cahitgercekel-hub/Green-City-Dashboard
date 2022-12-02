'use client'

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import clsx from 'clsx'
import { useState ***REMOVED*** from 'react'

const variants = {
  primary: 'border-primary',
  mobility: 'border-green-500',
  successStory: 'border-secondary',
  climate: 'border-sky-500',
***REMOVED***

const background = {
  primary: 'bg-primary',
  mobility: 'bg-green-500',
  successStory: 'bg-secondary',
  climate: 'bg-sky-500',
***REMOVED***

const lastBorder = {
  primary: 'border-r-primary',
  mobility: 'border-r-green-500',
  successStory: 'border-r-secondary',
  climate: 'border-r-sky-500',
***REMOVED***

const textColor = {
  primary: 'text-primary',
  mobility: 'text-green-500',
  successStory: 'text-secondary',
  climate: 'text-sky-500',
***REMOVED***

type ToggleGroupProps = {
  items: {
    element: string | React.ReactElement
    value: string
***REMOVED***[]
  variant?: keyof typeof variants
***REMOVED***

export default function ToggleGroup({
  items,
  variant = 'primary',
***REMOVED***: ToggleGroupProps) {
  const [value, setValue] = useState(items[0].value)

  return (
    <ToggleGroupPrimitive.Root
      className={clsx(
        'flex h-fit w-fit overflow-hidden rounded-full border-2 bg-white',
        variants[variant],
  ***REMOVED******REMOVED***
      onValueChange={value => {
        if (value) {
          setValue(value)
      ***REMOVED***
    ***REMOVED******REMOVED***
      type="single"
      value={value***REMOVED***
    >
***REMOVED***items.map((e, i) => (
        <ToggleGroupPrimitive.Item
          className={clsx(
            'px-4 transition-all duration-300 md:py-2 md:px-8',
            background[variant],
            i !== items.length - 1 && `border-r-2 ${lastBorder[variant]***REMOVED***`,
            value === e.value
              ? 'bg-opacity-100 text-white'
              : `bg-opacity-0 ${textColor[variant]***REMOVED***`,
      ***REMOVED******REMOVED***
          key={i***REMOVED***
          value={e.value***REMOVED***
        >
    ***REMOVED***typeof e.element === 'string' ? <span>{e.element***REMOVED***</span> : e.element***REMOVED***
        </ToggleGroupPrimitive.Item>
  ***REMOVED***)***REMOVED***
    </ToggleGroupPrimitive.Root>
  )
***REMOVED***
