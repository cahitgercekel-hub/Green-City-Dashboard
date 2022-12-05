'use client'

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { cva, cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import { useState ***REMOVED*** from 'react'

type variants = {
  primary: string
  mobility: string
  successStory: string
  climate: string
***REMOVED***

const toggleGroupStyle = cva<{
  variant: variants
***REMOVED***>('flex h-fit w-fit overflow-hidden rounded-full border-2 bg-white', {
  variants: {
    variant: {
      primary: 'border-primary',
      mobility: 'border-green-500',
      successStory: 'border-secondary',
      climate: 'border-sky-500',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    variant: 'primary',
***REMOVED***,
***REMOVED***)

const toggleGroupBackgroundStyle = cva<{
  variant: variants
  isLast: {
    true: string
***REMOVED***
***REMOVED***>('px-4 transition-all duration-300 md:py-2 md:px-8', {
  variants: {
    variant: {
      primary: 'bg-primary',
      mobility: 'bg-green-500',
      successStory: 'bg-secondary',
      climate: 'bg-sky-500',
  ***REMOVED***,
    isLast: {
      true: 'border-r-2',
  ***REMOVED***,
***REMOVED***,
  compoundVariants: [
    {
      variant: 'primary',
      isLast: true,
      className: 'border-r-primary',
  ***REMOVED***,
    {
      variant: 'mobility',
      isLast: true,
      className: 'border-r-green-500',
  ***REMOVED***,
    {
      variant: 'successStory',
      isLast: true,
      className: 'border-r-secondary',
  ***REMOVED***,
    {
      variant: 'climate',
      isLast: true,
      className: 'border-r-sky-500',
  ***REMOVED***,
  ],
  defaultVariants: {
    variant: 'primary',
***REMOVED***,
***REMOVED***)

const selectedStyle = cva('px-4 transition-all duration-300 md:py-2 md:px-8', {
  variants: {
    variant: {
      primary: null,
      mobility: null,
      successStory: null,
      climate: null,
  ***REMOVED***,
    selected: {
      true: 'bg-opacity-100 text-white',
      false: 'bg-opacity-0',
  ***REMOVED***,
***REMOVED***,
  compoundVariants: [
    {
      selected: false,
      variant: 'primary',
      className: 'text-primary',
  ***REMOVED***,
    {
      selected: false,
      variant: 'mobility',
      className: 'text-green-500',
  ***REMOVED***,
    {
      selected: false,
      variant: 'successStory',
      className: 'text-secondary',
  ***REMOVED***,
    {
      selected: false,
      variant: 'climate',
      className: 'text-sky-500',
  ***REMOVED***,
  ],
  defaultVariants: {
    variant: 'primary',
    selected: false,
***REMOVED***,
***REMOVED***)

type ToggleGroupProps = VariantProps<typeof toggleGroupStyle> & {
  items: {
    element: string | React.ReactElement
    value: string
***REMOVED***[]
***REMOVED***

export default function ToggleGroup({ items, variant ***REMOVED***: ToggleGroupProps) {
  const [value, setValue] = useState(items[0].value)

  return (
    <ToggleGroupPrimitive.Root
      className={toggleGroupStyle({ variant ***REMOVED***)***REMOVED***
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
          className={cx(
            toggleGroupBackgroundStyle({
              variant,
              isLast: i !== items.length - 1,
          ***REMOVED***),
            selectedStyle({
              variant,
              selected: value === e.value,
          ***REMOVED***),
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
