'use client'

import { cva, cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import { useState ***REMOVED*** from 'react'
import { useTransition ***REMOVED*** from 'react-spring'
import EmbedOverlay from './EmbedOverlay'
import TileFooter from './TileFooter'

const baseTileStyle = cva('relative flex h-fit overflow-hidden rounded-3xl', {
  variants: {
    variant: {
      primary: 'bg-primary-light',
      mobility: 'bg-mobility-light',
      successStory: 'bg-primary-light',
      climate: 'bg-climate-light',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    variant: 'primary',
***REMOVED***,
***REMOVED***)

export type ImageProps =
  | { startImage: React.ReactElement; endImage?: never ***REMOVED***
  | { endImage: React.ReactElement; startImage?: never ***REMOVED***
  | { endImage?: undefined; startImage?: undefined ***REMOVED***

export type BaseTileProps = VariantProps<typeof baseTileStyle> & {
  children: React.ReactElement | React.ReactElement[]
  className?: string
  footerCenterElement?: React.ReactElement
***REMOVED*** & ImageProps

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
***REMOVED***: BaseTileProps) {
  const [showOverlay, setShowOverlay] = useState(false)

  const transitions = useTransition(showOverlay, {
    from: { opacity: 0 ***REMOVED***,
    enter: { opacity: 1 ***REMOVED***,
    leave: { opacity: 0 ***REMOVED***,
***REMOVED***)

  return (
    <div className="pb-4 md:pb-8">
      <div className={cx(baseTileStyle({ variant ***REMOVED***), className)***REMOVED***>
  ***REMOVED***startImage***REMOVED***
        <div className="flex w-full flex-col justify-between p-6 md:p-12">
          <div>{children***REMOVED***</div>
          <TileFooter onEmbedClick={() => setShowOverlay(true)***REMOVED***>
      ***REMOVED***footerCenterElement***REMOVED***
          </TileFooter>
        </div>
  ***REMOVED***endImage***REMOVED***
  ***REMOVED***transitions(
          (styles, render) =>
            render && (
              <EmbedOverlay
                onClose={() => setShowOverlay(false)***REMOVED***
                style={styles***REMOVED***
              />
        ***REMOVED***,
    ***REMOVED******REMOVED***
      </div>
    </div>
  )
***REMOVED***
