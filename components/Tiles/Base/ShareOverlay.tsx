'use client'

import AnimatedCopyIcon from '@/components/Elements/Animated/AnimatedCopyIcon'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import { ComponentPropsWithRef ***REMOVED*** from 'react'
import { AnimatedProps ***REMOVED*** from 'react-spring'
import BaseOverlay from './BaseOverlay'
import { TileType ***REMOVED*** from '@/utils/TileFactory'

type ShareOverlayProps = AnimatedProps<ComponentPropsWithRef<'div'>> & {
  onClose?: () => void
  embedId: TileType
***REMOVED***

export default function ShareOverlay({
  onClose,
  embedId,
  ...props
***REMOVED***: ShareOverlayProps) {
  const link = `${window.location.origin***REMOVED***/share/${embedId***REMOVED***`

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(link)
***REMOVED***

  return (
    <BaseOverlay onClose={onClose***REMOVED*** {...props***REMOVED***>
      <div className="flex h-full w-full flex-col items-center">
        <Title variant={'secondary'***REMOVED***>Diese Kachel teilen</Title>
        <Spacer />
        <div className="flex w-full rounded bg-white p-4">
          <pre className="m-4 flex-1 whitespace-pre-wrap break-all text-sm">
      ***REMOVED***link***REMOVED***
          </pre>
          <div className="relative w-7">
            <AnimatedCopyIcon onClick={copyToClipboard***REMOVED*** />
          </div>
        </div>
      </div>
    </BaseOverlay>
  )
***REMOVED***
