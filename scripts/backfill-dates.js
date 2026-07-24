// Backfill missing date frontmatter from git commit history
// Usage: node scripts/backfill-dates.js [--dry-run]
import { execSync } from 'child_process';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const dryRun = process.argv.includes('--dry-run');
const root = process.cwd();
let fixed = 0;
let skipped = 0;

function findFiles(dir, pattern) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory() && entry !== 'node_modules' && entry !== 'dist') {
      results.push(...findFiles(full, pattern));
    } else if (st.isFile() && (entry.endsWith('.md') || entry.endsWith('.mdx'))) {
      results.push(full);
    }
  }
  return results;
}

const sitesDir = join(root, 'sites');
const sites = readdirSync(sitesDir).filter(s => {
  try { return statSync(join(sitesDir, s)).isDirectory(); } catch { return false; }
});

for (const site of sites) {
  const docsDir = join(sitesDir, site, 'src', 'content', 'docs');
  try { statSync(docsDir); } catch { continue; }
  
  const files = findFiles(docsDir, /\.mdx?$/);
  for (const fullPath of files) {
    try {
      const relPath = fullPath.replace(root + '/', '');
      const content = readFileSync(fullPath, 'utf-8');
      
      const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
      if (!fmMatch) { skipped++; continue; }
      
      const frontmatter = fmMatch[1];
      if (/^date\s*:/m.test(frontmatter)) { skipped++; continue; }
      
      let gitDate;
      try {
        const result = execSync(
          'git log -1 --format=%aI -- "' + relPath + '"',
          { cwd: root, encoding: 'utf-8', timeout: 5000 }
        ).trim();
        if (!result) { skipped++; continue; }
        gitDate = result;
      } catch { skipped++; continue; }
      
      const newFrontmatter = frontmatter.replace(
        /^(title:)/m,
        'date: ' + gitDate + '\n$1'
      );
      
      const newContent = content.replace(fmMatch[1], newFrontmatter);
      
      if (!dryRun) {
        writeFileSync(fullPath, newContent, 'utf-8');
      }
      
      fixed++;
      if (fixed % 100 === 0) {
        console.log('Progress: ' + fixed + ' files fixed, ' + skipped + ' skipped');
      }
    } catch (e) {
      errors++;
    }
  }
}

console.log('\nDone! Fixed: ' + fixed + ', Skipped: ' + skipped);
if (dryRun) console.log('(Dry run - no files were modified)');
