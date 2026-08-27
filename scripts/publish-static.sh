#!/usr/bin/env bash
# Copy Astro dist/ into the repo root so GitHub Pages can keep serving from main.
# Never deletes CNAME, .nojekyll, src/, package.json, or other source files.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT/dist"

if [[ ! -d "$DIST" ]]; then
  echo "error: $DIST does not exist. Run bun run build first." >&2
  exit 1
fi

cp "$DIST/index.html" "$ROOT/index.html"

shopt -s nullglob
for dir in "$DIST"/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]; do
  name="$(basename "$dir")"
  mkdir -p "$ROOT/$name"
  cp -a "$dir/." "$ROOT/$name/"
done

if [[ -d "$DIST/_astro" ]]; then
  rm -rf "$ROOT/_astro"
  cp -a "$DIST/_astro" "$ROOT/_astro"
fi

echo "Published static files from dist/ to repo root."
