#!/usr/bin/env bash
# check-content-gates.sh — run every content gate in one command.
#
# Nine gates exist to protect the content layer, and keeping them in mind
# before each commit is not realistic: the llms.txt freshness gate caught a
# commit that changed content in 40 files without regenerating the crawler
# indexes, which is exactly the mistake this script exists to prevent.
#
# Run this before `git commit` on any commit that touches
# sites/*/src/content/docs. It is the same set ci.yml and deploy.yml run, in
# the same order, so a green run here means the gate job will be green.
#
# Content-scope only: no astro build, no e2e. Those are CI-only.
set -uo pipefail

cd "$(dirname "$0")/.." || exit 1

FAILED=()

run () {
  local name="$1"
  shift
  printf '%-34s' "$name"
  if out=$("$@" 2>&1); then
    echo 'ok'
  else
    echo 'FAIL'
    printf '%s\n' "$out" | tail -20 | sed 's/^/    /'
    FAILED+=("$name")
  fi
}

# Biome runs on the whole repo, not just content, but it is in the deploy gate
# so it belongs here: a formatting error in a test file fails the rollout as
# surely as a content defect does.
run 'biome'                   bunx biome check .

run 'aside directives'        node scripts/lint-asides.js
run 'mdx parse'               node --max-old-space-size=2048 scripts/lint-mdx-parse.js
run 'display math delimiters' node --max-old-space-size=1024 scripts/fix-display-math.mjs --check
run 'prose damage'            python3 scripts/fix-prose-damage.py --check
run 'duplicate sections'      node --max-old-space-size=1024 scripts/fix-duplicate-blocks.mjs --check
run 'latex parseability'      node --max-old-space-size=2048 scripts/fix-latex-braces.mjs --check
run 'table shape'             node --max-old-space-size=2048 scripts/lint-tables.mjs --check
run 'llms.txt freshness'      node scripts/generate-llms-txt.js --check
run 'content depth'           node scripts/lint-depth.js
run 'content validation'      node scripts/lint-content.js
run 'description validation'  node scripts/lint-descriptions.js
run 'no emoji'                node scripts/lint-no-emoji.js
run 'hand-wave detection'     node scripts/lint-handwaves.js
run 'latex corruption'        node scripts/lint-latex.js
run 'forward references'      node scripts/lint-forward-refs.js
run 'shared-asset integrity'  node scripts/sync-shared.mjs --check

echo
if [ ${#FAILED[@]} -eq 0 ]; then
  echo 'All content gates green.'
  exit 0
fi

echo "${#FAILED[@]} gate(s) failed: ${FAILED[*]}"
exit 1
