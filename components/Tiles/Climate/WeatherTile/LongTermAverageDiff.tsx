import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import Title from '@/components/Elements/Title'
import { format ***REMOVED*** from 'date-fns'
import { de ***REMOVED*** from 'date-fns/locale'
import { useEffect, useState ***REMOVED*** from 'react'

export default function LongTermAverageDiff() {
  const [difference, setDifference] = useState<number>()

  async function getData() {
  ***REMOVED***
      const request = await fetch(
        'https://long-term-average.klimadashboard-ms.reedu.de/',
  ***REMOVED***
      const data = await request.json()
      setDifference(data.value)
  ***REMOVED*** catch (error) {
      // eslint-disable-next-line no-console
      console.error("Couldn't fetch long term average difference", error)
  ***REMOVED***
***REMOVED***

  useEffect(() => {
    getData()
***REMOVED***, [])

  if (!difference) {
    return null
***REMOVED***

  return (
    <Title as={'h4'***REMOVED***>
      <span className="text-climate">
        <AnimatedNumber decimals={2***REMOVED***>{Math.abs(difference)***REMOVED***</AnimatedNumber>{' '***REMOVED***
        Grad {difference > 0 ? 'wärmer' : 'kälter'***REMOVED***
      </span>{' '***REMOVED***
      ist der{' '***REMOVED***
      <span className="text-climate">
  ***REMOVED***format(new Date(), 'LLLL', { locale: de ***REMOVED***)***REMOVED***
      </span>{' '***REMOVED***
      bisher im Vergleich zum langjährigen Mittel (1961-1990).
    </Title>
  )
***REMOVED***
