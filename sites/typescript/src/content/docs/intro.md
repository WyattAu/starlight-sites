---
title: Typescript
description: "Introduction to typescript notes."
---

# TypeScript

Welcome to the TypeScript notes. TypeScript is a superset of JavaScript that adds static type checking — catching errors at compile time rather than runtime. It compiles to plain JavaScript, so it runs anywhere JavaScript runs.

## Why This Matters

TypeScript's type system catches bugs that JavaScript would only reveal at runtime. Generics enable reusable, type-safe code, utility types (`Partial`, `Pick`, `Omit`) transform existing types, and type guards narrow types at runtime. Understanding TypeScript's structural type system, declaration files, and compilation options is essential for modern web development.

## What You Will Find

- **Type system**: Primitive types, unions, intersections, type narrowing, and type guards
- **Generics**: Write functions and classes that work with any type while preserving type safety
- **Utility types**: Transform existing types — `Partial<T>`, `Pick<T,K>`, `Omit<T,K>`, `Record<K,V>`
- **Advanced patterns**: Mapped types, conditional types, template literal types
- **React integration**: Typing components, hooks, props, and state in React applications

Browse the content using the sidebar navigation on the left.

## Common Mistakes

**Using `any` to silence the type checker:** `any` disables type checking for that variable. Its an escape hatch, not a solution. Use `unknown` instead and narrow the type with type guards.

**Ignoring strict mode:** tsconfig.json with strict: true enables null checks, strict function types, and other safety features. Without strict mode, TypeScript catches fewer bugs. Always enable strict mode for new projects.

**Confusing type assertions with type guards:** `value as Type` tells the compiler to trust you — it does not runtime-check. `if (value instanceof Type)` is a runtime type guard that actually validates the type. Use type assertions sparingly.
