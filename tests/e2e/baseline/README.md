# GUI Snapshot Baselines

This directory holds optional structural DOM baselines used by
`tests/e2e/gui-snapshot.js` for drift detection.

## Format

One JSON file per site, keyed by route path:

```json
{
  "/": {
    "hasNav": true,
    "hasMain": true,
    "hasFooter": true,
    "h2Count": 4,
    "linkCount": 38
  },
  "/maths/": { "...": "..." }
}
```

## Generating a baseline

After confirming a build reflects the intended design, generate a baseline
from the captured snapshots:

```bash
# Build + capture (DOM-only without Playwright; with screenshots if installed)
node tests/e2e/gui-snapshot.js dse --no-build

# Promote the captured snapshots into a committed baseline
node -e '
  const fs=require("fs");
  const site="dse";
  const dir="/tmp/gui-snapshots/"+site;
  const out={};
  for(const f of fs.readdirSync(dir)){
    if(!f.endsWith(".dom.json")) continue;
    const page="/"+f.replace(/\.dom\.json$/,"").replace(/_/g,"/")+"/";
    const key = page==="//" ? "/" : page;
    out[key]=JSON.parse(fs.readFileSync(dir+"/"+f,"utf8"));
  }
  fs.writeFileSync("tests/e2e/baseline/"+site+".json", JSON.stringify(out,null,2));
'
```

## Drift semantics

The comparison ignores volatile fields (`htmlSize`, `title`, `h1`). Any other
field that diverges from the baseline is reported as drift. Absence of a
baseline file simply disables drift detection for that site (no failure).
