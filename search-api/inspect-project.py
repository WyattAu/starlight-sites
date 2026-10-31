#!/usr/bin/env python3
"""Print the salient fields of a Cloudflare Pages project API response."""

import json
import sys

d = json.load(open(sys.argv[1]))
if not d.get("success"):
    print("ERROR:", json.dumps(d.get("errors"))[:300])
    sys.exit(0)
r = d["result"]
print("production_branch:", r.get("production_branch"))
print("domains:", r.get("domains"))
dep = r.get("latest_deployment") or {}
print(
    "latest:",
    json.dumps(
        {
            k: dep.get(k)
            for k in ["environment", "url", "latest_stage", "created_on"]
        },
        default=str,
    )[:400],
)
