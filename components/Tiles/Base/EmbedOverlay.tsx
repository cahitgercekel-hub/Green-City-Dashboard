'use client'

import Title from '@/components/Elements/Title'
import embedRegistry from '@/utils/embedRegistry'
import {
  CheckIcon,
  ClipboardDocumentIcon,
  XMarkIcon,
***REMOVED*** from '@heroicons/react/24/outline'
import { ComponentPropsWithRef, useEffect, useState ***REMOVED*** from 'react'
import { animated, AnimatedProps, useTransition ***REMOVED*** from 'react-spring'

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
    setSuccess(true)
***REMOVED***

  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!success) {
      return
  ***REMOVED***

    setTimeout(() => setSuccess(false), 2000)
***REMOVED***, [success])

  const transitions = useTransition(success, {
    from: { opacity: 0 ***REMOVED***,
    enter: { opacity: 1 ***REMOVED***,
    leave: { opacity: 0 ***REMOVED***,
***REMOVED***)

  return (
    <animated.div
***REMOVED***...props***REMOVED***
      className="absolute top-0 left-0 z-20 h-full w-full bg-primary bg-opacity-90 p-8 backdrop-blur md:p-12"
    >
      <div className="flex w-full justify-end">
        <XMarkIcon
          className="h-6 cursor-pointer text-white"
          onClick={onClose***REMOVED***
        />
      </div>
      <div className="my-auto flex h-full w-full items-center">
        <div className="h-full flex-1 flex-col content-between">
          <Title variant={'secondary'***REMOVED***>
            Klimakachel auf Ihre Website einbauen
          </Title>
          <div className="flex rounded bg-white p-4">
            <pre className="m-4 flex-1 whitespace-pre-wrap break-all text-sm">
        ***REMOVED***iframeSrc***REMOVED***
            </pre>
            <div className="relative w-7">
        ***REMOVED***transitions((styles, isSuccess) => (
                <animated.div
                  className="absolute top-0 cursor-pointer rounded-full bg-transparent p-2 hover:bg-zinc-100"
                  onClick={copyToClipboard***REMOVED***
                  style={styles***REMOVED***
                >
            ***REMOVED***isSuccess ? (
                    <CheckIcon className="w-5 stroke-2 text-secondary" />
              ***REMOVED*** : (
                    <ClipboardDocumentIcon className="w-5 stroke-2 text-primary" />
              ***REMOVED******REMOVED***
                </animated.div>
          ***REMOVED***)***REMOVED***
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  )
***REMOVED***
