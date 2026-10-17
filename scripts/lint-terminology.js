#!/usr/bin/env node
/**
 * lint-terminology.js -- catch vocabulary that is not real terminology.
 *
 * The notes once defined "directly connected" as a synonym for "simply
 * connected", and used it as though it were the standard term: in a
 * *definition*, in a proposition's hypothesis, in the Riemann mapping theorem
 * ("any directly connected domain"), in Cauchy's theorem's hypotheses, and in
 * the Poincare lemma as stated in a generated practice problem. Fifteen
 * occurrences across six files. A reader who knows the subject searches for
 * "simply connected", finds nothing, and concludes the notes are wrong.
 *
 * "Directly connected" is ordinary English and it is *correct* elsewhere in this
 * repository -- BGP's "directly connected" routes and neighbours are standard
 * networking vocabulary, and "directly connected to a specific claim" is correct
 * prose. A blanket find-and-replace would have damaged all of those. So the
 * rule is scoped by site rather than by phrase: within the mathematics site the
 * term is always a corruption, because none of its subjects uses it.
 *
 * The second rule is the general one this file exists for: a term introduced by
 * a "Definition." line must be a term that exists. Flagging a *definition* of a
 * non-standard term catches the whole class, whether the invention was a
 * find-and-replace, a synonym drift, or an LLM paraphrase that drifted off the
 * standard name.
 */

const fs = require('node:fs')
const path = require('node:path')

const REPO_ROOT = path.resolve(__dirname, '..')

/**
 * Terms that are not standard mathematics, mapped to the correct term.
 * Scoped to the mathematics site -- see the header.
 */
const SITE_SCOPED = {
  mathematics: {
    'directly connected': 'simply connected',
    'directly-connected': 'simply connected',
  },
}

/**
 * Definitions of these terms are impossible anywhere: they are a real term
 * paired with a meaning that belongs to something else.
 */
const BOGUS_DEFINITIONS = [
  {
    pattern: /\*\*Definition\.\*\*[^.\n]{0,120}\*\*directly connected\*\*/i,
    replacement: 'Definition. ... **simply connected**',
    why: '"directly connected" is not a topological term',
  },
]

function parseArgs(argv) {
  const args = { root: REPO_ROOT, check: false }
  const flags = new Set(argv)
  for (const flag of flags) {
    if (flag === '--root') args.root = path.resolve(argv[argv.indexOf(flag) + 1])
    else if (flag === '--check') args.check = true
  }
  return args
}

function siteOf(file) {
  const match = file.match(/sites[/\\]([^/\\]+)[/\\]/)
  return match ? match[1] : null
}

function contentFiles(root) {
  const out = []
  const docsRoot = path.join(root, 'sites')
  if (!fs.existsSync(docsRoot)) return out
  for (const site of fs.readdirSync(docsRoot)) {
    const docs = path.join(docsRoot, site, 'src', 'content', 'docs')
    if (!fs.existsSync(docs)) continue
    const walk = dir => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name)
        if (entry.isDirectory()) walk(full)
        else if (/\.mdx?$/.test(entry.name)) out.push({ site, file: full })
      }
    }
    walk(docs)
  }
  return out
}

function checkFile({ site, file }, root) {
  const relative = path.relative(root, file)
  const text = fs.readFileSync(file, 'utf8')
  const lines = text.split('\n')
  const findings = []
  const scoped = SITE_SCOPED[site]

  lines.forEach((line, index) => {
    if (scoped) {
      for (const [bad, good] of Object.entries(scoped)) {
        // Word-boundary match, but allow the phrase to start a sentence and to
        // appear inside JSX string props (generated practice problems).
        const re = new RegExp(`\\b${bad}\\b`, 'gi')
        let match
        while ((match = re.exec(line)) !== null) {
          findings.push({
            file: relative,
            line: index + 1,
            found: match[0],
            replacement: good,
            why: `"${match[0]}" is not terminology; the standard term is "${good}"`,
          })
        }
      }
    }

    for (const rule of BOGUS_DEFINITIONS) {
      if (rule.pattern.test(line)) {
        findings.push({
          file: relative,
          line: index + 1,
          found: 'a definition of a non-standard term',
          replacement: rule.replacement,
          why: rule.why,
        })
      }
    }
  })

  return findings
}

function main() {
  const args = parseArgs(process.argv.slice(2))
  const files = contentFiles(args.root)
  const findings = files.flatMap(entry => checkFile(entry, args.root))

  if (findings.length === 0) {
    console.log(`terminology               ok  ${files.length} file(s), no invented terms`)
    return 0
  }

  console.log(`terminology               FAIL  ${findings.length} non-standard term(s)\n`)
  for (const f of findings) {
    console.log(`  ${f.file}:${f.line}`)
    console.log(`    found:      ${f.found}`)
    console.log(`    should be:  ${f.replacement}`)
    console.log(`    why:        ${f.why}`)
  }
  console.log('')
  return 1
}

process.exit(main())
