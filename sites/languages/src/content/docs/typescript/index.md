---

sources:
  - text: Standard textbook reference
title: "TypeScript | Languages - Wyatt's Notes"
description: "This section covers TypeScript concepts, definitions, and applications with worked examples and practice problems."
date: 2026-01-01T00:00:00Z
---
sources:
  - text: Standard textbook reference

This section covers language learning, proficiency levels, and assessment frameworks. These materials support preparation for standardised language examinations and communicative competence development.

# TypeScript

TypeScript is a statically-typed superset of JavaScript developed and maintained by Microsoft. It adds optional type annotations, interfaces, generics, and other features to JavaScript, enabling developers to catch errors at compile time rather than at runtime. TypeScript compiles to plain JavaScript, meaning it runs anywhere JavaScript runs: in browsers, on servers (Node.js), and in any JavaScript runtime.

TypeScript has become the industry standard for large-scale JavaScript development. Its type system provides documentation through code, enables better tooling (autocompletion, refactoring, navigation), and catches entire categories of bugs before they reach production. Learning TypeScript is essential for any serious JavaScript developer.

**Prerequisites:** Review the prerequisite topics before attempting this section.

## Topics

- [Advanced Patterns](./advanced-patterns)
- [Advanced Types](./advanced-types)
- [Classes](./classes)
- [Enums And Modules](./enums-and-modules)
- [Error Handling](./error-handling)
- [Flashcards Typescript Basics](./flashcards-typescript-basics)
- [Functions](./functions)
- [Generics](./generics)
- [Practice Typescript Basics](./practice-typescript-basics)
- [Tooling And Configuration](./tooling-and-configuration)
- [Types And Annotations](./types-and-annotations)
- [Typescript With React](./typescript-with-react)
- [Typescript](./typescript)

## Why TypeScript?

JavaScript is a dynamically-typed language: variables can hold any type of value, and type errors are only caught when the problematic code executes. This flexibility is powerful for small scripts but becomes a liability in large codebases where:

- A function expecting a number might receive a string, causing subtle bugs that only appear in certain code paths
- Refactoring is risky because the compiler cannot verify that all call sites have been updated
- New team members cannot easily understand what types a function expects or returns

TypeScript solves these problems by adding a type system that is checked at compile time. The benefits include:

1. **Early error detection** — Type errors are caught before the code runs
2. **Better IDE support** — Autocompletion, inline documentation, and refactoring tools work reliably
3. **Self-documenting code** — Type annotations serve as documentation that never goes out of date
4. **Safer refactoring** — The compiler verifies that changes do not break existing code
5. **Improved collaboration** — Types communicate intent clearly between team members

## Intuition: What TypeScript Really Is

**JavaScript with a safety net:** TypeScript does not change how JavaScript works. It adds a layer of checking on top. When you write TypeScript, you are writing JavaScript with additional annotations that tell the compiler what types of values your code expects and produces.

**Why it matters:** Modern web applications are complex, often involving hundreds of files and thousands of lines of code. Without type safety, small errors can cascade into hard-to-debug issues. TypeScript catches these errors during development, when they are cheap to fix, rather than in production, when they are expensive.

**The key insight:** TypeScript's type system is *structural*, not *nominal*. Two types are compatible if their structures match, regardless of their names. This means TypeScript types are flexible and duck-typing friendly, while still providing strong safety guarantees.

## Types and Annotations

TypeScript provides several basic types that map to JavaScript's runtime types:

### Primitive Types

TypeScript supports all JavaScript primitive types with dedicated type keywords:

- `string` — Text values. Example: `let name: string = "Alice";`
- `number` — All numeric values (integers and floats). Example: `let age: number = 25;`
- `boolean` — True or false. Example: `let active: boolean = true;`
- `null` and `undefined` — Absence of value. Example: `let x: null = null;`
- `bigint` — Arbitrary-precision integers. Example: `let big: bigint = 100n;`
- `symbol` — Unique identifiers. Example: `let sym: symbol = Symbol("key");`

### Arrays

Arrays can be typed using either the element type followed by square brackets or the generic `Array` syntax:

- `number[]` — An array of numbers
- `Array<string>` — An array of strings (generic syntax)
- `readonly number[]` — A readonly array that cannot be modified after creation

Readonly arrays are useful for representing immutable data. Methods like `push`, `pop`, and `splice` are not available on readonly arrays, which prevents accidental modification.

### Tuples

Tuples are fixed-length arrays where each position has a specific type. They are useful for representing structured data with a known shape:

- `[string, number]` — First element is a string, second is a number
- `[string, number?]` — Second element is optional
- `[string, ...number[]]` — A string followed by any number of numbers

Tuples are commonly used as return types for functions that return multiple values, or as elements in data structures where the position of each element carries meaning.

### Object Types

Object types describe the shape of objects by specifying the names and types of their properties:

- Inline object types: `{ name: string; age: number; }`
- Optional properties: `{ name: string; email?: string; }` (the `?` makes email optional)
- Index signatures: `{ [key: string]: number; }` (any string key maps to a number)
- Readonly properties: `{ readonly id: number; name: string; }`

### Type Aliases and Interfaces

Both type aliases and interfaces can describe object shapes, but there are key differences:

**Type aliases** use the `type` keyword and can represent any type: primitives, unions, intersections, tuples, and objects. They are more flexible but cannot be extended or implemented by classes.

**Interfaces** use the `interface` keyword and can only describe object shapes (or function signatures). They support declaration merging (you can declare the same interface multiple times and the declarations merge) and can be extended with `extends` or implemented by classes with `implements`.

**Rule of thumb:** Use interfaces for object shapes that might be implemented by classes. Use type aliases for everything else (unions, intersections, mapped types, tuples).

### Union and Intersection Types

**Union types** (`A | B`) represent a value that can be one of several types. This is useful for functions that accept different types of input or for variables that can hold different kinds of values.

**Intersection types** (`A & B`) combine multiple types into one. The resulting type has all the properties of all the combined types. This is useful for composing object types from smaller pieces.

### Literal Types

Literal types restrict a variable to a specific set of values. They are extremely useful for representing states, directions, or any domain where only certain values are valid:

- String literals: `"north" | "south" | "east" | "west"`
- Numeric literals: `1 | 2 | 3 | 4 | 5 | 6`
- Boolean literals: `true | false`

Literal types combined with discriminated unions enable powerful pattern matching in TypeScript.

## Functions

Functions are the building blocks of TypeScript programs. TypeScript's type system for functions ensures that you call functions with the correct arguments and handle their return values properly.

### Function Type Annotations

Every function should have type annotations for its parameters and return type. This serves as documentation and enables the compiler to catch errors:

- Parameters: Each parameter gets a type annotation. Example: `(name: string, age: number)`
- Return type: The type after the colon. Example: `: string` or `: void`
- Optional parameters: Use `?` after the parameter name. Example: `(name: string, greeting?: string)`
- Default parameters: Provide a default value. Example: `(greeting: string = "Hello")`
- Rest parameters: Use `...` to accept any number of arguments. Example: `(...numbers: number[])`

### Function Overloads

Function overloads allow a function to have multiple signatures with different parameter types. The implementation must handle all signatures. Overloads are useful when a function's return type depends on its input type.

### Higher-Order Functions

Functions that accept other functions as parameters or return functions are called higher-order functions. TypeScript's type system makes them type-safe:

- Callback functions: `(callback: (result: string) => void) => void`
- Functions returning functions: `(x: number) => (y: number) => number`

Higher-order functions are fundamental to functional programming and are used extensively in array methods like `map`, `filter`, and `reduce`.

## Generics

Generics allow you to write functions, classes, and interfaces that work with any type while preserving type safety. They are like type parameters that you pass to a function or class.

### Generic Functions

A generic function accepts a type parameter (conventionally `T`) that is determined by the caller:

- `function identity<T>(x: T): T { return x; }` — Returns whatever type it receives
- `function first<T>(arr: T[]): T | undefined { return arr[0]; }` — Returns the first element of any array

### Generic Constraints

You can constrain generic types to objects with specific properties using the `extends` keyword:

- `function getLength<T extends { length: number }>(x: T): number { return x.length; }` — Only accepts types with a `length` property

### Generic Classes and Interfaces

Classes and interfaces can also be generic. This is commonly used for data structures:

- `class Stack<T> { private items: T[] = []; push(item: T): void { ... } }` — A type-safe stack that works with any type
- `interface Repository<T> { findById(id: string): T | null; save(entity: T): void; }` — A generic interface for data access

## Advanced Types

### Mapped Types

Mapped types transform existing types by iterating over their properties. TypeScript provides several built-in mapped types:

- `Partial<T>` — Makes all properties optional
- `Required<T>` — Makes all properties required
- `Readonly<T>` — Makes all properties readonly
- `Pick<T, K>` — Extracts a subset of properties
- `Omit<T, K>` — Removes specific properties

### Conditional Types

Conditional types create types based on conditions. They use the syntax `T extends U ? X : Y`, meaning "if T is assignable to U, use X, otherwise use Y."

### Template Literal Types

Template literal types create string types from patterns. They are useful for type-safe string manipulation:

- `type EventName = ${"click" | "focus" | "blur"}` — Creates `"click" | "focus" | "blur"`
- `type CSSProperty = ${"margin" | "padding"}-${"top" | "bottom" | "left" | "right"}` — Creates all combinations

### Enums

Enums define a set of named constants. They are useful for representing a fixed set of choices:

- Numeric enums: `enum Direction { Up, Down, Left, Right }` — Values auto-increment from 0
- String enums: `enum Color { Red = "red", Green = "green", Blue = "blue" }` — Explicit string values
- Const enums: `const enum Status { Active, Inactive }` — Inlined at compile time for better performance

### Modules and Namespaces

TypeScript uses ES modules as its module system:

- `export` and `import` — Named exports and default exports work as in JavaScript
- `import type` — Import only the type, erased at compile time
- `namespace` — Group related declarations (less common in modern TypeScript)

## Classes

TypeScript classes extend JavaScript classes with access modifiers, abstract members, and property declarations:

- `public` — Accessible from anywhere (default)
- `private` — Accessible only within the class
- `protected` — Accessible within the class and its subclasses
- `readonly` — Can only be assigned in the constructor

### Abstract Classes

Abstract classes cannot be instantiated directly. They serve as base classes that define a common interface and shared implementation for related classes:

- `abstract class Shape { abstract area(): number; }` — Declares a required method
- `class Circle extends Shape { area() { return Math.PI * this.radius ** 2; } }` — Implements the abstract method

### Property Declarations

TypeScript allows you to declare class properties with their types directly in the constructor parameters using parameter properties:

- `constructor(public name: string, private age: number) {}` — Creates and initializes properties automatically

## Error Handling

TypeScript provides several patterns for handling errors:

- `try/catch/finally` — Standard JavaScript error handling with typed catch parameters
- `Result<T, E>` — A functional pattern that represents success or failure without exceptions
- Discriminated unions — Use union types with a `kind` or `status` field to represent error states in the type system

The key principle is to make error states explicit in the type system rather than relying on runtime checks or exceptions alone.

## Tooling and Configuration

### tsconfig.json

The TypeScript configuration file controls how the compiler processes your code. Key options include:

- `target` — The JavaScript version to emit (ES5, ES2015, ES2020, ESNext)
- `module` — The module system (CommonJS, ESNext, NodeNext)
- `strict` — Enables all strict type-checking options
- `outDir` — The output directory for compiled files
- `rootDir` — The root directory of source files
- `include` and `exclude` — Which files to compile

### Compiler Options

- `strict: true` — Enables all strict checks (recommended for new projects)
- `noImplicitAny` — Errors on variables without explicit types
- `strictNullChecks` — Makes null and undefined distinct types
- `noUnusedLocals` — Errors on unused local variables
- `noUnusedParameters` — Errors on unused function parameters
- `noFallthroughCasesInSwitch` — Errors on fallthrough switch cases

## TypeScript with React

TypeScript and React work together to provide type-safe component development:

- Component props: Define interfaces for props objects
- State: Type the state object and setState calls
- Events: Use React event types like `React.ChangeEvent<HTMLInputElement>`
- Hooks: `useState<T>` and `useRef<T>` accept generic type parameters
- Context: Type the context value with `React.createContext<T>`

## Study Tips for TypeScript

1. **Start with strict mode** — Enable `strict: true` in tsconfig.json from the beginning. It catches more errors and teaches you better TypeScript habits.

2. **Type as you go** — Add types to new code immediately. Do not leave typing for later. Retroactive typing is much harder than writing types from the start.

3. **Use the type inference** — TypeScript can often infer types from usage. You do not always need explicit annotations. Let the compiler do the work when the type is obvious.

4. **Learn the utility types** — `Partial`, `Required`, `Pick`, `Omit`, `Record`, `Exclude`, `Extract` — these save you from writing repetitive type definitions.

5. **Read error messages carefully** — TypeScript error messages are descriptive and often tell you exactly what is wrong. Learn to parse them.

6. **Use `any` as a last resort** — `any` disables type checking for a value. It is sometimes necessary during migration, but overuse defeats the purpose of TypeScript.

7. **Practise with real projects** — The best way to learn TypeScript is to convert an existing JavaScript project or start a new project with TypeScript from the beginning.

## Common Mistakes in TypeScript

- **Using `any` to silence errors:** If you type something as `any`, you lose all type safety for that value. Instead, use `unknown` and narrow the type with type guards.

- **Confusing `interface` and `type`:** Both can describe object shapes. Interfaces are better for class implementations and declaration merging. Types are better for unions, intersections, and mapped types.

- **Ignoring the `strictNullChecks` flag:** Without strict null checks, `null` and `undefined` can be assigned to any type, which is a major source of runtime errors. Always enable strict null checks.

- **Over-annotating:** You do not need to annotate every variable. TypeScript's type inference is powerful. Only annotate when the inferred type is not specific enough or when the type is not obvious from context.

- **Not using type narrowing:** TypeScript can narrow types through control flow (if statements, typeof checks, instanceof checks). Use this feature to write type-safe code without explicit casts.

## Cross-References

- **[Advanced Types](./advanced-types):** Deep dive into conditional types, mapped types, and template literal types
- **[Generics](./generics):** Writing reusable, type-safe code
- **[Functions](./functions):** Function types, overloads, and higher-order functions
- **[Classes](./classes):** Object-oriented TypeScript with access modifiers and abstract classes
- **[Error Handling](./error-handling):** Patterns for type-safe error handling
- **[Tooling and Configuration](./tooling-and-configuration):** tsconfig.json and compiler options

## Further Reading

- *Programming TypeScript* by Boris Cherny — Comprehensive guide to TypeScript
- *Effective TypeScript* by Dan Vanderkam — 62 specific ways to improve your TypeScript
- TypeScript official handbook (typescriptlang.org/docs/handbook) — The definitive reference
- *TypeScript in 50 Lessons* by Stefan Baumgartner — Practical TypeScript patterns

Keep practising and reviewing to master this topic.
