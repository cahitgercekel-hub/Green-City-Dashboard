'use client'

import { cva, cx, VariantProps ***REMOVED*** from 'class-variance-authority'
import { motion ***REMOVED*** from 'framer-motion'

const progressStyle = cva('-rotate-90 stroke-[1rem]', {
  variants: {
    variant: {
      primary: 'stroke-primary',
      secondary: 'stroke-secondary',
  ***REMOVED***,
    size: {
      sm: 'h-4 w-4',
      md: 'h-8 w-8',
      lg: 'h-10 w-10',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    variant: 'primary',
    size: 'md',
***REMOVED***,
***REMOVED***)

type ProgressCircleProps = VariantProps<typeof progressStyle> & {
  progress: number
  className?: string
***REMOVED***

export function ProgressCircle({
  progress,
  className,
  variant,
  size,
***REMOVED***: ProgressCircleProps) {
  const radius = 40
  const circumference = Math.ceil(2 * Math.PI * radius)
  const fillPercents = Math.abs(
    Math.ceil((circumference / 100) * (progress - 100)),
  )

  const transition = {
    ease: 'easeIn',
    delay: 2000,
***REMOVED***

  const variants = {
    hidden: {
      strokeDashoffset: circumference,
      transition,
  ***REMOVED***,
    show: {
      strokeDashoffset: fillPercents,
      transition,
  ***REMOVED***,
***REMOVED***

  return (
    <svg
      className={cx(progressStyle({ size, variant ***REMOVED***), className)***REMOVED***
      viewBox="0 0 100 100"
    >
      <motion.circle
        cx="50"
        cy="50"
        fill="transparent"
        initial="hidden"
        r={radius***REMOVED***
        strokeDasharray={circumference***REMOVED***
        strokeDashoffset={fillPercents***REMOVED***
        style={{
          strokeLinecap: 'round',
      ***REMOVED******REMOVED***
        variants={variants***REMOVED***
      />
    </svg>
  )
***REMOVED***
