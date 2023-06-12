'use client'

import { ArrowLeftIcon ***REMOVED*** from '@heroicons/react/24/outline'
import { cva, VariantProps ***REMOVED*** from 'class-variance-authority'
import { motion ***REMOVED*** from 'framer-motion'
import Link from 'next/link'

const backStyle = cva('flex items-center space-x-2', {
  variants: {
    variant: {
      primary: 'text-primary',
      inverse: 'text-white',
  ***REMOVED***,
***REMOVED***,
  defaultVariants: {
    variant: 'primary',
***REMOVED***,
***REMOVED***)

interface BackProps extends VariantProps<typeof backStyle> {***REMOVED***

export default function Back({ variant ***REMOVED***: BackProps) {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 ***REMOVED******REMOVED***
      exit={{ x: -50, opacity: 0 ***REMOVED******REMOVED***
      initial={{ x: -50, opacity: 0 ***REMOVED******REMOVED***
    >
      <Link className={backStyle({ variant ***REMOVED***)***REMOVED*** href="/">
        <ArrowLeftIcon className="h-5"></ArrowLeftIcon>
        <span className="underline">Zurück</span>
      </Link>
    </motion.div>
  )
***REMOVED***
