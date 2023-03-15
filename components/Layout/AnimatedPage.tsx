'use client'

import { motion ***REMOVED*** from 'framer-motion'
import { usePathname ***REMOVED*** from 'next/navigation'

export default function AnimatedPage({
  children,
***REMOVED***: {
  children: React.ReactNode
***REMOVED***) {
  const pathname = usePathname()

  return (
    <motion.div
      animate={{ y: 0, opacity: 1 ***REMOVED******REMOVED***
      exit={{ y: 50, opacity: 0 ***REMOVED******REMOVED***
      initial={{ y: 50, opacity: 0 ***REMOVED******REMOVED***
      key={pathname***REMOVED***
    >
***REMOVED***children***REMOVED***
    </motion.div>
  )
***REMOVED***
