#!/usr/bin/env node
/**
 * Unit tests for lint-config.js
 * Run: node --test tests/unit/lint-config.test.js
 */

const { describe, it } = require('node:test')
const assert = require('node:assert')
const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', '..', 'sites')

describe('Config Validation', () => {
  const sites = fs.readdirSync(SITES_DIR).filter(f => {
    return (
      fs.statSync(path.join(SITES_DIR, f)).isDirectory() &&
      f !== 'node_modules' &&
      f !== 'main' &&
      f !== 'built'
    )
  })

  it('should have astro.config.mjs for every Astro site', () => {
    for (const site of sites) {
      const configPath = path.join(SITES_DIR, site, 'astro.config.mjs')
      assert.ok(fs.existsSync(configPath), `${site} should have astro.config.mjs`)
    }
  })

  it('should have Starlight integration in every config', () => {
    for (const site of sites) {
      const configPath = path.join(SITES_DIR, site, 'astro.config.mjs')
      if (fs.existsSync(configPath)) {
        const content = fs.readFileSync(configPath, 'utf8')
        assert.ok(
          content.includes('starlight'),
          `${site} config should include starlight integration`,
        )
      }
    }
  })

  it('should have math plugins in every config', () => {
    for (const site of sites) {
      const configPath = path.join(SITES_DIR, site, 'astro.config.mjs')
      if (fs.existsSync(configPath)) {
        const content = fs.readFileSync(configPath, 'utf8')
        const hasMath = content.includes('remarkMath') || content.includes('rehypeKatex')
        assert.ok(hasMath, `${site} config should include math plugins`)
      }
    }
  })

  it('should have site URL in every config', () => {
    for (const site of sites) {
      const configPath = path.join(SITES_DIR, site, 'astro.config.mjs')
      if (fs.existsSync(configPath)) {
        const content = fs.readFileSync(configPath, 'utf8')
        assert.ok(content.includes('site:'), `${site} config should have site URL`)
        assert.ok(
          content.includes('.wyattau.com'),
          `${site} config should reference wyattau.com domain`,
        )
      }
    }
  })

  it('should have custom CSS path in every config', () => {
    for (const site of sites) {
      const configPath = path.join(SITES_DIR, site, 'astro.config.mjs')
      if (fs.existsSync(configPath)) {
        const content = fs.readFileSync(configPath, 'utf8')
        if (content.includes('customCss')) {
          assert.ok(
            content.includes('./src/styles/custom.css'),
            `${site} config should reference correct custom CSS path`,
          )
        }
      }
    }
  })

  it('should have PageTitle and MarkdownContent component overrides', () => {
    for (const site of sites) {
      const configPath = path.join(SITES_DIR, site, 'astro.config.mjs')
      if (fs.existsSync(configPath)) {
        const content = fs.readFileSync(configPath, 'utf8')
        assert.ok(
          content.includes('PageTitle'),
          `${site} config should override PageTitle component`,
        )
        assert.ok(
          content.includes('MarkdownContent'),
          `${site} config should override MarkdownContent component`,
        )
      }
    }
  })

  it('should have package.json for every site', () => {
    for (const site of sites) {
      const pkgPath = path.join(SITES_DIR, site, 'package.json')
      assert.ok(fs.existsSync(pkgPath), `${site} should have package.json`)
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
      assert.strictEqual(pkg.type, 'module', `${site} package.json should have type: module`)
      assert.ok(pkg.dependencies, `${site} package.json should have dependencies`)
    }
  })

  it('should use SolidJS (not React) in site configs', () => {
    for (const site of sites) {
      const configPath = path.join(SITES_DIR, site, 'astro.config.mjs')
      if (fs.existsSync(configPath)) {
        const content = fs.readFileSync(configPath, 'utf8')
        assert.ok(
          content.includes('solidJs') || content.includes('solid-js'),
          `${site} config should use SolidJS integration`,
        )
      }
    }
  })
})
