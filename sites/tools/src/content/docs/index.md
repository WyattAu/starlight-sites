---
template: splash
title: Developer Tools & Knowledge
description: "Rigorous notes on algorithms, version control, licensing, and engineering fundamentals. Written for developers who want to understand the foundations deeply."
hero:
  tagline: Developer tools and foundational knowledge notes. Covers algorithms, data structures, version control, licensing, and probabilistic ML -- the engineering fundamentals that underpin every project.
  actions:
    - text: Start with Algorithms
      link: /algorithms/intro/
      icon: right-arrow
      variant: primary
    - text: Browse All Topics
      link: /algorithms/intro/
      icon: right-arrow
      variant: secondary
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## Algorithms & Data Structures

Rigorous coverage of computational complexity, data structures, and algorithm design patterns.

<CardGrid>
  <Card title="Complexity Analysis" icon="star">
    Big-O, Master Theorem, amortised analysis, space complexity. The foundation of all algorithm study.
    [Learn more](/algorithms/complexity-analysis/)
  </Card>
  <Card title="Arrays & Strings" icon="star">
    Two pointers, sliding window, hashing, bloom filters. Essential patterns for coding interviews.
    [Learn more](/algorithms/02-arrays-strings/)
  </Card>
  <Card title="Linked Lists & Queues" icon="star">
    Monotonic stacks, union-find, priority queues, deque operations.
    [Learn more](/algorithms/03-linked-lists-stacks-queues/)
  </Card>
  <Card title="Trees & Graphs" icon="star">
    BSTs, balanced trees (AVL, Red-Black), B-trees, BFS, DFS, topological sort.
    [Learn more](/algorithms/04-trees-graphs/)
  </Card>
  <Card title="Sorting" icon="star">
    Merge sort, quicksort, radix sort, stability analysis, lower bounds.
    [Learn more](/algorithms/05-sorting/)
  </Card>
  <Card title="Dynamic Programming" icon="star">
    Memoisation, tabulation, state space optimisation, common DP patterns.
    [Learn more](/algorithms/06-dynamic-programming/)
  </Card>
  <Card title="Graph Algorithms" icon="star">
    Dijkstra, Kruskal, Ford-Fulkerson, Bellman-Ford, advanced data structures (Fibonacci heap, skip list).
    [Learn more](/algorithms/07-graph-algorithms/)
  </Card>
</CardGrid>

## Version Control (Git)

Comprehensive Git coverage from fundamentals through internals. 23 pages covering every aspect of Git mastery.

<CardGrid>
  <Card title="Git Fundamentals" icon="open-book">
    The three trees, Git objects, references, and how Git stores data internally.
    [Learn more](/git/02-fundamentals/)
  </Card>
  <Card title="Branching & Merging" icon="open-book">
    Branch strategies, merge vs rebase, conflict resolution, fast-forward merges.
    [Learn more](/git/03-branching-and-merging/)
  </Card>
  <Card title="Remotes & Workflows" icon="open-book">
    Remote operations, Git Flow, GitHub Flow, pull requests, CI/CD patterns with GitHub Actions.
    [Learn more](/git/04-remotes-and-workflows/)
  </Card>
  <Card title="Advanced Topics" icon="open-book">
    Reflog, stash, bisect, submodules, worktrees, cherry-pick, hooks, commit signing, pre-commit framework, filter-repo, sparse checkout.
    [Learn more](/git/05-advanced-topics/)
  </Card>
  <Card title="Git Internals" icon="open-book">
    Directory structure, packing, garbage collection, hash algorithm (SHA-1 to SHA-256).
    [Learn more](/git/06-internals/)
  </Card>
</CardGrid>

## Engineering Fundamentals

The broader knowledge every developer needs: career guidance, dev environments, open source, and productivity.

<CardGrid>
  <Card title="Development Environment" icon="puzzle">
    Editor configuration, terminal setup, debugging workflows, performance profiling.
    [Learn more](/general/dev-environment/)
  </Card>
  <Card title="Career" icon="puzzle">
    Engineering career paths, skills development, portfolio building.
    [Learn more](/general/career/)
  </Card>
  <Card title="Open Source" icon="puzzle">
    Contributing to open source, licence compliance, community building.
    [Learn more](/general/open-source/)
  </Card>
  <Card title="Productivity" icon="puzzle">
    Workflows, tooling, time management for engineers.
    [Learn more](/general/productivity/)
  </Card>
</CardGrid>

## Licensing

Software licensing essentials: understanding licences, compliance, and compatibility.

<CardGrid>
  <Card title="Software Licensing" icon="information">
    Licence types (permissive, copyleft, public domain), compatibility matrices, compliance requirements.
    [Learn more](/licensing/software-licensing/)
  </Card>
</CardGrid>

## Probabilistic ML

Foundations of probabilistic machine learning: Bayesian inference, supervised learning, and probabilistic models.

<CardGrid>
  <Card title="Probabilistic ML" icon="star">
    Bayesian reasoning, probabilistic graphical models, uncertainty quantification.
    [Learn more](/probabilisticml/)
  </Card>
</CardGrid>

## Study Strategy

1. **Start with complexity analysis** -- Big-O notation is prerequisite to everything else
2. **Implement before memorising** -- code each algorithm from scratch to build intuition
3. **Study data structure trade-offs** -- choosing the right structure is half the algorithm design
4. **Trace through examples** -- manually execute algorithms on small inputs
5. **Build a reference sheet** -- maintain a personal cheat sheet of complexities and patterns
