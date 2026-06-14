#!/bin/bash
# Uptime check for all Wyatt's Notes sites
# Called by .github/workflows/uptime.yml

SITES=(
  "dse.wyattau.com"
  "ib.wyattau.com"
  "alevel.wyattau.com"
  "university.wyattau.com"
  "qualifications.wyattau.com"
  "programming.wyattau.com"
  "infrastructure.wyattau.com"
  "languages.wyattau.com"
  "tools.wyattau.com"
  "wyattsnotes.wyattau.com"
)

echo "=== Wyatt's Notes Uptime Check ==="
echo "Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo ""

all_ok=true
for site in "${SITES[@]}"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" --max-time 15 "https://$site/" 2>/dev/null)
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
