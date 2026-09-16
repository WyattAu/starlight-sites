#!/usr/bin/env python3
"""
Rebuild PracticeProblem options arrays with correct single-quote delimiters.

Handles arrays where ALL quotes are escaped (\\') and/or &quot; pseudo-quotes
are used as delimiters. Walks the array content, identifies element boundaries
(a quote is a delimiter when not inside a string, or when inside a string and
followed by optional space + , or ]), unescapes content, and re-emits clean
'element' pairs.
"""
import re
import sys


def rebuild_array(arr):
    """arr: content between the outer braces of options={[...]}, e.g. ['a', 'b'].
    Returns cleanly quoted array content."""
    s = arr.strip()
    if s.startswith('['):
        s = s[1:]
    if s.endswith(']'):
        s = s[:-1]
    s = s.strip()

    # Decode escapes: \' -> ' ; \" -> " ; \\ -> \\ ; &quot; -> "
    decoded = []
    i, n = 0, len(s)
    while i < n:
        c = s[i]
        if s.startswith('&quot;', i):
            decoded.append('"')
            i += 6
            continue
        if c == '\\' and i + 1 < n:
            nxt = s[i + 1]
            decoded.append(nxt)
            i += 2
            continue
        decoded.append(c)
        i += 1
    text = ''.join(decoded)

    # Now text is the inner list with raw quotes as delimiters and raw
    # apostrophes inside content. Split into elements on delimiter-quotes.
    elems = []
    buf = []
    in_str = False
    i, n = 0, len(text)
    while i < n:
        c = text[i]
        if c == '"':
            # double quotes are always content markers -> keep as-is escaped later
            buf.append('\\"')
            i += 1
            continue
        if c == "'":
            if not in_str:
                # opener
                in_str = True
                buf = []  # reset: start of element
                i += 1
                continue
            else:
                # closer if the rest (after optional space) is , or ] or end
                rest = text[i + 1:].lstrip()
                if rest.startswith(',') or rest.startswith(']') or rest == '':
                    elems.append(''.join(buf).strip())
                    buf = []
                    in_str = False
                    i += 1
                    continue
                else:
                    # content apostrophe
                    buf.append("'")
                    i += 1
                    continue
        if c == ',' and not in_str:
            # separator outside strings: skip
            i += 1
            continue
        buf.append(c)
        i += 1
    if buf and in_str:
        # unterminated: treat buf as last element
        elems.append(''.join(buf).strip())

    elems = [e for e in elems if e]
    return '[' + ', '.join("'" + e.replace('\\', '\\\\').replace("'", "\\'") + "'" for e in elems) + ']'


def process_file(path):
    content = open(path, encoding='utf-8').read()
    lines = content.split('\n')
    count = 0
    for li, line in enumerate(lines):
        if 'PracticeProblem' not in line:
            continue
        idx = 0
        while True:
            oi = line.find('options={', idx)
            if oi == -1:
                break
            # find matching closing brace
            depth = 0
            j = oi + len('options=')
            n = len(line)
            in_s = in_d = in_t = False
            while j < n:
                c = line[j]
                if line.startswith('&quot;', j):
                    in_d = not in_d
                    j += 6
                    continue
                if c == '\\' and j + 1 < n:
                    j += 2
                    continue
                if not in_s and not in_d and not in_t:
                    if c == "'":
                        in_s = True
                    elif c == '"':
                        in_d = True
                    elif c == '`':
                        in_t = True
                    elif c == '{':
                        depth += 1
                    elif c == '}':
                        depth -= 1
                        if depth == 0:
                            break
                    j += 1
                    continue
                if c == in_s:
                    in_s = in_d = in_t = False
                j += 1
            if depth != 0:
                idx = oi + 9
                continue
            inner = line[oi + len('options=') + 1:j - 1]  # inside { ... } minus [ ]
            try:
                rebuilt_inner = rebuild_array(inner)
                new_line = (line[:oi + len('options=')] + '{' + rebuilt_inner + '}' +
                            line[j + 1:])
                if new_line != line:
                    lines[li] = new_line
                    count += 1
                line = new_line
            except Exception as e:
                print(f'  skip {path}:{li+1}: {e}', file=sys.stderr)
            idx = oi + len('options=')
    if count:
        open(path, 'w', encoding='utf-8').write('\n'.join(lines))
    return count


if __name__ == '__main__':
    total = 0
    for f in sys.argv[1:]:
        n = process_file(f)
        total += n
        print(f'{n:3d}  {f}')
    print(f'total: {total}')
