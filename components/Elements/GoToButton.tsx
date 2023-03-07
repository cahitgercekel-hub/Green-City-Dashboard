import Link from 'next/link'
import * as React from 'react'

import { Button ***REMOVED*** from './Button'

interface ButtonProps {
  type: 'climate' | 'mobility' | 'energy' | 'building'
***REMOVED***

export function GoToButton({ type ***REMOVED***: ButtonProps): JSX.Element {
  if (type === 'climate') {
    return (
      <Link href="/klima">
        <Button variant={'goToClimate'***REMOVED***>zu Münsters Klimafakten</Button>
      </Link>
***REMOVED***
***REMOVED***
  if (type === 'mobility') {
    return (
      <Link href={'/mobilitaet'***REMOVED***>
        <Button variant={'goToMobility'***REMOVED***>zu den Mobilitätsdaten</Button>
      </Link>
***REMOVED***
***REMOVED***
  if (type === 'energy') {
    return (
      <Link href={'/energie'***REMOVED***>
        <Button variant={'goToEnergy'***REMOVED***>zu erneuerbaren Energien</Button>
      </Link>
***REMOVED***
***REMOVED***
  if (type === 'building') {
    return (
      <Link href={'/gebaeude'***REMOVED***>
        <Button variant={'goToBuildings'***REMOVED***>zu den Gebäudedaten</Button>
      </Link>
***REMOVED***
***REMOVED***

  // this should never be reached
  return <Button>zu den Daten</Button>
***REMOVED***
