---
title: "Developer Tools Guide — Testing, Debugging, CI/CD"
description: "Comprehensive developer tools guide covering version control, testing frameworks, debugging techniques, CI/CD pipelines, code quality tools, containerisation, and productivity workflows. Practical guides for modern software development."
date: 2026-07-24
tags:
  - developer-tools
  - testing
  - debugging
  - ci-cd
  - git
  - productivity
categories:
  - hub
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"name": "Home", "url": "https://tools.wyattau.com"},
    {"name": "Hub", "url": "https://tools.wyattau.com/hub"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Developer Tools Guide",
  "description": "Comprehensive developer tools guide covering testing, debugging, CI/CD, code quality, containerisation, and productivity workflows.",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://tools.wyattau.com"
  },
  "url": "https://tools.wyattau.com/hub",
  "educationalLevel": "Professional",
  "inLanguage": "en",
  "isAccessibleForFree": true
}
</script>

## Why This Guide Exists

Software development is not just about writing code — it is about writing code that works, that is maintainable, and that ships reliably. The tools you use determine how effectively you can write, test, debug, and deploy software. A developer who masters their tools can produce in hours what takes others days.

This hub page maps every resource on this site. The guides cover the essential toolchain of modern software development: version control with Git, testing at every level, debugging techniques, CI/CD pipelines, code quality enforcement, containerisation with Docker and Kubernetes, and productivity workflows that keep you focused. Whether you are a solo developer or part of a large team, these resources will help you work more effectively.

## Table of Contents

- [Version Control with Git](#version-control-with-git)
- [Testing](#testing)
- [Debugging](#debugging)
- [CI/CD Pipelines](#cicd-pipelines)
- [Code Quality Tools](#code-quality-tools)
- [Containerisation and Kubernetes](#containerisation-and-kubernetes)
- [Algorithms and Data Structures](#algorithms-and-data-structures)
- [General Productivity](#general-productivity)
- [Cross-Site Resources](#cross-site-resources)
- [FAQ](#faq)

---

## Version Control with Git

Git is the foundation of modern software development. Every developer must be proficient in Git — not just the basic commands, but the workflows and strategies that keep a codebase healthy as a team grows.

### Core Concepts

- **Repository** — a directory tracked by Git, containing all files and their history
- **Commit** — a snapshot of the repository at a point in time
- **Branch** — an independent line of development
- **Merge** — combining changes from different branches
- **Rebase** — replaying commits from one branch onto another
- **Remote** — a version of the repository hosted elsewhere (GitHub, GitLab, Bitbucket)

### Essential Commands

```bash
git init                    # Create a new repository
git clone <url>             # Clone an existing repository
git add .                   # Stage all changes
git commit -m "message"     # Commit staged changes
git push origin main        # Push to remote
git pull origin main        # Pull from remote
git branch feature          # Create a new branch
git checkout feature        # Switch to a branch
git merge feature           # Merge a branch
git rebase main             # Rebase onto main
git log --oneline --graph   # Visualise history
git stash                   # Temporarily store changes
git cherry-pick <commit>    # Apply a specific commit
```

### Branching Strategies

- **Git Flow** — develop, feature, release, hotfix branches; suits release-based projects
- **GitHub Flow** — feature branches off main, merge via pull request; suits continuous deployment
- **Trunk-Based Development** — everyone commits to main with short-lived branches; suits high-velocity teams

### Advanced Topics

- **Interactive rebase** — clean up commit history before merging
- **Bisect** — binary search through commits to find when a bug was introduced
- **Submodules** — manage external repositories within your project
- **Hooks** — automate tasks on commit, push, or merge

---

## Testing

Testing is the practice of verifying that your code behaves correctly. It is not optional — it is a core professional responsibility. The testing pyramid provides a framework for thinking about what to test and how.

### The Testing Pyramid

```
        /  \
       / E2E \       — End-to-end tests: full system, few in number
      /--------\
     / Integration\  — Integration tests: multiple components
    /--------------\
   /   Unit Tests   \ — Unit tests: individual functions, many in number
  /------------------\
```

### Unit Testing

Unit tests verify individual functions or methods in isolation. They are fast, deterministic, and easy to debug.

**Frameworks by language:**

| Language | Framework | Assertion Library |
| ---------- | ----------- | ------------------- |
| JavaScript/TypeScript | Jest, Vitest, Mocha | Jest assertions, Chai |
| Python | pytest | pytest assertions |
| Java | JUnit 5 | AssertJ, Hamcrest |
| Go | testing (stdlib) | testify |
| Rust | built-in (#[test]) | assert!, assert_eq! |
| C++ | Google Test, Catch2 | built-in assertions |

**Writing good unit tests:**

- Test one thing per test function
- Use descriptive test names that explain the expected behaviour
- Follow Arrange-Act-Assert pattern
- Test both happy paths and edge cases
- Mock external dependencies (databases, APIs, file systems)
- Aim for high coverage but do not chase 100% — focus on critical paths

### Integration Testing

Integration tests verify that multiple components work together correctly. They catch issues that unit tests miss — incorrect interfaces, configuration problems, and data flow errors.

**Common integration test targets:**

- Database queries and ORM mappings
- API endpoints (request/response cycle)
- Message queue producers and consumers
- File system operations
- Third-party API integrations

### End-to-End (E2E) Testing

E2E tests simulate real user workflows through the entire application stack. They are slow and fragile but catch issues that lower-level tests cannot.

**E2E frameworks:**

- **Playwright** — modern, fast, multi-browser
- **Cypress** — developer-friendly, great debugging
- **Selenium** — mature, wide language support

### Test-Driven Development (TDD)

TDD is a development methodology where you write tests before writing code:

1. **Red** — write a failing test
2. **Green** — write the minimum code to pass the test
3. **Refactor** — improve the code while keeping tests green

TDD produces cleaner code, better test coverage, and more confident refactoring. It requires discipline but pays dividends in code quality.

---

## Debugging

Debugging is the art of finding and fixing defects in software. It is the most time-consuming part of development — and the part where tool mastery has the highest return.

### Debugging Strategies

1. **Reproduce the bug** — create a minimal, reliable reproduction
2. **Read the error message** — stack traces contain valuable information; read them carefully
3. **Add logging** — instrument your code to understand what is happening
4. **Use a debugger** — step through code, inspect variables, set breakpoints
5. **Rubber duck debugging** — explain the problem out loud (or to a colleague); the act of explaining often reveals the solution
6. **Binary search** — comment out halves of the code to narrow down where the bug lives
7. **Check recent changes** — `git log` and `git diff` to see what changed
8. **Search for similar issues** — someone has likely encountered the same bug before

### Debugging Tools

- **Browser DevTools** — Chrome, Firefox, and Safari include powerful debugging tools for web applications
- **IDE debuggers** — VS Code, IntelliJ, and PyCharm include integrated debuggers
- **Postman/Insomnia** — test API endpoints independently of the frontend
- **Network analysers** — Wireshark, tcpdump for low-level network debugging
- **Memory profilers** — Valgrind, Chrome DevTools Memory tab for memory leaks
- **Log aggregators** — ELK Stack, Datadog for production debugging

### Common Bug Categories

| Category | Symptoms | Tools |
| ---------- | ---------- | ------- |
| Logic errors | Wrong output, no crash | Debugger, unit tests |
| Runtime errors | Crashes, exceptions | Stack traces, debugger |
| Performance issues | Slowness, timeouts | Profilers, APM tools |
| Memory issues | Leaks, out-of-memory | Memory profilers |
| Concurrency issues | Race conditions, deadlocks | Thread sanitisers, debuggers |
| Configuration issues | Works locally, fails in production | Environment comparison tools |

---

## CI/CD Pipelines

Continuous Integration and Continuous Deployment automate the process of building, testing, and deploying software. CI/CD eliminates manual steps, reduces human error, and enables rapid, reliable releases.

### Continuous Integration (CI)

CI automatically builds and tests code every time a change is pushed to the repository. The goal is to catch integration issues early.

**CI pipeline stages:**

1. **Checkout** — pull the latest code
2. **Install dependencies** — `npm install`, `pip install`, `cargo build`
3. **Lint** — check code style and catch common errors
4. **Build** — compile or bundle the application
5. **Test** — run unit, integration, and E2E tests
6. **Report** — publish results and coverage reports

**CI platforms:**

- **GitHub Actions** — tightly integrated with GitHub repositories
- **GitLab CI/CD** — built into GitLab with powerful pipeline configuration
- **CircleCI** — fast, Docker-based CI with parallelism
- **Jenkins** — self-hosted, highly customisable
- **Travis CI** — simple, open-source-friendly

### Continuous Deployment (CD)

CD extends CI by automatically deploying code that passes all tests to production or staging environments.

**CD strategies:**

- **Blue-green deployment** — maintain two identical environments; swap traffic between them
- **Canary deployment** — roll out to a small percentage of users first
- **Rolling deployment** — gradually replace old instances with new ones
- **Feature flags** — deploy code with features disabled; enable remotely when ready

### GitHub Actions Example

```yaml
name: CI/CD Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build
```

---

## Code Quality Tools

Code quality tools enforce standards, catch bugs early, and maintain consistency across a codebase. They are essential for any team larger than one person.

### Linters

Linters analyse code for errors, style violations, and potential bugs.

| Language | Linter | Configuration |
| ---------- | -------- | --------------- |
| JavaScript/TypeScript | ESLint | .eslintrc.json |
| Python | Ruff, Flake8 | pyproject.toml, .flake8 |
| Go | golangci-lint | .golangci.yml |
| Rust | Clippy | built-in with Cargo |
| Java | Checkstyle, SpotBugs | checkstyle.xml |

### Formatters

Formatters automatically reformat code to a consistent style.

- **Prettier** — opinionated formatter for JavaScript, TypeScript, CSS, HTML, JSON
- **Black** — opinionated Python formatter
- **gofmt** — built-in Go formatter
- **rustfmt** — built-in Rust formatter

### Static Analysis

Static analysis tools find bugs without running the code.

- **TypeScript compiler** — catches type errors at compile time
- **mypy** — static type checker for Python
- **SonarQube** — multi-language code quality platform
- **CodeQL** — semantic code analysis for security vulnerabilities

### Pre-commit Hooks

Pre-commit hooks run checks automatically before each commit. They catch issues before they enter the codebase.

```yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.5.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
  - repo: https://github.com/psf/black
    rev: 24.3.0
    hooks:
      - id: black
```

---

## Containerisation and Kubernetes

Containers package an application and its dependencies into a single unit that runs consistently across environments. Kubernetes orchestrates containers at scale.

### Docker

Docker is the standard for creating and running containers.

**Essential commands:**

```bash
docker build -t myapp .          # Build an image
docker run -p 3000:3000 myapp    # Run a container
docker ps                        # List running containers
docker logs <container>          # View container logs
docker exec -it <container> bash # Open a shell in a running container
docker-compose up -d             # Start multi-container application
docker-compose down              # Stop and remove containers
```

**Dockerfile best practices:**

- Use multi-stage builds to reduce image size
- Order instructions from least to most frequently changing
- Use `.dockerignore` to exclude unnecessary files
- Run as non-root user for security
- Use specific base image tags, not `latest`

### Kubernetes (K8s)

Kubernetes manages containerised applications across clusters of machines.

**Core concepts:**

- **Pod** — the smallest deployable unit; one or more containers
- **Deployment** — declares desired state for pods; handles rolling updates
- **Service** — stable network endpoint for accessing pods
- **Ingress** — routes external traffic to services
- **ConfigMap / Secret** — configuration data separate from container images
- **PersistentVolume** — storage that survives pod restarts

**Key resources:**

- [Kubernetes and Docker Guide](kubernetes-docker) — practical guide to containerisation and orchestration

---

## Algorithms and Data Structures

Understanding algorithms and data structures is essential for writing efficient software and performing well in technical interviews.

### Core Data Structures

- **Arrays and Lists** — contiguous and linked sequential storage
- **Stacks and Queues** — LIFO and FIFO structures
- **Hash Tables** — O(1) average-case lookup
- **Trees** — hierarchical structures (binary trees, BSTs, heaps, tries)
- **Graphs** — networks of nodes and edges (directed/undirected, weighted/unweighted)

### Core Algorithms

- **Sorting** — quicksort, mergesort, heapsort, timsort
- **Searching** — binary search, breadth-first search, depth-first search
- **Dynamic programming** — optimisation by breaking problems into overlapping subproblems
- **Greedy algorithms** — locally optimal choices leading to global optimum
- **Graph algorithms** — Dijkstra's, Bellman-Ford, Kruskal's, Prim's

### Practice

- [Algorithms Guide](algorithms) — topic-by-topic notes with complexity analysis
- [Algorithm Practice Problems](practice-algorithms.mdx) — worked examples and challenge problems

---

## General Productivity

Developer productivity is about managing attention, not just time.

### Terminal Mastery

- Learn shell scripting (bash, zsh)
- Master keyboard shortcuts in your terminal
- Use tools like `fzf`, `ripgrep`, and `fd` for fast file searching
- Customise your shell prompt for context (git branch, exit status)

### Editor Mastery

- Learn your editor's keybindings thoroughly
- Use snippets for repetitive code patterns
- Master multi-cursor editing and regex search-and-replace
- Set up language servers for intelligent completion and error detection

### Time Management

- **Pomodoro Technique** — 25 minutes of focused work, 5-minute break
- **Time blocking** — dedicate specific hours to specific types of work
- **Batch similar tasks** — group code reviews, emails, or meetings
- **Protect deep work** — block uninterrupted time for complex tasks

### Documentation

- Write README files that explain what the project does, how to set it up, and how to contribute
- Use ADRs (Architecture Decision Records) to document significant decisions
- Keep API documentation up to date
- Document your development environment setup

---

## Cross-Site Resources

Developer tools connect to many other areas of software development:

- **[C++ Programming](https://programming.wyattau.com/hub)** — programming fundamentals and language-specific tooling
- **[Go Programming](https://go.wyattau.com/hub)** — Go-specific tools and conventions
- **[Rust Programming](https://rust.wyattau.com/hub)** — Rust's built-in toolchain and Cargo ecosystem
- **[TypeScript](https://typescript.wyattau.com/hub)** — TypeScript tooling and configuration
- **[Databases](https://databases.wyattau.com/hub)** — database tools and management
- **[Networking](https://networking.wyattau.com/hub)** — network debugging and analysis tools
- **[Security](https://security.wyattau.com/hub)** — security scanning and vulnerability assessment
- **[Performance Tuning](https://tuning.wyattau.com/hub)** — profiling and optimisation tools

---

## Frequently Asked Questions

### What tools should I learn first?

Start with Git and your editor. These two tools have the highest return on investment — you use them every day, and proficiency directly impacts your productivity. Then learn your language's package manager and build tools. CI/CD and containerisation come next as your projects grow in complexity.

### How do I choose between CI/CD platforms?

Choose based on your hosting platform. If your code is on GitHub, use GitHub Actions. If on GitLab, use GitLab CI/CD. If you need self-hosted control, Jenkins is the most flexible option. For cloud-native workflows, consider CircleCI or Buildkite.

### Is test-driven development worth the effort?

TDD has a learning curve, but it produces more reliable code and faster debugging. The initial investment in writing tests before code pays off when you need to refactor or add features. Start with TDD on small projects to develop the habit before applying it to large codebases.

### How do I debug production issues without breaking things?

Use feature flags to disable problematic features without redeploying. Add comprehensive logging and monitoring before you need them. Use canary deployments to test changes on a small percentage of users. Keep a rollback plan for every deployment.

### How many tests should I write?

Focus on critical paths first — the code that handles money, user data, or core business logic. Aim for high coverage on those paths (80%+). For less critical code, lower coverage is acceptable. Remember: coverage is a metric, not a goal. The goal is confidence that your code works.

### Should I use Docker for every project?

Not necessarily. Docker adds complexity that is only justified when you need consistent environments across machines, deployment to cloud platforms, or microservices architecture. For small personal projects or scripts, Docker may be overkill. Use it when the benefits outweigh the overhead.

---

*Last updated: 24 July 2026*

*Written by Wyatt. For questions or feedback, visit [wyattau.com](https://wyattau.com).*
