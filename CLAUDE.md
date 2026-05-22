# Project context for Claude Code

This file gives Claude Code the context it needs to be useful in this repo without re-discovering it every session.

## What this is

A **single-file static personal website** for Paul Zhang (Maths student at Imperial College London). Everything — HTML, CSS, JS — lives in `index.html`. No build step, no package.json, no framework.

## Conventions

- **One file.** Do not split `index.html` into separate `.css` / `.js` files. The single-file constraint is intentional — keeps deploys trivial and the site loadable from a `file://` URL.
- **No bundler, no npm.** Two external scripts only, loaded from jsDelivr CDN: `d3@7` and `topojson-client@3`. Do not introduce a build pipeline.
- **CSS variables** in `:root` (top of the `<style>` block) hold the theme. Reuse them; don't hardcode colors elsewhere.
- **Mono font for technical/terminal/code text**, sans for prose. Use `var(--mono)` and `var(--sans)`.
- **Section comments** (`/* INTRO PAGE */`, `/* TRAVEL */`, etc.) mark the CSS structure — match the pattern when adding sections.

## File map

| Region of `index.html` | Lines | Purpose |
| --- | --- | --- |
| `:root` variables | 11–24 | Theme tokens (colors, fonts). |
| Global / nav CSS | 26–106 | Layout, tab bar. |
| Per-page CSS | 108–426 | Grouped by section in source order. |
| Responsive CSS | 438–453 | Two breakpoints: 920px, 720px. |
| Nav markup | 458–469 | Tab list — keep in sync with `TABS` array (line 675). |
| `<section class="page">` blocks | 474–620 | One per tab; activated by hash routing. |
| Typewriter | 632–672 | Cycles `quotes` array on the headline. |
| Tab routing | 674–703 | Hash-based; `activate(name)` is the entry point. |
| Globe (lazy init) | 705–772 | Runs only when travel tab first opens. |

## What not to do

- Don't add a bundler, framework, package.json, or any build step.
- Don't split `index.html` into multiple files.
- Don't invent Paul's social handles — GitHub / LinkedIn / Instagram rows currently say `your-handle` and that is intentional until Paul fills them in. Ask, don't guess.
- Don't change the visited-countries list unless Paul says so. The numeric codes at line 711 are ISO 3166-1 numeric and **must** match the chips at lines 549–564.
- Don't replace the D3 globe with a static image or third-party widget. The drag-to-spin globe is a feature, not scaffolding.

## Known gaps (open work)

- **Terminal command handler.** The intro page renders a terminal UI (`#term-input`, `#term-history`) with a hint that says *"try `help`"*, but no JS handles the input. Wiring this up — a small command dispatcher with `help`, `whoami`, `projects`, `contact`, `clear` — is a natural next task.
- **Projects + Fun pages** are placeholder stubs. They need real cards.
- **Trip cards** below the globe on the travel page are also a stub.

## Adding a document (common task)

The docs tab is driven by `documents.json` at the repo root. Each entry is:

```json
{
  "file": "documents/<filename>",
  "title": "...",
  "description": "...",
  "tag": "coursework | personal | travel | misc",
  "date": "YYYY-MM"
}
```

Workflow when Paul asks you to "add a document":

1. The file should already be in `documents/`. If not, ask where it is and move/copy it in.
2. Append a new entry to `documents.json`. Keep entries newest-first.
3. Infer title/description/tag/date from the filename or ask if not obvious. Don't invent dates — use the file's modification time or today's date as a fallback.
4. Run `git add documents/ documents.json && git commit -m "add <title>"`. Don't push without confirmation.

The file-type badge on each card is auto-derived from the extension in JS — don't add a `type` field to JSON.

## Conventions for new content

- New page → add to `TABS` array (line 675), add a `<a class="tab">` in nav, add a `<section class="page">` block, add CSS under a clear section comment.
- New visited country → update **both** the `VISITED` set (line 711) **and** the chip list (lines 549–564). Use ISO 3166-1 numeric codes for `VISITED`.
- New quote → append to the `quotes` array at line 634. Keep them short — they wrap on mobile.
