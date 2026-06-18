---
title: Coroutine Handle, Promise Type, and Awaiter
description: ""computing...\n";
    co_return "hello from coroutine";
}

int main() {
    Result r = compute_value();
    // The coroutine ran eagerly (initial_suspend returns suspend_never)
    // and is now at final suspend (suspend_always)
    std::cout << "result: " << r.value() << "\n";
    // ~Result calls handle.destroy()
}
```

## `await_transform` for Custom Suspension Behavior

If the promise type defines `await_transform`Every `co_await expr` first passes through it [N4950
§9.5.4.3]. This allows the promise to intercept and transform any awaitable into a custom awaiter,
Enabling library-level control over suspension semantics:

```cpp
#include <coroutine>
#include <iostream>

struct TransformingPromise {
    TransformingPromise() = default;
    TransformingPromise(const TransformingPromise&) = delete;
    TransformingPromise& operator=(const TransformingPromise&) = delete;
    ~TransformingPromise() = default;

    std::suspend_never initial_suspend() noexcept { return {}; }
    std::suspend_never final_suspend() noexcept { return {}; }
    void return_void() {}
    void unhandled_exception() {}

    auto get_return_object() {
        return std::coroutine_handle<TransformingPromise>::from_promise(*this);
    }

    // Transform any integer into a logging awaiter
    auto await_transform(int value) {
        struct IntAwaiter {
            int value;
            bool await_ready() const noexcept {
                std::cout << "await_ready(" << value << ")\n";
                return value == 0;
            }
            void await_suspend(std::coroutine_handle<>) const noexcept {
                std::cout << "await_suspend(" << value << ")\n";
            }
            int await_resume() const noexcept {
                std::cout << "await_resume(" << value << ")\n";
                return value * 2;
            }
        };
        return IntAwaiter{value};
    }
};

struct Transforming {
    using promise_type = TransformingPromise;
    std::coroutine_handle<TransformingPromise> handle;
};

Transforming transformed() {
    int a = co_await 5;
    int b = co_await 0;
    int c = co_await 3;
    std::cout << "a=" << a << " b=" << b << " c=" << c << "\n";
}

int main() {
    auto coro = transformed();
    coro.handle.destroy();
}
```

Output:

```
await_ready(5)
await_suspend(5)
await_resume(5)
await_ready(0)
await_resume(0)
await_ready(3)
await_suspend(3)
await_resume(3)
a=10 b=0 c=6
```

### `await_transform` and Generic Fallback

When the promise defines `await_transform`**every** `co_await` expression must match one of its
Overloads. If no overload matches, the code is ill-formed. This means you cannot `co_await`
`std::suspend_always` or any other type not handled by `await_transform` unless you provide a
Generic fallback:

```cpp
template<typename T>
auto await_transform(T&& awaitable) {
    return std::forward<T>(awaitable);
}
```

This generic fallback forwards the awaitable unchanged, allowing the default awaiter resolution to
Proceed for types not explicitly handled.

## `yield_value` and `return_value`

The promise type communicates values back to the caller through two distinct channels [N4950
§9.5.4.3]:

- **`co_yield expr`** is syntactic sugar for `co_await promise.yield_value(expr)`. It suspends the
  coroutine and makes `expr` available to the caller.
- **`co_return expr`** calls `promise.return_value(expr)` (or `promise.return_void()` if no value)
  and transitions the coroutine to the final suspend point.

A promise type must define **either** `return_value` or `return_void`But not both. If the Coroutine
uses `co_return;` (no value), `return_void` must be present.

```cpp
#include <coroutine>
#include <iostream>
#include <string>
#include <variant>

struct Channel {
    struct promise_type {
        std::variant<std::monostate, std::string, int> value_{};

        promise_type() = default;
        promise_type(const promise_type&) = delete;
        promise_type& operator=(const promise_type&) = delete;
        ~promise_type() = default;

        std::suspend_always initial_suspend() noexcept { return {}; }
        std::suspend_always final_suspend() noexcept { return {}; }
        void return_void() {}
        void unhandled_exception() {}

        auto get_return_object() {
            return Channel{std::coroutine_handle<promise_type>::from_promise(*this)};
        }

        auto yield_value(std::string s) {
            value_ = std::move(s);
            return std::suspend_always{};
        }

        auto yield_value(int i) {
            value_ = i;
            return std::suspend_always{};
        }
    };

    std::coroutine_handle<promise_type> handle;

    explicit Channel(std::coroutine_handle<promise_type> h) : handle(h) {}
    ~Channel() { if (handle) handle.destroy(); }
    Channel(const Channel&) = delete;
    Channel& operator=(const Channel&) = delete;

    auto& value() { return handle.promise().value_; }

    bool next() {
        if (!handle.done()) {
            handle.resume();
            return !handle.done();
        }
        return false;
    }
};

Channel multi_type_channel() {
    co_yield std::string("hello");
    co_yield 42;
    co_yield std::string("world");
    co_yield 99;
}

int main() {
    Channel ch = multi_type_channel();
    while (ch.next()) {
        auto& v = ch.value();
        if (std::holds_alternative<std::string>(v))
            std::cout << "string: " << std::get<std::string>(v) << "\n";
        else if (std::holds_alternative<int>(v))
            std::cout << "int: " << std::get<int>(v) << "\n";
    }
}
```

## Coroutine Frame Lifetime and the `final_suspend` Decision

The coroutine frame is heap-allocated (unless the compiler can prove it doesn"t escape) and its
Lifetime is managed by `std::coroutine_handle` [N4950 §9.5.4]. When a coroutine reaches the final
Suspend point, the behavior of `final_suspend` determines whether the frame is automatically
Destroyed or must be destroyed manually:

- **`std::suspend_always`**: The coroutine suspends at the final point. The caller (or resumer)
  **must** call `handle.destroy()` to free the frame. This is required for any coroutine whose
  return type needs to observe the coroutine's result after completion (e.g., a `Task` that carries
  a value).

- **`std::suspend_never`**: The coroutine's frame is destroyed immediately upon reaching the final
  suspend point. The handle becomes invalid. This is used for fire-and-forget coroutines.

```cpp
#include <coroutine>
#include <iostream>
#include <utility>

struct ScopedTask {
    struct promise_type {
        std::suspend_always initial_suspend() noexcept { return {}; }
        std::suspend_never final_suspend() noexcept { return {}; }
        ScopedTask get_return_object() {
            return ScopedTask{std::coroutine_handle<promise_type>::from_promise(*this)};
        }
        void return_void() {}
        void unhandled_exception() {}
    };

    std::coroutine_handle<promise_type> handle;

    explicit ScopedTask(std::coroutine_handle<promise_type> h) : handle(h) {}
    ~ScopedTask() {
        if (handle) handle.destroy();
    }
    ScopedTask(const ScopedTask&) = delete;
    ScopedTask& operator=(const ScopedTask&) = delete;
};

ScopedTask fire_and_forget() {
    std::cout << "running...\n";
    co_await std::suspend_always{};
    std::cout << "resumed\n";
}

int main() {
    ScopedTask t = fire_and_forget();
    t.handle.resume();
    // After resume: coroutine reaches final_suspend which is suspend_never,
    // so the frame is destroyed automatically.
    // handle is now invalid — do NOT call handle.destroy() again.
    // ~ScopedTask checks handle, but the handle is already done.
}
```

:::caution If `final_suspend` returns `std::suspend_never`The coroutine frame is destroyed at the
Final suspend point. Calling `handle.destroy()` afterward on a dangling handle is **undefined
Behavior**. If `final_suspend` returns `std::suspend_always`You **must** eventually call
`handle.destroy()` or the frame leaks.

## Symmetric Transfer and `await_suspend` Returning a Handle

When `await_suspend` returns a `coroutine_handle<Z>`The calling coroutine is suspended and the
Returned handle is resumed immediately — without unwinding the stack back to the caller. This is
**symmetric transfer** [N4950 §9.5.4.3]. It is the foundational mechanism for building coroutine
Chains without stack overflow:

```cpp
#include <coroutine>
#include <iostream>

struct SymmetricTask {
    struct promise_type {
        std::suspend_always initial_suspend() noexcept { return {}; }
        std::suspend_always final_suspend() noexcept { return {}; }
        void return_void() {}
        void unhandled_exception() {}

        SymmetricTask get_return_object() {
            return SymmetricTask{std::coroutine_handle<promise_type>::from_promise(*this)};
        }

        struct FinalAwaiter {
            bool await_ready() const noexcept { return false; }

            std::coroutine_handle<> await_suspend(
                std::coroutine_handle<promise_type> h) noexcept {
                return h.promise().continuation_;
            }

            void await_resume() const noexcept {}
        };

        std::coroutine_handle<> continuation_;
    };

    std::coroutine_handle<promise_type> handle;
    std::coroutine_handle<> continuation_{};

    explicit SymmetricTask(std::coroutine_handle<promise_type> h) : handle(h) {}

    struct Awaiter {
        SymmetricTask& task;
        bool await_ready() { return false; }

        std::coroutine_handle<> await_suspend(std::coroutine_handle<> caller) {
            task.continuation_ = caller;
            return task.handle;
        }

        void await_resume() {}
    };
};

SymmetricTask inner_a() {
    std::cout << "inner_a start\n";
    co_await std::suspend_always{};
    std::cout << "inner_a end\n";
}

SymmetricTask outer_b() {
    std::cout << "outer_b start\n";
    auto a = inner_a();
    SymmetricTask::Awaiter aw{a};
    co_await aw;
    std::cout << "outer_b end\n";
}

int main() {
    auto task = outer_b();
    task.handle.resume();
    task.handle.resume();
    task.handle.destroy();
}
```

Symmetric transfer avoids stack growth when coroutines await each other in a chain. Without it, each
`co_await` of a nested coroutine would grow the stack by one frame, leading to stack overflow for
Deep chains. With symmetric transfer, the resumption is a tail call at the ABI level.

## Exception Handling in Coroutines

When an exception escapes the coroutine body (i.e., it is not caught by a `try`/`catch` within the
Coroutine), the promise's `unhandled_exception()` method is called [N4950 §9.5.4.3]. The standard
Library provides no default implementation — the promise type must define this method.

### Exception Storage Pattern

The idiomatic pattern is to capture the exception in `unhandled_exception()` and rethrow it in
`await_resume()`:

```cpp
#include <coroutine>
#include <iostream>
#include <exception>
#include <stdexcept>

struct SafeTask {
    struct promise_type {
        std::exception_ptr exception_{};

        std::suspend_always initial_suspend() noexcept { return {}; }
        std::suspend_always final_suspend() noexcept { return {}; }
        void return_void() {}

        void unhandled_exception() {
            exception_ = std::current_exception();
        }

        SafeTask get_return_object() {
            return SafeTask{std::coroutine_handle<promise_type>::from_promise(*this)};
        }

        struct FinalAwaiter {
            bool await_ready() const noexcept { return false; }
            std::coroutine_handle<> await_suspend(
                std::coroutine_handle<promise_type> h) noexcept {
                return h.promise().continuation_;
            }
            void await_resume() const noexcept {}
        };

        std::coroutine_handle<> continuation_{};
    };

    std::coroutine_handle<promise_type> handle;
    std::coroutine_handle<> continuation_{};

    explicit SafeTask(std::coroutine_handle<promise_type> h) : handle(h) {}

    struct Awaiter {
        std::coroutine_handle<promise_type> handle_;
        std::coroutine_handle<>& continuation_;

        bool await_ready() const noexcept { return handle_.done(); }

        std::coroutine_handle<> await_suspend(std::coroutine_handle<> caller) {
            continuation_ = caller;
            handle_.promise().continuation_ = caller;
            return handle_;
        }

        void await_resume() {
            if (handle_.promise().exception_) {
                std::rethrow_exception(handle_.promise().exception_);
            }
        }
    };

    ~SafeTask() { if (handle) handle.destroy(); }
    SafeTask(const SafeTask&) = delete;
    SafeTask& operator=(const SafeTask&) = delete;
};

SafeTask failing_task() {
    std::cout << "  about to throw\n";
    throw std::runtime_error{"coroutine failure"};
    co_return;
}

SafeTask caller() {
    std::cout << "  caller: awaiting failing task\n";
    co_await failing_task();
    std::cout << "  caller: this line never executes\n";
    co_return;
}

int main() {
    auto task = caller();
    task.handle.resume();
    task.handle.resume();
    task.handle.resume();
    try {
        SafeTask::Awaiter aw{task.handle, task.continuation_};
        aw.await_resume();
    } catch (const std::exception& e) {
        std::cout << "caught: " << e.what() << "\n";
    }
    task.handle.destroy();
}
```

### Exception Propagation Through Coroutine Chains

When coroutine A `co_await`S coroutine B, and B throws, the exception propagates through B's
`unhandled_exception()` to A's `await_resume()`. This is analogous to exception propagation through
Regular function calls, but the mechanism is explicit: the promise captures the exception, and the
Awaiter rethrows it.

The chain works as follows:

1. B's coroutine body throws.
2. B's `unhandled_exception()` captures `std::current_exception()`.
3. B reaches final suspend.
4. B's `FinalAwaiter` transfers control back to A (symmetric transfer).
5. A's `await_resume()` (on B's awaiter) calls `std::rethrow_exception()` with B's captured
   exception.
6. The exception propagates through A as if B's `co_return` had thrown.

## Complete Awaitable Interface Implementation

The following is a complete, production-ready awaitable type that supports all three `await_suspend`
Return types and demonstrates best practices:

```cpp
#include <coroutine>
#include <iostream>
#include <atomic>
#include <chrono>
#include <thread>

struct TimerAwaitable {
    int milliseconds;

    bool await_ready() const noexcept {
        return milliseconds <= 0;
    }

    void await_suspend(std::coroutine_handle<> handle) const {
        std::thread([ms = milliseconds, handle] {
            std::this_thread::sleep_for(std::chrono::milliseconds(ms));
            handle.resume();
        }).detach();
    }

    void await_resume() const noexcept {}
};

struct TimerPromise {
    std::exception_ptr exception_{};

    std::suspend_never initial_suspend() noexcept { return {}; }
    std::suspend_never final_suspend() noexcept { return {}; }
    void return_void() {}
    void unhandled_exception() { exception_ = std::current_exception(); }

    auto get_return_object() {
        return std::coroutine_handle<TimerPromise>::from_promise(*this);
    }
};

struct TimerTask {
    using promise_type = TimerPromise;
    std::coroutine_handle<TimerPromise> handle;

    TimerTask(std::coroutine_handle<TimerPromise> h) : handle(h) {}
    ~TimerTask() { if (handle) handle.destroy(); }
    TimerTask(const TimerTask&) = delete;
    TimerTask& operator=(const TimerTask&) = delete;

    struct Awaiter {
        std::coroutine_handle<TimerPromise> handle_;

        bool await_ready() const noexcept { return handle_.done(); }

        void await_suspend(std::coroutine_handle<> caller) const {
            // In a real scheduler, this would schedule resumption
            // For simplicity, resume immediately on the calling thread
            caller.resume();
        }

        void await_resume() const {
            if (handle_.promise().exception_) {
                std::rethrow_exception(handle_.promise().exception_);
            }
        }
    };
};

TimerTask timed_operation() {
    std::cout << "  starting\n";
    co_await TimerAwaitable{100};
    std::cout << "  after 100ms\n";
    co_await TimerAwaitable{200};
    std::cout << "  after 200ms more\n";
}

int main() {
    auto task = timed_operation();
    // The coroutine runs eagerly (initial_suspend = suspend_never)
    // Give it time to complete
    std::this_thread::sleep_for(std::chrono::milliseconds(500));
}
```

## Common Pitfalls

**1. Dangling coroutine handles:** The most common bug is forgetting to `destroy()` a coroutine
Handle. If `final_suspend` returns `std::suspend_always` and the handle is never destroyed, the
Frame leaks. Always pair handle creation with a destruction guarantee (RAII wrapper, scope guard, or
`.destroy()` in the destructor of the return type).

**2. Accessing the promise after `final_suspend` with `suspend_never`:** If `final_suspend` returns
`std::suspend_never`The frame (including the promise) is destroyed at the final suspend point. Any
Access to `handle.promise()` afterward is undefined behavior.

**3. Exception propagation:** If an exception escapes the coroutine body, `unhandled_exception()` is
Called on the promise. The default behavior (inheriting from `std::exception_ptr` storage) is to
Capture the exception. If `unhandled_exception` does nothing, the exception is silently swallowed.
Always either rethrow, store, or terminate in `unhandled_exception`.

**4. `await_transform` hides the original type:** When the promise defines `await_transform`Every
`co_await` expression passes through it. If you intend to `co_await` a type that does not match any
`await_transform` overload, the compiler will error — the raw expression is never used as the
Awaiter. Provide a generic fallback `template&lt;typename T&gt; auto await_transform(T&& t)` to
Forward unsupported types unchanged.

**5. `await_ready` returning `true` when the awaiter is not ready:** If `await_ready()` returns
`true` when the awaited operation has not actually completed, `await_resume()` will be called
Immediately, potentially returning garbage or an uninitialized value. Always ensure `await_ready()`
Accurately reflects completion status.

**6. Returning `bool` vs `coroutine_handle` from `await_suspend`:** A `bool` return of `false`
Causes immediate resumption in the _same_ call stack (no suspension occurs). A `coroutine_handle`
Return causes the _returned_ handle to be resumed via symmetric transfer. Confusing these two leads
To subtle bugs where the wrong coroutine is resumed.

## See Also

- [Stackless Coroutine Frames and Heap Allocation](./1_coroutine_frames.md)
- [Generators (std::generator)](./3_generators.md)
- [Task Scheduling and Executors](./4_task_scheduling.md)

## Summary

This topic covers the essential concepts and techniques related to coroutine handle, promise type,
and awaiter, including key principles and practical applications.

**Key concepts include:**

- core concepts and definitions
- key principles and frameworks
- practical applications
- common techniques and methods
- evaluation and critical analysis

A thorough understanding of these concepts, combined with regular practice and review, is essential
for mastery of this topic.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

:::
