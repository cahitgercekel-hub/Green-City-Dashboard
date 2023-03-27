import { useWindowSize ***REMOVED*** from 'react-use'

export default function useDevice() {
  const { width ***REMOVED*** = useWindowSize()

  if (width > 768) {
    return 'desktop'
***REMOVED***
  if (width > 576) {
    return 'tablet'
***REMOVED***
  return 'mobile'
***REMOVED***
