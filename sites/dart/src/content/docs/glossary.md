---
title: "Dart Glossary — Key Terms and Definitions"
description: "Study notes for Dart Glossary — Key Terms and Definitions with worked examples, practice problems, and key concepts for exam preparation."
date: 2026-07-24
tags: [glossary]
---

## Dart Language Fundamentals

**Dart**: A client-optimized, object-oriented programming language developed by Google, the language behind Flutter.

**VM (Virtual Machine)**: Dart's runtime environment that executes Dart code, supporting both JIT and AOT compilation.

**JIT (Just-In-Time) Compilation**: Compiles Dart code at runtime during development, enabling hot reload.

**AOT (Ahead-Of-Time) Compilation**: Compiles Dart to native machine code before deployment, used for production mobile builds.

**Type Inference**: The compiler deduces types from context, reducing boilerplate: `var x = 42` infers `int`.

**Dynamic**: Bypasses the static type system, checked at runtime. Use sparingly.

**Var**: Declares a variable with inferred type: `var name = "Alice"`.

**Final**: A variable that can be assigned once and cannot be changed after initialization.

**Const**: A compile-time constant. The value must be known at compile time and is immutable.

**Late**: A non-nullable variable initialized after declaration. Throws if accessed before initialization.

## Null Safety

**Non-Nullable Type**: A type that cannot hold `null`. `String` is non-nullable in Dart's sound null safety.

**Nullable Type**: A type that can hold `null`, denoted with `?`: `String?` can be null.

**Null-Aware Access (?.)**: Chains property access that short-circuits on null: `user?.name`.

**Null-Aware Assignment (??=)**: Assigns a value only if the variable is currently null: `name ??= "default"`.

**Default Value (??)**: Provides a fallback when an expression is null: `final length = str?.length ?? 0`.

**Non-Null Assertion (!)**: Throws a runtime error if the value is null. Use when you are certain the value is non-null.

**Type Promotion**: The compiler narrows types based on null checks: `if (x != null) { x.length }` promotes x to non-nullable.

## Functions

**Function**: Defined with a return type (or `dynamic`), name, and parameters. Supports optional and named parameters.

```dart
int add(int a, int b) => a + b;
```

**Arrow Function**: A concise syntax for single-expression functions using `=>`.

**Optional Positional Parameters**: Parameters enclosed in `[]` that can be omitted when calling.

**Named Parameters**: Parameters enclosed in `{}` that must be specified by name when calling. Can be required with `required`.

**First-Class Functions**: Functions can be assigned to variables, passed as arguments, and returned from other functions.

**Closure**: A function that captures variables from its enclosing lexical scope.

## Data Structures

**List**: An ordered collection of elements. `List<E>` is generic. Created with `[]` or `List.filled()`.

**Map**: An unordered collection of key-value pairs. `Map<K, V>` is generic. Created with `{}` or `Map.from()`.

**Set**: An unordered collection of unique elements. `Set<E>` is generic. Created with `{}`.

**Record**: A lightweight, immutable data structure with fixed fields, introduced in Dart 3.

**Iterable**: A lazy collection that produces elements on demand. Lists, Sets, and Maps implement Iterable.

**Queue**: A double-ended queue for efficient insertion and removal at both ends.

## Object-Oriented Programming

**Class**: A blueprint for objects, defining properties (fields) and behavior (methods).

```dart
class Point {
  final double x, y;
  Point(this.x, this.y);
}
```

**Constructor**: Creates instances of a class. Dart supports named constructors, factory constructors, and redirecting constructors.

**Factory Constructor**: A constructor that doesn't always create a new instance, enabling caching or subtype returns.

**Inheritance**: A class extends another class using `extends`, inheriting fields and methods.

**Mixin**: Enables code reuse without inheritance. A mixin defines methods that can be mixed into classes using `with`.

**Abstract Class**: A class that cannot be instantiated, containing abstract methods that subclasses must implement.

**Interface**: Every class implicitly defines an interface. Classes implement interfaces using `implements`.

**Enum**: A special class representing a fixed set of constant values. Dart 3 enums support methods and fields.

**Extension Methods**: Add methods to existing types without modifying them: `extension StringExt on String { ... }`.

## Asynchronous Programming

**Future**: Represents a pending result of an asynchronous operation. A Future completes with a value or an error.

```dart
Future<String> fetchData() async {
  final response = await http.get(Uri.parse('https://api.example.com'));
  return response.body;
}
```

**Async/Await**: Provides synchronous-looking syntax for asynchronous operations. `await` pauses execution until the Future completes.

**Stream**: An asynchronous sequence of values. A Stream can be listened to with `.listen()` or iterated with `await for`.

**StreamController**: Creates and controls a Stream, providing `sink` for adding values and `stream` for listening.

**Isolate**: An independent execution context with its own memory and event loop. Communication between isolates uses message passing.

**Completer**: Manually controls when a Future completes, useful for bridging callback-based APIs.

## Flutter Widgets

**Widget**: The immutable building block of Flutter's UI. Every visual element is a widget.

**StatelessWidget**: An immutable widget with no mutable state. Rebuilds only when its parent rebuilds.

**StatefulWidget**: A widget with mutable state managed by a `State` object. `setState()` triggers a rebuild.

**Build Method**: Describes the part of the UI represented by a widget. Called whenever the widget needs to be rendered.

**Widget Tree**: The hierarchical structure of widgets describing the entire UI.

**Element Tree**: The runtime representation of the widget tree, managing lifecycle and state.

**RenderObject**: Handles layout and painting of widgets on screen.

## Layout and Styling

**Row**: Arranges children horizontally in a line.

**Column**: Arranges children vertically in a line.

**Stack**: Layers children on top of each other, like a deck of cards.

**Flex**: Provides flexible layout with `Expanded` and `Flexible` widgets.

**Container**: A convenience widget combining common painting, positioning, and sizing widgets.

**Padding**: Adds space around its child widget.

**Center**: Aligns its child to the center of itself.

**SizedBox**: Forces specific dimensions on its child or provides empty space.

## State Management

**Provider**: A recommended approach for simple to moderate state management, wrapping InheritedWidget.

**Riverpod**: A modern, compile-safe alternative to Provider without context dependency.

**BLoC (Business Logic Component)**: Separates business logic from UI using streams. Events in, state out.

**ChangeNotifier**: A class that notifies listeners when its state changes. Used with Provider and Flutter's built-in state management.

**InheritedWidget**: Provides data down the widget tree without explicit parameter passing.

## Navigation and Routing

**Navigator**: Manages a stack of routes (pages) in the app.

**Route**: Represents a screen or page in the app.

**Named Routes**: Routes identified by string names rather than widget instances.

**Push**: Adds a new route to the navigation stack.

**Pop**: Removes the top route from the navigation stack.

**MaterialApp**: The root widget of a Material Design application, providing routing, themes, and localization.

## Related Terms

- See [Kotlin Glossary](/kotlin/glossary) for mobile development comparison
- See [Swift Glossary](/swift/glossary) for iOS development comparison
- See [TypeScript Glossary](/typescript/glossary) for web development comparison
- See [Programming Glossary](/programming/glossary) for general programming concepts
- See [Computer Science Glossary](/computer-science/glossary) for CS fundamentals
