import Link from 'next/link'

import { cva, cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import { Download, Share, SquaresPlus ***REMOVED*** from '@/components/Icons'
import { ForwardRefExoticComponent, SVGProps ***REMOVED*** from 'react'

const iconTileTitleStyle = cva('', {
  variants: {
    variant: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      mobility: 'text-mobility',
      successStory: 'text-primary',
      climate: 'text-climate',
      building: 'text-buildings',
      energy: 'text-energy',
      inverse: 'text-white',
      data: 'text-secondary',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    variant: 'primary',
***REMOVED***,
***REMOVED***)

const tileHeaderStyle = cva('flex flex-1 gap-2', {
  variants: {
    variant: {
      primary: 'text-primary fill-primary',
      inverse: 'text-white fill-white',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    variant: 'primary',
***REMOVED***,
***REMOVED***)

type TileHeaderProps = VariantProps<typeof iconTileTitleStyle> & {
  onEmbedClick?: () => void
  onMoreInfoClick?: () => void
  onShareClick?: () => void
  children?: React.ReactElement
  dataURL?: string
  hasMoreDetails?: boolean
  icon?:
    | ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
    | ((_props: SVGProps<SVGSVGElement>) => JSX.Element)
***REMOVED***

/**
 * A footer for all tiles with sharing, export and embed button as well as a more information link
 * @returns TileHeader
 */
export default function TileHeader({
  onEmbedClick,
  onShareClick,
  variant,
  dataURL,
  icon,
***REMOVED***: TileHeaderProps) {
  function IconButtons() {
    const Icon = icon
    return (
      <div
        className={cx(
          'flex items-center gap-4',
          variant === 'secondary'
            ? 'fill-white text-white'
            : 'fill-primary text-primary',
    ***REMOVED******REMOVED***
      >
        <div>
          <SquaresPlus
            className="h-6 w-6 cursor-pointer stroke-2"
            onClick={onEmbedClick***REMOVED***
          />
        </div>
        <div>
          <Share
            className="h-6 w-6 cursor-pointer stroke-2"
            onClick={onShareClick***REMOVED***
          />
        </div>
  ***REMOVED***dataURL && (
          <Link href={dataURL***REMOVED*** target="_blank">
            <Download className="h-6 stroke-2" />
          </Link>
    ***REMOVED******REMOVED***
  ***REMOVED***Icon && (
          <div className="flex w-full justify-end lg:hidden">
            <Icon
              className={cx(
                'h-[29px] w-auto flex-shrink-0 opacity-40  lg:h-[50px]',
                iconTileTitleStyle({ variant ***REMOVED***),
          ***REMOVED******REMOVED***
            />
          </div>
          //   <Icon
          //     className={cx(
          //       'absolute right-0 top-0 h-[29px] w-auto flex-shrink-0 opacity-40 md:block md:h-[50px]',
          // ***REMOVED******REMOVED***
          //   ></Icon>
    ***REMOVED******REMOVED***
      </div>
***REMOVED***
***REMOVED***

  return (
    <div className="">
      <div className="relative flex flex-col gap-2 px-2.5 pb-10 lg:hidden">
        <IconButtons />
      </div>
    </div>
  )
***REMOVED***
