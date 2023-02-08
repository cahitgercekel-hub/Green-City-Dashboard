import * as React from 'react'
import type { VariantProps ***REMOVED*** from 'class-variance-authority'
import { cva ***REMOVED*** from 'class-variance-authority'

const spacer = cva('', {
  variants: {
    size: {
      xs: 'my-2',
      sm: 'my-4',
      md: 'my-8',
      lg: 'my-16',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    size: 'md',
***REMOVED***,
***REMOVED***)

export type SpacerProps = VariantProps<typeof spacer>

/**
 *
 * @param SpacerProps size of the spacer
 * @returns A spacer to create some space 🧑‍🚀
 */
export function Spacer({ size ***REMOVED***: SpacerProps) {
  return <div className={spacer({ size ***REMOVED***)***REMOVED***></div>
***REMOVED***
