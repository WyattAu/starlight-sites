---
date: 2026-10-23T00:00:00+00:00
title: "Game Theory"
description: "Game theory with proofs: dominance, best responses, Nash equilibrium in the mixed extension, and the existence theorem for finite games proved via Kakutani."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "economics", "url": "https://economics.wyattau.com"}, {"name": "Game Theory", "url": "https://economics.wyattau.com/4-game-theory"}]}
</script>

Game theory is the mathematics of strategic interaction, and its central existence result is the
cleanest fixed-point theorem in economics. This track proves it rather than citing it, because
the proof's hypotheses — compact convex strategy spaces, nonempty convex values, closed graph —
are exactly the assumptions whose failure defines the interesting research areas.

- **[Nash Equilibrium](/4-game-theory/1_nash-equilibrium/)** — dominance and iterated
  elimination (with the statewise argument for why strict dominance survives and weak dominance
  does not), best responses, the mixed extension, the Cournot worked example, and the Nash
  existence theorem proved via Kakutani.

## Prerequisites

Probability through expectation (mixed strategies are expectations over opponents' mixtures) and
comfort with correspondences as set-valued maps. The fixed-point theorem is stated inside the
proof with its hypotheses verified, so no prior fixed-point theory is required.

## What the track is not

This is not a catalogue of the 2x2 games. The prisoners' dilemma, battle of the sexes, and
matching pennies appear where they illuminate a concept (dominance, coordination, mixing), and
each is solved completely rather than named. The payoff of the proof-first approach is that the
existence theorem's hypotheses tell you *which games need which refinements* — dynamic games,
incomplete information, and discontinuous payoffs are the chapters this track sets up.

## Where the track goes

Sequential games and subgame perfection, games of incomplete information and the revelation
principle, and repeated games with the folk theorem — each inherits its machinery from the
static proof here.

## Notation used in the track

Strategies are $s_i$, profiles $s$, and mixtures $\sigma_i$ living in the simplex $\Delta(S_i)$.
Payoff functions carry the player index: $u_i$ is what player $i$ maximises, and only player
$i$'s arguments are highlighted as $(s_i, s_{-i})$ when the point is unilateral deviation. Mixed
payoffs are always expectations under the product distribution — independence of randomisation is
assumed, and relaxation of it is its own literature.

## Reading the self-tests

The self-test items are keyed to sections. The best preparation for the exam-style questions is
to re-solve the Cournot example with different demand slopes, then re-derive the best-response
intercepts from scratch — the algebra is short enough to check and long enough to reveal a
misremembered step.
