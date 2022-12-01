import { BeakerIcon, CloudIcon, SunIcon ***REMOVED*** from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { Duration ***REMOVED*** from 'date-fns'
import { animated, useSpring ***REMOVED*** from 'react-spring'

type PhenomenaType = {
  [key: string]: {
    title: string
    unit: string
    icon: any // TODO: change any
    decimals?: number
***REMOVED***
***REMOVED***

const phenomena: PhenomenaType = {
  temperature: {
    title: 'Temperatur',
    unit: '°C',
    icon: BeakerIcon,
    decimals: 1,
***REMOVED***,
  precipitation: {
    title: 'Niederschlag',
    unit: 'mm',
    icon: BeakerIcon,
***REMOVED***,
  cloudcover: {
    title: 'Wolkenbedeckung',
    unit: '%',
    icon: CloudIcon,
***REMOVED***,
  windspeed: {
    title: 'Windgeschwindigkeit',
    unit: 'km/h',
    icon: BeakerIcon,
    decimals: 1,
***REMOVED***,
  sunhours: {
    title: 'Sonnenstunden',
    unit: 'h',
    icon: SunIcon,
***REMOVED***,
***REMOVED***

const sizes = {
  md: 'text-2xl',
  xl: 'text-5xl',
***REMOVED***

type PhenomenonProps = {
  phenomenon: keyof typeof phenomena
  value: number | Duration
  size?: keyof typeof sizes
***REMOVED***

export default function Phenomenon({
  phenomenon,
  value,
  size = 'md',
***REMOVED***: PhenomenonProps) {
  const { title, unit, icon, decimals ***REMOVED*** = phenomena[phenomenon]

  const props = useSpring({ val: value, config: { duration: 100 ***REMOVED*** ***REMOVED***)

  const Icon = icon
  return (
    <div className="my-2 flex items-center space-x-2">
      <Icon className="h-8 text-sky-500" />
      <div>
        <p className="text-sm font-semibold text-primary-500">{title***REMOVED***</p>
        <span className={clsx('text-sky-500', sizes[size])***REMOVED***>
          <>
            <animated.span>
        ***REMOVED***/* @ts-ignore */***REMOVED***
        ***REMOVED***props.val.to(val => val.toFixed(decimals || 0))***REMOVED***
            </animated.span>{' '***REMOVED***
      ***REMOVED***unit***REMOVED***
          </>
        </span>
      </div>
    </div>
  )
***REMOVED***
