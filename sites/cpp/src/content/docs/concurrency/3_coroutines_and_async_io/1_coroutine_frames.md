---

title: Stackless Coroutine Frames and Heap Allocation
description: "This section covers coroutines as suspendable functions, the stackless vs stackful design trade-off, Coroutine frame layout, heap allocation and elision,"
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cpp", "url": "https://cpp.wyattau.com"}, {"name": "Concurrency", "url": "https://cpp.wyattau.com/concurrency"}, {"name": "3_coroutines_and_async_io", "url": "https://cpp.wyattau.com/concurrency/3_coroutines_and_async_io"}, {"name": "1_coroutine_frames", "url": "https://cpp.wyattau.com/concurrency/3_coroutines_and_async_io/1_coroutine_frames"}]
}
</script>

## Stackless Coroutine Frames and Heap Allocation

This section covers coroutines as suspendable functions, the stackless vs stackful design trade-off,
Coroutine frame layout, heap allocation and elision, `std::coroutine_handle<P>` for manual lifetime
Management, and RAII wrappers for coroutine handles.

## Coroutines as Suspendable Functions

A **coroutine** is a function that can be suspended and resumed [N4950 §9.5.4]. Unlike ordinary
Functions, which run to completion before returning to the caller, a coroutine may yield control
Back to its caller at an arbitrary suspension point and later be resumed from that exact point. The
C++20 coroutine mechanism is defined in terms of three keywords:

- `co_await`: suspend execution until an awaitable completes [N4950 §9.5.4].
- `co_yield`: suspend execution while producing a value (syntactic sugar for `co_await` on the
  promise"s `yield_value`).
- `co_return`: complete the coroutine and return a value.

Any function body containing one of these keywords is a **coroutine** [N4950 §9.5.2]. The compiler
Transforms the coroutine into a state machine at compile time. This transformation is entirely
Implicit — the programmer never writes the state machine manually.

```cpp
#include <coroutine>
#include <iostream>

struct SimpleAwaiter {
    bool await_ready() const noexcept { return false; }
    void await_suspend(std::coroutine_handle<>) const noexcept {}
    void await_resume() const noexcept { std::cout << "resumed\n"; }
};

struct SimplePromise {
    SimplePromise() = default;
    SimplePromise(const SimplePromise&) = delete;
    SimplePromise& operator=(const SimplePromise&) = delete;
    ~SimplePromise() = default;

    std::suspend_never initial_suspend() noexcept { return {}; }
    std::suspend_never final_suspend() noexcept { return {}; }
    void return_void() {}
    void unhandled_exception() {}

    auto get_return_object() {
        return std::coroutine_handle<SimplePromise>::from_promise(*this);
    }
};

struct SimpleCoroutine {
    using promise_type = SimplePromise;
    std::coroutine_handle<SimplePromise> handle;
};

SimpleCoroutine my_coroutine() {
    std::cout << "step 1\n";
    co_await SimpleAwaiter{};
    std::cout << "step 2\n";
    co_await SimpleAwaiter{};
    std::cout << "step 3\n";
}

int main() {
    auto coro = my_coroutine();
    coro.handle.resume();
    coro.handle.resume();
    coro.handle.destroy();
}
```

Output:

```
step 1
resumed
step 2
resumed
step 3
```

:::note
Compiler generates a `promise_type` lookup, allocates a coroutine frame, and transforms the function
Body into a state machine. The `promise_type` member alias tells the compiler which promise type to
Use [N4950 §9.5.2].
:::
## Stackless vs Stackful Coroutines

C++ chose **stackless coroutines** — the coroutine frame is a single heap-allocated block, not a
Separate stack. This is a deliberate design decision with important trade-offs.

| Property                     | Stackless (C++)                                 | Stackful (e.g., Boost.Context, goroutines)         |
| :--------------------------- | :---------------------------------------------- | :------------------------------------------------- |
| Frame size                   | Fixed at compile time (known locals)            | Dynamic (grows/shrinks like a regular stack)       |
| Memory per coroutine         | $\mathcal{O}(1)$ — hundreds of bytes            | $\mathcal{O}(n)$ — megabytes reserved              |
| Allocation                   | Single heap allocation                          | Separate stack allocation                          |
| Suspend inside callee        | No — only at explicit `co_await` points         | Yes — any function call can be a suspend point     |
| Implementation cost          | Compiler transforms function into state machine | Context switching (save/restore registers + stack) |
| Migrating between OS threads | Must resume on same or specified thread         | Can freely migrate (stack is self-contained)       |
| Composability                | Requires explicit chaining of coroutines        | composable via call stack                          |

The key limitation of stackless coroutines is that **you cannot suspend in a function called by the
Coroutine unless that function is itself a coroutine**. If a regular function calls `co_await`It Is
a compile error — `co_await` can only appear in a coroutine body [N4950 §9.5.4].

```cpp
#include <coroutine>
#include <iostream>

struct NestedPromise {
    NestedPromise() = default;
    NestedPromise(const NestedPromise&) = delete;
    NestedPromise& operator=(const NestedPromise&) = delete;
    ~NestedPromise() = default;

    std::suspend_never initial_suspend() noexcept { return {}; }
    std::suspend_never final_suspend() noexcept { return {}; }
    void return_void() {}
    void unhandled_exception() {}

    auto get_return_object() {
        return std::coroutine_handle<NestedPromise>::from_promise(*this);
    }
};

struct Nested {
    using promise_type = NestedPromise;
    std::coroutine_handle<NestedPromise> handle;
};

// This is a coroutine — OK to use co_await
Nested inner() {
    std::cout << "inner: before\n";
    co_await std::suspend_always{};
    std::cout << "inner: after\n";
}

// This is a coroutine that calls another coroutine
Nested outer() {
    std::cout << "outer: calling inner\n";
    auto h = inner();
    h.handle.resume();
    h.handle.resume();
    h.handle.destroy();
    std::cout << "outer: done\n";
}

int main() {
    auto coro = outer();
    coro.handle.destroy();
}
```

## Coroutine Frame Layout

When the compiler transforms a coroutine, it generates a **coroutine frame** — a single contiguous
Block of memory whose layout is implementation-defined [N4950 §9.5.4]. The general structure is:

```
+-----------------------------------------------+
|  Coroutine frame (heap-allocated)              |
|                                                 |
|  +-------------------------------------------+ |
|  | promise object                             | |
|  |  - coroutine state (initial/running/       | |
|  |    suspended/cancelled/done)              | |
|  |  - stored exception (if any)              | |
|  |  - return value storage                   | |
|  +-------------------------------------------+ |
|  | function parameters (copied)              | |
|  +-------------------------------------------+ |
|  | local variables that cross suspend points  | |
|  +-------------------------------------------+ |
|  | resume/destroy function pointers (vtable)  | |
|  +-------------------------------------------+ |
|  | padding / alignment                        | |
|  +-------------------------------------------+ |
+-----------------------------------------------+
```

The frame must be large enough to hold the **promise object**, a copy of **all function
Parameters**, and **every local variable whose lifetime crosses a suspension point**. Variables that
Are dead before or after a suspension point need not be stored in the frame. The compiler performs a
Liveness analysis to minimize frame size [N4950 §9.5.4].

The total frame size $S$ can be expressed as:

$$
S = \mathrm{sizeof(\mathrm{promise\_type) + \sum_{i \in \mathrm{live params} \mathrm{sizeof(p_i) + \sum_{j \in \mathrm{live locals} \mathrm{sizeof(l_j) + \mathrm{padding
$$

### Frame Size Analysis

The compiler performs a **liveness analysis** to determine which local variables must be stored in
The frame. A variable must be stored in the frame if its lifetime spans at least one suspension
Point. Consider:

```cpp
Task example(int param) {
    int a = param * 2;           // lives across co_await 1
    co_await some_awaitable();   // suspension point 1
    int b = a + 1;               // lives across co_await 2
    co_await some_awaitable();   // suspension point 2
    int c = b + 1;               // dead after co_return — may not need frame storage
    co_return c;
}
```

Variables `a` and `b` must be stored in the frame because their lifetimes cross suspension points.
Variable `c` may or may not be stored depending on whether the compiler can prove it does not need
To persist (the compiler is conservative here and stores it).

The frame layout is :

```
+---------------------------+
| promise_type              |  (fixed size)
+---------------------------+
| int param (copy)          |
+---------------------------+
| int a                     |  (live across suspend 1)
+---------------------------+
| int b                     |  (live across suspend 2)
+---------------------------+
| int c                     |  (may be stored)
+---------------------------+
| coroutine state index     |  (enum: 0, 1, 2, ..., done)
+---------------------------+
| padding                   |
+---------------------------+
```

## Formal Coroutine State Machine

The compiler transforms every coroutine into a state machine with a finite set of states. Each
Suspension point introduces a new state, and the coroutine transitions between states on each resume
[N4950 §9.5.4]:

$$
\mathrm{States = \{S_0, S_1, \ldots, S_n, S_{\mathrm{done}\}
$$

Where $S_0$ is the initial state (before the first suspension point), $S_i$ corresponds to the
$i$-th suspension point, and $S_{\mathrm{done}$ is the terminal state.

The state machine for a coroutine with $n$ suspension points has the following transitions:

$$
S_i \xrightarrow{\mathrm{resume} S_{i+1} \quad \mathrm{for  i \in \{0, \ldots, n-1\}
$$

$$
S_n \xrightarrow{\mathrm{resume} S_{\mathrm{done}
$$

At each state, the state machine executes the code segment between the previous suspension point and
The next one. The switch on the state index is the first thing executed when the coroutine is
Resumed:

```cpp
// Conceptual compiler-generated state machine
void coroutine_body(void* frame_ptr) {
    auto* frame = static_cast<MyFrame*>(frame_ptr);
    switch (frame->state) {
    case 0: goto state_0;
    case 1: goto state_1;
    case 2: goto state_2;
    }

state_0:
    frame->a = frame->param * 2;
    frame->state = 1;
    if (!awaiter1.await_ready()) {
        awaiter1.await_suspend(handle);
        return;  // suspend
    }
state_1:
    awaiter1.await_resume();
    frame->b = frame->a + 1;
    frame->state = 2;
    if (!awaiter2.await_ready()) {
        awaiter2.await_suspend(handle);
        return;  // suspend
    }
state_2:
    awaiter2.await_resume();
    frame->result = frame->b + 1;
    frame->promise.return_value(frame->result);
    frame->state = DONE;
    co_await final_suspend;  // final suspension
}
```

## Heap Allocation of the Coroutine Frame

By default, the coroutine frame is **dynamically allocated** on the heap using the global
`operator new` [N4950 §9.5.4]. The compiler generates a call equivalent to:

$$
\mathrm{frame = ::\operatorname{new}\bigl(\mathrm{sizeof(frame)\bigr)
$$

There are two guaranteed elision scenarios where the compiler **may not** allocate on the heap
[N4950 §9.5.4]:

1. **Guaranteed elision when the coroutine is in the final suspend point and the return object holds
   the coroutine handle.** If `final_suspend` returns `std::suspend_never`The compiler may destroy
   the frame immediately upon return.

2. **When the coroutine result is prvalue and the promise's `get_return_object` returns a handle
   that does not escape.**

:::caution
_permits_ it. In practice, most major compilers (GCC 12+, Clang 16+, MSVC 19.30+) do elide the
Allocation in simple cases, but for complex promise types or when the handle escapes, heap
Allocation occurs. Always profile if allocation overhead is a concern.
:::
### Heap Allocation Elision (HALO)

**Heap Allocation Elision Optimization** (HALO) is a compiler optimization that avoids heap
Allocation when the compiler can prove the coroutine frame does not outlive the scope in which it is
Created. The conditions for HALO are:

1. The coroutine's return type is a prvalue (not bound to a named variable that escapes).
2. The `final_suspend` returns `std::suspend_never`.
3. The coroutine does not outlive the scope in which it was created (no handle escapes).

When these conditions are met, the compiler allocates the frame on the stack of the caller instead
Of the heap. This eliminates the `operator new` / `operator delete` overhead.

```cpp
// HALO-eligible: the coroutine is created and destroyed within the same scope
void use_elided() {
    // If compiler can prove 'coro' doesn't escape, frame is stack-allocated
    auto coro = simple_coro();
    coro.resume();
    // frame destroyed when coro goes out of scope (if final_suspend = suspend_never)
}
```

### Custom Allocators

Custom allocators can be provided via `operator new` on the promise type or by defining a global
Placement `operator new` overload [N4950 §9.5.4]:

```cpp
#include <coroutine>
#include <cstddef>
#include <iostream>

struct TrackedPromise {
    static inline std::size_t alloc_count = 0;
    static inline std::size_t dealloc_count = 0;

    void* operator new(std::size_t size) {
        ++alloc_count;
        std::cout << "Allocating coroutine frame: " << size << " bytes\n";
        return ::operator new(size);
    }

    void operator delete(void* ptr, std::size_t size) {
        ++dealloc_count;
        std::cout << "Deallocating coroutine frame: " << size << " bytes\n";
        ::operator delete(ptr);
    }

    TrackedPromise() = default;
    TrackedPromise(const TrackedPromise&) = delete;
    TrackedPromise& operator=(const TrackedPromise&) = delete;
    ~TrackedPromise() = default;

    std::suspend_never initial_suspend() noexcept { return {}; }
    std::suspend_never final_suspend() noexcept { return {}; }
    void return_void() {}
    void unhandled_exception() {}

    auto get_return_object() {
        return std::coroutine_handle<TrackedPromise>::from_promise(*this);
    }
};

struct Tracked {
    using promise_type = TrackedPromise;
    std::coroutine_handle<TrackedPromise> handle;
};

Tracked tracked_coro() {
    co_await std::suspend_always{};
    co_return;
}

int main() {
    auto coro = tracked_coro();
    coro.handle.resume();
    coro.handle.destroy();
    std::cout << "allocs=" << TrackedPromise::alloc_count
              << " deallocs=" << TrackedPromise::dealloc_count << "\n";
}
```

### Pool Allocator for Coroutine Frames

For high-frequency coroutine creation (e.g., in a server handling millions of connections), a pool
Allocator can eliminate the overhead of `operator new`/`operator delete`:

```cpp
#include <coroutine>
#include <cstddef>
#include <new>
#include <vector>

class CoroutinePool {
    struct FreeList {
        FreeList* next = nullptr;
    };

    static constexpr std::size_t BLOCK_SIZE = 4096;
    std::vector<void*> blocks_;
    FreeList* free_ = nullptr;

    void* allocate_block(std::size_t size) {
        std::size_t count = BLOCK_SIZE / size;
        char* raw = new char[BLOCK_SIZE];
        blocks_.push_back(raw);
        for (std::size_t i = 0; i < count; ++i) {
            auto* node = reinterpret_cast<FreeList*>(raw + i * size);
            node->next = free_;
            free_ = node;
        }
        return free_;
    }

public:
    void* allocate(std::size_t size) {
        if (!free_) allocate_block(size);
        auto* node = free_;
        free_ = free_->next;
        return node;
    }

    void deallocate(void* ptr) {
        auto* node = static_cast<FreeList*>(ptr);
        node->next = free_;
        free_ = node;
    }

    ~CoroutinePool() {
        for (void* block : blocks_) delete[] static_cast<char*>(block);
    }
};

struct PooledPromise {
    static inline CoroutinePool pool;

    void* operator new(std::size_t size) {
        return pool.allocate(size);
    }

    void operator delete(void* ptr, std::size_t) {
        pool.deallocate(ptr);
    }

    PooledPromise() = default;
    PooledPromise(const PooledPromise&) = delete;
    PooledPromise& operator=(const PooledPromise&) = delete;
    ~PooledPromise() = default;

    std::suspend_never initial_suspend() noexcept { return {}; }
    std::suspend_never final_suspend() noexcept { return {}; }
    void return_void() {}
    void unhandled_exception() {}

    auto get_return_object() {
        return std::coroutine_handle<PooledPromise>::from_promise(*this);
    }
};

struct Pooled {
    using promise_type = PooledPromise;
    std::coroutine_handle<PooledPromise> handle;
};
```

## `std::coroutine_handle<P>` for Manual Lifetime Management

`std::coroutine_handle<P>` [N4950 §21.4.4] is a lightweight, copyable, -destructible handle To a
coroutine frame. It does **not** own the frame — it is a non-owning observer. The programmer is
Responsible for calling `destroy()` when the coroutine is no longer needed.

Key members of `std::coroutine_handle<P>` [N4950 §21.4.4]:

| Member                   | Description                                               |
| :----------------------- | :-------------------------------------------------------- |
| `handle.done()`          | Returns `true` if the coroutine reached its final suspend |
| `handle.resume()`        | Resumes a suspended coroutine                             |
| `handle.destroy()`       | Destroys the coroutine frame and calls all destructors    |
| `handle.promise()`       | Returns a reference to the promise object                 |
| `handle.from_promise(p)` | Constructs a handle from a promise reference              |
| `coroutine_handle<>()`   | Default-constructed handle (null)                         |
| `handle.operator bool()` | `true` if the handle refers to a coroutine frame          |

### Handle Nullability and Validity

A default-constructed `coroutine_handle` is a **null handle** — it does not refer to any frame. The
Following operations are undefined on a null handle: `resume()``destroy()``promise()`And `done()`.
Always check `operator bool()` before calling these.

A handle becomes **invalid** after `destroy()` is called. Using an invalid handle is undefined
Behavior [N4950 §21.4.4].

## `std::coroutine_handle<P>::destroy()` for Cleanup

Calling `destroy()` on a handle triggers:

1. Destruction of all local variables in the coroutine frame (in reverse order of construction).
2. Destruction of the promise object.
3. Deallocation of the frame memory (via the matching `operator delete`).

After `destroy()`The handle becomes **invalid** — using it is undefined behavior [N4950 §21.4.4]. If
`destroy()` is never called and no other mechanism cleans up, the frame leaks.
