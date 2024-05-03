'use client'

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { cva, cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import { useState ***REMOVED*** from 'react'
import Title from '../Elements/Title'

type variants = {
  primary: string
  mobility: string
  successStory: string
  climate: string
  building: string
***REMOVED***

const toggleGroupStyle = cva<{
  variant: variants
  scrollX: {
    true: string
***REMOVED***
***REMOVED***>(
  'flex h-fit w-fit overflow-hidden rounded-full border-2 bg-white w-full md:w-auto',
  {
    variants: {
      variant: {
        primary: 'border-primary',
        mobility: 'border-mobility',
        successStory: 'border-secondary',
        climate: 'border-climate',
        building: 'border-buildings',
    ***REMOVED***,
      scrollX: {
        true: 'overflow-x-auto',
    ***REMOVED***,
  ***REMOVED***,
    defaultVariants: {
      variant: 'primary',
  ***REMOVED***,
***REMOVED***,
)

const toggleGroupBackgroundStyle = cva<{
  variant: variants
  isLast: {
    true: string
***REMOVED***
***REMOVED***>('px-4 transition-all duration-300 md:py-2 md:px-8 flex-1', {
  variants: {
    variant: {
      primary: 'bg-primary',
      mobility: 'bg-mobility',
      successStory: 'bg-secondary',
      climate: 'bg-climate',
      building: 'bg-buildings',
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
      className: 'border-r-mobility',
  ***REMOVED***,
    {
      variant: 'successStory',
      isLast: true,
      className: 'border-r-secondary',
  ***REMOVED***,
    {
      variant: 'climate',
      isLast: true,
      className: 'border-r-climate',
  ***REMOVED***,
    {
      variant: 'building',
      isLast: true,
      className: 'border-r-buildings',
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
      building: null,
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
      className: 'text-mobility',
  ***REMOVED***,
    {
      selected: false,
      variant: 'successStory',
      className: 'text-secondary',
  ***REMOVED***,
    {
      selected: false,
      variant: 'climate',
      className: 'text-climate',
  ***REMOVED***,
    {
      selected: false,
      variant: 'building',
      className: 'text-buildings',
  ***REMOVED***,
  ],
  defaultVariants: {
    variant: 'primary',
    selected: false,
***REMOVED***,
***REMOVED***)

type ToggleGroupProps = VariantProps<typeof toggleGroupStyle> & {
  defaultValue?: string
  items: {
    element: string | React.ReactElement
    value: string
***REMOVED***[]
  onChange?: (_value: string) => void
***REMOVED***

export default function ToggleGroup({
  defaultValue,
  items,
  variant,
  scrollX,
  onChange,
***REMOVED***: ToggleGroupProps) {
  const [value, setValue] = useState(defaultValue || items[0].value)

  return (
    <ToggleGroupPrimitive.Root
      className={toggleGroupStyle({ variant, scrollX ***REMOVED***)***REMOVED***
      onValueChange={value => {
        if (value) {
          setValue(value)
          onChange && onChange(value)
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
    ***REMOVED***typeof e.element === 'string' ? (
            <Title as="h5" style={{ hyphens: 'unset' ***REMOVED******REMOVED***>
        ***REMOVED***e.element***REMOVED***
            </Title>
      ***REMOVED*** : (
            e.element
      ***REMOVED******REMOVED***
        </ToggleGroupPrimitive.Item>
  ***REMOVED***)***REMOVED***
    </ToggleGroupPrimitive.Root>
  )
***REMOVED***
