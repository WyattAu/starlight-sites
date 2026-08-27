---
title: "Ruby Glossary — Key Terms and Definitions"
description: "Study notes for Ruby Glossary — Key Terms and Definitions with worked examples, practice problems, and key concepts for exam preparation."
date: 2026-07-24
tags: [glossary]
---

## Ruby Fundamentals

**Ruby**: A dynamic, object-oriented language designed for developer happiness, with an elegant syntax and powerful metaprogramming.

**Everything Is an Object**: In Ruby, every value — including numbers, strings, booleans, and nil — is an object with methods.

**Interpreter (IRB)**: Interactive Ruby (IRB) provides a REPL for experimenting with Ruby code directly.

**Script**: A Ruby file (`.rb`) executed with the `ruby` command.

**Gem**: A packaged Ruby library or application, distributed via RubyGems.org.

**Bundler**: Manages gem dependencies using a `Gemfile` and `Gemfile.lock`.

**Rake**: A Make-like build tool for Ruby, commonly used for running tests and tasks.

**String**: An immutable sequence of characters. Supports interpolation (`"Hello, #{name}"`) and heredocs.

**Symbol**: An immutable, interned string-like value. Written with a colon prefix: `:name`. Used as hash keys and method names.

## Variables and Scope

**Local Variable**: A variable scoped to the enclosing block, method, or class. Created by assignment.

**Instance Variable**: A variable scoped to an object, prefixed with `@`. Each object has its own copy.

**Class Variable**: A variable shared across all instances of a class and its subclasses, prefixed with `@@`.

**Global Variable**: A variable accessible from anywhere in the program, prefixed with `$`. Avoid using them.

**Constant**: An identifier assigned once, written in uppercase: `MAX_SIZE = 100`. Warnings on reassignment.

**attr_reader**: Generates getter methods for instance variables: `attr_reader :name`.

**attr_writer**: Generates setter methods for instance variables: `attr_writer :name`.

**attr_accessor**: Generates both getter and setter methods: `attr_accessor :name`.

## Control Flow

**If/Unless**: Conditional execution. `unless` is the inverse of `if`.

**While/Until**: Loop constructs. `until` loops while the condition is false.

**Each**: Iterates over collections without using an index: `array.each { |item| puts item }`.

**Map**: Transforms each element and returns a new array: `array.map { |item| item * 2 }`.

**Select**: Filters elements based on a condition: `array.select { |item| item > 5 }`.

**Reject**: The inverse of select — filters out elements matching the condition.

**Reduce (Inject)**: Combines elements into a single value: `array.reduce(0) { |sum, n| sum + n }`.

**Case/When**: Multi-way conditional, similar to switch in other languages.

## Object-Oriented Programming

**Class**: A blueprint for objects, defining attributes (instance variables) and behavior (methods).

```ruby
class Dog
  attr_accessor :name, :breed

  def initialize(name, breed)
    @name = name
    @breed = breed
  end

  def bark
    "#{name} says Woof!"
  end
end
```

**Object**: An instance of a class, created with `new`.

**Method**: A function defined inside a class or module, called on an object.

**Initialize**: The constructor method, called when `new` is used to create an object.

**Inheritance**: A class inherits from a superclass using `<`, gaining its methods and attributes.

**Superclass**: The parent class from which another class inherits.

**Subclass**: A class that inherits from another class.

**Polymorphism**: Different objects responding to the same method in their own way.

**Encapsulation**: Restricting access to internal state using access modifiers.

## Modules and Mixins

**Module**: A collection of methods and constants that cannot be instantiated. Used for namespacing and mixins.

**Mixin**: Including a module in a class adds its methods as instance methods, enabling code reuse without inheritance.

**Include**: Adds module methods as instance methods of the class.

**Extend**: Adds module methods as class methods of the class.

**Namespace**: Modules prevent naming conflicts by grouping related classes and methods.

**Duck Typing**: Ruby cares about what an object can do, not what it is. If it responds to the methods you need, it works.

## Blocks, Procs, and Lambdas

**Block**: A chunk of code passed to a method, written with `do/end` or `{}`. Called with `yield` from the method.

**Proc**: A block wrapped in an object. Created with `Proc.new { }`. Stored, passed, and called with `.call`.

**Lambda**: A strict Proc that checks argument counts and returns from the lambda, not the enclosing method.

**Closure**: A function that captures variables from its enclosing scope. Blocks, Procs, and lambdas are all closures.

**Yield**: Calls the block passed to a method from within the method.

**Block Variable**: A variable available inside a block, defined between pipes: `|x, y|`.

**Higher-Order Method**: A method that accepts blocks, Procs, or lambdas as arguments.

## Rails

**Ruby on Rails**: A full-stack web framework emphasizing convention over configuration.

**MVC (Model-View-Controller)**: The architectural pattern Rails follows. Models handle data, views handle presentation, controllers handle logic.

**Active Record**: Rails' ORM (Object-Relational Mapper). Maps database tables to Ruby classes.

**Migration**: Version-controlled database schema changes using Ruby scripts.

**Controller**: Handles HTTP requests, interacts with models, and renders views.

**View**: Renders the response, typically ERB templates combining HTML and Ruby.

**Route**: Maps HTTP methods and URLs to controller actions.

**Asset Pipeline**: Manages CSS, JavaScript, and other static assets.

**Action Cable**: Rails' WebSocket framework for real-time features.

**Active Job**: Framework for background job processing.

## Testing

**RSpec**: The most popular Ruby testing framework, providing a DSL for readable tests.

**Describe/It**: RSpec structure — `describe` groups tests, `it` defines individual test cases.

**Expect**: RSpec assertion: `expect(value).to eq(expected)`.

**Test Double**: A stand-in for a real object in tests — stubs return predefined values, mocks verify method calls.

**FactoryBot**: Creates test objects with predefined attributes, replacing fixture files.

**Mock**: Verifies that specific methods were called on an object during a test.

**Stub**: Returns a predefined value when a method is called, without verifying usage.

## Metaprogramming

**define_method**: Creates methods dynamically at runtime.

**method_missing**: Intercepts calls to undefined methods. Override it to handle dynamic method names.

**respond_to_missing?**: Should be implemented alongside `method_missing` to ensure proper behavior with `respond_to?`.

**Open Classes**: Modifying existing classes at any time, adding or overriding methods.

**Monkey Patching**: The practice of modifying classes at runtime, potentially causing subtle bugs.

**Send**: Calls a method by name: `object.send(:method_name, args)`.

**Reflection**: Examining the structure and behavior of objects at runtime: `object.class`, `object.methods`.

**DSL (Domain-Specific Language)**: Using Ruby's metaprogramming to create expressive, domain-specific syntax.

## Related Terms

- See [Python Glossary](/python/glossary) for dynamic language comparison
- See [Java Glossary](/java/glossary) for static language comparison
- See [Programming Glossary](/programming/glossary) for general programming concepts
- See [Computer Science Glossary](/computer-science/glossary) for CS fundamentals
- See [Databases Glossary](/databases/glossary) for Rails database interactions
