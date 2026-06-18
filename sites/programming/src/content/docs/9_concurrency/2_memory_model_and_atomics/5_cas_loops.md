---
title: Compare-and-Swap (CAS) Loops
description: ""Final value: " << original.get() << "\n";
    std::cout << "Test passed: no crashes or assertion failures\n";
}

int main() {
    concurrent_refcount_test();
    return 0;
}
```

:::note This reference counting example uses `fetch_sub` with `memory_order_acq_rel` for the release
Operation. The acquire semantics ensure that all accesses to the object (sequenced-before the
Release) are visible to the thread that performs the destruction. The release semantics ensure that
The destruction itself is visible to other threads. The `fetch_sub` return value is checked against
1 (not 0) because `fetch_sub` returns the **old** value [N4950 §31.7.2].
:::

## CAS Loop Idioms Summary

| Pattern                    | Description                            | Use Case                       |
| -------------------------- | -------------------------------------- | ------------------------------ |
| **Read-modify-write**      | Load, compute, CAS                     | Counter increment, flag toggle |
| **Insert into list**       | Load head, set new->next, CAS head     | Lock-free stack push           |
| **Remove from list**       | Load head, read next, CAS head to next | Lock-free stack pop            |
| **Update with validation** | Load, validate invariants, CAS         | Lock-free queue (ABA-safe)     |

:::tip When writing CAS loops, always update `desired` based on the new `expected` value after a
Failed CAS. The `compare_exchange_weak` function automatically updates `expected` to the current
Value on failure, so you can use it directly in the next iteration"s computation.
:::

## Lock-Free Stack Push and Pop

A lock-free stack demonstrates the two most common CAS loop patterns: insert (push) and remove
(pop).

```cpp
#include <atomic>
#include <iostream>
#include <memory>
#include <thread>
#include <vector>

template<typename T>
class lock_free_stack {
    struct node {
        T data;
        node* next;
        explicit node(T val) : data(std::move(val)), next(nullptr) {}
    };

    std::atomic<node*> head_{nullptr};

public:
    void push(T value) {
        node* new_node = new node(std::move(value));
        new_node->next = head_.load(std::memory_order_relaxed);

        // CAS loop: set head to new_node if head hasn't changed
        while (!head_.compare_exchange_weak(
            new_node->next,
            new_node,
            std::memory_order_release,
            std::memory_order_relaxed)) {
            // On failure, new_node->next is updated to the current head
            // Loop retries with the new next pointer
        }
    }

    // Returns nullptr if the stack is empty
    std::unique_ptr<node> try_pop() {
        node* old_head = head_.load(std::memory_order_acquire);
        while (old_head) {
            // Attempt to set head to old_head->next
            // On failure, old_head is updated to the current head
            if (head_.compare_exchange_weak(
                    old_head,
                    old_head->next,
                    std::memory_order_acquire,
                    std::memory_order_acquire)) {
                return std::unique_ptr<node>(old_head);
            }
        }
        return nullptr;
    }
};

void concurrent_stack_test() {
    lock_free_stack<int> stack;
    constexpr int num_threads = 8;
    constexpr int ops_per_thread = 100000;

    auto push_work = [&stack] {
        for (int i = 0; i < ops_per_thread; ++i) {
            stack.push(i);
        }
    };

    std::vector<std::jthread> threads;
    for (int i = 0; i < num_threads; ++i) {
        threads.emplace_back(push_work);
    }
    threads.clear();

    int pop_count = 0;
    auto pop_work = [&stack, &pop_count] {
        while (true) {
            auto node = stack.try_pop();
            if (!node) break;
            ++pop_count;
        }
    };

    for (int i = 0; i < num_threads; ++i) {
        threads.emplace_back(pop_work);
    }
    threads.clear();

    std::cout << "Pushed: " << num_threads * ops_per_thread << "\n";
    std::cout << "Popped:  " << pop_count << "\n";
    std::cout << "Remaining in stack: "
              << (stack.try_pop() ? "yes" : "no") << "\n";
}

int main() {
    concurrent_stack_test();
    return 0;
}
```

The push operation uses a **read-modify-write** CAS loop: load the current head, set the new node's
`next` to it, then atomically swap the head if it hasn't changed. The `memory_order_release` on
Success ensures that the new node's data is visible to other threads that acquire the head.

The pop operation uses a **remove** CAS loop: load the current head, read its `next`Then Atomically
set the head to `next` if the head hasn't changed. On success, the popped node is Returned as a
`unique_ptr`Transferring ownership to the caller and ensuring the node is eventually Freed.

### The ABA Problem

The lock-free stack above has a classic ABA vulnerability:

1. Thread A loads `head = A`.
2. Thread A is preempted.
3. Thread B pops A, pushes B, pops B, pushes A (node A is recycled).
4. Thread A's CAS succeeds because `head == A` again — but `A->next` has changed.

In a garbage-collected language, ABA is prevented because the GC doesn't recycle nodes. In C++, you
Must prevent it explicitly using:

1. **Hazard pointers:** Threads publish pointers they are reading. Before reclaiming memory, the
   reclaimer checks that no thread has a hazard pointer to it.
2. **Epoch-based reclamation:** Threads operate in epochs. Memory is only reclaimed after all
   threads have advanced past the epoch in which the memory was retired.
3. **Tagged pointers:** Append a monotonically increasing counter to each pointer. The CAS checks
   both the pointer and the counter. On x86_64, `double` can hold a 32-bit pointer + 32-bit tag (for
   32-bit address spaces). On 64-bit systems, `std::atomic<std::uintptr_t>` with the upper bits as a
   tag works on platforms with &lt; 48-bit virtual addresses.

```cpp
#include <atomic>
#include <cstdint>
#include <iostream>

// Tagged pointer: lower 48 bits = address, upper 16 bits = counter
// This prevents ABA on x86-64 (48-bit virtual address space)
struct tagged_ptr {
    std::uintptr_t ptr;
    static constexpr std::uintptr_t tag_bits = 16;
    static constexpr std::uintptr_t ptr_mask = (std::uintptr_t(1) << (64 - tag_bits)) - 1;
    static constexpr std::uintptr_t tag_shift = 64 - tag_bits;

    void* address() const { return reinterpret_cast<void*>(ptr & ptr_mask); }
    uint16_t tag() const { return static_cast<uint16_t>(ptr >> tag_shift); }

    static tagged_ptr pack(void* p, uint16_t t) {
        tagged_ptr result;
        result.ptr = reinterpret_cast<std::uintptr_t>(p)
                   | (static_cast<std::uintptr_t>(t) << tag_shift);
        return result;
    }
};

std::atomic<std::uintptr_t> aba_head{0};

void push_with_tag(void* new_node) {
    tagged_ptr old_tagged;
    old_tagged.ptr = aba_head.load(std::memory_order_relaxed);

    tagged_ptr new_tagged;
    while (true) {
        new_tagged = tagged_ptr::pack(new_node, old_tagged.tag() + 1);
        if (aba_head.compare_exchange_weak(
                old_tagged.ptr,
                new_tagged.ptr,
                std::memory_order_release,
                std::memory_order_relaxed)) {
            break;
        }
        // On failure, old_tagged.ptr is updated to current value (with new tag)
    }
}
```

---

## Memory Ordering in CAS Operations

The `compare_exchange` functions accept two memory order arguments: one for the **success** case and
One for the **failure** case. The failure order cannot be stronger than `memory_order_consume` and
Cannot be `release` or `acq_rel` [N4950 §31.7.2].

### Common Memory Order Combinations

| Success Order          | Failure Order          | Use Case                                                         |
| :--------------------- | :--------------------- | :--------------------------------------------------------------- |
| `memory_order_relaxed` | `memory_order_relaxed` | Simple counters, statistics (no synchronization needed)          |
| `memory_order_acquire` | `memory_order_relaxed` | Reading a shared pointer (acquire visibility of pointed-to data) |
| `memory_order_release` | `memory_order_relaxed` | Publishing a shared pointer (make writes visible)                |
| `memory_order_acq_rel` | `memory_order_acquire` | Read-modify-write on a synchronization variable                  |
| `memory_order_seq_cst` | `memory_order_seq_cst` | Default; total order (strongest guarantee, most expensive)       |

```cpp
#include <atomic>
#include <iostream>
#include <thread>

std::atomic<bool> ready{false};
int payload = 0;

void producer() {
    payload = 42;
    // Release: makes the write to payload visible to consumers
    ready.store(true, std::memory_order_release);
}

void consumer() {
    while (!ready.load(std::memory_order_acquire)) {
        // Spin until producer sets ready
    }
    // Acquire: synchronized-with the release, so payload == 42 is guaranteed
    std::cout << "payload = " << payload << "\n";  // Always 42
}

int main() {
    std::jthread t1(producer);
    std::jthread t2(consumer);
}
```

### CAS-Based Spinlock

A spinlock is the simplest mutual exclusion primitive built from CAS. While lock-free stacks are
Preferred for specific data structures, a spinlock demonstrates the full CAS pattern with proper
Memory ordering:

```cpp
#include <atomic>
#include <iostream>
#include <thread>
#include <vector>

class spinlock {
    std::atomic<bool> locked_{false};

public:
    void lock() {
        while (locked_.exchange(true, std::memory_order_acquire)) {
            // Spin: exchange returns the previous value.
            // If it was true, someone else holds the lock.
            // The acquire semantics synchronize-with the release in unlock().
            while (locked_.load(std::memory_order_relaxed)) {
                // Wait without acquiring — reduces bus traffic
#if defined(__x86_64__)
                __builtin_ia32_pause();  // CPU hint to reduce power and bus contention
#endif
            }
        }
    }

    void unlock() {
        // Release: makes all writes done while holding the lock visible
        locked_.store(false, std::memory_order_release);
    }
};

void concurrent_counter_test() {
    spinlock mtx;
    int counter = 0;
    constexpr int num_threads = 8;
    constexpr int increments = 100000;

    std::vector<std::jthread> threads;
    for (int i = 0; i < num_threads; ++i) {
        threads.emplace_back([&] {
            for (int j = 0; j < increments; ++j) {
                mtx.lock();
                ++counter;
                mtx.unlock();
            }
        });
    }
    threads.clear();

    std::cout << "Expected: " << num_threads * increments << "\n";
    std::cout << "Actual:   " << counter << "\n";
}

int main() {
    concurrent_counter_test();
}
```

The `exchange` operation is a special case of CAS that always succeeds (it sets the new value and
Returns the old one). It is used here instead of `compare_exchange_weak` because we don't need to
Conditionally update — we always want to set `locked_` to `true`.

### `std::atomic_flag`: The Lock-Free Building Block

`std::atomic_flag` is the only atomic type guaranteed to be lock-free on all platforms. It is the
Minimum building block for spinlocks:

```cpp
#include <atomic>

std::atomic_flag flag = ATOMIC_FLAG_INIT;

// Test and set (always returns the previous value)
bool was_set = flag.test_and_set(std::memory_order_acquire);

// Clear
flag.clear(std::memory_order_release);
```

Use `std::atomic_flag` when you need a guaranteed lock-free boolean flag and cannot rely on
`std::atomic<bool>` being lock-free (which it isn't on some exotic architectures).

---

## ABA-Safe Lock-Free Queue (Michael-Scott Queue)

The Michael-Scott queue is the classic lock-free FIFO queue used in many production systems
(including Java's `ConcurrentLinkedQueue`). It uses a sentinel dummy node and CAS to handle both
Enqueue and dequeue:

```cpp
#include <atomic>
#include <memory>
#include <iostream>
#include <thread>
#include <vector>

template<typename T>
class ms_queue {
    struct node {
        std::shared_ptr<T> data;
        node* next;
        node() : next(nullptr) {}
    };

    std::atomic<node*> head_;
    std::atomic<node*> tail_;

public:
    ms_queue() {
        node* dummy = new node;
        head_.store(dummy, std::memory_order_relaxed);
        tail_.store(dummy, std::memory_order_relaxed);
    }

    ~ms_queue() {
        while (try_pop()) {}
        delete head_.load(std::memory_order_relaxed);
    }

    void enqueue(T value) {
        node* new_node = new node;
        new_node->data = std::make_shared<T>(std::move(value));

        node* old_tail = tail_.load(std::memory_order_acquire);
        while (true) {
            node* next = old_tail->next.load(std::memory_order_acquire);
            if (old_tail == tail_.load(std::memory_order_acquire)) {
                if (next == nullptr) {
                    // Tail is consistent, try to link new_node
                    if (old_tail->next.compare_exchange_weak(
                            next,
                            new_node,
                            std::memory_order_release,
                            std::memory_order_relaxed)) {
                        // Successfully linked — try to swing tail (ok if it fails,
                        // another thread will do it)
                        tail_.compare_exchange_weak(
                            old_tail,
                            new_node,
                            std::memory_order_release,
                            std::memory_order_relaxed);
                        return;
                    }
                } else {
                    // Tail is lagging — help advance it
                    tail_.compare_exchange_weak(
                        old_tail,
                        next,
                        std::memory_order_release,
                        std::memory_order_relaxed);
                }
            }
        }
    }

    bool try_pop(T& result) {
        node* old_head = head_.load(std::memory_order_acquire);
        while (true) {
            node* next = old_head->next.load(std::memory_order_acquire);
            if (old_head == head_.load(std::memory_order_acquire)) {
                if (next == nullptr) {
                    return false;  // Queue is empty
                }
                result = std::move(*next->data);
                // Try to swing head to next
                if (head_.compare_exchange_weak(
                        old_head,
                        next,
                        std::memory_order_release,
                        std::memory_order_relaxed)) {
                    // Reclaim the old dummy node (old_head)
                    delete old_head;
                    return true;
                }
            }
        }
    }
};

void concurrent_queue_test() {
    ms_queue<int> queue;
    constexpr int num_producers = 4;
    constexpr int num_consumers = 4;
    constexpr int items_per_producer = 10000;

    std::vector<std::jthread> threads;

    for (int i = 0; i < num_producers; ++i) {
        threads.emplace_back([&queue, items_per_producer] {
            for (int j = 0; j < items_per_producer; ++j) {
                queue.enqueue(j);
            }
        });
    }

    int total_consumed = 0;
    for (int i = 0; i < num_consumers; ++i) {
        threads.emplace_back([&queue, &total_consumed] {
            int value;
            int local_count = 0;
            while (local_count < items_per_producer * num_producers / num_consumers) {
                if (queue.try_pop(value)) {
                    ++local_count;
                }
            }
            total_consumed += local_count;
        });
    }

    threads.clear();
    std::cout << "Total consumed: " << total_consumed << "\n";
}

int main() {
    concurrent_queue_test();
    return 0;
}
```

The sentinel node pattern avoids the ABA problem for the head pointer because the head never moves
Backward — it always advances from one dummy node to the next. The old dummy node is deleted after
The head swings, so it can never be recycled and re-inserted. The tail pointer may lag behind
(requiring the "help advance" code), but this does not affect correctness.

---

## Common Pitfalls

- **Using `compare_exchange_strong` inside tight CAS loops.** Strong CAS may retry internally on
  architectures with LL/SC (like ARM), causing double-retrying. Always use `compare_exchange_weak`
  in loops and only use strong CAS for single-attempt operations (e.g., initializing a lazy
  singleton).
- **Wrong memory order on CAS failure.** The failure order must not be `release` or `acq_rel`. A
  common mistake is passing `memory_order_acq_rel` for both success and failure. The failure case
  does not perform a store, so `release` semantics are meaningless. Use `memory_order_acquire` or
  `memory_order_relaxed` for the failure case.
- **Forgetting that `compare_exchange` updates `expected` on failure.** If you compute `desired`
  based on `expected` before the CAS and then retry without recomputing `desired`You'll retry with a
  stale computation. Always recompute `desired` inside the loop after a failed CAS.
- **ABA problem in long-running CAS loops.** If a CAS loop can be preempted for a long time, another
  thread may modify and then restore the observed value, causing the CAS to succeed incorrectly. Use
  hazard pointers, epoch-based reclamation, or tagged pointers for long-lived data structures.
- **Not checking `std::atomic<T>::is_always_lock_free`.** Not all `std::atomic` specializations are
  lock-free. On some platforms, `std::atomic<uint64_t>` on a 32-bit architecture falls back to a
  mutex. Use `std::atomic<T>::is_always_lock_free` (compile-time) or `.is_lock_free()` (runtime) to
  verify, or use `std::atomic_flag` which is guaranteed lock-free.
- **Spinlock without backoff.** A naive spinlock that loops without any pause instruction wastes CPU
  cycles and bus bandwidth. Use `__builtin_ia32_pause()` on x86, `yield()` on ARM, or
  `std::this_thread::yield()` to reduce contention.


## Worked Examples

**Example 1: Stack operations**

Trace the following operations on an empty stack: `push(5)`, `push(3)`, `pop()`, `push(8)`, `pop()`,
`pop()`.

**Solution:**

| Operation | Stack (top → bottom) | Popped |
| --------- | -------------------- | ------ |
| push(5)   | [5]                  | —      |
| push(3)   | [3, 5]               | —      |
| pop()     | [5]                  | 3      |
| push(8)   | [8, 5]               | —      |
| pop()     | [5]                  | 8      |
| pop()     | []                   | 5      |

