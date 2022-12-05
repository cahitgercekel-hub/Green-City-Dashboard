'use client'

import { ArrowLeftIcon ***REMOVED*** from '@heroicons/react/24/outline'
import { motion ***REMOVED*** from 'framer-motion'
import Link from 'next/link'

export default function Back() {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 ***REMOVED******REMOVED***
      exit={{ x: -50, opacity: 0 ***REMOVED******REMOVED***
      initial={{ x: -50, opacity: 0 ***REMOVED******REMOVED***
    >
      <Link className="flex items-center space-x-2 text-primary" href="/">
        <ArrowLeftIcon className="h-5"></ArrowLeftIcon>
        <span className="underline">Zurück</span>
      </Link>
    </motion.div>
  )
***REMOVED***
