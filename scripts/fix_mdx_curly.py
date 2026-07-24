#!/usr/bin/env python3
"""Escape { and } in MDX markdown text that MDX would parse as JSX expressions.

Strategy:
1. Pre-scan the full file content to find all "protected" regions (frontmatter, code blocks,
   imports, inline code, math $...$, JSX tags including multi-line)
2. For text outside protected regions, escape { and }
"""

import re
import os
import glob
import sys


def find_protected_ranges(content):
    """Find character ranges that should NOT have braces escaped.
    Returns list of (start, end) tuples."""
    ranges = []
    lines = content.split('\n')

    # 1. Frontmatter (first --- to second ---)
    fm_start = None
    fm_count = 0
    for i, line in enumerate(lines):
        if line.strip() == '---':
            fm_count += 1
            if fm_count == 1:
                fm_start = sum(len(l) + 1 for l in lines[:i])
            elif fm_count == 2:
                fm_end = sum(len(l) + 1 for l in lines[:i]) + len(line)
                ranges.append((fm_start, fm_end))
                break

    # 2. Fenced code blocks (``` to ```)
    in_code_block = False
    code_start = None
    pos = 0
    for line in lines:
        if line.strip().startswith('```'):
            if not in_code_block:
                in_code_block = True
                code_start = pos
            else:
                code_end = pos + len(line)
                ranges.append((code_start, code_end))
                in_code_block = False
        pos += len(line) + 1  # +1 for newline

        # 3. Import/export statements (full line)
        pos = 0
        for line in lines:
            stripped = line.strip()
            if stripped.startswith('import ') or stripped.startswith('export '):
                ranges.append((pos, pos + len(line)))
            pos += len(line) + 1

    # 4. Inline code (`...`)
    for m in re.finditer(r'`[^`\n]+`', content):
        ranges.append((m.start(), m.end()))

    # 5. Single-line math $...$ (no newlines)
    for m in re.finditer(r'\$[^$\n]+\$', content):
        ranges.append((m.start(), m.end()))

    # 6. Multi-line math $...\n...\n...$
    # Find $ that are on their own line
    pos = 0
    pending_dollar = None
    for line in lines:
        stripped = line.strip()
        if stripped == '$':
            if pending_dollar is None:
                pending_dollar = pos
            else:
                ranges.append((pending_dollar, pos + len(line)))
                pending_dollar = None
        pos += len(line) + 1

    # 7. JSX/HTML tags - find all <Component ... /> and <Component ...>...</Component>
    # Strategy: find all < that start a tag, then find the matching > or />
    # Handle multi-line by scanning character by character
    pos = 0
    while pos < len(content):
        if content[pos] == '<' and pos + 1 < len(content):
            next_char = content[pos + 1]
            if next_char.isalpha() or next_char in '/!':
                # Start of a tag
                end = pos + 1
                # Skip tag name
                while end < len(content) and (content[end].isalnum() or content[end] in '-_.:'):
                    end += 1

                # If it's a closing tag, just find >
                if content[pos + 1] == '/':
                    gt = content.find('>', end)
                    if gt != -1:
                        ranges.append((pos, gt + 1))
                        pos = gt + 1
                        continue
                    else:
                        pos = end
                        continue

                # Parse attributes until > or />
                in_string = False
                string_char = None
                brace_depth = 0
                tag_end = None

                while end < len(content):
                    c = content[end]

                    if in_string:
                        if c == '\\' and end + 1 < len(content):
                            end += 2
                            continue
                        if c == string_char:
                            in_string = False
                        end += 1
                        continue

                    if c in ('"', "'"):
                        in_string = True
                        string_char = c
                        end += 1
                        continue

                    if c == '{':
                        brace_depth += 1
                        end += 1
                        continue

                    if c == '}':
                        if brace_depth > 0:
                            brace_depth -= 1
                        end += 1
                        continue

                    if c == '>' and brace_depth == 0:
                        tag_end = end + 1
                        break

                    if c == '/' and end + 1 < len(content) and content[end + 1] == '>' and brace_depth == 0:
                        tag_end = end + 2
                        break

                    end += 1

                if tag_end is not None:
                    ranges.append((pos, tag_end))
                    pos = tag_end
                    continue

        pos += 1

    return ranges


def merge_ranges(ranges):
    """Deduplicate and merge overlapping/adjacent ranges."""
    if not ranges:
        return []
    ranges = sorted(set(ranges))
    merged = [ranges[0]]
    for start, end in ranges[1:]:
        if start <= merged[-1][1]:
            merged[-1] = (merged[-1][0], max(merged[-1][1], end))
        else:
            merged.append((start, end))
    return merged


def escape_curly_outside(content, protected_ranges):
    """Escape { and } outside of protected ranges."""
    # Sort and merge overlapping ranges
    protected_ranges = merge_ranges(protected_ranges)

    result = []
    pos = 0

    for start, end in protected_ranges:
        if start > pos:
            # Text before this protected region - escape it
            text = content[pos:start]
            text = text.replace('{', '\\{')
            text = text.replace('}', '\\}')
            result.append(text)
        # Protected region - don't touch
        result.append(content[start:end])
        pos = end

    # Remaining text after last protected region
    if pos < len(content):
        text = content[pos:]
        text = text.replace('{', '\\{')
        text = text.replace('}', '\\}')
        result.append(text)

    return ''.join(result)


def main():
    sites_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'sites')
    mdx_files = glob.glob(os.path.join(sites_dir, '**/src/content/**/*.mdx'), recursive=True)

    changed = 0
    errors = 0
    dry_run = '--dry-run' in sys.argv

    for f in sorted(mdx_files):
        try:
            content = open(f).read()
            protected = find_protected_ranges(content)
            new_content = escape_curly_outside(content, protected)
            if new_content != content:
                if not dry_run:
                    open(f, 'w').write(new_content)
                changed += 1
        except Exception as e:
            errors += 1
            print("ERROR " + f + ": " + str(e), file=sys.stderr)

    print("Changed: " + str(changed))
    print("Errors: " + str(errors))


if __name__ == '__main__':
    main()
