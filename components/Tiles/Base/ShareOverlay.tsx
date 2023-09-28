'use client'

import AnimatedCopyIcon from '@/components/Elements/Animated/AnimatedCopyIcon'
import Title from '@/components/Elements/Title'
import { ComponentPropsWithRef ***REMOVED*** from 'react'
import { AnimatedProps ***REMOVED*** from '@react-spring/web'
import BaseOverlay from './BaseOverlay'
import { TileType ***REMOVED*** from '@/utils/TileFactory'
import { Button ***REMOVED*** from '@/components/Elements/Button'
import { ClipboardDocumentIcon ***REMOVED*** from '@heroicons/react/24/outline'

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
      <div className="flex h-full w-full flex-1 flex-col">
        <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-8">
          <div className="col-span-2 row-span-1">
            <Title as="h3" variant={'secondary'***REMOVED***>
              Diese Kachel teilen
            </Title>
          </div>
          <div className="col-span-2 row-span-1">
            <div className="flex w-full rounded bg-white p-4">
              <pre className="m-4 flex-1 whitespace-pre-wrap break-all text-sm">
          ***REMOVED***link***REMOVED***
              </pre>
              <div className="relative w-7">
                <AnimatedCopyIcon onClick={copyToClipboard***REMOVED*** />
              </div>
            </div>
          </div>
          <div className="col-span-1 row-span-2">
            <p className="text-white">
              Sie möchten diese Kachel mit anderen teilen? Nutzen Sie diesen
              Link um direkt zu dieser Kachel zu verlinken.
            </p>
          </div>
        </div>
        <div className="pt-10">
          <Button
            onClick={copyToClipboard***REMOVED***
            startIcon={
              <ClipboardDocumentIcon className="w-5 stroke-2 text-secondary" />
          ***REMOVED***
            variant={'overlay'***REMOVED***
          >
            Link kopieren
          </Button>
        </div>
      </div>
    </BaseOverlay>
  )
***REMOVED***
