# Claude Code context — personal1

Project notes for Claude Code (or any AI assistant) working in this repo.

## What this repo is

A two-file personal website for Paul, a Maths student at Imperial College London. A personal operating system — projects, travel, lab experiments, notes, yearly timeline — not a CV.

Deployed via GitHub Pages from `Ambitrix/personal1` → `https://ambitrix.github.io/personal1/`.

Tagline: *"A personal archive of what I build, where I go, and what I'm trying to understand."*

## The golden rule: edit `data.js`, not `index.html`

**All content lives in `data.js`.** `index.html` is just layout + renderers. To add a project, trip, note, lab idea, or timeline entry, append a new entry to the right array in `data.js`. Only edit `index.html` when changing design, layout, or behaviour (CSS, terminal commands, render logic).

If a user asks to add content, the answer is almost always: "append to array X in `data.js`".

## File map

```
.
├── index.html      # layout + render code (rarely edit)
├── data.js         # all content (edit this)
├── README.md
├── CLAUDE.md       # this file
└── .gitignore
```

## Tabs (6, in this order)

1. **intro** — typewriter hero, interactive terminal, dashboard cards, stats bar
2. **projects** — project cards with status badges
3. **travel** — D3 globe, country chips, trip cards, future-trip cards
4. **lab** — mini-experiment idea cards
5. **notes** — short notes in 4 categories (quant, coding, travel, life)
6. **timeline** — year-by-year log

Contact info is in the footer. The "fun" tab was renamed to "lab" — do not rename it back.

## data.js structure

`window.SITE_DATA` exposes:

| Key | What it controls |
| --- | --- |
| `identity` | name, bio, typewriter quotes, email, github, instagram |
| `stats` | the 6-cell stats bar on intro |
| `dashboard` | current focus / recently / next lists on intro |
| `goals` | output of the terminal `goals` command |
| `projects` | the cards on the Projects page |
| `travel.visitedCountries` | both the chips list AND the globe highlights (same source) |
| `travel.trips` | past-trip cards |
| `travel.futureTrips` | future-trip cards |
| `lab` | lab experiment cards |
| `notes.{quant,coding,travel,life}` | notes per category |
| `timeline` | year blocks |
| `quotes` | output of the terminal `quote` command |

## Entry shapes

**Project / trip / future-trip card:**
```js
{
  title: "Card title",
  status: "building",                         // building | idea | paused | finished | planning | booked
  // OR badge: { class: "done", label: "8/10" }   // custom badge instead
  meta: "started May 2026 · python",
  sections: [
    ["why", "..."],
    ["next step", "..."]
  ],
  tags: ["python", "ml"]                       // optional
}
```

**Visited country:**
```js
{ flag: "🇫🇷", name: "France", m49: "250" }
```
`m49` is the UN M49 numeric code. Look up in world-atlas countries-110m feature `id` field. Adding here updates BOTH the chips list and the globe.

**Lab experiment:**
```js
{ title: "X", status: "idea", meta: "context", description: "What it does." }
```

**Note:**
```js
{ title: "X", body: "Short note text." }
// or for drafts:
{ title: "X", body: "", draft: "// draft" }
```

**Timeline year:**
```js
{ year: "2026", items: ["Did this", "Did that"] }
```

## Conventions to follow when editing `index.html`

- **Preserve the dark theme.** Colors reference CSS variables (`--bg`, `--accent`, etc.). No raw hex literals.
- **Single-file layout.** Don't split index.html. Don't add a bundler.
- **Tabs are hash-routed** (`#intro`, etc.). Adding a new tab requires: (1) a new `<a class="tab">` in nav, (2) a new `<section class="page" data-page="…">`, (3) the name added to the `TABS` array in the routing script, (4) a renderer function that fills the page from `data.js`.
- **Render functions** live in the bottom `<script>` block. Each one reads from `D` (alias for `window.SITE_DATA`) and writes to an element by ID.
- **`buildCard()`** is the shared card builder used by projects, trips, future trips, and (in adapted form) lab. Use it for any new card grid.
- **Terminal commands** are in the `COMMANDS` object inside `startTerminal()`. Commands that surface content should read from `D.*` so they auto-update.

## Workflow

- Local dev: `python3 -m http.server 8000` in the project folder, visit `http://localhost:8000`. Opening `index.html` via `file://` shows a red error because browsers block local fetch.
- Deploy: push to `main`; GitHub Pages serves it in ~30 seconds.
- Always show the user the diff before pushing. Don't `git push` automatically.

## Things to NOT do without asking

- Don't move content out of `data.js` into HTML.
- Don't add a bundler, framework, or `package.json`.
- Don't replace D3 with another mapping library.
- Don't rename "lab" back to "fun".
- Don't add a LinkedIn link — deliberately omitted.
- Don't fabricate Paul's project details, trip details, or social handles.
- Don't switch the site to light mode.

## User context

- Name: Paul Zhang
- Email: paul.zhang25@imperial.ac.uk
- GitHub: Ambitrix
- Repo: https://github.com/Ambitrix/personal1
- Studying: Mathematics at Imperial College London
- Currently working on: market-making simulation, quant interview prep, LeetCode, this site
