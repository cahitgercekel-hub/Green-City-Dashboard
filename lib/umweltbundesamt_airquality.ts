const UMWELTBUNDESAMT_API_URL =
  'https://www.umweltbundesamt.de/api/air_data/v3/airquality/json'

const getAirquality = async (date = new Date()) => {
  const query = new URLSearchParams({
    date_from: date.toDateString(),
    date_to: date.toDateString(),
    time_from: (date.getHours() - 2).toFixed(0),
    time_to: (date.getHours() - 1).toFixed(0),
    station: '1140',
***REMOVED***)
  const res = await fetch(`${UMWELTBUNDESAMT_API_URL***REMOVED***?${query.toString()***REMOVED***`)
  return (await res.json()) as Promise<any>
***REMOVED***
export default getAirquality
