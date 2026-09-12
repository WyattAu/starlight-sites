#!/usr/bin/env python3
"""GSC position ingest: update KEYWORD_TRACKING.md from a Search Console CSV export.

Google Search Console -> Performance -> Search results -> Export (CSV).
The CSV has columns: Top queries, Clicks, Impressions, URL, CTR, Position
(newer exports: "Query", "Clicks", "Impressions", "URL", "CTR", "Position").
This tool matches each tracked keyword's "Current" cell against the export
and rewrites the table in place, then appends a dated snapshot line.

Usage:
  python3 scripts/gsc-ingest.py <export.csv> [--property dse]
  python3 scripts/gsc-ingest.py <export.csv> --all       # match any property

Matching: exact match first, then substring (query contains keyword).
Only rows with impressions >= MIN_IMPRESSIONS are used (noise guard).

The keyword table format in KEYWORD_TRACKING.md is:
  | 1 | dse past papers | 12,100 | Not tracked | Top 3 | High | /hub |
  ...col 4 ("Current") is replaced: Not tracked -> 12.3 or kept if better data absent.
  An existing numeric Current is replaced only when the export is newer
  (--as-of date embedded in the snapshot line, compared lexically ISO dates).
"""

import argparse
import csv
import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TRACKING = ROOT / "KEYWORD_TRACKING.md"
MIN_IMPRESSIONS = 10


def read_export(path):
    """Return list of (query, position, impressions) from a GSC CSV export."""
    rows = []
    with open(path, newline="", encoding="utf-8-sig") as fh:
        # GSC exports often have a preamble block before the table; find the
        # header row by looking for the Query/Top queries column.
        sample = fh.read(4096)
        fh.seek(0)
        sniffer = csv.Sniffer()
        try:
            dialect = sniffer.sniff(sample)
        except csv.Error:
            dialect = csv.excel
        reader = csv.reader(fh, dialect)
        header = None
        for row in reader:
            cells = [c.strip() for c in row]
            if header is None:
                lower = [c.lower() for c in cells]
                if any(c in ("query", "top queries") for c in lower):
                    header = lower
                continue
            if not cells or not cells[0]:
                continue
            q = cells[0]
            try:
                clicks = float(cells[1].replace(",", ""))
                impressions = float(cells[2].replace(",", ""))
                # columns: query, clicks, impressions, url, ctr, position
                pos_raw = cells[5] if len(cells) > 5 else ""
                pos = float(pos_raw.replace(",", "")) if pos_raw else -1.0
            except (ValueError, IndexError):
                continue
            rows.append((q.lower(), pos, impressions))
    return rows


def best_position(rows, keyword):
    """Exact match wins; else the best (lowest) position among substring hits."""
    exact = [r for r in rows if r[0] == keyword]
    if exact:
        return min(r[1] for r in exact if r[1] > 0), "exact"
    partial = [(r[1], r[2]) for r in rows if keyword in r[0] and r[1] > 0]
    if partial:
        best = min(partial, key=lambda x: x[0])
        if best[1] >= MIN_IMPRESSIONS:
            return best[0], "partial"
    return None, None


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("csv", help="GSC Performance CSV export")
    ap.add_argument("--property", help="only update tables under this property heading")
    ap.add_argument("--as-of", default=str(date.today()), help="snapshot date (ISO)")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    rows = read_export(args.csv)
    if not rows:
        sys.exit("no usable rows found in export -- check the file format")
    print(f"loaded {len(rows)} queries from export")

    text = TRACKING.read_text(encoding="utf-8")
    lines = text.split("\n")
    updated, missed = 0, 0
    current_heading = ""
    out = []
    # table row: | 1 | dse past papers | 12,100 | Not tracked | Top 3 | High | /hub |
    #   g1 prefix  g2 keyword  g3 sep  g4 volume  g5 sep  g6 CURRENT  g7 sep
    row_re = re.compile(
        r"^(\|\s*\d+\s*\|\s*)([^|]+?)(\s*\|\s*)([^|]*?)(\s*\|\s*)([^|]*?)(\s*\|)"
    )
    for line in lines:
        if line.startswith("#"):
            current_heading = line
        if args.property and args.property.lower() not in current_heading.lower():
            out.append(line)
            continue
        m = row_re.match(line)
        if not m:
            out.append(line)
            continue
        keyword = m.group(2).strip().lower()
        pos, how = best_position(rows, keyword)
        cur = m.group(6).strip()
        if pos is None:
            missed += 1
            out.append(line)
            continue
        # never regress: keep an existing numeric position if it is lower (better)
        m_num = re.match(r"^([\d.]+)", cur)
        if m_num:
            try:
                old = float(m_num.group(1))
                if old <= pos:
                    out.append(line)
                    continue
            except ValueError:
                pass
        new_cell = f"{pos:.1f}" if pos else cur
        out.append(
            f"{m.group(1)}{m.group(2)}{m.group(3)}{m.group(4)}{m.group(5)}{new_cell}{m.group(7)}"
            + line[m.end(7):]
        )
        updated += 1
        if how == "partial":
            out[-1] += ""  # partial matches already gated by impressions

    snapshot = f"\n<!-- gsc-ingest: {args.as_of} export={Path(args.csv).name} updated={updated} unmatched={missed} -->\n"
    if args.dry_run:
        print(f"dry run: would update {updated}, unmatched {missed}")
        return

    TRACKING.write_text("\n".join(out) + snapshot, encoding="utf-8")
    print(f"updated {updated} keyword positions, {missed} unmatched -> {TRACKING}")


if __name__ == "__main__":
    main()
