import 'server-only'

import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import getTileData from '@/lib/api/getTileData'
import { cva, cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import { ForwardRefExoticComponent, JSX, SVGProps ***REMOVED*** from 'react'
import { BaseTile, EmbedTileProps ***REMOVED*** from './BaseTile'
import { TileSplitView ***REMOVED*** from './TileSplitView'

const iconTileTitleStyle = cva('', {
  variants: {
    variant: {
      primary: 'text-primary',
      mobility: 'text-mobility',
      successStory: 'text-primary',
      climate: 'text-climate',
      building: 'text-buildings',
      energy: 'text-energy',
      data: 'text-secondary',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    variant: 'primary',
***REMOVED***,
***REMOVED***)

export type DataSourceProps = {
  dataRetrieval?: string
  dataSource: string
***REMOVED***

export type IconTileProps = VariantProps<typeof iconTileTitleStyle> &
  DataSourceProps &
  EmbedTileProps & {
    children: React.ReactElement | React.ReactElement[]
    title?: string | React.ReactElement
    subtitle?: string | React.ReactElement
    icon:
      | ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
      | ((_props: SVGProps<SVGSVGElement>) => JSX.Element)
    live?: boolean
    rightAlignedExtra?: React.ReactElement
***REMOVED***

/**
 * A tile that has an icon on top right
 * @param IconTileProps properties of the Icon tile
 * @returns Mobility Tile
 */
export default async function IconTile({
  children,
  live,
  title,
  subtitle,
  icon,
  variant,
  dataRetrieval,
  dataSource,
  embedId,
  rightAlignedExtra,
***REMOVED***: IconTileProps) {
  const Icon = icon

  const data = await getTileData(embedId!)

  return (
    <BaseTile
      embedId={embedId***REMOVED***
      isFullWidth={data?.full_width***REMOVED***
      moreInfo={data?.details***REMOVED***
      source={data?.data_url***REMOVED***
      variant={variant***REMOVED***
    >
      <div className="px-2.5">
        <div className="absolute right-16 top-16 hidden lg:block">
          <Icon
            className={cx(
              'h-[29px] w-auto flex-shrink-0 opacity-40 md:h-[50px]',
              iconTileTitleStyle({ variant ***REMOVED***),
        ***REMOVED******REMOVED***
          />
        </div>
  ***REMOVED***title && (
          <div className="relative flex items-center justify-between">
            <div className="flex flex-wrap items-center justify-start gap-x-4 lg:max-w-[87%]">
              <Title
                as={'h1'***REMOVED***
                className={cx('min-w-fit', iconTileTitleStyle({ variant ***REMOVED***))***REMOVED***
                font={'normal'***REMOVED***
              >
          ***REMOVED***title***REMOVED***
              </Title>
        ***REMOVED***subtitle && (
                <Title
                  as={'subtitle'***REMOVED***
                  className="2xl:max-w-[85%]"
                  color={'dark'***REMOVED***
                >
            ***REMOVED***subtitle***REMOVED***
                </Title>
          ***REMOVED******REMOVED***
            </div>

      ***REMOVED***/* <Icon
              className={cx(
                'absolute right-0 top-0 hidden h-[29px] w-auto flex-shrink-0 opacity-40 md:h-[50px] 2xl:block',
                iconTileTitleStyle({ variant ***REMOVED***),
          ***REMOVED******REMOVED***
            /> */***REMOVED***
          </div>
    ***REMOVED******REMOVED***
  ***REMOVED***(title || subtitle) && <Spacer />***REMOVED***
      </div>
      <>
  ***REMOVED***!title && !subtitle && (
          <div className={cx('relative', iconTileTitleStyle({ variant ***REMOVED***))***REMOVED***>
            <Icon className=" absolute right-0 top-0 hidden h-[50px] w-auto opacity-40 2xl:block" />
          </div>
    ***REMOVED******REMOVED***
      </>

      <>{children***REMOVED***</>
      <Spacer />
      <TileSplitView>
        <TileSplitView.Left>
          <div className="flex flex-wrap justify-between">
            <div className="space-x-2 text-xs ">
              <Title
                as="h7"
                className="inline"
                font="semibold"
                variant={'primary'***REMOVED***
              >
                Datenstand: {dataRetrieval ?? (live ? 'live' : 'undefined')***REMOVED***
              </Title>
              <Title
                as="h7"
                className="inline"
                font="normal"
                variant={'primary'***REMOVED***
              >
                Quelle: {dataSource***REMOVED***
              </Title>
            </div>
            <div>{rightAlignedExtra***REMOVED***</div>
          </div>
        </TileSplitView.Left>
  ***REMOVED***/* @TODO : Check if we needed this, removing fixes layout issues. */***REMOVED***
  ***REMOVED***/* <div className="w-[272px]" /> */***REMOVED***
      </TileSplitView>
    </BaseTile>
  )
***REMOVED***
