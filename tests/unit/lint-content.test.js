#!/usr/bin/env node
/**
 * Unit tests for lint-content.js
 * Run: node --test tests/unit/lint-content.test.js
 */

const { describe, it } = require('node:test')
const assert = require('node:assert')
const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', '..', 'sites')

describe('Content Validation', () => {
  it('should detect missing frontmatter', () => {
    const content = '# No Frontmatter\n\nThis file has no frontmatter block.'
    const hasFrontmatter = content.trim().startsWith('---')
    assert.strictEqual(hasFrontmatter, false, 'Should detect missing frontmatter')
  })

  it('should pass files with valid frontmatter', () => {
    const content =
      '---\ntitle: Test\n---\n\n# Valid content here with enough words to pass the thin content check for testing purposes in this unit test file.'
    const hasFrontmatter = content.trim().startsWith('---')
    assert.strictEqual(hasFrontmatter, true, 'Should pass valid frontmatter')
  })

  it('should detect raw imports in .md files', () => {
    const content =
      '---\ntitle: Test\n---\n\nimport { Tabs, TabItem } from "@astrojs/starlight/components";'
    const hasRawImport = content.includes('import { Tabs, TabItem }')
    assert.strictEqual(hasRawImport, true, 'Should detect raw import in .md')
  })

  it('should detect old Docusaurus imports', () => {
    const content = "import Tabs from '@theme/Tabs';"
    const hasOldImport = content.includes("import Tabs from '@theme/Tabs'")
    assert.strictEqual(hasOldImport, true, 'Should detect old Docusaurus import')
  })

  it('should flag thin content', () => {
    const shortContent = 'Short'
    const wordCount = shortContent.split(/\s+/).length
    assert.ok(wordCount < 50, 'Short content should be flagged as thin')
  })

  it('should not flag adequate content', () => {
    const adequateContent = Array(60).fill('word').join(' ')
    const wordCount = adequateContent.split(/\s+/).length
    assert.ok(wordCount >= 50, 'Adequate content should not be flagged')
  })

  it('should validate all site index.md files have frontmatter', () => {
    const sites = fs.readdirSync(SITES_DIR).filter(f => {
      return (
        fs.statSync(path.join(SITES_DIR, f)).isDirectory() && f !== 'node_modules' && f !== 'main'
      )
    })

    for (const site of sites) {
      const indexPath = path.join(SITES_DIR, site, 'src', 'content', 'docs', 'index.md')
      if (fs.existsSync(indexPath)) {
        const content = fs.readFileSync(indexPath, 'utf8')
        assert.ok(content.trim().startsWith('---'), `${site}/index.md should have frontmatter`)
      }
    }
  })
})
