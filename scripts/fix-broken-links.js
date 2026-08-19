// Fix broken internal links across all sites
// Usage: node scripts/fix-broken-links.js [--dry-run]
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'

const dryRun = process.argv.includes('--dry-run')
const root = process.cwd()
let fixed = 0
let skipped = 0

function findFiles(dir) {
  const results = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const st = statSync(full)
    if (st.isDirectory() && entry !== 'node_modules' && entry !== 'dist' && entry !== '.git') {
      results.push(...findFiles(full))
    } else if (st.isFile() && (entry.endsWith('.md') || entry.endsWith('.mdx'))) {
      results.push(full)
    }
  }
  return results
}

function findExistingDocPath(siteDir, relativePath) {
  const docsDir = join(siteDir, 'src', 'content', 'docs')
  // Try various extensions
  const extensions = ['', '.md', '.mdx', '/index.md', '/index.mdx']
  for (const ext of extensions) {
    const candidate = join(docsDir, relativePath + ext)
    if (existsSync(candidate)) {
      return relative(join(docsDir), candidate).replace(/\.(md|mdx)$/, '')
    }
  }
  return null
}

// Get all site directories
const sitesDir = join(root, 'sites')
const sites = readdirSync(sitesDir).filter(s => {
  try {
    return statSync(join(sitesDir, s)).isDirectory() && s !== 'main'
  } catch {
    return false
  }
})

for (const site of sites) {
  const siteDir = join(sitesDir, site)
  const docsDir = join(siteDir, 'src', 'content', 'docs')
  try {
    statSync(docsDir)
  } catch {
    continue
  }

  const files = findFiles(docsDir)

  for (const filePath of files) {
    try {
      const content = readFileSync(filePath, 'utf-8')
      const lines = content.split('\n')
      let modified = false
      const fileDir = dirname(filePath)

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]

        // Match markdown links: [text](url)
        const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/g
        let match
        let newLine = line

        while ((match = linkRegex.exec(line)) !== null) {
          const fullMatch = match[0]
          const linkText = match[1]
          const linkUrl = match[2]

          // Skip external links, anchors, images
          if (
            linkUrl.startsWith('http') ||
            linkUrl.startsWith('#') ||
            linkUrl.startsWith('mailto:')
          )
            continue

          // Skip if link has image extension
          if (/\.(png|jpg|jpeg|gif|svg|webp)$/i.test(linkUrl)) continue

          // Parse the link
          const [pathPart, hashPart] = linkUrl.split('#')
          const anchor = hashPart ? `#${hashPart}` : ''

          if (!pathPart) continue

          // Remove .md/.mdx extension for Starlight slug resolution
          const cleanPath = pathPart.replace(/\.(md|mdx)$/, '')

          // Resolve relative to the file's directory
          const resolvedPath = resolve(fileDir, cleanPath)
          const relToDocs = relative(docsDir, resolvedPath)

          // Check if resolved path exists
          if (findExistingDocPath(siteDir, relToDocs)) {
            // Path exists, no fix needed
            continue
          }

          // Fix pattern 1: Duplicate directory segments (e.g., chemistry/chemistry/...)
          // ../chemistry/organic-chemistry/introduction from chemistry/diagnostics/ resolves to chemistry/chemistry/organic-chemistry/introduction
          const segments = relToDocs.split('/')
          const fixedSegments = segments

          // Check for consecutive duplicate segments
          let deduped = false
          for (let j = 1; j < fixedSegments.length; j++) {
            if (fixedSegments[j] === fixedSegments[j - 1]) {
              fixedSegments.splice(j, 1)
              deduped = true
              break
            }
          }

          if (deduped) {
            const fixedPath = fixedSegments.join('/')
            if (findExistingDocPath(siteDir, fixedPath)) {
              // Fix the link
              const newRelPath = pathPart.includes('/')
                ? relative(fileDir, join(docsDir, `${fixedPath}.md`)).replace(/\.md$/, '')
                : fixedSegments[fixedSegments.length - 1]
              const newUrl = newRelPath + anchor
              newLine = newLine.replace(fullMatch, `[${linkText}](${newUrl})`)
              modified = true
              continue
            }
          }

          // Fix pattern 2: Absolute paths starting with / that reference content within the site
          if (pathPart.startsWith('/') && !pathPart.startsWith('//')) {
            const absPath = pathPart.slice(1) // Remove leading /
            if (findExistingDocPath(siteDir, absPath)) {
              // Convert to relative
              const newRelPath = relative(fileDir, join(docsDir, `${absPath}.md`)).replace(
                /\.md$/,
                '',
              )
              newLine = newLine.replace(fullMatch, `[${linkText}](${newRelPath}${anchor})`)
              modified = true
              continue
            }
          }

          // Fix pattern 3: Try without numbered prefix (e.g., 01-searching -> searching)
          const basename = cleanPath.split('/').pop()
          if (/^\d+-/.test(basename)) {
            const unprefixed = basename.replace(/^\d+-/, '')
            const parentDir = cleanPath.split('/').slice(0, -1).join('/')
            const tryPath = parentDir ? `${parentDir}/${unprefixed}` : unprefixed
            const resolvedTry = resolve(fileDir, tryPath)
            const relTry = relative(docsDir, resolvedTry)
            if (findExistingDocPath(siteDir, relTry)) {
              const newRelPath = pathPart.includes('/')
                ? relative(fileDir, join(docsDir, `${relTry}.md`)).replace(/\.md$/, '')
                : unprefixed
              const newUrl = newRelPath + anchor
              newLine = newLine.replace(fullMatch, `[${linkText}](${newUrl})`)
              modified = true
              continue
            }
          }

          // Fix pattern 4: Try the parent directory's sibling
          // e.g., ../chemistry/flashcards-atomic-structure from chemistry/diagnostics/
          // should be flashcards-atomic-structure (sibling, not child of chemistry)
          if (cleanPath.startsWith('../')) {
            const parts = cleanPath.split('/')
            // Count how many ../ at start
            let ups = 0
            while (ups < parts.length && parts[ups] === '..') ups++
            const remainder = parts.slice(ups).join('/')

            // If remainder starts with a directory that matches an ancestor, skip it
            const fileRelToDocs = relative(docsDir, fileDir)
            const fileParts = fileRelToDocs.split('/')

            if (ups <= fileParts.length) {
              const baseParts = fileParts.slice(0, fileParts.length - ups)
              const tryParts = [...baseParts, remainder]
              const tryPath = tryParts.join('/')

              if (findExistingDocPath(siteDir, tryPath)) {
                const newRelPath = relative(fileDir, join(docsDir, `${tryPath}.md`)).replace(
                  /\.md$/,
                  '',
                )
                const newUrl = newRelPath + anchor
                newLine = newLine.replace(fullMatch, `[${linkText}](${newUrl})`)
                modified = true
              }
            }
          }
        }

        if (newLine !== line) {
          lines[i] = newLine
        }
      }

      if (modified) {
        const newContent = lines.join('\n')
        if (!dryRun) {
          writeFileSync(filePath, newContent, 'utf-8')
        }
        fixed++
      }
    } catch (e) {
      skipped++
    }
  }
}

console.log(`Fixed: ${fixed}, Skipped: ${skipped}`)
if (dryRun) console.log('(Dry run - no files were modified)')
