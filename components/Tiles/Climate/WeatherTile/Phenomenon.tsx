import { CloudIcon ***REMOVED*** from '@heroicons/react/24/outline'
import type { VariantProps ***REMOVED*** from 'class-variance-authority'
import { cva ***REMOVED*** from 'class-variance-authority'
import { Sun, Temperature, Water, Wind ***REMOVED*** from '@/components/Icons'
import { SVGProps ***REMOVED*** from 'react'
import AnimatedNumber from '@/components/Elements/AnimatedNumber'

type PhenomenaType = {
  [key: string]: {
    title: string
    unit: string
    icon: (_props: SVGProps<SVGSVGElement>) => JSX.Element
    decimals?: number
***REMOVED***
***REMOVED***

const phenomena: PhenomenaType = {
  temperature: {
    title: 'Temperatur',
    unit: '°C',
    icon: Temperature,
    decimals: 1,
***REMOVED***,
  precipitation: {
    title: 'Niederschlag',
    unit: 'mm',
    icon: Water,
***REMOVED***,
  cloudcover: {
    title: 'Wolken&shy;bedeckung',
    unit: '%',
    icon: CloudIcon,
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

const phenomenonStyle = cva('text-climate', {
  variants: {
    size: {
      md: 'text-lg md:text-2xl',
      xl: 'text-2xl md:text-5xl',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    size: 'md',
***REMOVED***,
***REMOVED***)

type PhenomenonProps = VariantProps<typeof phenomenonStyle> & {
  phenomenon: keyof typeof phenomena
  value: number
***REMOVED***

export default function Phenomenon({
  phenomenon,
  value,
  size = 'md',
***REMOVED***: PhenomenonProps) {
  const { title, unit, icon, decimals ***REMOVED*** = phenomena[phenomenon]

  const Icon = icon
  return (
    <div className="my-2 flex items-center space-x-2">
      <Icon className="h-10 w-8 text-primary" />
      <div>
        <p
          className="text-sm font-semibold text-primary"
          dangerouslySetInnerHTML={{ __html: title ***REMOVED******REMOVED***
        ></p>
        <span className={phenomenonStyle({ size ***REMOVED***)***REMOVED***>
          <>
            <AnimatedNumber decimals={decimals***REMOVED***>{value***REMOVED***</AnimatedNumber> {unit***REMOVED***
          </>
        </span>
      </div>
    </div>
  )
***REMOVED***
