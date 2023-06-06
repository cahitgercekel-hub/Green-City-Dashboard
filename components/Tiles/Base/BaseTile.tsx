'use client'

import { cva, cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import { useState ***REMOVED*** from 'react'
import { useTransition ***REMOVED*** from '@react-spring/web'
import EmbedOverlay from './EmbedOverlay'
import ShareOverlay from './ShareOverlay'
import MoreInfoOverlay from './MoreInfoOverlay'
import TileFooter from './TileFooter'
import { TileType ***REMOVED*** from '@/utils/TileFactory'
import ReactMarkdown from 'react-markdown'
import Title from '@/components/Elements/Title'
import remarkGfm from 'remark-gfm'

const baseTileStyle = cva(
  'relative flex flex-col md:flex-row h-fit overflow-hidden rounded-KD ',
  {
    variants: {
      variant: {
        primary: 'bg-primary-light',
        secondary: 'bg-secondary',
        mobility: 'bg-mobility-light',
        successStory: 'bg-primary-light',
        climate: 'bg-climate-light',
        building: 'bg-buildings-light',
        energy: 'bg-energy-light',
        data: 'bg-secondary-light',
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

export type EmbedTileProps = { embedId?: TileType ***REMOVED***

export type BaseTileProps = VariantProps<typeof baseTileStyle> &
  EmbedTileProps &
  ImageProps & {
    children: React.ReactElement | React.ReactElement[]
    className?: string
    footerCenterElement?: React.ReactElement
    moreInfo?: React.ReactNode
    source?: string
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
  moreInfo,
  source,
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
        // eslint-disable-next-line no-console
        console.log('Could not share', e)
    ***REMOVED*** finally {
        return
    ***REMOVED***
  ***REMOVED***

    setShowShareOverlay(true)
***REMOVED***

  return (
    <div className="pb-5">
      <div className={cx(baseTileStyle({ variant ***REMOVED***), className)***REMOVED***>
  ***REMOVED***startImage***REMOVED***
        <div className="flex w-full flex-col justify-between px-4 py-8 md:p-16">
          <div>{children***REMOVED***</div>
          <TileFooter
            dataURL={source***REMOVED***
            hasMoreDetails={!!moreInfo***REMOVED***
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
  ***REMOVED***moreInfoTransitions(
          (styles, render) =>
            render && (
              <MoreInfoOverlay
                onClose={() => setShowMoreInfo(false)***REMOVED***
                style={styles***REMOVED***
              >
          ***REMOVED***typeof moreInfo === 'string' ? (
                  <ReactMarkdown
                    components={{
                      h1: props => <Title as={'h2'***REMOVED*** {...props***REMOVED*** />,
                      h2: props => <Title as={'h3'***REMOVED*** {...props***REMOVED*** />,
                      h3: props => <Title as={'h4'***REMOVED*** {...props***REMOVED*** />,
                      h4: props => <Title as={'h5'***REMOVED*** {...props***REMOVED*** />,
                      h5: props => <Title as={'h6'***REMOVED*** {...props***REMOVED*** />,
                      h6: props => <Title as={'h7'***REMOVED*** {...props***REMOVED*** />,
                      ul: props => <ul className="list-disc px-6" {...props***REMOVED*** />,
                      p: props => <p className="mb-2" {...props***REMOVED*** />,
                      a: props => (
                        <a
                          className="underline"
                    ***REMOVED***...props***REMOVED***
                          rel="noopener noreferrer"
                          target="_blank"
                        />
                  ***REMOVED***,
                  ***REMOVED******REMOVED***
                    remarkPlugins={[remarkGfm]***REMOVED***
                  >
              ***REMOVED***moreInfo***REMOVED***
                  </ReactMarkdown>
            ***REMOVED*** : (
                  <div>{moreInfo***REMOVED***</div>
            ***REMOVED******REMOVED***
              </MoreInfoOverlay>
        ***REMOVED***,
    ***REMOVED******REMOVED***
      </div>
    </div>
  )
***REMOVED***
