import * as React from 'react'

const sizes = {
  sm: 'my-4',
  md: 'my-8',
  lg: 'my-16',
***REMOVED***

export type SpacerProps = {
  size?: keyof typeof sizes
***REMOVED***

/**
 *
 * @param SpacerProps size of the spacer
 * @returns A spacer to create some space 🧑‍🚀
 */
export function Spacer({ size = 'md' ***REMOVED***: SpacerProps) {
  return <div className={sizes[size]***REMOVED***></div>
***REMOVED***
