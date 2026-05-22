# personal1

Paul Zhang's personal website — single-file static site.

## Run locally

No build step. Just open the file:

```bash
open index.html
```

Or serve it with any static server (avoids CORS quirks with the globe's world-atlas fetch):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Push to `main` (already done if you're reading this).
2. On GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
3. Site goes live at `https://ambitrix.github.io/personal1/` in a minute or two.

## Editing content

Everything lives in [`index.html`](index.html). Sections, in order:

| Section | Lines | What's there |
| --- | --- | --- |
| `<style>` | 10–454 | All CSS. Colors live in `:root` (line 11). |
| nav tabs | 458–469 | Top tab bar. |
| intro page | 474–506 | Headline, typewriter, terminal panel. |
| projects page | 509–519 | Placeholder. |
| travel page | 522–573 | D3 globe + country chips. |
| fun page | 576–586 | Placeholder. |
| contact page | 589–620 | Email + social rows. |
| `<script>` | 628–773 | Typewriter, tab routing, globe init. |

### Common edits

- **Headline quotes** — edit the `quotes` array at line 634.
- **Visited countries** — edit the `VISITED` set at line 711 (ISO 3166-1 numeric codes) **and** the chip list at lines 549–564.
- **Social handles** — lines 603–617 still say `your-handle`. Replace before sharing.
- **Stat numbers** — lines 538 (countries) and 542 (continents).

## Adding a document

The **docs** tab auto-renders cards from `documents.json` in the repo root. To add a new document:

1. **Drop the file** into `documents/` (e.g. `documents/cv.pdf`).
2. **Add an entry** to `documents.json`:
   ```json
   [
     {
       "file": "documents/cv.pdf",
       "title": "Curriculum Vitae",
       "description": "Updated for summer 2026.",
       "tag": "personal",
       "date": "2026-05"
     }
   ]
   ```
   Fields: `file` (required, relative path), `title`, `description`, `tag`, `date`. All but `file` are optional.
3. **Commit and push** — `git add . && git commit -m "add CV" && git push`.

The card appears the moment GitHub Pages redeploys (~30s). File-type badge is auto-derived from the extension.

**Even easier with Claude Code:** drop the file in, then in the repo run `claude` and say *"add documents/cv.pdf as my CV"* — Claude updates `documents.json` for you.

## Known gaps

- The terminal input on the intro page is wired to a UI but has **no command handler** — typing `help` does nothing yet. JS for it would go into `<script>` near the end.
- Social links (GitHub / LinkedIn / Instagram) on the contact page are placeholders.
