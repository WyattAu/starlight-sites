#!/usr/bin/env python3
"""Print the latest deployments from a Cloudflare Pages deployments response."""

import json
import sys

d = json.load(open(sys.argv[1]))
if not d.get("success"):
    print("ERROR:", json.dumps(d.get("errors"))[:300])
    sys.exit(0)
for dep in d.get("result", [])[:3]:
    env = dep.get("environment")
    stage = (dep.get("latest_stage") or {}).get("stage")
    print(env, stage, dep.get("url"))
