---
title: "TypeScript Glossary — Key Terms and Definitions"
description: "Comprehensive glossary of TypeScript programming concepts, including type system, generics, utility types, React patterns, and advanced type-level programming."
date: 2026-07-24
tags: [glossary]
---

## TypeScript Fundamentals

**TypeScript**: A superset of JavaScript that adds static type checking, catching bugs at compile time while preserving JavaScript's flexibility.

**Type Checker**: The compiler component that analyzes code for type errors without generating output.

**Compiler (tsc)**: The TypeScript compiler that type-checks and transpiles TypeScript to JavaScript.

**Strict Mode**: Compiler option that enables additional type-checking strictness: `strict: true` in tsconfig.

**tsconfig.json**: The TypeScript configuration file specifying compiler options, include/exclude patterns, and project references.

**Any**: An escape hatch that disables type checking. Avoid using — it defeats TypeScript's purpose.

**Unknown**: A type-safe alternative to `any`. Requires narrowing before use.

**Never**: A type that represents values that never occur — functions that always throw or have infinite loops.

**Void**: The return type of functions that don't return a value.

**Type Assertion**: Tells the compiler to treat a value as a specific type: `value as string`.

**Non-Null Assertion (!)**: Asserts a value is not null or undefined, suppressing strict null checks.

## Primitive and Literal Types

**Primitive Types**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.

**Literal Types**: Types narrowed to specific values: `"hello"`, `42`, `true`.

**String Literal Type**: A type restricted to specific strings: `type Direction = "up" | "down" | "left" | "right"`.

**Number Literal Type**: A type restricted to specific numbers: `type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6`.

**Template Literal Types**: String manipulation at the type level: `` type EventName = `${"click" | "hover"}_${"start" | "end"}` ``.

**Enum**: A type with a fixed set of named constants: `enum Status { Active, Inactive }`.

**Const Enum**: An enum inlined at compile time, with no runtime object.

## Union and Intersection Types

**Union Type (|)**: A value can be one of several types: `string | number`.

**Discriminated Union**: A union of types sharing a common discriminant field for type narrowing.

```typescript
type Result = 
  | { status: "ok"; data: string }
  | { status: "error"; message: string };
```

**Intersection Type (&)**: A value must satisfy all combined types: `TypeA & TypeB`.

**Type Narrowing**: The compiler narrows types based on control flow — `typeof`, `instanceof`, `in`, and discriminated unions.

**Type Guard**: A function that narrows types: `function isString(x: unknown): x is string { return typeof x === "string" }`.

## Interfaces and Type Aliases

**Interface**: Defines the shape of objects. Supports declaration merging and extension.

```typescript
interface User {
  name: string;
  age: number;
  email?: string; // optional
}
```

**Type Alias**: Creates a new name for a type. Can represent unions, intersections, and complex types.

**Declaration Merging**: Multiple interface declarations with the same name are automatically merged.

**Extends**: An interface can extend another: `interface Admin extends User { role: string }`.

**Index Signature**: Defines dynamic property access: `{ [key: string]: number }`.

**Record Utility Type**: Creates object types: `Record<string, number>`.

**Optional Property (?)**: A property that may or may not exist: `email?: string`.

**Readonly Modifier**: Makes a property immutable: `readonly id: number`.

## Generics

**Type Parameter**: A placeholder for a type: `function identity<T>(arg: T): T { return arg }`.

**Generic Constraint**: Restricts type parameters: `<T extends Comparable<T>>`.

**keyof Operator**: Extracts the keys of a type as a union: `keyof User` gives `"name" | "age" | "email"`.

**typeof Operator**: Extracts the type of a value at the type level.

**Mapped Type**: Iterates over object keys to transform types: `{ [K in keyof T]: NewType }`.

**Default Type Parameters**: Provides fallback types for generics: `T = string`.

**Generic Interface**: An interface with type parameters: `interface ApiResponse<T> { data: T }`.

## Utility Types

**Partial<T>**: Makes all properties optional.

**Required<T>**: Makes all properties required.

**Readonly<T>**: Makes all properties readonly.

**Pick<T, K>**: Extracts specific properties from a type.

**Omit<T, K>**: Removes specific properties from a type.

**Exclude<T, U>**: Removes types from a union.

**Extract<T, U>**: Extracts types from a union.

**NonNullable<T>**: Removes `null` and `undefined` from a type.

**ReturnType<T>**: Extracts the return type of a function type.

**Parameters<T>**: Extracts the parameter types of a function type.

**InstanceType<T>**: Extracts the instance type of a constructor.

**Awaited<T>**: Unwraps the type of a Promise.

## Advanced Type Patterns

**Conditional Type**: A type that depends on a condition: `T extends U ? X : Y`.

**infer Keyword**: Extracts types from within conditional types: `type Unpack<T> = T extends Promise<infer U> ? U : T`.

**Mapped Type with Conditional**: Combining iteration and conditions for complex type transformations.

**Branded Types**: Adding phantom properties for nominal typing: `type UserId = string & { __brand: "UserId" }`.

**Template Literal Manipulation**: Uppercase, Lowercase, and string transformations at the type level.

**Recursive Types**: Types that reference themselves, enabling deep transformations.

**Satisfies Operator**: Validates that a value conforms to a type without widening: `const x = { a: 1 } satisfies Record<string, number>`.

## TypeScript with JavaScript

**Declaration File (.d.ts)**: Provides type information for JavaScript libraries without runtime code.

**@types Packages**: Community-maintained type definitions for JavaScript libraries on npm.

**Module Resolution**: How TypeScript finds type definitions for imported modules.

**Path Mapping**: Configuring module resolution aliases in tsconfig: `"@/*": ["./src/*"]`.

**Ambient Declaration**: Declares types for global variables or external modules: `declare const API_URL: string`.

## React with TypeScript

**Component Props**: Typing component properties with interfaces: `interface Props { name: string }`.

**Typing Hooks**: `useState<string>("")`, `useRef<HTMLInputElement>(null)`.

**Event Handlers**: `React.ChangeEvent<HTMLInputElement>`, `React.MouseEvent<HTMLButtonElement>`.

**Children Type**: `PropsWithChildren<Props>` or `React.ReactNode` for children prop.

**Generic Components**: Components that work with any type: `function List<T>({ items }: { items: T[] })`.

**Forward Ref**: Typing ref forwarding with `React.forwardRef<HTMLDivElement, Props>`.

**Context Typing**: `createContext<ThemeContextType | undefined>(undefined)`.

## Related Terms

- See [JavaScript Reference](/programming/glossary) for JavaScript fundamentals
- See [Dart Glossary](/dart/glossary) for typed language comparison
- See [Kotlin Glossary](/kotlin/glossary) for another statically-typed language
- See [Programming Glossary](/programming/glossary) for general programming concepts
- See [Computer Science Glossary](/computer-science/glossary) for CS fundamentals
