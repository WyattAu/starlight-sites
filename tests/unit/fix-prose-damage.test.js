#!/usr/bin/env node
/**
 * Unit tests for scripts/fix-prose-damage.py.
 *
 * The repair is deliberately conservative: it must fix real damage without
 * touching correct prose. These tests pin both directions, because a fixer
 * that "improves" undamaged text is worse than no fixer at all.
 *
 * Run: node --test tests/unit/fix-prose-damage.test.js
 */

const { describe, it } = require('node:test')
const assert = require('node:assert')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { execFileSync } = require('node:child_process')

const REPO = path.resolve(__dirname, '..', '..')
const SCRIPT = path.join(REPO, 'scripts', 'fix-prose-damage.py')

function fixture(content) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'prose-fixture-'))
  const file = path.join(dir, 'page.md')
  fs.writeFileSync(file, content, 'utf8')
  return file
}

/** Run the fixer against a fixture and return the repaired text. */
function repair(content) {
  const file = fixture(content)
  execFileSync('python3', [SCRIPT, file], { encoding: 'utf8' })
  return fs.readFileSync(file, 'utf8')
}

/** Run the gate against a fixture and return its stdout. */
function check(content) {
  const file = fixture(content)
  try {
    return {
      code: 0,
      out: execFileSync('python3', [SCRIPT, '--check', file], { encoding: 'utf8' }),
    }
  } catch (err) {
    return { code: err.status, out: err.stdout || '' }
  }
}

describe('fix-prose-damage: curly-quote apostrophes', () => {
  it('repairs a proper name followed by "s', () => {
    const out = repair('**Fermat"s Little Theorem.**\n')
    assert.match(out, /Fermat's Little Theorem/)
  })

  it('repairs multi-word and acronym stems', () => {
    assert.match(repair('Newton"s second law\n'), /Newton's second law/)
    assert.match(repair("Chatelier's principle\n"), /Chatelier's principle/)
    assert.match(repair('the Hund"s rule\n'), /the Hund's rule/)
  })

  it('leaves ordinary quotation marks alone', () => {
    const src = 'He said "Stop" loudly.\n'
    assert.equal(repair(src), src)
  })

  it('leaves lowercase words with a closing quote alone', () => {
    const src = 'the value"s name\n'
    assert.equal(repair(src), src)
  })
})

describe('fix-prose-damage: math glued to a following word', () => {
  it('inserts the space that the normalization pass ate', () => {
    const out = repair("is $1 \\pmod{m}$Where $\\phi$ is Euler's totient\n")
    assert.match(out, /\\pmod\{m\}\$ Where/)
    assert.doesNotMatch(out, /\$Where/)
  })

  it('repairs several glues on one line', () => {
    const out = repair('modulo $m$Intervals and $n$Choose one.\n')
    assert.match(out, /\$m\$ Intervals/)
    assert.match(out, /\$n\$ Choose/)
  })

  it('repairs a single-character span', () => {
    assert.match(repair('value $x$Equals zero.\n'), /\$x\$ Equals/)
  })

  it('repairs the last span of an adjacent run', () => {
    // The pass also ate the spaces *between* adjacent spans, so the glued
    // span's opening `$` is preceded by another closing `$`.
    const out = repair('frequencies $p = 0.6$$q = 0.3$$r = 0.1$After the drift.\n')
    assert.match(out, /\$r = 0\.1\$ After the drift/)
  })
})

describe('fix-prose-damage: false-positive guards', () => {
  it('does not read the gap between two spans as a span', () => {
    // The gap " iff " sits between `$x - a$` and `$P(x)$`. A naive pattern
    // matches it, then inserts a space inside a correct formula.
    const src = '**Factor Theorem.** $x - a$ divides $P(x)$ iff $P(a) = 0$.\n'
    assert.equal(repair(src), src)
  })

  it('does not treat sentence punctuation as glue', () => {
    const src = 'implies $a \\equiv b \\pmod{m/\\gcd(c,m)}$.\n'
    assert.equal(repair(src), src)
  })

  it('does not touch a lowercase continuation', () => {
    const src = 'with primes $p_1 < p_2$ and $a_i \\geq 1$.\n'
    assert.equal(repair(src), src)
  })

  it('does not touch math inside an inline code span', () => {
    const src = 'run `echo $PATH` to inspect.\n'
    assert.equal(repair(src), src)
  })

  it('does not touch math inside a fenced code block', () => {
    const src = ['```bash', 'cost is $5$Total', '```', ''].join('\n')
    assert.equal(repair(src), src)
  })

  it('does not treat a shell variable chain as a math span', () => {
    // `$PATH:$PWD` looks exactly like a span followed by a glued word. The
    // closing `$` is preceded by `:` here, which never happens in a formula.
    const src = 'export PATH=$PATH:$PWD/arm-gnu-toolchain/bin\n'
    assert.equal(repair(src), src)
  })

  it('does not treat a braced shell expansion as math', () => {
    const src = 'cp $' + '{SRC}/a$' + '{DST}/b\n'
    assert.equal(repair(src), src)
  })

  it('leaves display-math fences alone', () => {
    const src = ['$$', 'a = bq + r, \\qquad 0 \\leq r < b.', '$$', ''].join('\n')
    assert.equal(repair(src), src)
  })

  it('does not treat currency as math', () => {
    const src = 'the fee is $5 per unit and $12 total.\n'
    assert.equal(repair(src), src)
  })
})

describe('fix-prose-damage: wrapped lines wrongly capitalised', () => {
  it('lower-cases a closed-class word starting a wrapped line', () => {
    const out = repair(['fewest evolutionary changes', 'Is preferred.', ''].join('\n'))
    assert.match(out, /^is preferred\.$/m)
  })

  it('repairs several classes on one paragraph', () => {
    const out = repair(
      ['the effect on each species in terms', 'Of natural selection.', ''].join('\n'),
    )
    assert.match(out, /^of natural selection\.$/m)
  })

  it('leaves a proper noun untouched', () => {
    // The discriminating case. Same shape as the damage above, but
    // `International` cannot be lower-cased: this is a real name.
    const out = repair(
      ['It serves as the gateway to the', 'International Mathematical Olympiad team.', ''].join(
        '\n',
      ),
    )
    assert.match(out, /^International Mathematical Olympiad team\.$/m)
  })

  it('leaves content words alone', () => {
    // `Same`, `Function`, `Type` are legitimately capitalised inside
    // technical terms, so they are ambiguous rather than damaged.
    const out = repair(['by defining a method with the', 'Same name.', ''].join('\n'))
    assert.match(out, /^Same name\.$/m)
  })

  it('repairs the Non- prefix', () => {
    const out = repair(['a positive number is', 'Non-negative).', ''].join('\n'))
    assert.match(out, /^non-negative\)\.$/m)
  })

  it('does not repair when the previous line ends a sentence', () => {
    const src = ['The clause ends here.', 'The next sentence follows.', ''].join('\n')
    assert.equal(repair(src), src)
  })

  it('does not repair the first line of a paragraph', () => {
    const src = ['Is a copula.', ''].join('\n')
    assert.equal(repair(src), src)
  })

  it('does not repair across a blank line', () => {
    const src = ['An unrelated line.', '', 'Is a copula.', ''].join('\n')
    assert.equal(repair(src), src)
  })

  it('does not repair inside a list item', () => {
    const src = ['- The methods are:', '  Are grouped by cost.', ''].join('\n')
    assert.equal(repair(src), src)
  })

  it('does not repair a heading', () => {
    const src = ['Some prose line here', '## Of Mice and Men', ''].join('\n')
    assert.equal(repair(src), src)
  })
})

describe('fix-prose-damage: idempotence', () => {
  it('produces no further repairs on a second pass', () => {
    const src = [
      '**Fermat"s Little Theorem.**',
      'If $\\gcd(a, p) = 1$ Then $a^{p-1} \\equiv 1 \\pmod{m}$Where it is used.',
      '',
    ].join('\n')
    const once = repair(src)
    assert.equal(repair(once), once)
  })
})

describe('fix-prose-damage: --check mode', () => {
  it('exits non-zero when damage remains', () => {
    const res = check('**Fermat"s theorem.**\n')
    assert.equal(res.code, 1)
    assert.match(res.out, /^FAIL:/m)
  })

  it('exits zero on clean content', () => {
    const res = check('**Fermat\'s theorem.** He said "Stop".\n')
    assert.equal(res.code, 0)
    assert.match(res.out, /^OK:/m)
  })

  it('does not flag damage inside a fenced code block', () => {
    // Regression: the gate once scanned raw lines without tracking fences, so
    // it reported shell snippets that the repair pass correctly skips. The
    // gate and the fixer must agree on what counts as prose.
    const src = [
      'Set the toolchain path:',
      '',
      '```bash',
      'export PATH=$PATH:$PWD/arm/bin',
      'echo $HOME_X',
      '```',
      '',
      "**Fermat's theorem.** holds.",
      '',
    ].join('\n')
    const res = check(src)
    assert.equal(res.code, 0)
    assert.match(res.out, /^OK:/m)
  })
})
