#!/usr/bin/env node
/**
 * Unit tests for scripts/fix-filler-content.py.
 *
 * Two template-generated classes shipped network-wide: an `## Advanced
 * Content` section whose subsections promise proofs and examples and contain
 * only placeholder prose, and a seven-line mermaid flowchart reading "Design
 * patterns / Real-world usage" that is the same graph on every page.
 *
 * The risk in removing them is over-removal, so every fixture here is a case
 * where the fixer must NOT act. The real diagrams and real sections look
 * superficially similar to the filler, and a fixer that deletes those would
 * be far worse than one that leaves filler in place.
 */

const assert = require('node:assert')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { execFileSync } = require('node:child_process')
const { after, describe, it } = require('node:test')

const REPO_ROOT = path.resolve(__dirname, '..', '..')
const FIXER = path.join(REPO_ROOT, 'scripts', 'fix-filler-content.py')

const FIXTURE_DIRS = []

after(() => {
  for (const dir of FIXTURE_DIRS) {
    try {
      fs.rmSync(dir, { recursive: true, force: true })
    } catch {
      // A fixture that will not delete must not fail the suite.
    }
  }
})

const FILLER_SECTION = `## Advanced Content

This section provides detailed coverage of advanced concepts, including full derivations, proofs, and extended examples.

### Derivations and Proofs

Complete mathematical derivations and proofs are provided where appropriate. Each step is explained to ensure understanding of the underlying reasoning.

### Extended Examples

Advanced examples demonstrate the application of concepts to complex problems. These examples go beyond standard exam questions to develop deeper understanding.

### Research Connections

This material connects to current research and advanced applications in the field. Understanding these connections provides context for the study material.

### Prerequisites

Ensure you have mastered the prerequisite material before attempting this advanced content.
`

const FILLER_MERMAID = `\`\`\`mermaid
flowchart TD
    A[Some Page Title] --> B[Key Concepts]
    A --> C[Core Principles]
    A --> D[Practical Applications]
    B --> E[Fundamental definitions]
    C --> F[Design patterns]
    D --> G[Real-world usage]
\`\`\`
`

function fix(body) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'filler-content-'))
  FIXTURE_DIRS.push(dir)
  const file = path.join(dir, 'page.md')
  fs.writeFileSync(file, body, 'utf8')
  execFileSync('python3', [FIXER, '--apply', dir], { encoding: 'utf8' })
  return fs.readFileSync(file, 'utf8')
}

describe('fix-filler-content.py: removal', () => {
  it('removes the all-placeholder Advanced Content section', () => {
    const out = fix(`# Title\n\nReal content.\n\n${FILLER_SECTION}`)
    assert.ok(!out.includes('Advanced Content'), out)
    assert.ok(out.includes('Real content.'), 'surrounding content must survive')
  })

  it('removes the filler mermaid diagram', () => {
    const out = fix(`# Title\n\nReal content.\n\n${FILLER_MERMAID}\nMore.\n`)
    assert.ok(!out.includes('mermaid'), out)
    assert.ok(out.includes('Real content.'))
  })

  it('removes both together', () => {
    const out = fix(`# Title\n\n${FILLER_MERMAID}\n${FILLER_SECTION}`)
    assert.ok(!out.includes('mermaid'))
    assert.ok(!out.includes('Advanced Content'))
  })
})

describe('fix-filler-content.py: must not over-remove', () => {
  it('keeps a real mermaid diagram with a different shape', () => {
    // The network has 343 genuine diagrams; deleting them would be far worse
    // than leaving filler behind.
    const real = `\`\`\`mermaid
graph TD
  A[Start] --> B[Middle]
  B --> C[End]
\`\`\`
`
    assert.equal(fix(`# T\n\n${real}`), `# T\n\n${real}`)
  })

  it('keeps a real diagram that happens to contain similar wording', () => {
    const real = `\`\`\`mermaid
flowchart LR
  A[Design patterns] --> B[Real-world usage]
\`\`\`
`
    assert.equal(fix(`# T\n\n${real}`), `# T\n\n${real}`)
  })

  it('keeps an Advanced Content section that has real content in it', () => {
    const mixed = `## Advanced Content

This section provides detailed coverage of advanced concepts, including full derivations, proofs, and extended examples.

### Derivations and Proofs

Here is an actual derivation, with actual content in it.
`
    assert.equal(fix(`# T\n\n${mixed}`), `# T\n\n${mixed}`)
  })

  it('keeps a page that mentions the placeholder wording outside a section', () => {
    // Prose that discusses the template must not be swept up by the remover.
    const prose = `# T

We avoid saying "Design patterns" in a diagram, because the template used to
emit one automatically.
`
    assert.equal(fix(prose), prose)
  })
})

describe('fix-filler-content.py on this repository', () => {
  it('has no filler left', () => {
    const { code, stdout } = (() => {
      try {
        const stdout = execFileSync('python3', [FIXER, '--check'], {
          cwd: REPO_ROOT,
          encoding: 'utf8',
          stdio: ['ignore', 'pipe', 'pipe'],
        })
        return { code: 0, stdout }
      } catch (err) {
        return { code: err.status ?? 1, stdout: (err.stdout ?? '') + (err.stderr ?? '') }
      }
    })()
    assert.match(stdout, /sections: 0\b.*mermaid diagrams: 0\b/, `filler remains:\n${stdout}`)
  })

  it('preserved every non-filler diagram', () => {
    const { execSync } = require('node:child_process')
    const out = execSync(
      `grep -rl 'graph TD\\|flowchart LR\\|flowchart RL' sites --include=*.md --include=*.mdx | wc -l`,
      { cwd: REPO_ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] },
    )
    assert.ok(Number(out.trim()) > 0, 'genuine diagrams must still be in the tree')
  })
})
