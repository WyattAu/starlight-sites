---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "swift", "url": "https://swift.wyattau.com"}, {"name": "Intro", "url": "https://swift.wyattau.com/intro"}]
}
</script>
title: Swift
description: "Introduction to swift notes."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "swift", "url": "https://swift.wyattau.com"}, {"name": "Intro", "url": "https://swift.wyattau.com/intro"}]
}
</script>

# Swift

Welcome to the Swift notes. Swift is a modern language for iOS, macOS, watchOS, and tvOS development — combining the safety of a strong type system with the performance of compiled code and the expressiveness of modern syntax.

## Why This Matters

Swift is the primary language for Apple platform development. Its optionals enforce nil safety at compile time, value types (structs, enums) provide predictable behaviour, and protocol-oriented programming favours composition over inheritance. Understanding Swift's type system, memory management (ARC), and concurrency model (async/await, actors) is essential for building reliable, performant apps.

## What You Will Find

- **Type system**: Optionals, type inference, and generics for safe, expressive code
- **Value types vs reference types**: Structs and enums (value) vs classes (reference) — understanding when to use each
- **Protocols and extensions**: Define capabilities and add functionality to existing types without modifying them
- **Memory management**: Automatic Reference Counting (ARC), strong/weak/unowned references
- **Concurrency**: async/await, actors, and structured concurrency for safe parallel execution

## Resources

- Swift.org documentation (swift.org/documentation) — Official language reference
- Hacking with Swift (hackingwithswift.com) — Free tutorials and projects
- Apple Developer documentation (developer.apple.com/documentation) — Framework reference

## How to Get Started

Install Xcode from the Mac App Store (includes Swift) or use Swift.org's toolchain for Linux. Start with Swift Playgrounds for interactive experimentation, then build a small command-line tool or SwiftUI app. The "100 Days of SwiftUI" course (hackingwithswift.com) is an excellent structured learning path.

Browse the content using the sidebar navigation on the left.

## Intuition

**Swift is Apple's modern language for iOS, macOS, and beyond:** Designed for safety and performance, Swift eliminates common C/Objective-C errors while providing modern language features like optionals, closures, and protocol-oriented programming.

**Why it matters:** Swift is the primary language for Apple platform development and is expanding to server-side and cross-platform use.

**The key insight:** Swift's optionals (String?) make the absence of a value explicit in the type system, eliminating null pointer exceptions at compile time.

## Study Approach

Start with Swift basics: variables, optionals, functions, and control flow. Then move to value types (structs, enums) vs reference types (classes), protocols, and extensions. Concurrency (async/await, actors) comes last — it builds on all previous concepts. Use Swift Playgrounds for rapid experimentation before committing to a full Xcode project.

## Common Mistakes

**Confusing `let` and `var`:** `let` declares a constant (cannot be reassigned). `var` declares a variable. Swift encourages immutability — use `let` everywhere possible. This makes code safer and helps the compiler optimise.

**Ignoring optionals:** Swift uses optionals (Type?) to represent values that may be absent. Forcing an optional with ! crashes the program if nil. Use optional binding (if let, guard let) or nil coalescing (??) to handle optionals safely.

**Not using guard statements for early exits:** guard is like if but for conditions that must be true for the rest of the function to work. Using guard with else { return } makes preconditions explicit and reduces nesting.
## Cross-References

- **[Site Home](../../):** Main landing page for swift notes.
- **[Practice](../../practice-*.mdx):** Practice problems for revision.
