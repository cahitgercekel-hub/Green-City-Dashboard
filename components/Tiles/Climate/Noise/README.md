# Noise tile (`climate-noise`) – LärmLupe Heilbronn

Shows where and when it is loud in Heilbronn, based on a citizen measurement campaign with
self-built senseBox "LärmBoxes" (DFRobot SEN0232 sound sensor on a senseBox MCU-S2).
The tile was built during the Green City Hackathon 2026. Firmware, data pipeline and the
dataset itself live in the companion repository
[itsmehmettaskin/greencity-hackathon-laermlupe](https://github.com/itsmehmettaskin/greencity-hackathon-laermlupe);
this directory only contains the dashboard side.

Embed URL: `/embed/climate-noise`

## What the tile shows

1. **Time-slot selector** – morning 06–10, day 10–16, evening 16–22, night 22–06 (local time).
2. **Map** (MapLibre, Carto Positron basemap) – one marker per measuring point, coloured by
   LAeq in the selected slot, with the rounded dB value inside. The fixed station is drawn
   as a square, walking points as circles. Clicking a marker selects it. Without a manual
   selection the loudest point of the active slot is selected automatically.
3. **Selected point card** – name, category, street and speed limit (from OpenStreetMap),
   and three numbers for the active slot: average (LAeq), background (LA90), peak (LAmax).
   Below it a bar chart with LAeq for all four slots and the WHO reference as a dashed
   step line (53 dB day, 45 dB night).
4. **Live card** (only when a LärmBox is online) – latest LAeq of the first openSenseMap box
   in grouptag `LaermLupe` that has a sensor titled `LAeq`; green dot when the value is
   younger than 15 minutes.
5. **Day/night curve** – last 24 h of the live box, or, when no live data is available,
   the hourly LAeq series of the fixed station from the campaign dataset.
6. **Disclaimer** with the number of valid measurement minutes. The campaign is an
   indicative citizen measurement, not an official noise survey.

All levels are A-weighted decibels. Averages are energy averages
(`LAeq = 10·log10(mean(10^(L/10)))`), never arithmetic means.

## Files

| File | Purpose |
| --- | --- |
| `index.tsx` | Server component. Wraps the content in `ClimateTile` (`embedId="climate-noise"`, `live`). |
| `NoiseContent.tsx` | Client component. Slot state, selection, live-box lookup, layout. |
| `NoiseMap.tsx` | MapLibre map with DOM markers; legend. |
| `NoiseSlotChart.tsx` | ECharts bar chart: LAeq per slot + WHO reference line. |
| `NoiseDayCurve.tsx` | ECharts line chart: hourly/live LAeq with WHO day/night mark lines. |
| `noiseScale.ts` | Colour scale (`< 45` green … `≥ 75` dark red), dB formatting, shared axis options. |
| `../../../../hooks/useNoiseCampaign.ts` | Fetches the GeoJSON dataset; exports its TypeScript types. |
| `../../../../app/api/noise/route.ts` | `GET /api/noise?boxId&sensorId&hours` – proxies the openSenseMap measurement series of one sensor (5 min cache, max 72 h, ids validated). |
| `../../../../utils/TileFactory.tsx` | Registers the `'climate-noise'` tile type. |
| `../../../../messages/de.json`, `en.json` | `noise.*` (content) and `tiles.climate.noise.*` (title/subtitle) strings. |
| `../../../../public/data/laerm-kampagne.geojson` | Bundled campaign dataset (fallback / initial version). |

The tile reuses the existing `/api/opensensemap?grouptag=…` route and `useOpenSenseMap`
hook for the live box lookup; no new dependencies were added.

## Data sources and load order

1. **Campaign dataset (required)** – `NOISE_CAMPAIGN_URL` from `hooks/useNoiseCampaign.ts`:
   `process.env.NEXT_PUBLIC_NOISE_CAMPAIGN_URL`, falling back to `/data/laerm-kampagne.geojson`.
   If the file is missing or empty the tile renders the `noise.noData` message.
2. **openSenseMap boxes (optional)** – `/api/opensensemap?grouptag=LaermLupe`. Fills the live card.
3. **Live series (optional)** – `/api/noise?boxId=…&sensorId=…&hours=24` for the LAeq sensor found in step 2.

Steps 2 and 3 never block the tile; when they fail the tile works fully from the dataset.

### Dataset format (schema_version 1)

Produced by `pipeline/build_dataset.py` in the LärmLupe repository. Full contract and a JSON
Schema: [`docs/DATA_CONTRACT.md`](https://github.com/itsmehmettaskin/greencity-hackathon-laermlupe/blob/main/docs/DATA_CONTRACT.md)
and [`docs/schema/laerm-kampagne.schema.json`](https://github.com/itsmehmettaskin/greencity-hackathon-laermlupe/blob/main/docs/schema/laerm-kampagne.schema.json).

```jsonc
{
  "type": "FeatureCollection",
  "meta": {
    "schema_version": 1,
    "title": "LärmLupe Heilbronn – Messkampagne",
    "generated_at": "2026-10-28T16:02:11Z",
    "period": { "from": "…", "to": "…" },
    "slots": [{ "key": "morning", "from_hour": 6, "to_hour": 10 }, "…"],
    "who_ref_db": { "day": 53.0, "night": 45.0 },
    "excluded": { "used_seconds": 96740, "event_seconds": 100, "clip_seconds": 0, "wind_seconds": 0, "rain_seconds": 0, "transit_seconds": 2160 },
    "calibration": [{ "device_id": "laermbox-2", "offset_db": -2.25, "applied_in_firmware": false }],
    "method": "…", "license": "CC BY 4.0",
    "static_series": [{ "device_id": "laermbox-1", "point_id": "P00",
                        "hours": [{ "t": "2026-10-27T15:00:00+01:00", "laeq": 64.8 }] }]
  },
  "features": [{
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [9.218, 49.142] },   // [lon, lat]
    "properties": {
      "point_id": "P01", "name": "Allee", "category": "main_road",
      "is_static": false, "road_type": "primary", "road_name": "Allee", "maxspeed": "50", "tram": true,
      "laeq_all": 69.8, "minutes_all": 9.0,
      "slots": {                        // only slots with data are present
        "morning": { "laeq": 74.1, "lamax": 93.0, "la90": 66.2, "minutes": 3.0, "visits": 1,
                     "who_ref_db": 53.0, "above_who_ref": true }
      }
    }
  }]
}
```

| Field | Meaning |
| --- | --- |
| `laeq` | Energy-averaged equivalent continuous level of the valid seconds in the slot, dB(A) |
| `lamax` | Highest 1-second maximum in the slot |
| `la90` | Background level: 10th percentile of the 1-second LAeq values |
| `minutes` | Valid measurement minutes (seconds flagged as event, clipped, windy or rainy are excluded) |
| `visits` | Number of separate measurement walks (calendar days for the fixed station) |
| `who_ref_db`, `above_who_ref` | WHO 2018 road-traffic guideline value (day 53 / night 45) used as a reference line, not as a verdict |
| `is_static` | Point of the fixed station (square marker) |
| `category` | `main_road`, `tempo30`, `tram`, `nightlife`, `side_street`, `park`, `quiet_asphalt`, `static` – translated via `noise.categories.*` |

### Live data (openSenseMap)

| Setting | Value |
| --- | --- |
| grouptag | `LaermLupe` (constant `NOISE_GROUPTAG` in `NoiseContent.tsx`) |
| sensor titles | exactly `LAeq`, `LAmax`, `LA90`, unit `dB(A)` |
| upload rate | fixed box: one value per minute; walking box: back-filled after each walk |

## Updating the data

Option A – bundled file: replace `public/data/laerm-kampagne.geojson` and redeploy.

Option B – remote file (recommended during the campaign): set
`NEXT_PUBLIC_NOISE_CAMPAIGN_URL` (see `.env.example`) to the raw GitHub URL of the dataset in
the LärmLupe repository. Every push to that repository updates the tile; the bundled file
stays as a fallback. The variable is read at build time (`NEXT_PUBLIC_` prefix), so changing
it requires a rebuild.

## Showing the tile on the dashboard

Tiles are placed through the admin panel (database table `Tile`). Create a tile record with
`tileId = climate-noise`; translations for the title/subtitle come from `messages/*.json`.
Without that record the tile is only reachable through `/embed/climate-noise`.

## Local development

```bash
yarn install
cp .env.example .env            # Postgres is optional for the embed page: getTheme() tolerates a missing DB
yarn dev
# http://localhost:3000/embed/climate-noise
```

Checks used before opening the PR: `npx tsc --noEmit` (no errors in the files listed above;
the repository has pre-existing errors elsewhere) and `yarn lint`.

## Licence and attribution

Dashboard code: AGPL-3.0 (this repository). Campaign dataset: CC BY 4.0, "LärmLupe Heilbronn".
Basemap: © CARTO, © OpenStreetMap contributors. Weather context: Bright Sky / DWD.
