#!/usr/bin/env python3
"""Replace non-standard terms with the standard ones, scoped by site.

"Directly connected" is ordinary English and is correct in this repository
elsewhere -- BGP's "directly connected" routes and neighbours are standard
networking vocabulary. A blanket find-and-replace across all 45 sites would have
damaged every one of those uses, so the substitution is scoped to the sites whose
subjects have no use for the phrase.

Run after scripts/lint-terminology.js reports the findings.
"""

import argparse
import re
import sys
from pathlib import Path

# site -> {non-standard term: standard term}
SITE_SCOPED = {
    "mathematics": {
        "directly connected": "simply connected",
        "directly-connected": "simply connected",
    },
}

# Case is preserved for the shapes that matter: sentence-initial, and the
# title-case and all-caps forms used in headings and table cells. Title case is
# a regex-unsafe case to handle by hand -- `Directly Connected` is neither the
# lower-case nor the sentence-case form -- so it is listed explicitly. Missing it
# would leave a heading reading "Directly Connected Spaces" while every
# occurrence around it had been corrected.
CASED = {
    "directly connected": {
        "Directly connected": "Simply connected",
        "Directly Connected": "Simply Connected",
        "DIRECTLY CONNECTED": "SIMPLY CONNECTED",
    },
}


def fix_site(site: str, text: str) -> tuple[str, int]:
    count = 0
    for bad, good in SITE_SCOPED.get(site, {}).items():
        for bad_form, good_form in CASED.get(bad, {}).items():
            pattern = rf"\b{re.escape(bad_form)}\b"
            text, n = re.subn(pattern, good_form, text)
            count += n
        pattern = rf"\b{re.escape(bad)}\b"
        # Preserve the capitalisation of whatever was matched.
        text, n = re.subn(
            pattern,
            lambda m: CASED.get(bad, {}).get(m.group(0), good),
            text,
        )
        count += n
    return text, count


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()

    changed_files = 0
    total = 0
    for site, rules in SITE_SCOPED.items():
        docs = Path("sites") / site / "src" / "content" / "docs"
        if not docs.exists():
            continue
        for path in sorted(docs.rglob("*")):
            if path.suffix not in (".md", ".mdx"):
                continue
            original = path.read_text(encoding="utf-8")
            updated, count = fix_site(site, original)
            if count and updated != original:
                total += count
                changed_files += 1
                print(f"  {count:3d}  {path}")
                if not args.check:
                    path.write_text(updated, encoding="utf-8")

    if total == 0:
        print("terminology               ok  nothing to correct")
        return 0

    verb = "corrected" if not args.check else "would correct"
    print(f"\n{verb} {total} occurrence(s) across {changed_files} file(s).")
    if args.check:
        print("Dry run. Re-run without --check to write.")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
