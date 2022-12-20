'use client'

import embedRegistry from '@/utils/embedRegistry'
import { cva, cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import { useState ***REMOVED*** from 'react'
import { useTransition ***REMOVED*** from 'react-spring'
import EmbedOverlay from './EmbedOverlay'
import TileFooter from './TileFooter'
import 'share-api-polyfill'

const baseTileStyle = cva(
  'relative flex flex-col md:flex-row h-fit overflow-hidden rounded-3xl',
  {
    variants: {
      variant: {
        primary: 'bg-primary-light',
        secondary: 'bg-secondary',
        mobility: 'bg-mobility-light',
        successStory: 'bg-primary-light',
        climate: 'bg-climate-light',
    ***REMOVED***,
  ***REMOVED***,
    defaultVariants: {
      variant: 'primary',
  ***REMOVED***,
***REMOVED***,
)

export type ImageProps =
  | { startImage: React.ReactElement; endImage?: never ***REMOVED***
  | { endImage: React.ReactElement; startImage?: never ***REMOVED***
  | { endImage?: undefined; startImage?: undefined ***REMOVED***

export type EmbedTileProps = { embedId?: keyof typeof embedRegistry ***REMOVED***

export type BaseTileProps = VariantProps<typeof baseTileStyle> &
  EmbedTileProps &
  ImageProps & {
    children: React.ReactElement | React.ReactElement[]
    className?: string
    footerCenterElement?: React.ReactElement
***REMOVED***

/**
 * A basic configruable tile
 * @param BaseTileProps basic properties of the tile
 * @returns BaseTile
 */
export function BaseTile({
  children,
  variant,
  className = '',
  startImage,
  endImage,
  footerCenterElement,
  embedId,
***REMOVED***: BaseTileProps) {
  const [showOverlay, setShowOverlay] = useState(false)

  const transitions = useTransition(showOverlay, {
    from: { opacity: 0 ***REMOVED***,
    enter: { opacity: 1 ***REMOVED***,
    leave: { opacity: 0 ***REMOVED***,
***REMOVED***)

  const openShareDialog = async () => {
  ***REMOVED***
      await navigator.share(
  ***REMOVED***
          title: 'Web Share API Polyfill',
          text: 'A polyfill for the Share API. Use it to share in both desktops and mobile devices.',
          url: `${window.location.origin***REMOVED***/share/${embedId***REMOVED***`,
      ***REMOVED***,
        // @ts-ignore
  ***REMOVED***
          language: 'de',
          copy: true,
          email: true,
          print: false,
          sms: false,
          messenger: false,
          facebook: false,
          whatsapp: false,
          twitter: false,
          linkedin: false,
          telegram: false,
          skype: false,
          pinterest: false,
          line: false,
      ***REMOVED***,
  ***REMOVED***
  ***REMOVED*** catch (e) {
      console.log('Could not share', e)
  ***REMOVED***
***REMOVED***

  return (
    <div className="pb-4 md:pb-8">
      <div className={cx(baseTileStyle({ variant ***REMOVED***), className)***REMOVED***>
  ***REMOVED***startImage***REMOVED***
        <div className="flex w-full flex-col justify-between p-6 md:p-12">
          <div>{children***REMOVED***</div>
          <TileFooter
            onEmbedClick={() => setShowOverlay(true)***REMOVED***
            onShareClick={openShareDialog***REMOVED***
            variant={variant === 'secondary' ? 'inverse' : 'primary'***REMOVED***
          >
      ***REMOVED***footerCenterElement***REMOVED***
          </TileFooter>
        </div>
  ***REMOVED***endImage***REMOVED***
  ***REMOVED***embedId &&
          transitions(
            (styles, render) =>
              render && (
                <EmbedOverlay
                  embedId={embedId***REMOVED***
                  onClose={() => setShowOverlay(false)***REMOVED***
                  style={styles***REMOVED***
                />
          ***REMOVED***,
      ***REMOVED******REMOVED***
      </div>
    </div>
  )
***REMOVED***
