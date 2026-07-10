#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve('/home/wyatt/dev/src/github.com/WyattAu/starlight-sites/sites');
const ISSUES = [];
let FILE_COUNT = 0;

const BLOCK_TAGS = new Set([
  'div','details','summary','pre','blockquote','table','tr','td','th',
  'thead','tbody','tfoot','ul','ol','li','dl','dt','dd','section',
  'article','nav','aside','header','footer','main','figure','figcaption',
  'form','fieldset','legend','center','fieldset'
]);

function rel(p) { return p.replace(ROOT + '/', ''); }

function collectFiles(dir, out) {
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch (_) { return; }
  for (const e of entries) {
    if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) collectFiles(fp, out);
    else if (e.isFile() && (e.name.endsWith('.md') || e.name.endsWith('.mdx'))) out.push(fp);
  }
}

function scan(file) {
  const src = fs.readFileSync(file, 'utf-8');
  const lines = src.split('\n');
  const N = lines.length;
  const fn = rel(file);

  let inFM = false, fmStart = -1, fmClosed = false;
  let inCode = false, codeType = '', codeLine = -1;
  let inMath = false, mathLine = -1;
  let inTable = false, tblStart = -1, tblCols = -1, tblHasSep = false, tblRows = [];
  let lastHLvl = 0, lastHLine = -1;
  let blankRun = 0;
  const tags = [];

  if (N > 0 && lines[0].trim() === '---') { inFM = true; fmStart = 0; }

  for (let i = 0; i < N; i++) {
    const raw = lines[i];
    const tr = raw.trim();
    const trL = raw.trimStart();

    // frontmatter
    if (inFM) {
      if (i > fmStart && tr === '---') { inFM = false; fmClosed = true; }
      continue;
    }

    // code fence detection (priority)
    if (!inMath) {
      const fenceM = trL.match(/^(```+)|^(~~~+)/);
      if (fenceM) {
        const f = fenceM[1] || fenceM[2];
        const marker = f[0];
        const len = f.length;
        if (!inCode) {
          inCode = true; codeType = marker; codeLine = i;
          continue;
        } else if (marker === codeType && len >= 3) {
          inCode = false; codeType = ''; codeLine = -1;
          continue;
        } else {
          ISSUES.push({ f: fn, l: i + 1, c: trL.indexOf(f) + 1, cat: 'NESTED CODEBLOCKS', sev: 'low',
            desc: `Nested ${f.trim()} inside ${codeType} code block (opened line ${codeLine + 1})` });
          continue;
        }
      }
    }
    if (inCode) {
      // check nesting inside
      const m2 = trL.match(/^(```+)|^(~~~+)/);
      if (m2) {
        const f2 = m2[1] || m2[2];
        if (f2[0] === codeType) {
          ISSUES.push({ f: fn, l: i + 1, c: trL.indexOf(f2) + 1, cat: 'NESTED CODEBLOCKS', sev: 'low',
            desc: `Nested ${f2.trim()} inside ${codeType} code block (opened line ${codeLine + 1})` });
        }
      }
      continue;
    }

    // math blocks
    if (tr === '$$') {
      if (!inMath) { inMath = true; mathLine = i; continue; }
      else { inMath = false; mathLine = -1; continue; }
    }
    if (tr.startsWith('$$') && tr.length > 2) {
      const ends = tr.endsWith('$$') && tr.length > 4;
      if (!inMath) { inMath = !ends; mathLine = i; if (ends) continue; }
      else if (ends) { inMath = false; mathLine = -1; continue; }
    }
    if (inMath && tr.endsWith('$$') && tr !== '$$') { inMath = false; mathLine = -1; continue; }
    if (inMath) continue;

    // raw template syntax
    if (/\{@render\b/.test(tr) || /\{#each\b/.test(tr) || /\{#if\b/.test(tr) || /\{@html\b/.test(tr) || /\{@debug\b/.test(tr)) {
      ISSUES.push({ f: fn, l: i + 1, c: 1, cat: 'RAW TEMPLATE SYNTAX', sev: 'high',
        desc: `Astro/Svelte template syntax: ${tr.substring(0, 80)}` });
    }

    // admonitions
    if (/^:::{1,3}\s*/.test(trL)) {
      ISSUES.push({ f: fn, l: i + 1, c: 1, cat: 'ADMONITION BLOCKS', sev: 'low',
        desc: `::: found (verify matching close exists): ${tr.substring(0, 60)}` });
    }

    // consecutive blanks
    if (tr === '') { blankRun++; if (blankRun > 3) {
      ISSUES.push({ f: fn, l: i + 1, c: 1, cat: 'CONSECUTIVE BLANK LINES', sev: 'low',
        desc: `>3 consecutive blank lines (run ${blankRun})` });
    }} else { blankRun = 0; }

    // inline math
    const noDbl = raw.replace(/\$\$/g, '');
    const dc = (noDbl.match(/\$/g) || []).length;
    if (dc % 2 !== 0) {
      ISSUES.push({ f: fn, l: i + 1, c: 1, cat: 'INLINE MATH DELIMITERS', sev: 'medium',
        desc: `Unclosed inline math (odd $ count: ${dc})` });
    }

    // tables
    const pipeC = (raw.match(/\|/g) || []).length;
    const isSep = /^\s*\|?\s*[-:]+\s*[-:| ]+\|?\s*$/.test(raw) || /^\s*\|[-:| ]+\|/.test(raw);
    if (/^\s*\|/.test(raw) && pipeC >= 2) {
      if (!isSep) {
        if (!inTable) {
          inTable = true; tblStart = i; tblCols = pipeC; tblHasSep = false;
          tblRows = [{ ln: i, cols: pipeC }];
        } else {
          tblRows.push({ ln: i, cols: pipeC });
          if (pipeC !== tblCols) {
            ISSUES.push({ f: fn, l: i + 1, c: 1, cat: 'TABLE ISSUES', sev: 'high',
              desc: `Inconsistent columns: expected ${tblCols} got ${pipeC} (table line ${tblStart + 1})` });
          }
        }
      } else {
        if (inTable) tblHasSep = true;
        tblRows.push({ ln: i, cols: pipeC, sep: true });
      }
    } else if (inTable) {
      finalizeTable(fn, tblStart, tblCols, tblHasSep, tblRows);
      inTable = false; tblStart = -1; tblCols = -1; tblHasSep = false; tblRows = [];
    }

    // headings
    const hm = trL.match(/^(#{1,6})\s+(.+)$/);
    if (hm) {
      const lvl = hm[1].length;
      const txt = hm[2].trim();
      if (txt === '') {
        ISSUES.push({ f: fn, l: i + 1, c: 1, cat: 'HEADING ISSUES', sev: 'medium',
          desc: `Empty heading (h${lvl})` });
      }
      if (lastHLvl > 0 && lvl > lastHLvl + 1) {
        ISSUES.push({ f: fn, l: i + 1, c: 1, cat: 'HEADING ISSUES', sev: 'medium',
          desc: `Skipped level: h${lastHLvl} -> h${lvl} (prev line ${lastHLine + 1})` });
      }
      lastHLvl = lvl; lastHLine = i;
    }

    // malformed HTML - track open/close
    const opens = raw.match(/<(\w+)[^>]*>/g);
    if (opens) for (const t of opens) {
      const tn = t.match(/<(\w+)/)[1];
      if (!/\/>$/.test(t) && BLOCK_TAGS.has(tn)) tags.push({ tag: tn, ln: i });
    }
    const closes = raw.match(/<\/(\w+)>/g);
    if (closes) for (const t of closes) {
      const tn = t.match(/<\/(\w+)>/)[1];
      const idx = tags.map(x => x.tag).lastIndexOf(tn);
      if (idx >= 0) tags.splice(idx, 1);
    }

    // image issues
    const imgs = raw.match(/!\[([^\]]*)\]\(([^)]*)\)/g);
    if (imgs) for (const img of imgs) {
      const m = img.match(/!\[([^\]]*)\]\(([^)]*)\)/);
      if (m && (!m[2] || m[2].trim() === '')) {
        ISSUES.push({ f: fn, l: i + 1, c: raw.indexOf(img) + 1, cat: 'IMAGE ISSUES', sev: 'high',
          desc: `Image with empty src (alt: "${m[1]}")` });
      }
    }
  }

  // EOF checks
  if (inCode) {
    ISSUES.push({ f: fn, l: N, c: 1, cat: 'CODE BLOCKS', sev: 'critical',
      desc: `Unclosed ${codeType} code block (opened line ${codeLine + 1})` });
  }
  if (inMath) {
    ISSUES.push({ f: fn, l: N, c: 1, cat: 'MATH BLOCKS', sev: 'critical',
      desc: `Unclosed $$ math block (opened line ${mathLine + 1})` });
  }
  if (inFM) {
    ISSUES.push({ f: fn, l: N, c: 1, cat: 'FRONTMATTER', sev: 'critical',
      desc: 'Unclosed frontmatter (--- opened but never closed)' });
  }
  if (tags.length) {
    ISSUES.push({ f: fn, l: N, c: 1, cat: 'MALFORMED HTML', sev: 'medium',
      desc: `Unclosed HTML tags: ${tags.map(t => `<${t.tag}> (line ${t.ln + 1})`).join(', ')}` });
  }
  if (inTable) finalizeTable(fn, tblStart, tblCols, tblHasSep, tblRows);

  // empty content
  const firstBody = fmClosed ? lines.findIndex((l, idx) => idx > 0 && l.trim() === '---') : -1;
  const body = lines.slice(firstBody + 1).filter(l => l.trim() !== '' && !l.trimStart().startsWith('import '));
  if (body.length === 0) {
    ISSUES.push({ f: fn, l: 1, c: 1, cat: 'EMPTY CONTENT', sev: 'medium',
      desc: 'No content after frontmatter' });
  }

  // broken links
  const dir = path.dirname(file);
  const lr = /\[([^\]]*)\]\(([^)]*)\)/g;
  let m;
  while ((m = lr.exec(src)) !== null) {
    const url = m[2];
    if (!url || url.startsWith('http') || url.startsWith('#') || url.startsWith('/') || url.includes(' ')) continue;
    if (!url.endsWith('.md') && !url.endsWith('.mdx')) continue;
    const resolved = path.resolve(dir, decodeURIComponent(url));
    if (!fs.existsSync(resolved)) {
      const ln = src.substring(0, m.index).split('\n').length;
      ISSUES.push({ f: fn, l: ln, c: m.index + 1, cat: 'BROKEN LINKS', sev: 'high',
        desc: `Broken .md link: "${url}" (text: "${m[1]}")` });
    }
  }
}

function finalizeTable(fn, start, cols, hasSep, rows) {
  if (!hasSep && rows.length > 0) {
    const first = rows.find(r => !r.sep);
    if (first) {
      ISSUES.push({ f: fn, l: start + 1, c: 1, cat: 'TABLE ISSUES', sev: 'high',
        desc: `Missing header separator (|---|) after line ${start + 1}` });
    }
  }
  for (const r of rows) {
    if (!r.sep && r.cols > 8) {
      ISSUES.push({ f: fn, l: r.ln + 1, c: 1, cat: 'TABLE OVERFLOW', sev: 'medium',
        desc: `Table row has ${r.cols} columns (>8). Table started line ${start + 1}` });
    }
  }
}

// --- Main ---
console.error('Collecting files...');
const files = [];
collectFiles(ROOT, files);
console.error(`Found ${files.length} .md/.mdx files. Scanning...`);

const t0 = Date.now();
for (let i = 0; i < files.length; i++) {
  scan(files[i]);
  if ((i + 1) % 500 === 0) console.error(`  ${i + 1}/${files.length} scanned...`);
}
const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
console.error(`Scan complete in ${elapsed}s. ${ISSUES.length} issues found.`);

// Sorting: critical first, then high, medium, low
const SEV_ORDER = { critical: 0, high: 1, medium: 2, low: 3 };
ISSUES.sort((a, b) => {
  const sa = SEV_ORDER[a.sev] || 99;
  const sb = SEV_ORDER[b.sev] || 99;
  if (sa !== sb) return sa - sb;
  if (a.f !== b.f) return a.f.localeCompare(b.f);
  return a.l - b.l;
});

// Output
for (const iss of ISSUES) {
  process.stdout.write(`${iss.f}:${iss.l}:${iss.c} | ${iss.cat} | ${iss.sev.toUpperCase()} | ${iss.desc}\n`);
}

// Summary
const cats = {};
const sevs = {};
for (const iss of ISSUES) {
  cats[iss.cat] = (cats[iss.cat] || 0) + 1;
  sevs[iss.sev] = (sevs[iss.sev] || 0) + 1;
}
process.stdout.write(`\n${'='.repeat(80)}\n`);
process.stdout.write(`AUDIT SUMMARY\n`);
process.stdout.write(`${'='.repeat(80)}\n`);
process.stdout.write(`Files scanned: ${files.length}\n`);
process.stdout.write(`Total issues:  ${ISSUES.length}\n`);
process.stdout.write(`Time elapsed:  ${elapsed}s\n`);
process.stdout.write(`\n--- By Severity ---\n`);
for (const s of ['critical', 'high', 'medium', 'low']) {
  if (sevs[s]) process.stdout.write(`  ${s.toUpperCase()}: ${sevs[s]}\n`);
}
process.stdout.write(`\n--- By Category ---\n`);
for (const [c, n] of Object.entries(cats).sort((a, b) => b[1] - a[1])) {
  process.stdout.write(`  ${c}: ${n}\n`);
}

// Group critical by file
const critFiles = ISSUES.filter(i => i.sev === 'critical');
if (critFiles.length) {
  process.stdout.write(`\n--- CRITICAL ISSUES BY FILE ---\n`);
  const byFile = {};
  for (const c of critFiles) {
    if (!byFile[c.f]) byFile[c.f] = [];
    byFile[c.f].push(c);
  }
  for (const [f, iss] of Object.entries(byFile).sort()) {
    process.stdout.write(`  ${f} (${iss.length})\n`);
    for (const i of iss) {
      process.stdout.write(`    L${i.l}: ${i.cat} | ${i.desc}\n`);
    }
  }
}
