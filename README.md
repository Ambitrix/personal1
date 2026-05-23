# personal1

> A personal archive of what I build, where I go, and what I'm trying to understand.

A two-file personal site for Paul — projects, travel, lab experiments, notes, and a year-by-year timeline. All content lives in `data.js`; the HTML reads it on load. **To add things, edit `data.js`. No HTML editing needed.**

Live URL (after Pages is enabled): `https://ambitrix.github.io/personal1/`

---

## What's in the repo

```
personal1/
├── index.html      # site layout + behaviour (don't edit unless changing design)
├── data.js         # all content (edit this to add anything)
├── README.md       # this file
├── CLAUDE.md       # context for Claude Code / AI assistants
└── .gitignore
```

Runtime dependencies (loaded from CDN at page load):
- `d3@7` — globe projection and drag
- `topojson-client@3` — decoding country polygons
- `world-atlas@2/countries-110m.json` — the country geometry

No build step. No bundler. No framework.

---

## How to add content (the easy way)

Open `data.js` in any text editor. It's structured as one big JavaScript object with named sections. To add a project, trip, lab idea, note, or timeline entry, **append a new entry to the matching array**.

### Add a project

In `data.js`, find `projects: [ … ]`. Paste a new entry at the end:

```js
{
  title: "My New Project",
  status: "idea",                            // building | idea | paused | finished
  meta: "started Jun 2026 · python",
  sections: [
    ["why",       "Reason it exists."],
    ["scope",     "What it does."],
    ["next step", "Immediate next thing."]
  ],
  tags: ["python", "ml"]
},
```

### Add a past trip

In `data.js`, find `travel.trips: [ … ]`:

```js
{
  title: "🇫🇷 Paris, France",
  badge: { class: "done", label: "9/10" },   // or use `status: "finished"` instead
  meta: "Jun 2026 · Eurostar weekend",
  sections: [
    ["theme",     "Food and museums."],
    ["route",     "Marais → Musée d'Orsay → Le Marais again."],
    ["favourite", "Late dinner near Place des Vosges."],
    ["go again?", "Yes."]
  ]
},
```

### Add a future trip

In `data.js`, find `travel.futureTrips: [ … ]`:

```js
{
  title: "🇲🇽 Mexico City",
  status: "idea",
  meta: "winter",
  sections: [
    ["why",      "Food, museums, altitude."],
    ["must-see", "Frida Kahlo museum, Coyoacán, Teotihuacan."]
  ]
},
```

### Add a visited country (highlights globe + adds chip)

In `data.js`, find `travel.visitedCountries: [ … ]`:

```js
{ flag: "🇲🇽", name: "Mexico", m49: "484" }
```

`m49` is the UN M49 numeric code. Look it up in the [world-atlas countries-110m feature `id` field](https://github.com/topojson/world-atlas) — it's the value that highlights the right country on the globe.

### Add a lab experiment idea

In `data.js`, find `lab: [ … ]`:

```js
{
  title: "Card Counting Trainer",
  status: "idea",
  meta: "blackjack",
  description: "Show a stream of cards; the user types the running count. Tests speed."
}
```

### Add a note

In `data.js`, find `notes: { quant: […], coding: […], travel: […], life: […] }` — pick the right category and append:

```js
{ title: "Kelly criterion", body: "Optimal bet size = edge / odds. Maximises long-run log wealth." }
```

For a draft (placeholder), set body to `""` and add `draft: "// draft"`.

### Add a timeline year or item

In `data.js`, find `timeline: [ … ]`. Either edit an existing year's `items` array, or add a new year:

```js
{
  year: "2027",
  items: [
    "First milestone",
    "Second thing"
  ]
}
```

### Update stats / dashboard

Stats bar numbers, the "current focus / recently / next" cards, and the terminal's `goals` output all live at the top of `data.js` under `stats`, `dashboard`, and `goals` respectively. Just edit the values.

### Save, commit, push

```bash
git add data.js
git commit -m "Add: <what you added>"
git push
```

GitHub Pages rebuilds in ~30–60 seconds. Hard-refresh (Cmd/Ctrl + Shift + R) to bypass cache.

---

## Run it locally

```bash
# Recommended — avoids file:// fetch quirks
python3 -m http.server 8000
# then visit http://localhost:8000
```

If you open `index.html` directly via `file://` and see a red "Could not load data.js" message, that's why — browsers block local file loading. Use the server.

---

## Deploy to GitHub Pages

1. Push the repo (instructions below) so all files are on `main`.
2. On GitHub, go to **Settings → Pages**.
3. **Source**: Deploy from a branch. Branch `main`, folder `/ (root)`. Save.
4. Wait ~30–60 seconds, then open `https://ambitrix.github.io/personal1/`.

---

## First-time push

```bash
cd path/to/this/folder
git init
git add .
git commit -m "Initial commit: personal site"
git branch -M main
git remote add origin https://github.com/Ambitrix/personal1.git
git push -u origin main
```

When `git push` asks for credentials, use a fine-grained [GitHub personal access token](https://github.com/settings/tokens) scoped to `personal1` (Contents: read/write). Or run `gh auth login` once with the GitHub CLI.

---

## The interactive terminal

The hero panel terminal accepts these commands (type `help` to see them in the UI): `help`, `about`, `now`, `projects`, `travel`, `goals`, `notes`, `quote`, `random`, `clear`, plus `ls`, `whoami`, `pwd`, `cat`.

Most outputs are driven by `data.js`, so when you add a project it shows up in the `projects` command automatically.

---

## Connecting an AI agent to your GitHub

Three ways:

**Cowork desktop app:** Settings → Connectors → connect GitHub. Authorise access to `Ambitrix/personal1`. Then ask things like *"add a project to data.js called X with status building, here's why I'm making it"*.

**GitHub CLI + Claude Code:** `brew install gh && gh auth login` once. After that any terminal-driven AI assistant can run git/gh commands directly.

**Personal access token:** GitHub → Settings → Developer settings → Personal access tokens → Fine-grained → scope to `personal1`, Contents read/write. Use as your password when prompted.

---

## Tech notes

- All content lives in `data.js` under `window.SITE_DATA`. The HTML is just the layout; everything user-visible is rendered from JS.
- The globe and country chips share one source — `travel.visitedCountries`. Add a country there and both update.
- Last-updated date auto-fills from `new Date()` on each page load.
- The terminal commands `projects`, `notes`, `goals` etc. read from `data.js`, so they stay in sync as you add content.
- Designed for dark mode only. CSS variables at the top of `<style>` in `index.html` control the theme.

---

## License

Personal site — no license declared.
