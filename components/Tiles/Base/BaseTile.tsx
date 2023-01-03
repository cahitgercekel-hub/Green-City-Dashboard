'use client'

import embedRegistry from '@/utils/embedRegistry'
import { cva, cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import { useState ***REMOVED*** from 'react'
import { useTransition ***REMOVED*** from 'react-spring'
import EmbedOverlay from './EmbedOverlay'
import ShareOverlay from './ShareOverlay'
import MoreInfoOverlay from './MoreInfoOverlay'
import TileFooter from './TileFooter'

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

const transitionOpts = {
  from: { opacity: 0 ***REMOVED***,
  enter: { opacity: 1 ***REMOVED***,
  leave: { opacity: 0 ***REMOVED***,
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
  const [showEmbedOverlay, setShowEmbedOverlay] = useState(false)
  const [showShareOverlay, setShowShareOverlay] = useState(false)
  const [showMoreInfo, setShowMoreInfo] = useState(false)

  const embedTransitions = useTransition(showEmbedOverlay, transitionOpts)
  const shareTransitions = useTransition(showShareOverlay, transitionOpts)

  const moreInfoTransitions = useTransition(showMoreInfo, transitionOpts)

  const openShareDialog = async () => {
    if (navigator && navigator.share) {
    ***REMOVED***
        await navigator.share({
          title: 'Klimadashboard Münster',
          url: `${window.location.origin***REMOVED***/share/${embedId***REMOVED***`,
      ***REMOVED***)
    ***REMOVED*** catch (e) {
        console.log('Could not share', e)
    ***REMOVED*** finally {
        return
    ***REMOVED***
  ***REMOVED***

    setShowShareOverlay(true)
***REMOVED***

  return (
    <div className="pb-4 md:pb-8">
      <div className={cx(baseTileStyle({ variant ***REMOVED***), className)***REMOVED***>
  ***REMOVED***startImage***REMOVED***
        <div className="flex w-full flex-col justify-between p-6 md:p-12">
          <div>{children***REMOVED***</div>
          <TileFooter
            onEmbedClick={() => setShowEmbedOverlay(true)***REMOVED***
            onMoreInfoClick={() => setShowMoreInfo(true)***REMOVED***
            onShareClick={openShareDialog***REMOVED***
            variant={variant === 'secondary' ? 'inverse' : 'primary'***REMOVED***
          >
      ***REMOVED***footerCenterElement***REMOVED***
          </TileFooter>
        </div>
  ***REMOVED***endImage***REMOVED***
  ***REMOVED***embedId &&
          embedTransitions(
            (styles, render) =>
              render && (
                <EmbedOverlay
                  embedId={embedId***REMOVED***
                  onClose={() => setShowEmbedOverlay(false)***REMOVED***
                  style={styles***REMOVED***
                />
          ***REMOVED***,
      ***REMOVED******REMOVED***
  ***REMOVED***embedId &&
          shareTransitions(
            (styles, render) =>
              render && (
                <ShareOverlay
                  embedId={embedId***REMOVED***
                  onClose={() => setShowShareOverlay(false)***REMOVED***
                  style={styles***REMOVED***
                />
          ***REMOVED***,
      ***REMOVED******REMOVED***
  ***REMOVED***embedId &&
          moreInfoTransitions(
            (styles, render) =>
              render && (
                <MoreInfoOverlay
                  embedId={embedId***REMOVED***
                  onClose={() => setShowMoreInfo(false)***REMOVED***
                  style={styles***REMOVED***
                ></MoreInfoOverlay>
          ***REMOVED***,
      ***REMOVED******REMOVED***
      </div>
    </div>
  )
***REMOVED***
