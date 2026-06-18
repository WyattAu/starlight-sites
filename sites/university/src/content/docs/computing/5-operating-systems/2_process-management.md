---
title: Process Management
tags:
  - Computing
  - University
description: ""s burst is shorter, the net change reduces the average. $\blacksquare$

**Worked Example 2.1 — FCFS vs SJF Comparison**

Consider three processes, all arriving at time $t = 0$:

| Process | Burst Time |
| ------- | ---------- |
| $P_1$   | 24         |
| $P_2$   | 3          |
| $P_3$   | 3          |

_FCFS Gantt chart:_

```
| P1 (24)      | P2 (3) | P3 (3) |
0              24       27      30
```

| Process | Waiting Time | Turnaround Time |
| ------- | ------------ | --------------- |
| $P_1$   | 0            | 24              |
| $P_2$   | 24           | 27              |
| $P_3$   | 27           | 30              |
| **Avg** | **17**       | **27**          |

_SJF Gantt chart:_

```
| P2 (3) | P3 (3) | P1 (24)           |
0        3       6                  30
```

| Process | Waiting Time | Turnaround Time |
| ------- | ------------ | --------------- |
| $P_1$   | 6            | 30              |
| $P_2$   | 0            | 3               |
| $P_3$   | 3            | 6               |
| **Avg** | **3**        | **13**          |

SJF reduces average waiting time from 17 to 3, illustrating the **convoy effect** in FCFS.

<details>
<summary>Solution — Round Robin with $q = 4$</summary>

Using the same three processes with quantum $q = 4$:

```
| P1(4) | P2(3) | P3(3) | P1(4) | P1(4) | P1(4) | P1(4) | P1(1) |
0       4       7       10     14     18     22     26     27
```

| Process | Completion | Turnaround | Waiting  |
| ------- | ---------- | ---------- | -------- |
| $P_1$   | 27         | 27         | 3        |
| $P_2$   | 7          | 7          | 4        |
| $P_3$   | 10         | 10         | 7        |
| **Avg** |            | **14.67**  | **4.67** |

Round Robin eliminates the convoy effect but gives a higher average waiting time than SJF due to
Preemption overhead. The turnaround time for $P_1$ is unchanged (the work must be done), but $P_2$
And $P_3$ receive faster first response.

</details>

### 2.5 Scheduling Algorithm Pseudocode

**Round Robin Scheduling:**

```c
#define MAX_PROCESSES 128

typedef struct {
    int pid;
    int burst_remaining;
    int arrival_time;
    int priority;
} Process;

void round_robin(Process processes[], int n, int quantum) {
    Queue ready_queue;
    int current_time = 0;
    int completed = 0;

    while (completed < n) {
        for (int i = 0; i < n; i++) {
            if (processes[i].arrival_time <= current_time
                && processes[i].burst_remaining > 0
                && !is_in_queue(&ready_queue, processes[i].pid)) {
                enqueue(&ready_queue, &processes[i]);
            }
        }
        if (is_empty(&ready_queue)) {
            current_time++;
            continue;
        }
        Process *p = dequeue(&ready_queue);
        int exec_time = min(p->burst_remaining, quantum);
        p->burst_remaining -= exec_time;
        current_time += exec_time;
        if (p->burst_remaining > 0) {
            enqueue(&ready_queue, p);
        } else {
            completed++;
            record_turnaround(p->pid, current_time - p->arrival_time);
        }
    }
}
```

**Priority Scheduling (preemptive):**

```c
void priority_schedule(Process processes[], int n) {
    int current_time = 0;
    int completed = 0;
    int shortest_priority = INT_MAX;
    int idx = -1;

    while (completed < n) {
        shortest_priority = INT_MAX;
        idx = -1;
        for (int i = 0; i < n; i++) {
            if (processes[i].arrival_time <= current_time
                && processes[i].burst_remaining > 0
                && processes[i].priority < shortest_priority) {
                shortest_priority = processes[i].priority;
                idx = i;
            }
        }
        if (idx == -1) {
            current_time++;
            continue;
        }
        processes[idx].burst_remaining--;
        current_time++;
        if (processes[idx].burst_remaining == 0) {
            completed++;
            record_turnaround(processes[idx].pid,
                              current_time - processes[idx].arrival_time);
        }
    }
}
```

**Multilevel Feedback Queue:**

```c
#define NUM_LEVELS 3
#define QUANTUMS {8, 16, 32}

void mlfq_schedule(Process processes[], int n, int quantums[]) {
    Queue queues[NUM_LEVELS];
    int current_time = 0;
    int completed = 0;

    while (completed < n) {
        for (int i = 0; i < n; i++) {
            if (processes[i].arrival_time <= current_time
                && processes[i].burst_remaining > 0
                && !is_any_queue(&queues, processes[i].pid)) {
                enqueue(&queues[0], &processes[i]);
            }
        }
        int level;
        for (level = 0; level < NUM_LEVELS; level++) {
            if (!is_empty(&queues[level])) break;
        }
        if (level == NUM_LEVELS) {
            current_time++;
            continue;
        }
        Process *p = dequeue(&queues[level]);
        int exec_time = min(p->burst_remaining, quantums[level]);
        p->burst_remaining -= exec_time;
        current_time += exec_time;
        if (p->burst_remaining > 0 && level + 1 < NUM_LEVELS) {
            enqueue(&queues[level + 1], p);
        } else if (p->burst_remaining > 0) {
            enqueue(&queues[level], p);
        } else {
            completed++;
            record_turnaround(p->pid, current_time - p->arrival_time);
        }
    }
}
```

### 2.6 Inter-Process Communication

Processes may need to communicate and synchronise. IPC mechanisms:

**Shared memory.** A region of memory mapped into multiple address spaces. Fast, but requires
Explicit synchronisation.

```c
int shmid = shmget(SHM_KEY, SHM_SIZE, IPC_CREAT | 0666);
char *shm_ptr = (char *)shmat(shmid, NULL, 0);
shm_ptr[offset] = data;
shmdt(shm_ptr);
```

**Message passing.** Processes exchange messages through the OS. Operations: `send(dest, msg)` and
`receive(src, msg)`. Can be **direct** (named processes) or **indirect** (via mailboxes/ports).

| Property        | Shared Memory  | Message Passing           |
| --------------- | -------------- | ------------------------- |
| Speed           | Fast           | Slower (kernel mediation) |
| Synchronisation | Required       | Built-in                  |
| Kernel use      | Setup only     | Every message             |
| Scalability     | Single machine | Can be distributed        |

**Pipes.** Unidirectional data channel. `pipe()` creates a pipe; `fork()` inherits file descriptors.
Named pipes (`mkfifo`) allow unrelated processes to communicate.

**Signals.** Asynchronous notifications (integer payload only). Common: `SIGTERM``SIGKILL`
`SIGSEGV``SIGCHLD`.

