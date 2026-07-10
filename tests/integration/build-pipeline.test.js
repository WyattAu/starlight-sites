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

      it('should have src/content.config.ts (Astro 6 Content Layer)', () => {
        assert.ok(
          fs.existsSync(path.join(siteDir, 'src', 'content.config.ts')),
          `Expected src/content.config.ts in ${siteDir}`
        )
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

describe('CI/CD invariants (workflow contracts)', () => {
  const WORKFLOWS_DIR = path.join(ROOT, '.github', 'workflows')

  it('every workflow pins the same BUN_VERSION', () => {
    // Drift between workflows causes CI to silently use a different
    // toolchain than deploy. The version must be consistent and match
    // the local dev environment (Bun 1.3.x emits the lockfile we ship).
    const files = ['ci.yml', 'deploy.yml', 'preview.yml']
    const versions = new Set()
    for (const f of files) {
      const p = path.join(WORKFLOWS_DIR, f)
      const text = fs.readFileSync(p, 'utf8')
      const m = text.match(/BUN_VERSION:\s*"([^"]+)"/)
      assert.ok(m, `${f} must declare env.BUN_VERSION`)
      versions.add(m[1])
    }
    assert.strictEqual(
      versions.size,
      1,
      `BUN_VERSION must agree across workflows, got: ${[...versions].join(', ')}`,
    )
    // Must start with "1.3" to match bun.lock format emitted by Bun 1.3.x.
    const [v] = [...versions]
    assert.ok(v.startsWith('1.3'), `BUN_VERSION must be 1.3.x, got ${v}`)
  })

  it('every workflow declares explicit permissions', () => {
    // The GitHub-token default of `contents: write` on `on: schedule`
    // and `on: push` is unsafe; every workflow must scope its token.
    const files = ['ci.yml', 'deploy.yml', 'preview.yml', 'uptime.yml']
    for (const f of files) {
      const text = fs.readFileSync(path.join(WORKFLOWS_DIR, f), 'utf8')
      assert.ok(/^permissions:/m.test(text), `${f} must declare an explicit permissions: block`)
    }
  })

  it('uptime.yml scopes the token to read + issues only', () => {
    const text = fs.readFileSync(path.join(WORKFLOWS_DIR, 'uptime.yml'), 'utf8')
    assert.ok(/contents:\s*read/.test(text), 'uptime.yml must set contents: read')
    assert.ok(/issues:\s*write/.test(text), 'uptime.yml must set issues: write')
    // Must not request write access to contents.
    assert.ok(!/contents:\s*write/.test(text), 'uptime.yml must NOT set contents: write')
  })

  it('preview.yml aggregates all site URLs into a single PR comment', () => {
    // Regression: previously the PR comment only ran for matrix.site == 'dse',
    // so 8 of 9 preview URLs were deployed but never advertised on the PR.
    const text = fs.readFileSync(path.join(WORKFLOWS_DIR, 'preview.yml'), 'utf8')
    assert.ok(/comment:/.test(text), 'preview.yml must declare a `comment` job')
    assert.ok(/needs:\s*preview\b/.test(text), 'preview.yml `comment` job must depend on `preview`')
    // Must not gate the comment on a single matrix site.
    assert.ok(
      !/if:\s*matrix\.site\s*==\s*'dse'/.test(text),
      'preview.yml comment must not be gated to a single site',
    )
    assert.ok(
      /upload-artifact/.test(text) && /download-artifact/.test(text),
      'preview.yml must exchange URLs via artifacts',
    )
  })

  it('deploy.yml worker deploy uses wrangler, not raw curl', () => {
    // The previous hand-rolled curl+python deploy piped the KV namespace
    // secret through shell interpolation into a JSON file. wrangler deploy
    // is the supported path and keeps the secret out of shell argv.
    const text = fs.readFileSync(path.join(WORKFLOWS_DIR, 'deploy.yml'), 'utf8')
    assert.ok(/wrangler.*deploy/.test(text), 'deploy.yml must use wrangler deploy')
    assert.ok(
      !/api\.cloudflare\.com\/client\/v4\/accounts/.test(text),
      'deploy.yml must not call the CF API directly via curl',
    )
  })

  it('deploy.yml verifies production deployment with retry polling', () => {
    // Cloudflare Pages propagation takes 30-90s; a single probe is racy.
    const text = fs.readFileSync(path.join(WORKFLOWS_DIR, 'deploy.yml'), 'utf8')
    assert.ok(
      /Verify deployment \(poll up to/.test(text),
      'deploy.yml must poll the origin until 200',
    )
  })
})
