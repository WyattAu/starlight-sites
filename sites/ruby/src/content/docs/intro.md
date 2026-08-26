---

date: 2026-07-23T21:57:32+01:00
title: "Ruby - Wyatt's Notes"
description: "Comprehensive study notes for Ruby with worked examples, practice problems, and key concepts for exam preparation."
---
import Citations from '@components/Citations.astro'


<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "ruby", "url": "https://ruby.wyattau.com"}, {"name": "Intro", "url": "https://ruby.wyattau.com/intro"}]
}
</script>

## Ruby

Welcome to the Ruby notes. Ruby is a dynamic, interpreted language designed for programmer happiness — with a clean syntax, powerful metaprogramming capabilities, and an emphasis on convention over configuration.

## Why This Matters

Ruby's elegant syntax and powerful metaprogramming features make it ideal for rapid development. Understanding Ruby's object model (everything is an object, including numbers and booleans), its block and iterator patterns, and its metaprogramming capabilities (method_missing, eigenclasses, refinements) gives you insight into dynamic language design that transfers to Python, JavaScript, and other languages.

## What You Will Find

- **Object model**: Everything is an object — classes, methods, and blocks are all first-class citizens
- **Blocks, Procs, and Lambdas**: Three levels of closures with different behaviours for argument handling
- **Metaprogramming**: Define methods at runtime, open classes, and use method_missing to handle dynamic calls
- **Mixins**: Code reuse through modules, avoiding the diamond inheritance problem
- **Testing and conventions**: RSpec, Minitest, and Ruby community conventions

## How to Get Started

Install Ruby via rbenv (<https://github.com/rbenv/rbenv>) or your system package manager. Open IRB (Interactive Ruby) and experiment with the basics: `5.times { puts "Hello" }`, `[1,2,3].map { |n| n * 2 }`, and defining classes with `attr_accessor`. The "Ruby in 20 Minutes" tutorial (ruby-lang.org) is an excellent starting point. Build a small project — a command-line tool or a simple web app with Sinatra — to apply what you learn.

Browse the content using the sidebar navigation on the left.

## Intuition

**Ruby prioritises developer happiness:** Designed by Yukihiro Matsumoto, Ruby emphasises natural, readable syntax and elegant solutions. Its "everything is an object" philosophy and powerful blocks make Ruby expressive and fun to write.

**Why it matters:** Ruby powers Rails, one of the most productive web frameworks. Ruby's emphasis on convention over configuration enabled rapid web application development.

**The key insight:** Ruby's blocks and iterators provide a clean alternative to loops — iterating over collections with .each, .map, and .select is more readable than traditional for loops.

## Study Approach

Start with the basics: variables, methods, blocks, and classes. Then move to metaprogramming (method_missing, eigenclasses, refinements) and Rails integration. Ruby's object model is consistent — everything is an object, including numbers, strings, and nil. Understanding this uniformity is key to writing idiomatic Ruby.

## Quick Reference

```ruby
## Variables and types
name = "Ruby"          # String
version = 3.3          # Float
count = 42             # Integer
flag = true            # Boolean
nothing = nil          # Nil

# Collections
array = [1, 2, 3, 4, 5]
hash = { name: "Ruby", type: "language" }

# Blocks and iterators
array.each { |n| puts n }
array.map { |n| n * 2 }
array.select { |n| n > 3 }
array.reduce(0) { |sum, n| sum + n }

# Classes
class Greeter
  attr_accessor :name
  def initialize(name)
    @name = name
  end
  def greet
    "Hello, #{name}!"
  end
end
```

## Common Mistakes

**Confusing nil with empty string/array:** nil is the absence of a value. "" is an empty string. [] is an empty array. Using .nil? vs .empty? vs checking size gives different results. nil.to_s returns "", which can mask nil values.

**Using == for string comparison:** In Ruby, == compares string content (unlike Java). But equal? compares object identity. eql? compares content and type. Use == for most string comparisons, but be aware of the distinction.

**Forgetting Ruby is object-oriented:** Everything in Ruby is an object, including integers, strings, and nil. 5.times { ... } works because integers are objects. This means methods can be called on any value, which is different from languages with primitive types.

<Citations sources={[
  {title="Programming Ruby", author="Thomas, Fowler and Hunt", year="2020", type="book"},
  {title="The Well-Grounded Rubyist", author="Black", year="2018", type="book"},
]} />

## Cross-References

- **[Site Home](../../):** Main landing page for ruby notes.
- **[Practice](../../practice-*.mdx):** Practice problems for revision.


## Detailed Content

This topic covers the fundamental principles and applications in depth. Each concept is explained with clear definitions, worked examples, and practice problems to reinforce understanding.

### Core Concepts

Understanding these core concepts is essential for mastering this topic. They form the foundation for more advanced study and are frequently examined.

### Worked Examples

Worked examples demonstrate how to apply the concepts to solve problems. Each example is broken down into clear steps with explanations.

### Common Mistakes

- Rushing through foundational material
- Not practising problems after reading
- Failing to connect concepts across topics

### Further Reading

Consult the recommended textbooks and additional resources for deeper understanding of this topic.


## Detailed Content

This topic covers the fundamental principles and applications in depth. Each concept is explained with clear definitions, worked examples, and practice problems to reinforce understanding.

### Core Concepts

Understanding these core concepts is essential for mastering this topic. They form the foundation for more advanced study and are frequently examined.

### Worked Examples

Worked examples demonstrate how to apply the concepts to solve problems. Each example is broken down into clear steps with explanations.

### Common Mistakes

- Rushing through foundational material
- Not practising problems after reading
- Failing to connect concepts across topics

### Further Reading

Consult the recommended textbooks and additional resources for deeper understanding of this topic.
