import { isEqual ***REMOVED*** from 'date-fns'
import { useEffect, useState ***REMOVED*** from 'react'

const counter = [
  { name: 'Wolbecker Str.', id: '100020113' ***REMOVED***, // wolbecker
  { name: 'Promenade', id: '100031297' ***REMOVED***, // promenade
  { name: 'Gartenstr.', id: '100034978' ***REMOVED***, // gartenstr
  { name: 'Hammer Str.', id: '100034980' ***REMOVED***, // hammer str
  { name: 'Warendorfer Str.', id: '100034983' ***REMOVED***, // warendorfer
  { name: 'Neutor', id: '100035541' ***REMOVED***, // neutor
]

const getBicycleData = async (station: string) => {
  const res = await fetch(
    `https://city-dashboard.felixerdmann.com/bicycle/${station***REMOVED***`,
  )
  const data = await res.json()

  return data
***REMOVED***

export function useBicycleCount(timestamp: Date) {
  timestamp.setUTCHours(0)
  timestamp.setUTCMinutes(0)
  timestamp.setUTCSeconds(0)
  timestamp.setUTCMilliseconds(0)

  const [data, setData] = useState<
    {
      name: string
      id: string
      data: {
        counts: number
        date: string
        isoDate: string
        status: number
    ***REMOVED***[]
  ***REMOVED***[]
  >()

  const [filteredData, setFilteredData] = useState<
    {
      count: number
      id: string
      name: string
  ***REMOVED***[]
  >()

  useEffect(() => {
    const fetchPromise = Promise.all(
      counter.map(async ({ name, id ***REMOVED***) => ({
        name,
        id,
        data: await getBicycleData(id),
    ***REMOVED***)),
***REMOVED***

    fetchPromise.then(bicycleData => setData(bicycleData))
***REMOVED***, [])

  useEffect(() => {
    if (!data) {
      return
  ***REMOVED***

    const filtered = data.map(e => ({
      id: e.id,
      name: e.name,
      count:
        e.data.find(m => isEqual(new Date(m.date), timestamp))?.counts || 0,
  ***REMOVED***))

    setFilteredData(filtered)
***REMOVED***, [timestamp, data])

  return filteredData
***REMOVED***
