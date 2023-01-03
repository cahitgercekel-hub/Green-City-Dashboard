'use client'

import { ComponentPropsWithRef ***REMOVED*** from 'react'
import { AnimatedProps ***REMOVED*** from 'react-spring'
import React from 'react'
import BaseOverlay from './BaseOverlay'

type MoreInfoOverlayProps = AnimatedProps<ComponentPropsWithRef<'div'>> & {
  onClose?: () => void
  children?: React.ReactNode | React.ReactNode[]
***REMOVED***

export default function MoreInfoOverlay({
  onClose,
  children,
  ...props
***REMOVED***: MoreInfoOverlayProps) {
  return (
    <BaseOverlay onClose={onClose***REMOVED*** {...props***REMOVED***>
***REMOVED***children***REMOVED***
    </BaseOverlay>
  )
***REMOVED***
