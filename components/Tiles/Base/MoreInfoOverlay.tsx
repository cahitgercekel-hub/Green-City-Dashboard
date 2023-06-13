'use client'

import { ComponentPropsWithRef ***REMOVED*** from 'react'
import { AnimatedProps ***REMOVED*** from '@react-spring/web'
import React from 'react'
import BaseOverlay, { overlayStyle ***REMOVED*** from './BaseOverlay'
import Title from '@/components/Elements/Title'
import { cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import MoreDetails from '@/components/Elements/MoreDetails'
import useDevice from '@/hooks/useDevice'

type MoreInfoOverlayProps = VariantProps<typeof overlayStyle> &
  AnimatedProps<ComponentPropsWithRef<'div'>> & {
    onClose?: () => void
    children?: React.ReactNode | React.ReactNode[]
    isFullWidth?: boolean
***REMOVED***

export default function MoreInfoOverlay({
  onClose,
  children,
  isFullWidth,
  ...props
***REMOVED***: MoreInfoOverlayProps) {
  const device = useDevice()

  return (
    <BaseOverlay onClose={onClose***REMOVED*** {...props***REMOVED***>
      <div className="flex h-full flex-col">
        <div
          className={cx(
            'no-scrollbar h-full flex-1 overflow-scroll',
            isFullWidth && device === 'desktop'
              ? 'column-fill-auto columns-2 gap-12'
              : '',
      ***REMOVED******REMOVED***
        >
          <Title as="h5" variant={'inverse'***REMOVED***>
      ***REMOVED***children***REMOVED***
          </Title>
        </div>
        <div className="mt-2 flex w-full justify-center">
          <MoreDetails
            lessDetails={true***REMOVED***
            onClick={onClose***REMOVED***
            variant={'inverse'***REMOVED***
          />
        </div>
      </div>
    </BaseOverlay>
  )
***REMOVED***
