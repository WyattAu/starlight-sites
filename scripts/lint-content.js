#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const SITES_DIR = path.join(__dirname, '..', 'sites');
const ISSUES = [];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(SITES_DIR, filePath);
  const ext = path.extname(filePath);
  
  if (ext === '.md' && content.includes("import { Tabs, TabItem }")) {
    ISSUES.push({ file: relativePath, type: 'ERROR', message: 'Raw import in .md file' });
  }
  
  if (content.includes("import Tabs from '@theme/Tabs'")) {
    ISSUES.push({ file: relativePath, type: 'ERROR', message: 'Old Docusaurus Tabs import' });
  }
  
  if (content.includes(":::warning") && !content.includes("```")) {
    ISSUES.push({ file: relativePath, type: 'WARNING', message: 'Unconverted :::warning' });
  }
  
  if (!content.trim().startsWith('---')) {
    ISSUES.push({ file: relativePath, type: 'ERROR', message: 'Missing frontmatter' });
  }
  
  const wordCount = content.split(/\s+/).length;
  if (wordCount < 50) {
    ISSUES.push({ file: relativePath, type: 'WARNING', message: `Thin content (${wordCount} words)` });
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !['node_modules', '.astro', 'dist'].includes(file)) {
      walkDir(fullPath);
    } else if (stat.isFile() && (file.endsWith('.md') || file.endsWith('.mdx'))) {
      checkFile(fullPath);
    }
  }
}

console.log('Running content validation...\n');
walkDir(SITES_DIR);

const errors = ISSUES.filter(i => i.type === 'ERROR');
const warnings = ISSUES.filter(i => i.type === 'WARNING');
console.log(`Found ${errors.length} errors and ${warnings.length} warnings\n`);

if (errors.length > 0) {
  console.log('ERRORS:');
  errors.forEach(i => console.log(`  ${i.file}: ${i.message}`));
}
if (warnings.length > 0) {
  console.log('\nWARNINGS:');
  warnings.slice(0, 20).forEach(i => console.log(`  ${i.file}: ${i.message}`));
  if (warnings.length > 20) console.log(`  ... and ${warnings.length - 20} more`);
}

process.exit(errors.length > 0 ? 1 : 0);
