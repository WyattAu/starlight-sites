---
title: Ruby
description: "Introduction to ruby notes."
---

# Ruby

Welcome to the Ruby notes. Ruby is a dynamic, interpreted language designed for programmer happiness — with a clean syntax, powerful metaprogramming capabilities, and an emphasis on convention over configuration.

## Why This Matters

Ruby's elegant syntax and powerful metaprogramming features make it ideal for rapid development. Understanding Ruby's object model (everything is an object, including numbers and booleans), its block and iterator patterns, and its metaprogramming capabilities (method_missing, eigenclasses, refinements) gives you insight into dynamic language design that transfers to Python, JavaScript, and other languages.

## What You Will Find

- **Object model**: Everything is an object — classes, methods, and blocks are all first-class citizens
- **Blocks, Procs, and Lambdas**: Three levels of closures with different behaviours for argument handling
- **Metaprogramming**: Define methods at runtime, open classes, and use method_missing to handle dynamic calls
- **Mixins**: Code reuse through modules, avoiding the diamond inheritance problem
- **Testing and conventions**: RSpec, Minitest, and Ruby community conventions

Browse the content using the sidebar navigation on the left.

## Common Mistakes

**Confusing nil with empty string/array:** nil is the absence of a value. "" is an empty string. [] is an empty array. Using .nil? vs .empty? vs checking size gives different results. nil.to_s returns "", which can mask nil values.

**Using == for string comparison:** In Ruby, == compares string content (unlike Java). But equal? compares object identity. eql? compares content and type. Use == for most string comparisons, but be aware of the distinction.

**Forgetting Ruby is object-oriented:** Everything in Ruby is an object, including integers, strings, and nil. 5.times { ... } works because integers are objects. This means methods can be called on any value, which is different from languages with primitive types.
