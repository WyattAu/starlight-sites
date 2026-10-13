#!/usr/bin/env python3
"""Repair dead cross-site links whose path carries a stale `/docs` prefix.

When the collections were split into numbered subject directories, a batch of
cross-site links was written as `/docs/<...>` because that was the routing at
the time. Those links 404 now.

This repair is provably safe rather than a judgement call, and the distinction
matters:

  SAFE      the remaining path after dropping the stale prefix is a route that
            exists. The full intended path is preserved, so nothing is guessed
            -- the link now names exactly one real page.

  UNSAFE    dropping the prefix does not yield a route. Choosing a target then
            requires knowing which page the author meant, which is editorial,
            so those are reported and left alone.

Measured on this repository: of 187 distinct dead cross-site links, 50 have
exactly one candidate route and most of those are this pattern. The rest are
reported, not guessed at.
"""

from __future__ import annotations

import argparse
import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITES = ROOT / "sites"

LINK = re.compile(r"(\]\(\s*https?://([a-z0-9-]+)\.wyattau\.com)(/[^)\s#]*)?")


def domain_of(site_dir: Path) -> str | None:
    cfg = site_dir / "astro.config.mjs"
    if not cfg.exists():
        return None
    m = re.search(r"site:\s*['\"]https?://([a-z0-9-]+)\.wyattau\.com", cfg.read_text(encoding="utf-8"))
    return m.group(1) if m else None


def routes_of(site_dir: Path) -> set[str]:
    routes = {"/"}
    docs = site_dir / "src" / "content" / "docs"
    if not docs.exists():
        return routes
    for f in docs.rglob("*"):
        if f.suffix not in (".md", ".mdx"):
            continue
        parts = list(f.relative_to(docs).with_suffix("").parts)
        if parts and parts[-1] == "index":
            parts.pop()
        if parts:
            routes.add("/" + "/".join(parts) + "/")
    return routes


def norm(r: str) -> str:
    return "/" if not r or r == "/" else r.rstrip("/")


def candidate_paths(target: str, slug: str, routes: set[str]) -> list[str]:
    """Progressively drop stale leading segments, most-specific first.

    `/docs/ib/chemistry/x` -> `/chemistry/x`
    The redundant site-slug segment is dropped too, because that is exactly
    what `/docs/<slug>/` was before the collections split.
    """
    segs = [s for s in target.split("/") if s]
    if not segs or segs[0] != "docs":
        return []
    rest = segs[1:]
    if rest and rest[0] == slug:
        rest = rest[1:]
    if not rest:
        return []
    return ["/" + "/".join(rest) + "/"]


def renumber(target: str, routes: set[str]) -> str | None:
    """Restore numeric directory prefixes that the subject split introduced.

    `/docs/classical-mechanics` became `/1-classical-mechanics`. The slug is
    unchanged and only the number is restored, so nothing about which page is
    meant is guessed -- the directory is literally `<number>-<slug>`.

    The lookup is against exact top-level directory names. An earlier version
    matched `/<n>-<slug>` anywhere in a route, which also matched the prefix of
    every page *under* that directory and so matched 16 routes instead of one.
    """
    segs = [s for s in target.split("/") if s]
    if not segs or segs[0] != "docs":
        return None
    rest = segs[1:]
    if not rest:
        return None
    head = rest[0]
    if re.match(r"^\d+-", head):
        return None
    # slug -> the single numbered directory that carries it
    numbered: dict[str, str] = {}
    clash: set[str] = set()
    for r in routes:
        first = r.strip("/").split("/")[0] if r.strip("/") else ""
        mt = re.match(r"^(\d+)-(.+)$", first)
        if not mt:
            continue
        slug = mt.group(2)
        if slug in numbered and numbered[slug] != first:
            clash.add(slug)
        numbered[slug] = first
    for slug in clash:
        numbered.pop(slug, None)
    if head not in numbered:
        return None
    cand = "/" + "/".join([numbered[head]] + rest[1:]) + "/"
    return cand if norm(cand) in routes else None


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true")
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--report-unfixed", action="store_true")
    ap.add_argument("roots", nargs="*", help="optional roots (default: sites/)")
    args = ap.parse_args()

    scan_roots = [Path(r).resolve() for r in args.roots] or [SITES]
    # Accept the repository root as well as sites/ or a single site.
    expanded: list[Path] = []
    for r in scan_roots:
        if (r / "sites").is_dir():
            expanded.append(r / "sites")
        else:
            expanded.append(r)
    scan_roots = expanded

    by_host: dict[str, set[str]] = {}
    slug_of: dict[str, str] = {}
    for root in scan_roots:
        # A root is either a site directory or a directory of sites.
        candidates = []
        if (root / "astro.config.mjs").exists():
            candidates = [root]
        elif root.is_dir():
            candidates = [d for d in sorted(root.iterdir()) if (d / "astro.config.mjs").exists()]
        for site in candidates:
            host = domain_of(site)
            if host:
                by_host[host] = {norm(r) for r in routes_of(site)}
                slug_of[host] = site.name

    fixed = 0
    changed_files = 0
    unresolved: Counter = Counter()

    for p in sorted(
        q
        for root in scan_roots
        for q in (root.rglob("*") if root.is_dir() else [root])
        if q.is_file()
    ):
        if p.suffix not in (".md", ".mdx"):
            continue
        if "zh" in p.parts or "dist" in p.parts:
            continue
        try:
            text = p.read_text(encoding="utf-8")
        except Exception:
            continue
        out = []
        touched = 0
        for line in text.split("\n"):
            def repl(m: re.Match) -> str:
                host, target = m.group(2), m.group(3) or "/"
                routes = by_host.get(host)
                if not routes:
                    return m.group(0)
                if norm(target) in routes:
                    return m.group(0)
                candidates = candidate_paths(target, slug_of[host], routes)
                renumbered = renumber(target, routes)
                if renumbered:
                    candidates.append(renumbered)
                for cand in candidates:
                    if norm(cand) in routes:
                        nonlocal touched
                        touched += 1
                        return m.group(1) + cand
                unresolved[f"https://{host}.wyattau.com{target}"] += 1
                return m.group(0)

            out.append(LINK.sub(repl, line))
        if touched:
            changed_files += 1
            fixed += touched
            if args.apply and not args.check:
                p.write_text("\n".join(out), encoding="utf-8")

    print(f"repaired {fixed} link(s) across {changed_files} file(s)")
    if args.report_unfixed and unresolved:
        print(f"unresolved (editorial, left alone): {len(unresolved)} distinct")
        for k, v in unresolved.most_common(12):
            print(f"   {k}")
    if args.check and fixed:
        print("  -> remaining; run scripts/fix-cross-site-docs-prefix.py --apply")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())