---

date: 2026-07-23T21:57:32+01:00
title: Typescript
description: "\"itemListElement\": [{\"name\": \"Home\", \"url\": \"https://wyattau.com\"}, {\"name\": \"typescript\", \"url\": \"https://typescript.wyattau.com\"}, {\"name\": \"Intro\", \"url\":"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "typescript", "url": "https://typescript.wyattau.com"}, {"name": "Intro", "url": "https://typescript.wyattau.com/intro"}]
}
</script>

## TypeScript

Welcome to the TypeScript notes. TypeScript is a superset of JavaScript that adds static type checking — catching errors at compile time rather than runtime. It compiles to plain JavaScript, so it runs anywhere JavaScript runs.

## Why This Matters

TypeScript's type system catches bugs that JavaScript would only reveal at runtime. Generics enable reusable, type-safe code, utility types (`Partial`, `Pick`, `Omit`) transform existing types, and type guards narrow types at runtime. Understanding TypeScript's structural type system, declaration files, and compilation options is essential for modern web development.

## What You Will Find

- **Type system**: Primitive types, unions, intersections, type narrowing, and type guards
- **Generics**: Write functions and classes that work with any type while preserving type safety
- **Utility types**: Transform existing types — `Partial<T>`, `Pick<T,K>`, `Omit<T,K>`, `Record<K,V>`
- **Advanced patterns**: Mapped types, conditional types, template literal types
- **React integration**: Typing components, hooks, props, and state in React applications

## How to Get Started

Install TypeScript with `npm install -g typescript` and compile your first `.ts` file with `tsc`. Start with strict mode enabled (`"strict": true` in tsconfig.json) from the beginning — it catches more bugs and teaches good habits. The TypeScript Handbook (typescriptlang.org/docs/handbook) is the definitive reference.

Browse the content using the sidebar navigation on the left.

## Intuition

**TypeScript adds static types to JavaScript:** Types catch errors at compile time that would otherwise be runtime bugs. TypeScript's type system is structural (shapes matter, not names) and gradually adoptable (any JavaScript is valid TypeScript).

**Why it matters:** TypeScript is the standard for large-scale JavaScript development, improving code quality, maintainability, and developer productivity.

**The key insight:** TypeScript's type inference means you rarely need explicit annotations — the compiler can in most cases figure out types from context.

## Study Approach

Start with TypeScript fundamentals: type annotations, interfaces, and type narrowing. Then learn generics and utility types for writing reusable, type-safe code. Advanced patterns (conditional types, mapped types, template literals) come last — they build on the basics. Use the TypeScript Playground (typescriptlang.org/play) for rapid experimentation.

## Practical Applications

- **React applications:** TypeScript provides type-safe props, hooks, and state management. The `@types/react` package provides comprehensive type definitions.
- **Node.js backends:** TypeScript catches runtime errors at compile time, improving reliability. Use `ts-node` for development and `tsc` for production builds.
- **Library development:** TypeScript declarations (`.d.ts` files) provide type information for JavaScript libraries, improving developer experience across the ecosystem.

## Common Mistakes

**Using `any` to silence the type checker:** `any` disables type checking for that variable. Its an escape hatch, not a solution. Use `unknown` instead and narrow the type with type guards.

**Ignoring strict mode:** tsconfig.json with strict: true enables null checks, strict function types, and other safety features. Without strict mode, TypeScript catches fewer bugs. Always enable strict mode for new projects.

**Confusing type assertions with type guards:** `value as Type` tells the compiler to trust you — it does not runtime-check. `if (value instanceof Type)` is a runtime type guard that actually validates the type. Use type assertions sparingly.

## Cross-References

- **[Site Home](../../):** Main landing page for typescript notes.
- **[Practice](../../practice-*.mdx):** Practice problems for revision.
