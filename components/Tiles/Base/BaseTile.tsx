'use client'

import Title from '@/components/Elements/Title'
import { TileType ***REMOVED*** from '@/utils/TileFactory'
import { useTransition ***REMOVED*** from '@react-spring/web'
import { cva, cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import { useState ***REMOVED*** from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import EmbedOverlay from './EmbedOverlay'
import MoreInfoOverlay from './MoreInfoOverlay'
import ShareOverlay from './ShareOverlay'
import TileFooter from './TileFooter'
import TileHeader from './TileHeader'

import {
  MsKlimadashboardIconsButtonAktivEnergieV1,
  MsKlimadashboardIconsButtonAktivGebaeude,
  MsKlimadashboardIconsButtonAktivKlima,
  MsKlimadashboardIconsButtonAktivMobil,
***REMOVED*** from '@/components/Icons/Misc'

const baseTileStyle = cva(
  'relative flex flex-col md:flex-row h-fit overflow-hidden rounded-[36px] lg:rounded-[56px]',
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
    isFullWidth?: boolean
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
  isFullWidth,
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

  const chooseIcon = function (variant: string | null | undefined) {
    switch (variant) {
      case 'energy':
        return MsKlimadashboardIconsButtonAktivEnergieV1
      case 'mobility':
        return MsKlimadashboardIconsButtonAktivMobil
      case 'climate':
        return MsKlimadashboardIconsButtonAktivKlima
      case 'building':
        return MsKlimadashboardIconsButtonAktivGebaeude
      default:
        return undefined
  ***REMOVED***
***REMOVED***

  return (
    <div className="pb-5">
      <div className={cx(baseTileStyle({ variant ***REMOVED***), className)***REMOVED***>
  ***REMOVED***startImage***REMOVED***
        <div className="flex w-full flex-col justify-between px-4 py-8 lg:p-16">
          <TileHeader
            dataURL={source***REMOVED***
            hasMoreDetails={!!moreInfo***REMOVED***
            icon={chooseIcon(variant)***REMOVED***
            onEmbedClick={() => setShowEmbedOverlay(true)***REMOVED***
            onShareClick={openShareDialog***REMOVED***
            variant={variant***REMOVED***
          >
            <></>
          </TileHeader>

          <>{children***REMOVED***</>
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
                isFullWidth={isFullWidth***REMOVED***
                onClose={() => setShowMoreInfo(false)***REMOVED***
                style={styles***REMOVED***
                variant={variant***REMOVED***
              >
          ***REMOVED***typeof moreInfo === 'string' ? (
                  <ReactMarkdown
                    components={{
                      h1: props => (
                        <Title as={'h2'***REMOVED*** className="mb-4 md:mb-6" {...props***REMOVED*** />
                  ***REMOVED***,
                      h2: props => (
                        <Title as={'h3'***REMOVED*** className="mb-4 md:mb-6" {...props***REMOVED*** />
                  ***REMOVED***,
                      h3: props => (
                        <Title as={'h4'***REMOVED*** className="mb-4 md:mb-6" {...props***REMOVED*** />
                  ***REMOVED***,
                      h4: props => (
                        <Title as={'h5'***REMOVED*** className="mb-4 md:mb-6" {...props***REMOVED*** />
                  ***REMOVED***,
                      h5: props => (
                        <Title as={'h6'***REMOVED*** className="mb-4 md:mb-6" {...props***REMOVED*** />
                  ***REMOVED***,
                      h6: props => (
                        <Title as={'h7'***REMOVED*** className="mb-4 md:mb-6" {...props***REMOVED*** />
                  ***REMOVED***,
                      ul: props => <ul className="list-disc px-6" {...props***REMOVED*** />,
                      p: props => <p className="mb-6 md:mb-10" {...props***REMOVED*** />,
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
