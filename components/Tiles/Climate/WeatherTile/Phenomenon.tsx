import { ForwardRefExoticComponent, SVGProps ***REMOVED*** from 'react'
import Title from '@/components/Elements/Title'
import { cx ***REMOVED*** from 'class-variance-authority'
import useDevice from '@/hooks/useDevice'
import {
  MsKlimadashboardIconsWetterNiederschlag,
  MsKlimadashboardIconsWetterSonnig,
  MsKlimadashboardIconsWetterTemperatur,
  MsKlimadashboardIconsWetterWindgeschw,
  MsKlimadashboardIconsWetterWolkendichte,
***REMOVED*** from '@/components/Icons/Klima'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'

type PhenomenaType = {
  [key: string]: {
    title: string
    shortTitle?: string
    unit: string
    icon:
      | ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
      | ((_props: SVGProps<SVGSVGElement>) => JSX.Element)
      | React.ForwardRefExoticComponent<
          Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
            title?: string | undefined
            titleId?: string | undefined
        ***REMOVED*** & React.RefAttributes<SVGSVGElement>
        >
    decimals?: number
***REMOVED***
***REMOVED***

const phenomena: PhenomenaType = {
  temperature: {
    title: 'Temperatur',
    unit: '°C',
    icon: MsKlimadashboardIconsWetterTemperatur,
    decimals: 0,
***REMOVED***,
  precipitation: {
    title: 'Niederschlag',
    unit: 'mm',
    icon: MsKlimadashboardIconsWetterNiederschlag,
***REMOVED***,
  cloudcover: {
    title: 'Wolken&shy;bedeckung',
    shortTitle: 'Wolkenbed.',
    unit: '%',
    icon: MsKlimadashboardIconsWetterWolkendichte,
***REMOVED***,
  windspeed: {
    title: 'Wind&shy;geschwindigkeit',
    shortTitle: 'Windgeschw.',
    unit: 'km/h',
    icon: MsKlimadashboardIconsWetterWindgeschw,
    decimals: 1,
***REMOVED***,
  sunhours: {
    title: 'Sonnenstunden',
    unit: 'h',
    icon: MsKlimadashboardIconsWetterSonnig,
***REMOVED***,
  no2: {
    title: 'Stickstoffdioxid (NO<sub>2</sub>)',
    unit: 'μg/m³',
    icon: MsKlimadashboardIconsWetterSonnig,
***REMOVED***,
  pm10: {
    title: 'Feinstaub PM<sub>10</sub>',
    unit: 'μg/m³',
    icon: MsKlimadashboardIconsWetterSonnig,
***REMOVED***,
  o3: {
    title: 'Ozon (O<sub>3</sub>)',
    unit: 'μg/m³',
    icon: MsKlimadashboardIconsWetterSonnig,
***REMOVED***,
  pm25: {
    title: 'Feinstaub PM<sub>2.5</sub>',
    unit: 'μg/m³',
    icon: MsKlimadashboardIconsWetterSonnig,
***REMOVED***,
***REMOVED***

type PhenomenonProps = {
  phenomenon: keyof typeof phenomena
  value: number
  size?: 'md' | 'xl'
***REMOVED***

export default function Phenomenon({
  phenomenon,
  value,
  size = 'md',
***REMOVED***: PhenomenonProps) {
  const { title, unit, icon, decimals, shortTitle ***REMOVED*** = phenomena[phenomenon]

  const valueSize: 'h1' | 'h4' = size === 'xl' ? 'h1' : 'h4'

  const device = useDevice()

  const Icon = icon
  return (
    <div className="my-1 flex items-center gap-3 md:my-2">
      <Icon
        className={cx(
          size === 'md' ? 'aspect-square' : 'w-6',
          'h-10 fill-primary stroke-primary text-primary md:h-14',
    ***REMOVED******REMOVED***
      />
      <div>
        <Title
          as={'h5'***REMOVED***
          dangerouslySetInnerHTML={{
            __html: device === 'mobile' && shortTitle ? shortTitle : title,
        ***REMOVED******REMOVED***
          variant={'primary'***REMOVED***
        ></Title>
        <Title as={valueSize***REMOVED*** variant="climate">
    ***REMOVED***typeof value === 'number' ? (
            <>
              <AnimatedNumber decimals={decimals***REMOVED***>{value***REMOVED***</AnimatedNumber>&nbsp;
        ***REMOVED***unit***REMOVED***
            </>
      ***REMOVED*** : (
            <>
              <span>--</span>
            </>
      ***REMOVED******REMOVED***{' '***REMOVED***
        </Title>
      </div>
    </div>
  )
***REMOVED***
