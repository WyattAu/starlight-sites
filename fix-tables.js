const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  for (const d of fs.readdirSync(dir, {withFileTypes:true})) {
    const full = path.join(dir, d.name);
    if (d.isDirectory() && !['node_modules','dist','.git'].includes(d.name)) results.push(...walk(full));
    else if (d.isFile() && (d.name.endsWith('.md') || d.name.endsWith('.mdx'))) results.push(full);
  }
  return results;
}

const root = '/home/wyatt/dev/src/github.com/WyattAu/starlight-sites/sites';
const files = walk(root);
let tablesFixed = 0;
let warnings = [];

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  let inCode = false;
  let inTable = false;
  let tableStart = -1;
  let headerCols = 0;
  let sepRow = -1;
  let modified = false;
  const result = [...lines];

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();

    // Track code blocks
    if ((trimmed.startsWith('```') || trimmed.startsWith('~~~')) && !trimmed.startsWith('````')) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;

    // Table detection
    if (trimmed.startsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableStart = i;
        headerCols = trimmed.split('|').length - 1;

        // Check if next line is a separator
        if (i + 1 < lines.length) {
          const nextTrim = lines[i + 1].trim();
          if (nextTrim.startsWith('|') && nextTrim.includes('---')) {
            // Has separator
            sepRow = i + 1;
            const sepCols = nextTrim.split('|').length - 1;
            // Check column consistency for the rest of the table
            // We'll handle this below as we iterate
          } else if (nextTrim.startsWith('|') && !nextTrim.includes('---')) {
            // Missing separator! Add one
            const sep = '|' + Array(headerCols).fill(' --- ').join('|') + '|';
            result.splice(i + 1, 0, sep);
            modified = true;
            tablesFixed++;
            sepRow = i + 1;
            i++; // skip the newly added sep
          }
        }
      } else {
        // Inside table, check column consistency against separator
        if (sepRow >= 0 && i !== sepRow) {
          const sepCols = result[sepRow].split('|').length - 1;
          const rowCols = trimmed.split('|').length - 1;
          // Check if row has extra pipes beyond the first (style) difference
          // A leading pipe before content and trailing pipe after content is normal
          if (rowCols > sepCols) {
            warnings.push(`${f}:${i + 1} - Row has ${rowCols} columns but separator has ${sepCols} columns: "${trimmed.substring(0, 80)}"`);
          }
        }
      }
    } else if (trimmed === '' || !trimmed.startsWith('|')) {
      if (inTable) {
        inTable = false;
        tableStart = -1;
        headerCols = 0;
        sepRow = -1;
      }
    }
  }

  if (modified) {
    fs.writeFileSync(f, result.join('\n'), 'utf8');
  }
}

console.log(`Fixed ${tablesFixed} tables with missing header separators`);
console.log(`\nWarnings (rows with inconsistent column counts):`);
warnings.forEach(w => console.log('WARNING: ' + w));
console.log(`\nTotal warnings: ${warnings.length}`);
