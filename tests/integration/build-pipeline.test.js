#!/usr/bin/env node
/**
 * Integration tests for the monorepo structure and build pipeline.
 * Run: node --test tests/integration/build-pipeline.test.js
 */

const { describe, it } = require('node:test')
const assert = require('node:assert')
const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..', '..')
const SITES_DIR = path.join(ROOT, 'sites')

const EXPECTED_SITES = [
  'alevel',
  'dse',
  'ib',
  'infrastructure',
  'languages',
  'programming',
  'qualifications',
  'tools',
  'university',
]

const SITES_WITH_MERMAID = ['ib', 'infrastructure', 'languages', 'programming', 'tools']

describe('Monorepo Structure', () => {
  it('should have all 9 expected site directories', () => {
    const actual = fs.readdirSync(SITES_DIR).filter(f => {
      return (
        fs.statSync(path.join(SITES_DIR, f)).isDirectory() &&
        f !== 'node_modules' &&
        f !== 'main' &&
        f !== 'built'
      )
    })
    for (const site of EXPECTED_SITES) {
      assert.ok(actual.includes(site), `Should have ${site} directory`)
    }
  })

  it('should have shared components directory', () => {
    assert.ok(fs.existsSync(path.join(ROOT, 'shared', 'components')))
  })

  it('should have shared styles directory', () => {
    assert.ok(fs.existsSync(path.join(ROOT, 'shared', 'styles', 'custom.css')))
  })

  it('should have scripts directory', () => {
    assert.ok(fs.existsSync(path.join(ROOT, 'scripts')))
  })

  it('should have search-api directory', () => {
    assert.ok(fs.existsSync(path.join(ROOT, 'search-api', 'worker.js')))
  })

  it('should have GitHub Actions workflows', () => {
    const workflowsDir = path.join(ROOT, '.github', 'workflows')
    assert.ok(fs.existsSync(workflowsDir))
    const workflows = fs.readdirSync(workflowsDir)
    assert.ok(workflows.includes('ci.yml'))
    assert.ok(workflows.includes('deploy.yml'))
  })
})

describe('Site Build Requirements', () => {
  for (const site of EXPECTED_SITES) {
    describe(`${site}`, () => {
      const siteDir = path.join(SITES_DIR, site)

      it('should have astro.config.mjs', () => {
        assert.ok(fs.existsSync(path.join(siteDir, 'astro.config.mjs')))
      })

      it('should have package.json with correct structure', () => {
        const pkg = JSON.parse(fs.readFileSync(path.join(siteDir, 'package.json'), 'utf8'))
        assert.strictEqual(pkg.type, 'module')
        assert.ok(pkg.scripts.build)
        assert.ok(pkg.dependencies.astro)
        assert.ok(pkg.dependencies['@astrojs/starlight'])
      })

      it('should have src/content/docs directory', () => {
        assert.ok(fs.existsSync(path.join(siteDir, 'src', 'content', 'docs')))
      })

      it('should have src/content/config.ts', () => {
        assert.ok(fs.existsSync(path.join(siteDir, 'src', 'content', 'config.ts')))
      })

      it('should have src/styles/custom.css', () => {
        assert.ok(fs.existsSync(path.join(siteDir, 'src', 'styles', 'custom.css')))
      })

      it('should have starlight component overrides', () => {
        const componentsDir = path.join(siteDir, 'src', 'components', 'starlight')
        assert.ok(fs.existsSync(componentsDir))
        assert.ok(fs.existsSync(path.join(componentsDir, 'PageTitle.astro')))
        assert.ok(fs.existsSync(path.join(componentsDir, 'MarkdownContent.astro')))
      })

      it('should have SolidJS (not React) integration', () => {
        const config = fs.readFileSync(path.join(siteDir, 'astro.config.mjs'), 'utf8')
        assert.ok(config.includes('solidJs') || config.includes('solid-js'))
        assert.ok(!config.includes('import react from'))
      })

      it('should have math plugins', () => {
        const config = fs.readFileSync(path.join(siteDir, 'astro.config.mjs'), 'utf8')
        assert.ok(config.includes('remarkMath'))
        assert.ok(config.includes('rehypeKatex'))
      })
    })
  }
})

describe('Mermaid Integration', () => {
  for (const site of SITES_WITH_MERMAID) {
    it(`${site} should have mermaid dependencies`, () => {
      const pkg = JSON.parse(fs.readFileSync(path.join(SITES_DIR, site, 'package.json'), 'utf8'))
      assert.ok(pkg.dependencies['astro-mermaid'], `${site} should have astro-mermaid`)
      assert.ok(pkg.dependencies.mermaid, `${site} should have mermaid`)
    })

    it(`${site} should import mermaidNoRocketLoader`, () => {
      const config = fs.readFileSync(path.join(SITES_DIR, site, 'astro.config.mjs'), 'utf8')
      assert.ok(config.includes('mermaidNoRocketLoader'))
    })
  }
})

describe('Shared Component Consistency', () => {
  it('all sites should have identical component sets', () => {
    const componentSets = {}
    for (const site of EXPECTED_SITES) {
      const compDir = path.join(SITES_DIR, site, 'src', 'components')
      if (fs.existsSync(compDir)) {
        const files = fs.readdirSync(compDir).sort()
        componentSets[site] = files
      }
    }

    const firstSite = EXPECTED_SITES[0]
    const expected = componentSets[firstSite]
    for (const site of EXPECTED_SITES.slice(1)) {
      assert.deepStrictEqual(
        componentSets[site],
        expected,
        `${site} should have same components as ${firstSite}`,
      )
    }
  })

  it('all sites should have identical custom.css', () => {
    const cssContents = {}
    for (const site of EXPECTED_SITES) {
      const cssPath = path.join(SITES_DIR, site, 'src', 'styles', 'custom.css')
      if (fs.existsSync(cssPath)) {
        cssContents[site] = fs.readFileSync(cssPath, 'utf8')
      }
    }

    const firstSite = EXPECTED_SITES[0]
    const expected = cssContents[firstSite]
    for (const site of EXPECTED_SITES.slice(1)) {
      assert.strictEqual(
        cssContents[site],
        expected,
        `${site} custom.css should match ${firstSite}`,
      )
    }
  })
})

describe('CI/CD Configuration', () => {
  it('ci.yml should have lint job', () => {
    const ci = fs.readFileSync(path.join(ROOT, '.github', 'workflows', 'ci.yml'), 'utf8')
    assert.ok(ci.includes('lint:'))
  })

  it('ci.yml should have build matrix for all sites', () => {
    const ci = fs.readFileSync(path.join(ROOT, '.github', 'workflows', 'ci.yml'), 'utf8')
    for (const site of EXPECTED_SITES) {
      assert.ok(ci.includes(`- ${site}`), `ci.yml should include ${site} in build matrix`)
    }
  })

  it('deploy.yml should have Cloudflare deployment', () => {
    const deploy = fs.readFileSync(path.join(ROOT, '.github', 'workflows', 'deploy.yml'), 'utf8')
    assert.ok(deploy.includes('wrangler'))
    assert.ok(deploy.includes('CLOUDFLARE_API_TOKEN'))
  })

  it('deploy.yml should not have hardcoded secrets', () => {
    const deploy = fs.readFileSync(path.join(ROOT, '.github', 'workflows', 'deploy.yml'), 'utf8')
    // Should not have raw KV namespace IDs or account IDs
    assert.ok(
      !deploy.includes('b1c8e9c031cd404da7e8688c332d4374'),
      'deploy.yml should not have hardcoded KV namespace ID',
    )
    assert.ok(
      !deploy.includes('26966ba2f4b3a12cb750cd615c8d0bcf'),
      'deploy.yml should not have hardcoded CF account ID',
    )
  })
})

describe('Search API', () => {
  it('should have worker.js with correct exports', () => {
    const worker = fs.readFileSync(path.join(ROOT, 'search-api', 'worker.js'), 'utf8')
    assert.ok(worker.includes('export default'))
    assert.ok(worker.includes('async fetch'))
  })

  it('should have wrangler.toml', () => {
    assert.ok(fs.existsSync(path.join(ROOT, 'search-api', 'wrangler.toml')))
    const toml = fs.readFileSync(path.join(ROOT, 'search-api', 'wrangler.toml'), 'utf8')
    assert.ok(toml.includes('SEARCH_KV'))
  })

  it('should not have hardcoded secrets in upload script', () => {
    const upload = fs.readFileSync(path.join(ROOT, 'search-api', 'upload-index.js'), 'utf8')
    assert.ok(
      !upload.includes('26966ba2f4b3a12cb750cd615c8d0bcf'),
      'upload-index.js should not have hardcoded CF account ID',
    )
  })
})
