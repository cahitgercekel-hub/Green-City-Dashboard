import { Cloud, Sun, Temperature, Water, Wind ***REMOVED*** from '@/components/Icons'
import { ForwardRefExoticComponent, SVGProps ***REMOVED*** from 'react'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import Title from '@/components/Elements/Title'
import { cx ***REMOVED*** from 'class-variance-authority'

type PhenomenaType = {
  [key: string]: {
    title: string
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
    icon: Temperature,
    decimals: 0,
***REMOVED***,
  precipitation: {
    title: 'Niederschlag',
    unit: 'mm',
    icon: Water,
***REMOVED***,
  cloudcover: {
    title: 'Wolken&shy;bedeckung',
    unit: '%',
    icon: Cloud,
***REMOVED***,
  windspeed: {
    title: 'Wind&shy;geschwindigkeit',
    unit: 'km/h',
    icon: Wind,
    decimals: 1,
***REMOVED***,
  sunhours: {
    title: 'Sonnenstunden',
    unit: 'h',
    icon: Sun,
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
  const { title, unit, icon, decimals ***REMOVED*** = phenomena[phenomenon]

  const valueSize: 'h1' | 'h3' = size === 'xl' ? 'h1' : 'h3'

  const Icon = icon
  return (
    <div className="my-2 flex items-center gap-3">
      <Icon
        className={cx(
          size === 'md' ? 'aspect-square' : 'w-6',
          'h-14 text-primary',
    ***REMOVED******REMOVED***
      />
      <div>
        <Title
          as={'h5'***REMOVED***
          dangerouslySetInnerHTML={{ __html: title ***REMOVED******REMOVED***
          variant={'primary'***REMOVED***
        ></Title>
        <Title as={valueSize***REMOVED*** variant="climate">
          <AnimatedNumber decimals={decimals***REMOVED***>{value***REMOVED***</AnimatedNumber> {unit***REMOVED***
        </Title>
      </div>
    </div>
  )
***REMOVED***
