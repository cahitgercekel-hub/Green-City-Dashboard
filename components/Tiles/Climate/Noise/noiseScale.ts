// Colour scale for sound levels in dB(A). The steps roughly follow common
// noise maps: below 45 quiet, from 65 clearly burdened.
export const NOISE_STEPS: { min: number; color: string }[] = [
  { min: -Infinity, color: '#4d9221' },
  { min: 45, color: '#a6d96a' },
  { min: 55, color: '#fdae61' },
  { min: 65, color: '#e34a33' },
  { min: 75, color: '#8b0000' },
]

export const NOISE_NO_DATA_COLOR = '#9ca3af'

export function noiseColor(db: number | null | undefined): string {
  if (db === null || db === undefined || Number.isNaN(db)) {
    return NOISE_NO_DATA_COLOR
  }
  let color = NOISE_STEPS[0].color
  for (const step of NOISE_STEPS) {
    if (db >= step.min) {
      color = step.color
    }
  }
  return color
}

export function formatDb(db: number | null | undefined): string {
  if (db === null || db === undefined || Number.isNaN(db)) {
    return '–'
  }
  return db.toFixed(0)
}

// Unit label above the y-axis, small and left-aligned so it does not collide with the chart title
export const UNIT_AXIS = {
  name: 'dB(A)',
  nameLocation: 'end' as const,
  nameGap: 10,
  nameTextStyle: { fontSize: 11, color: '#6b7280', align: 'left' as const },
}
