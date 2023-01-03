'use client'

import embedRegistry from '../../../utils/embedRegistry'
import { ComponentPropsWithRef ***REMOVED*** from 'react'
import { AnimatedProps ***REMOVED*** from 'react-spring'
import React from 'react'
import BaseOverlay from './BaseOverlay'

type MoreInfoOverlayProps = AnimatedProps<ComponentPropsWithRef<'div'>> & {
  onClose?: () => void
  embedId: keyof typeof embedRegistry
  // children?: React.ReactNode | React.ReactNode[]
***REMOVED***

export default function MoreInfoOverlay({
  onClose,
  // embedId,
  // children,
  ...props
***REMOVED***: MoreInfoOverlayProps) {
  return (
    <BaseOverlay onClose={onClose***REMOVED*** {...props***REMOVED***>
      <div></div>
    </BaseOverlay>
  )
***REMOVED***
