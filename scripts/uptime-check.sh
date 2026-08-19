#!/bin/bash
# Uptime check for all Wyatt's Notes sites
# Called by .github/workflows/uptime.yml
#
# ADR-011: the URL list is derived from the sites/ directory (plus the
# landing page) via scripts/list-sites.js --urls. A previous hand-copied
# list probed three sites that no longer existed and missed 35 real ones.

set -u

REPO_ROOT=$(cd "$(dirname "$0")/.." && pwd)
mapfile -t SITES < <(node "$REPO_ROOT/scripts/list-sites.js" --urls | node -e 'const a=JSON.parse(require("fs").readFileSync(0));for(const u of a)console.log(u)')

echo "=== Wyatt's Notes Uptime Check ==="
echo "Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo "Sites: ${#SITES[@]}"
echo ""

all_ok=true
for site in "${SITES[@]}"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" --max-time 15 "$site/" 2>/dev/null)
  if [ "$status" = "200" ]; then
    echo "OK  $site -> $status"
  else
    echo "FAIL $site -> $status"
    all_ok=false
  fi
done

echo ""
if $all_ok; then
  echo "All sites operational"
  exit 0
else
  echo "Some sites are down!"
  exit 1
fi
