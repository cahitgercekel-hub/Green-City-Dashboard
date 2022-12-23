'use client'

import AnimatedCopyIcon from '@/components/Elements/AnimatedCopyIcon'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import embedRegistry from '@/utils/embedRegistry'
import { ComponentPropsWithRef ***REMOVED*** from 'react'
import { AnimatedProps ***REMOVED*** from 'react-spring'
import BaseOverlay from './BaseOverlay'

type EmbedOverlayProps = AnimatedProps<ComponentPropsWithRef<'div'>> & {
  onClose?: () => void
  embedId: keyof typeof embedRegistry
***REMOVED***

export default function EmbedOverlay({
  onClose,
  embedId,
  ...props
***REMOVED***: EmbedOverlayProps) {
  const link = `${window.location.origin***REMOVED***/embed/${embedId***REMOVED***`

  const iframeSrc = `<iframe src="${link***REMOVED***" style="border:none; width:100%; height:100%" title="Klimadashboard Münster"></iframe>`

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(iframeSrc)
***REMOVED***

  return (
    <BaseOverlay onClose={onClose***REMOVED*** {...props***REMOVED***>
      <div className="flex h-full w-full flex-1 flex-col items-center">
        <Title variant={'secondary'***REMOVED***>
          Diese Kachel auf Ihre Website einbauen
        </Title>
        <Spacer size={'sm'***REMOVED*** />{' '***REMOVED***
        <div className="flex rounded bg-white p-4">
          <pre className="m-4 flex-1 whitespace-pre-wrap break-all text-sm">
      ***REMOVED***iframeSrc***REMOVED***
          </pre>
          <div className="relative w-7">
            <AnimatedCopyIcon onClick={copyToClipboard***REMOVED*** />
          </div>
        </div>
        <Spacer size={'sm'***REMOVED*** />
        <p className="text-white">
          Sie möchten diese Kachel auch auf ihrer Website darstellen? Nutzen Sie
          den iframe Code und betten Sie diesen in ihrer Website ganz einfach
          ein.
        </p>
      </div>
    </BaseOverlay>
  )
***REMOVED***
