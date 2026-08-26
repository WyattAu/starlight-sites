#!/usr/bin/env bash
# Full crawlkit audit of all 45 Wyatt's Notes sites + landing page.
# Uses crawlkit 4.4.1 from ~/dev/src/github.com/WyattAu/crawlkit.
# Run: bash scripts/crawlkit-full-audit.sh
set -euo pipefail

CRAWLKIT="$HOME/dev/src/github.com/WyattAu/crawlkit/target/release/crawlkit"
OUTPUT_DIR="crawlkit-results-$(date +%Y-%m-%d)"
SITES_JSON="$(node -e "const m=require('./sites.meta.json'); const sites=Object.keys(m.sites).map(s=>'https://'+s+'.wyattau.com'); sites.push('https://wyattsnotes.wyattau.com'); console.log(JSON.stringify(sites))")"

mkdir -p "$OUTPUT_DIR"

echo "=== Crawlkit full audit ==="
echo "Output: $OUTPUT_DIR"
echo "Sites: $(echo "$SITES_JSON" | node -e "process.stdin.on('data',d=>console.log(JSON.parse(d).length))")"
echo ""

# Crawl each site individually for per-site reports
for url in $(echo "$SITES_JSON" | node -e "process.stdin.on('data',d=>JSON.parse(d).forEach(u=>console.log(u)))"); do
  slug=$(echo "$url" | sed 's|https://||;s|\.wyattau\.com||')
  site_dir="$OUTPUT_DIR/$slug"
  echo "[$(date +%H:%M:%S)] Crawling $slug ..."

  "$CRAWLKIT" crawl "$url" \
    --max-pages 200 \
    --depth 6 \
    --concurrency 8 \
    --delay 200 \
    --max-time 600 \
    --format json \
    --output "$site_dir" \
    --user-agent "crawlkit/4.4.1 (wyattsnotes-audit)" \
    2>/dev/null || echo "  WARNING: crawl failed for $slug"

  echo "  Done: $slug"
done

echo ""
echo "=== Crawl complete: $OUTPUT_DIR ==="
echo "Per-site reports in: $OUTPUT_DIR/<slug>/"
echo ""
echo "Generating summary..."
node -e "
const fs = require('fs');
const path = require('path');
const dir = '$OUTPUT_DIR';
const sites = fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isDirectory());
const summary = sites.map(s => {
  const rf = path.join(dir, s, 'crawl-results.json');
  if (!fs.existsSync(rf)) return { site: s, status: 'missing' };
  const r = JSON.parse(fs.readFileSync(rf, 'utf8'));
  return { site: s, pages: r.pages_crawled, issues: r.issues, status: r.status };
}).sort((a,b) => (b.issues||0) - (a.issues||0));
console.table(summary);
fs.writeFileSync(path.join(dir, 'summary.json'), JSON.stringify(summary, null, 2));
console.log('Summary written to $OUTPUT_DIR/summary.json');
"
