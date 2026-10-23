---
date: 2026-10-23T00:00:00+00:00
title: "About This Site"
description: "What this economics site is, the standard it holds itself to, and how it connects to the rest of the network."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "economics", "url": "https://economics.wyattau.com"}, {"name": "About", "url": "https://economics.wyattau.com/about"}]
}
</script>

This site provides free, university-level economics notes with the central theorems proved in
full. It exists because the gap between exam-board economics and graduate economics is usually
crossed with hand-waving, and the hand-waving is where students lose the subject: the moment a
result is cited without its hypotheses, the reader has no way to know why it fails in the paper
they are reading.

## The standard

Every stated theorem carries its proof, or a proof sketch labelled honestly as a sketch with the
complete argument referenced. Hypotheses are named at the point of use, and the proofs locate
where each hypothesis enters — because that is what tells you what breaks in applied work when a
result misbehaves. Terms are defined before they are used, and the
[glossary](/glossary/) collects the cross-track vocabulary. Each page closes with a self-test
keyed to its sections, written as retrieval practice.

## Sources and level

The level is the standard university sequence — the material of Varian for micro, Romer for
growth, Angrist and Pischke for econometrics, and Osborne for game theory — distilled to what is
load-bearing. Proofs follow the canonical arguments: Debreu's construction for representation,
the square-completion for Gauss--Markov, Kakutani for Nash — with the steps made explicit rather
than compressed.

## How the site relates to the exam-board sites

The A-Level and IB economics sites carry the exam-facing treatment: diagrams, evaluation
structures, and board-specific wording. This site carries the university layer underneath them.
The connection is deliberate — supply and demand is the exam-board treatment of what the micro
track proves as constrained optimisation meeting market clearing — and cross-references run in
both directions where the same object appears at both levels.

## The self-test convention

The harder self-test items deliberately ask where a proof used a hypothesis rather than what the
theorem says. That is the question applied work keeps asking — a wage regression misbehaves, and
the diagnostic question is which assumption of the estimator failed — so the self-tests train the
motion early.

## Corrections

Errors are real and readers find them. If something is wrong, it gets fixed and the fix is
recorded, because knowing where a document was wrong is part of knowing how much to trust it.

## The writing convention

Pages are written to be read once with attention, not twice with a highlighter. That means
definitions inline rather than footnoted, proofs broken at their genuine moves rather than
paragraph-length, and cross-references that name what the referenced page proves rather than
gesturing. Where a result is used three pages before it is proved, the forward reference says so
and states the result precisely at first use.

## The network

This site is part of a network: exam-board sites (A-Level, IB, AP, DSE and others) for the
school-facing treatment, subject sites (mathematics, physics, chemistry, computer science,
finance, accounting) for the discipline-facing treatment, and a machine-learning site for the
applied layer. The economics content on exam-board sites is the school version of this site's
tracks; the links between them are maintained and checked by tooling, not by hope.

## The writing convention

Pages are written to be read once with attention, not twice with a highlighter. Definitions are
inline rather than footnoted, proofs are broken at their genuine moves rather than compressed
into paragraphs, and cross-references name what the referenced page proves rather than gesturing.
Where a result is used three pages before it is proved, the forward reference says so and states
the result precisely at first use.

## The maintenance model

Content is checked by tooling on every change: proof-terminator counts against theorem counts
(the survey method that found this site's founding gaps), depth minimums, frontmatter validity,
link integrity, and LaTeX parseability. The tooling is why the site can grow without the
mechanical defects creeping back — the standards are enforced, not remembered.

## How to report an error

Anything that looks wrong — a proof step, a hypothesis, a definition, a broken link — is worth
reporting. The fix lands with the correction recorded, and repeated reports on the same spot get
a rewrite rather than a patch, because a page that needs repeated patches is a page that is
structured wrong.

## Reading order

The study hub names the dependency chain: micro theory before game theory, the consumer problem
before the welfare theorems, the OLS decomposition before Gauss--Markov. The tracks are written
so that reading in order means every term is already defined — and reading out of order means the
forward references say precisely what is being assumed.

## The exam interface

University treatments are examined differently from school treatments: problem sets, not essays;
proofs, not evaluations. The self-tests follow the problem-set convention, and the worked items
show full arguments because partial arguments are exactly what the format penalises.
