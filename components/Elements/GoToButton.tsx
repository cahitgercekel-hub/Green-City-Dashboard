import Link from 'next/link'

import { Button ***REMOVED*** from './Button'

interface ButtonProps {
  type: 'climate' | 'mobility' | 'energy' | 'building'
***REMOVED***

export function GoToButton({ type ***REMOVED***: ButtonProps) {
  if (type === 'climate') {
    return (
      <Link href="/klima">
        <Button size={'link'***REMOVED*** variant={'goToClimate'***REMOVED***>
          zu den Klimadaten
        </Button>
      </Link>
***REMOVED***
***REMOVED***
  if (type === 'mobility') {
    return (
      <Link href={'/mobilitaet'***REMOVED***>
        <Button size={'link'***REMOVED*** variant={'goToMobility'***REMOVED***>
          zu den Mobilitätsdaten
        </Button>
      </Link>
***REMOVED***
***REMOVED***
  if (type === 'energy') {
    return (
      <Link href={'/energie'***REMOVED***>
        <Button size={'link'***REMOVED*** variant={'goToEnergy'***REMOVED***>
          zu den Energiedaten
        </Button>
      </Link>
***REMOVED***
***REMOVED***
  if (type === 'building') {
    return (
      <Link href={'/gebaeude'***REMOVED***>
        <Button size={'link'***REMOVED*** variant={'goToBuildings'***REMOVED***>
          zu den Gebäudedaten
        </Button>
      </Link>
***REMOVED***
***REMOVED***

  // this should never be reached
  return <Button>zu den Daten</Button>
***REMOVED***
