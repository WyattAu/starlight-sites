# solid-fx borrow: scoped plan (next session)

Library cloned to /tmp/opencode/solid-fx (WyattAu/solid-fx, re-clone
if tmp cleaned). Site: mathematics; Solid islands already work
(FlashcardDeck.tsx pattern, solidJs() in astro.config).

## 1. CountUp (port properly)

- Copy src/content/TextAnimations/CountUp/CountUp.tsx into
  sites/mathematics/src/components/CountUp.tsx (trim demo bits).
- Add dependency: bun add motion (the only new lib).
- Integration: on the 17-core-course hub index.md, render as an
  island (client:visible) counting the written-chapter count (89)
  and the staging count (15) in the course panel.
- gate: bun run build + playwright on the hub (count animates on
  scroll into view).

## 2. FadeContent (native port, no gsap)

- Do NOT port gsap. Write a ~30-line native island: IntersectionObserver
  + CSS opacity/translate transition, props {children, threshold,
  once}. Same visual effect as the solid-fx 'fade'.
- Integration: apply to the landing's topic grid sections.
- gate: playwright (sections fade in on scroll; prefers-reduced-
  motion respected).

## 3. Acceptance

- tree-wide gates green; llms refreshed; deploy green; playwright
  confirms both effects.
