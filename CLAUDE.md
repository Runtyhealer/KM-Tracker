# KM Tracker — Claude context

Single-file Dutch/English kilometer registration web app. **Do not read km-tracker.html unless making a targeted edit — all architecture is documented here.**

## File structure

```
km-tracker.html   — entire app (HTML + CSS + JS, ~1600 lines)
README.md
CLAUDE.md
```

## Git workflow

- Branch: `main` (only branch)
- Remote: `https://github.com/Runtyhealer/KM-Tracker.git`
- Push: `git push origin main` — if 403, use PAT via credential helper

## Architecture — km-tracker.html

### Layout (top → bottom)
1. `<head>` — SheetJS CDN, Inter font, all CSS (~790 lines of styles)
2. Road scene header (animated cars SVG)
3. Collapsible sections: Settings → Dashboard → Monthly → Forecast → Insights → Upload → Trips list
4. `<script>` — all JS from line ~789

### Data model (localStorage)

```js
// Key: 'km_tracker_v2'  Lang key: 'km_lang'
{
  settings: { leaseStart: 'YYYY-MM-DD', leaseEnd: 'YYYY-MM-DD', totalKm: '24500' },
  trips: [{ id: string, date: 'YYYY-MM-DD', km: number }]
}
```

Core constants: `STORAGE_KEY = 'km_tracker_v2'`, `DAILY_PRIVATE = 41` (km/day budget)

### Key functions

| Function | Purpose |
|---|---|
| `getData()` | Returns `{ settings, trips }` with defaults |
| `save(d)` | Persists data object to localStorage |
| `calcStats()` | Computes all derived stats (elapsed days, private km, budget, etc.) |
| `render()` | Calls all render* functions |
| `renderStats()` | Updates dashboard hero card + all stat tiles |
| `renderTable()` | Renders the trip list table |
| `renderMonthly()` | Bar + line charts (Canvas 2D, no chart library) |
| `renderForecast()` | End-of-lease forecast section |
| `renderInsights()` | Text-based insights section |
| `handleFile(file)` | Entry point for CSV/XLSX/XLS import |
| `parseCsv(text)` | Parses CSV, calls `importRows()` |
| `parseExcel(buf)` | Parses XLSX via SheetJS, calls `importRows()` |
| `importRows(rows, hdr)` | Deduplicates, filters by lease period, saves trips |
| `parseDate(raw)` | Normalises ISO / DD-MM-YYYY / Excel serial → YYYY-MM-DD |
| `exportCsv()` | Downloads trips as CSV |
| `T(key, ...args)` | i18n helper — returns translated string or calls fn |
| `toggleLang()` | Switches NL ↔ EN, re-renders |
| `applyTranslations()` | Pushes all translated strings into the DOM |

### i18n

Two locales: `nl` (default) and `en`. Strings live in `TRANSLATIONS` object (~line 803). `T('key')` looks up current `lang`. Toggle button in header calls `toggleLang()`.

### Charts (no external library)

Hand-drawn on `<canvas>` elements using Canvas 2D API.
- Bar chart: estimated private km per month (period selector: 6M / 12M / 48M)
- Line chart: cumulative private km vs budget line

### Import format

CSV/XLSX must have columns `Date` and `Distance` (case-insensitive). Also accepts Dutch aliases: `datum`, `dag`, `afstand`, `kilometers`. Trips outside the lease period are silently skipped.

### Collapsible sections

Each section has a `.section-label` toggle div and a `.sec-body` content div. `toggleSection(bodyId)` adds/removes `.collapsed` class on both.

## Business logic notes

- **Private km** = `totalKm (odometer)` − `sum of all trip km (business)`
- **Budget** = `DAILY_PRIVATE (41) × elapsed lease days`
- **Fiscal deadline** = 30 September each year (or lease end, whichever is sooner)
- **Penalty rate** = €0.10 per excess private km
