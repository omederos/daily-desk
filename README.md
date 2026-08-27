# Daily Desk

Published at https://ai.omederos.com

Astro 5 source lives in `src/`. GitHub Pages still serves the repo root on `main` (`index.html`, `YYYY-MM-DD/index.html`, `CNAME`, `.nojekyll`). After a build, copy the static output to the root so Pages keeps working without a settings change.

## Add a day

1. Add one file under `src/content/briefings/`, named `YYYY-MM-DD.md`.
2. Frontmatter: `date`, `title`, `blurb`, `weekday`, `lede`.
3. Body: the briefing HTML (`<h2 id="...">` sections). The last section should be `<h2 id="learn">Something to learn</h2>`.
4. Build and publish:

```bash
bun run build
bash scripts/publish-static.sh
```

`scripts/publish-static.sh` copies `dist/` into the repo root (`index.html`, dated folders, `_astro/`) without deleting `CNAME`, `.nojekyll`, `src/`, `package.json`, or `astro.config.mjs`. Commit the copied root HTML so Pages keeps working.

## Local

```bash
bun install
bun run dev
```
