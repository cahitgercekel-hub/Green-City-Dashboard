'use client'

import useOpenSenseMap from '@/hooks/useOpenSenseMap'
import { formatDistanceToNow } from 'date-fns'
import { de } from 'date-fns/locale'
import OpenSenseMapMap from './OpenSenseMapMap'

interface OpenSenseMapContentProps {
  grouptag: string
}

export default function OpenSenseMapContent({
  grouptag,
}: OpenSenseMapContentProps) {
  const { data: boxes, isLoading } = useOpenSenseMap(grouptag)

  if (isLoading) {
    return (
      <div className="flex h-40 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-climate border-t-transparent" />
      </div>
    )
  }

  if (!boxes || boxes.length === 0) {
    return (
      <p className="text-sm text-gray-500">Keine Messstationen verfügbar.</p>
    )
  }

  return (
    <div className="space-y-4">
      {/* Map + Station list side-by-side on larger screens */}
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* Map */}
        <div className="lg:w-1/2">
          <OpenSenseMapMap boxes={boxes} />
        </div>

        {/* Station list */}
        <div className="flex flex-col gap-2 lg:w-1/2">
          <div className="rounded-lg bg-white/60 p-3 text-center">
            <p className="text-2xl font-bold text-climate">{boxes.length}</p>
            <p className="text-xs text-gray-600">
              Messstation{boxes.length !== 1 ? 'en' : ''}
            </p>
          </div>

          <div className="space-y-1.5">
            {boxes.map(box => {
              const lastUpdate = box.updatedAt
                ? formatDistanceToNow(new Date(box.updatedAt), {
                    addSuffix: true,
                    locale: de,
                  })
                : null

              return (
                <a
                  className="flex items-center justify-between rounded-md bg-white/60 px-3 py-2 transition-colors hover:bg-white/80"
                  href={`https://opensensemap.org/explore/${box._id}`}
                  key={box._id}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{box.name}</p>
                    <p className="text-xs text-gray-500">
                      {box.sensors.length} Sensor
                      {box.sensors.length !== 1 ? 'en' : ''}
                      {lastUpdate && (
                        <span className="ml-1">
                          · aktualisiert {lastUpdate}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="ml-2 flex items-center gap-1.5">
                    <span
                      className={`inline-block h-2.5 w-2.5 rounded-full ${
                        box.updatedAt &&
                        Date.now() - new Date(box.updatedAt).getTime() <
                          60 * 60 * 1000
                          ? 'bg-green-400'
                          : 'bg-gray-300'
                      }`}
                    />
                    <span className="text-xs text-gray-400">↗</span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
