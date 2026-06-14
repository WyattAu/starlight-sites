#!/usr/bin/env node
// Link validation script - checks for broken internal links

const fs = require('fs');
const path = require('path');

const SITES_DIR = path.join(__dirname, '..', 'sites');
const ISSUES = [];

function extractLinks(content) {
  const links = [];
  const regex = /href="([^"]*)"/g;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    const href = match[1];
    // Skip external links, anchors, and assets
    if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) continue;
    if (href.match(/\.(css|js|png|jpg|svg|ico)$/)) continue;
    links.push(href);
  }
  
  return links;
}

function checkFile(filePath, siteId) {
  if (!fs.existsSync(filePath)) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const links = extractLinks(content);
  const relativePath = path.relative(SITES_DIR, filePath);
  
  for (const link of links) {
    // Convert relative link to absolute path
    const dir = path.dirname(filePath);
    let targetPath;
    
    if (link.startsWith('/')) {
      targetPath = path.join(SITES_DIR, siteId, 'src', 'content', 'docs', link.slice(1));
    } else {
      targetPath = path.join(dir, link);
    }
    
    // Check if target exists (with various extensions)
    const extensions = ['', '.md', '.mdx', '/index.md', '/index.mdx'];
    let found = false;
    
    for (const ext of extensions) {
      if (fs.existsSync(targetPath + ext)) {
        found = true;
        break;
      }
    }
    
    if (!found) {
      ISSUES.push({
        file: relativePath,
        link: link,
        type: 'ERROR',
        message: `Broken link: ${link}`
      });
    }
  }
}

// Walk through all sites
function walkDir(dir, siteId) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && file !== 'node_modules' && file !== '.astro' && file !== 'dist') {
      walkDir(fullPath, siteId);
    } else if (stat.isFile() && (file.endsWith('.md') || file.endsWith('.mdx'))) {
      checkFile(fullPath, siteId);
    }
  }
}

// Main
console.log('Running link validation...\n');

const sites = fs.readdirSync(SITES_DIR).filter(f => {
  return fs.statSync(path.join(SITES_DIR, f)).isDirectory() && f !== 'node_modules';
});

for (const site of sites) {
  const contentDir = path.join(SITES_DIR, site, 'src', 'content', 'docs');
  if (fs.existsSync(contentDir)) {
    console.log(`Checking ${site}...`);
    walkDir(contentDir, site);
  }
}

// Report results
console.log(`\nFound ${ISSUES.length} broken links\n`);

if (ISSUES.length > 0) {
  for (const issue of ISSUES.slice(0, 20)) {
    console.log(`  ${issue.file}: ${issue.link}`);
  }
  if (ISSUES.length > 20) {
    console.log(`  ... and ${ISSUES.length - 20} more broken links`);
  }
}

process.exit(ISSUES.length > 0 ? 1 : 0);
