import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import { cva, cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import { ForwardRefExoticComponent, SVGProps ***REMOVED*** from 'react'
import { BaseTile, EmbedTileProps ***REMOVED*** from './BaseTile'
import LiveBadge from './LiveBadge'

const iconTileTitleStyle = cva('', {
  variants: {
    variant: {
      primary: 'text-primary',
      mobility: 'text-mobility',
      successStory: 'text-primary',
      climate: 'text-climate',
      building: 'text-buildings',
      energy: 'text-energy',
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
    icon:
      | ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
      | ((_props: SVGProps<SVGSVGElement>) => JSX.Element)
    subtitle?: string
    live?: boolean
***REMOVED***

/**
 * A tile that has an icon on top right
 * @param IconTileProps properties of the Icon tile
 * @returns Mobility Tile
 */
export default function IconTile({
  children,
  live,
  title,
  icon,
  subtitle,
  variant,
  dataRetrieval,
  dataSource,
  embedId,
***REMOVED***: IconTileProps) {
  const Icon = icon

  return (
    <BaseTile
      embedId={embedId***REMOVED***
      footerCenterElement={live ? <LiveBadge variant={variant***REMOVED*** /> : undefined***REMOVED***
      variant={variant***REMOVED***
    >
      <>
  ***REMOVED***title && (
          <div
            className={cx(
              'flex justify-between',
              iconTileTitleStyle({ variant ***REMOVED***),
        ***REMOVED******REMOVED***
          >
            <Title as={'h1'***REMOVED***>{title***REMOVED***</Title>
            <Icon className="h-10 w-12" />
          </div>
    ***REMOVED******REMOVED***
  ***REMOVED***subtitle && <span className="text-lg md:text-xl">{subtitle***REMOVED***</span>***REMOVED***
  ***REMOVED***(title || subtitle) && <Spacer />***REMOVED***
      </>
      <>
  ***REMOVED***!title && !subtitle && (
          <div className={cx('relative', iconTileTitleStyle({ variant ***REMOVED***))***REMOVED***>
            <Icon className=" absolute top-0 right-0 h-10 w-12" />
          </div>
    ***REMOVED******REMOVED***
      </>

      <>{children***REMOVED***</>
      <Spacer />
      <div className="flex space-x-2 text-xs text-primary">
        <Title as="h7" className="font-semibold">
          Datenstand: {dataRetrieval ?? (live ? 'live' : 'undefined')***REMOVED***
        </Title>
        <Title as="h7">Quelle: {dataSource***REMOVED***</Title>
      </div>
    </BaseTile>
  )
***REMOVED***
