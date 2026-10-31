---
date: 2026-10-19T00:00:00+01:00
title: "How to Use These Notes: What Learning Science Says"
tags:
  - Mathematics
description: "Six evidence-based learning techniques -- retrieval practice, spaced repetition, interleaving, worked examples, elaboration, and dual coding -- with citations, how this network implements each, and what the research says does NOT work (re-reading, highlighting, cramming)."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com/how-to-use-learning-science"}]
}
</script>

Reading is not learning. The six techniques on this page are the ones with the
strongest evidence from cognitive science — replicated across domains, age
groups, and decades. They are ranked by effect size from Dunlosky et al.
(2013), the most comprehensive review to date, and each is mapped to how the
notes on this site implement it.

The single most important finding: **the techniques that feel easiest are the
least effective, and the techniques that feel hardest are the most effective.**
Re-reading feels productive and produces almost no long-term retention.
Retrieval practice — actively pulling information from memory — feels harder
and produces dramatically better retention. The discomfort is the learning.

## Intuition

Think of memory as a muscle, not a container. You do not fill it by pouring
information in; you strengthen it by *retrieving* information out. Every time
you successfully recall a fact, the neural pathway gets stronger and the fact
becomes easier to recall next time. Every time you re-read a fact, you create
an *illusion of fluency* — the text looks familiar, so you think you know it,
but the retrieval pathway is unstrengthened and the fact will be gone in a
week.

This is why the notes have recall prompts at the top of every page (before you
read, try to recall what you already know) and self-tests at the end (after you
read, retrieve what you just learned). Both are retrieval practice, and both
are placed where the research says they belong: before (to activate prior
knowledge) and after (to consolidate).

## 1. Retrieval practice (the testing effect)

**The finding.** Actively recalling information from memory produces
substantially better long-term retention than re-reading the same information.
Roediger and Karpicke (2006) showed that students who tested themselves after
one reading retained 50% more after one week than students who re-read four
times — despite the re-readers feeling *more* confident.

**How this site implements it.** Every content page has **recall prompts** at
the top (attempt before reading — they activate prior knowledge and set the
retrieval framework) and **self-tests** at the bottom (attempt after reading —
they consolidate). The transition pages have six-question self-tests; the
graduate pages have interleaving problems; the ML course has code exercises
where you predict the output before running.

**How to use it.** After reading a section, close the page. Write down what you
remember. Open the page and check. The act of *trying* to recall — even when
you fail — strengthens the pathway more than re-reading does. This is the
hypercorrection effect: errors made during retrieval practice, when corrected,
produce better retention than correct answers on the first try.

**Citation.** Roediger, H.L. & Karpicke, J.D. (2006). "Test-enhanced learning:
Taking memory tests improves long-term retention." *Psychological Science*,
17(3), 249–255.

## 2. Spaced repetition

**The finding.** Information reviewed at *increasing intervals* is retained far
longer than information reviewed at fixed intervals or crammed. Ebbinghaus
(1885) discovered the forgetting curve; Cepeda et al. (2006) confirmed the
optimal spacing.

**How this site implements it.** The notes do not include a spaced-repetition
system (that requires a tool like Anki), but every page is *self-contained* —
you can return to it at any interval without needing the surrounding context.
The recall prompts at the top of each page are designed for a specific
spacing schedule: read today, attempt the recall prompts tomorrow, attempt
them again after one week, then after one month.

**How to use it.** Do not re-read the same page in the same session. Instead:
read page A, then page B, then return to page A's recall prompts. The
intervening material creates the spacing, and the return is harder (and more
effective) than immediate re-reading.

**Citation.** Cepeda, N.J., Pashler, H., Vul, E., Wixted, J.T., & Rohrer, D.
(2006). "Distributed practice in verbal recall tasks: A review and quantitative
synthesis." *Psychological Bulletin*, 132(3), 354–380.

## 3. Interleaving

**The finding.** Mixing different *types* of problems within a practice session
produces better learning than blocking by type — even though blocked practice
feels easier and produces better practice performance. Rohrer and Taylor (2007)
showed this for mathematics: students who practised in blocks (all volume, then
all surface area) felt more confident but scored worse than students who
practised interleaved.

**How this site implements it.** The problem sets at the end of each track mix
problem types. The self-tests on the transition pages mix logic, algebra,
geometry, and calculus. The recall prompts at the top of each page ask about
concepts from earlier tracks.

**How to use it.** Do not work through a track's problems in order without
revisiting earlier material. After finishing the measure-theory page, attempt a
problem from the topology page. The mixing forces you to *identify which
technique to use* — a skill that blocked practice never develops because the
technique is always the same as the previous problem.

**Citation.** Rohrer, D. & Taylor, K. (2007). "The shuffling of mathematics
problems improves learning." *Instructional Science*, 35, 481–498.

## 4. Worked examples

**The finding.** For novice learners, studying worked examples — complete
solutions shown step by step — produces better learning than solving equivalent
problems, because solving requires the student to hold both the problem's
structure and the solution procedure in working memory simultaneously, which
overloads a novice's capacity. Sweller and Cooper (1985) called this the
**worked-example effect** and grounded it in **cognitive load theory**.

**How this site implements it.** Every proof page has worked examples with
every step shown. The measure-theory page's Stokes' theorem proof shows every
sign's origin. The functional analysis page's Hahn–Banach proof shows the
one-dimensional extension, then the Zorn's lemma step, with each
sub-derivation explicit.

**How to use it.** For novices: read the worked example first. Cover the
solution. Attempt the same problem. Uncover and compare. The key is the
*comparison* — what did you miss? For intermediates: attempt the problem first,
then read the worked example and identify the differences. The progression from
worked example to faded guidance to independent solving is called scaffolding.

**Citation.** Sweller, J. & Cooper, G.A. (1985). "The use of worked examples as
a substitute for problem solving in learning algebra." *Cognition and
Instruction*, 2(1), 59–89.

## 5. Elaboration

**The finding.** Connecting new information to existing knowledge — asking
"why?", generating examples, explaining in your own words — produces deeper
understanding and better retention than passive reading. Dunlosky et al. (2013)
rated self-explanation as "moderate utility" and elaborative interrogation as
promising.

**How this site implements it.** Every content page has an **Intuition**
section before the formal definitions, and every proof page has a section that
names *where each hypothesis is spent*. The intuition section is the
elaboration: it connects the formal statement to something you already
understand. The "where each hypothesis is spent" section is self-explanation:
it forces you to see *why* the condition is needed, not just that it is listed.

**How to use it.** After reading a theorem, close the page and try to explain
why the theorem is true in your own words — without the proof. Then read the
proof and compare. The gap between your explanation and the proof is where
your understanding is incomplete.

## 6. Dual coding

**The finding.** Information presented in both verbal and visual formats is
remembered better than either alone, because the two channels are processed by
different cognitive systems and create independent memory traces (Paivio,
1971).

**How this site implements it.** Every major concept has both a verbal
description and a visual or diagrammatic representation. The topology page's
continuity section has both the epsilon-delta definition and the intuitive
description. The ML course's code examples produce visual output (plots,
printed values) alongside the mathematical statements.

## 7. What does NOT work

**Re-reading.** The most common study technique produces almost no long-term
retention. The illusion of fluency — "I recognise this text" — is mistaken for
knowledge. Dunlosky et al. rated it "low utility."

**Highlighting.** The second most common technique performs no better than
reading, because it requires no active processing. Highlighting selects
information but does not require retrieval or elaboration.

**Cramming.** Massed practice produces good short-term performance and poor
long-term retention, exactly as the spacing effect predicts. The crammer's
exam score will be higher than the spacer's the next day, but the spacer's
score one month later will be dramatically higher.

**Passive video watching.** Watching someone else solve problems does not
build the retrieval pathways that solving them yourself does. Videos are
useful for *initial exposure* — seeing the technique demonstrated — but the
learning happens when you attempt the problem yourself.

## 8. The meta-lesson

Every technique that works requires *effort during learning*. The effort is
the signal that the retrieval pathway is being strengthened. If studying feels
easy, you are not learning — you are performing the illusion of learning. The
harder the retrieval, the stronger the retention.

This is Dunlosky et al.'s most important finding: the techniques students
report using most (re-reading, highlighting) are the ones with the least
evidence, and the techniques with the most evidence (practice testing,
distributed practice) are the ones students report using least. The reason is
that effective techniques feel harder, and students mistake difficulty for
ineffectiveness.

These notes are designed to make the effective techniques easier to use —
recall prompts at the right moments, self-tests at the right intervals,
worked examples at the right depth — but the effort must come from you.

## Cross-References

- **[Before You Begin](/before-you-begin/)** — the content baseline this page's techniques are designed to consolidate.
- **[Terms of Art](/terms-of-art/)** — the vocabulary, whose acquisition follows the same retrieval-practice principles.
- **[Introduction to Algebraic Topology](/9-topology/9_introduction-to-algebraic-topology/)** — recall prompts at the top of every page.
- **[Measure Theory](/10-measure-theory/)** — worked examples on every page, interleaved with the theory.
- Roediger & Karpicke (2006); Cepeda et al. (2006); Rohrer & Taylor (2007);
  Sweller & Cooper (1985); Dunlosky et al. (2013) — the primary sources for
  the six techniques described here.
