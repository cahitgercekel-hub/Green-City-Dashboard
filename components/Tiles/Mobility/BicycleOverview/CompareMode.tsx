import React from 'react'
import {
  Australia,
  BigBoat,
  Boat,
  Calendar,
  Cathedral,
  DayNightCycle,
  Film,
  FullMoon,
  Global,
  HikingBoot,
  Homeoffice,
  MiddlEast,
  MidnightSun,
  Moon,
  NerobergTram,
  ParisTower,
  Planet,
  RomanArchitecture,
  Running,
  SoccerBall,
  Sunrise,
  Train,
  Vienna,
  Week,
  Year,
} from '@/components/Icons'

type ComparisonEntry = {
  value: number
  description: JSX.Element
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const distanceComparisons: ComparisonEntry[] = [
  {
    value: 10,
    description: (
      <>
        Das entspricht etwa der Strecke von{' '}
        <span className="text-mobility">Wiesbaden-Biebrich</span> zum{' '}
        <span className="text-mobility">Neroberg</span> und zurück.
      </>
    ),
    icon: NerobergTram,
  },
  {
    value: 42,
    description: (
      <>
        Schon fast ein Marathon – das reicht von{' '}
        <span className="text-mobility">Wiesbaden</span> bis nach{' '}
        <span className="text-mobility">Mainz</span> und wieder zurück!
      </>
    ),
    icon: Running,
  },
  {
    value: 70,
    description: (
      <>
        Von <span className="text-mobility">Wiesbaden</span> bis nach{' '}
        <span className="text-mobility">Koblenz</span> – entlang des{' '}
        <span className="text-mobility">Rheins im Mittelrheintal</span>.
      </>
    ),
    icon: Boat,
  },
  {
    value: 100,
    description: (
      <>
        Von <span className="text-mobility">Wiesbaden</span> bis nach{' '}
        <span className="text-mobility">Koblenz</span> – eine echte{' '}
        <span className="text-mobility">Rheintour</span>.
      </>
    ),
    icon: BigBoat,
  },
  {
    value: 200,
    description: (
      <>
        So weit ist es von <span className="text-mobility">Wiesbaden</span> bis
        nach <span className="text-mobility">Straßburg</span> – eine Tour
        entlang des <span className="text-mobility">Rheins</span>.
      </>
    ),
    icon: Cathedral,
  },
  {
    value: 500,
    description: (
      <>
        Das entspricht in etwa der Strecke von{' '}
        <span className="text-mobility">Wiesbaden</span> bis nach{' '}
        <span className="text-mobility">Paris</span> (Luftlinie).
      </>
    ),
    icon: ParisTower,
  },
  {
    value: 800,
    description: (
      <>
        Fast die komplette Strecke von{' '}
        <span className="text-mobility">Wiesbaden</span> bis nach{' '}
        <span className="text-mobility">Wien</span>!
      </>
    ),
    icon: Vienna,
  },
  {
    value: 1000,
    description: (
      <>
        Von <span className="text-mobility">Wiesbaden</span> bis nach{' '}
        <span className="text-mobility">Rom</span> – eine Tour durch{' '}
        <span className="text-mobility">Europa</span>!
      </>
    ),
    icon: RomanArchitecture,
  },
  {
    value: 3500,
    description: (
      <>
        So weit ist es von <span className="text-mobility">Wiesbaden</span> bis
        zum <span className="text-mobility">Nordkap</span> – eine Fahrt durch
        ganz <span className="text-mobility">Europa</span>!
      </>
    ),
    icon: MidnightSun,
  },
  {
    value: 5000,
    description: (
      <>
        So weit ist es von <span className="text-mobility">Wiesbaden</span> bis
        zum <span className="text-mobility">Nahen Osten und zurück</span>
      </>
    ),
    icon: MiddlEast,
  },

  {
    value: 12000,
    description: (
      <>
        Mehr als ein Viertel des Erdumfangs – das wäre eine Reise von{' '}
        <span className="text-mobility">Deutschland nach Australien</span>
        und zurück!
      </>
    ),
    icon: Australia,
  },
  {
    value: 40000,
    description: (
      <>
        Glückwunsch! Ihr seid einmal um die{' '}
        <span className="text-mobility">Erde</span> gefahren!
      </>
    ),
    icon: Global,
  },
  {
    value: 384400,
    description: (
      <>
        Ihr habt die Distanz zwischen{' '}
        <span className="text-mobility">Erde</span> und dem{' '}
        <span className="text-mobility">Mond</span> zurückgelegt.
      </>
    ),
    icon: Moon,
  },
  {
    value: 1000000,
    description: (
      <>
        Eine Million Kilometer – das entspricht mehr als{' '}
        <span className="text-mobility">zweieinhalb Reisen zum Mond</span>!
      </>
    ),
    icon: FullMoon,
  },
  {
    value: 5000000,
    description: (
      <>
        Schon fast die Hälfte der Strecke zur{' '}
        <span className="text-mobility">Venus</span>!
      </>
    ),
    icon: Planet,
  },
]

// Define time comparisons.
const timeComparisons: ComparisonEntry[] = [
  {
    value: 1,
    description: (
      <>
        Das ist so lange wie eine spannende{' '}
        <span className="text-mobility">Doku</span> oder ein{' '}
        <span className="text-mobility">Fußballspiel</span> in der ersten
        Halbzeit.
      </>
    ),
    icon: SoccerBall,
  },
  {
    value: 5,
    description: (
      <>
        Fast eine komplette Zugfahrt von{' '}
        <span className="text-mobility">Wiesbaden</span> nach{' '}
        <span className="text-mobility">München</span>.
      </>
    ),
    icon: Train,
  },
  {
    value: 8,
    description: (
      <>
        Das entspricht einem klassischen{' '}
        <span className="text-mobility">Arbeitstag</span>.
      </>
    ),
    icon: Homeoffice,
  },
  {
    value: 24,
    description: (
      <>
        Ein kompletter Tag – von{' '}
        <span className="text-mobility">Sonnenaufgang</span> bis{' '}
        <span className="text-mobility">Sonnenaufgang</span>.
      </>
    ),
    icon: Sunrise,
  },
  {
    value: 48,
    description: (
      <>
        So lange wie ein ganzes{' '}
        <span className="text-mobility">Wochenende ohne Pause</span>.
      </>
    ),
    icon: DayNightCycle,
  },
  {
    value: 72,
    description: (
      <>
        Drei volle Tage – so lange wie eine{' '}
        <span className="text-mobility">
          Wanderung von Wiesbaden bis zum Bodensee
        </span>
        .
      </>
    ),
    icon: HikingBoot,
  },
  {
    value: 100,
    description: (
      <>
        Über vier Tage ohne Unterbrechung – oder etwa{' '}
        <span className="text-mobility">50 Spielfilme hintereinander</span>.
      </>
    ),
    icon: Film,
  },
  {
    value: 168,
    description: (
      <>
        So lange, wie eine ganze <span className="text-mobility">Woche</span>!
      </>
    ),
    icon: Week,
  },
  {
    value: 720,
    description: (
      <>
        Ein ganzer{' '}
        <span className="text-mobility">Monat von Neumond zu Neumond</span>.
      </>
    ),
    icon: Calendar,
  },
  {
    value: 8760,
    description: (
      <>
        So lange, wie das <span className="text-mobility">Jahr</span> in reinen
        Stunden.
      </>
    ),
    icon: Year,
  },
]

/**
 * Returns the comparison description and icon for the closest matching distance.
 * @param distance The distance in kilometers.
 * @returns An object with the description (JSX.Element) and icon (React.ComponentType).
 */
export function getDistanceComparison(distance: number): ComparisonEntry {
  return distanceComparisons.reduce((prev, curr) =>
    Math.abs(curr.value - distance) < Math.abs(prev.value - distance)
      ? curr
      : prev,
  )
}

/**
 * Returns the comparison description and icon for the closest matching time.
 * @param hours The time in hours.
 * @returns An object with the description (JSX.Element) and icon (React.ComponentType).
 */
export function getTimeComparison(hours: number): ComparisonEntry {
  return timeComparisons.reduce((prev, curr) =>
    Math.abs(curr.value - hours) < Math.abs(prev.value - hours) ? curr : prev,
  )
}
