import { cva, cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import Title from '../Elements/Title'
import { MsKlimadashboardIconsButtonAktivEnergieV1, MsKlimadashboardIconsButtonAktivGebaeude, MsKlimadashboardIconsButtonAktivKlima, MsKlimadashboardIconsButtonAktivMobil ***REMOVED*** from '@/components/Icons/Misc'

import { SVGProps ***REMOVED*** from 'react'

const sectionHeaderStyle = cva('', {
  variants: {
    variant: {
      climate: 'text-climate border-climate',
      mobility: 'text-mobility border-mobility',
      building: 'text-buildings border-buildings',
      energy: 'text-energy border-energy',
      impressum: 'text-white',
      datenschutz: 'text-white',
  ***REMOVED***,
***REMOVED***,
***REMOVED***)

export default function SectionTitle({
  variant,
  large,
***REMOVED***: VariantProps<typeof sectionHeaderStyle> & {
  large?: boolean
***REMOVED***) {
  let title = 'Münster'
  let Icon: ((_: SVGProps<SVGSVGElement>) => JSX.Element) | undefined =
  MsKlimadashboardIconsButtonAktivKlima

  if (variant === 'climate') {
    title = 'Klima in Münster'
***REMOVED***
  if (variant === 'mobility') {
    title = 'Mobilität'
    Icon = MsKlimadashboardIconsButtonAktivMobil
***REMOVED***
  if (variant === 'building') {
    title = 'Gebäude'
    Icon = MsKlimadashboardIconsButtonAktivGebaeude
***REMOVED***
  if (variant === 'energy') {
    title = 'Energie'
    Icon = MsKlimadashboardIconsButtonAktivEnergieV1
***REMOVED***
  if (variant === 'impressum') {
    title = 'Impressum'
    Icon = undefined
***REMOVED***
  if (variant === 'datenschutz') {
    title = 'Datenschutz'
    Icon = undefined
***REMOVED***

  return (
    <div className="flex items-center space-x-4">
***REMOVED***Icon && (
        <div
          className={cx(
            'h-14 w-20 rounded-full border-2 p-2',
            sectionHeaderStyle({ variant ***REMOVED***),
      ***REMOVED******REMOVED***
        >
          <Icon className="mx-auto h-full" />
        </div>
  ***REMOVED******REMOVED***
      <Title
        as={large ? 'h2' : 'h4'***REMOVED***
        variant={
          ['impressum', 'datenschutz'].includes(variant!)
            ? 'inverse'
            : 'primary'
      ***REMOVED***
      >
  ***REMOVED***title***REMOVED***
      </Title>
    </div>
  )
***REMOVED***
