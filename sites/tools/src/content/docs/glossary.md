---
title: "Developer Tools Glossary — Key Terms and Definitions"
description: "Comprehensive glossary of developer tools terms covering version control, testing, debugging, CI/CD, code quality, containerisation, and productivity."
date: 2026-07-24
tags: [glossary]
---

## Version Control (Git)

**Git**: A distributed version control system tracking changes to code over time.

**Repository (Repo)**: A directory tracked by Git, containing all files and their history.

**Commit**: A snapshot of the repository at a point in time, with a message describing the change.

**Branch**: An independent line of development, allowing parallel work.

**Merge**: Combining changes from different branches into a single branch.

**Rebase**: Replaying commits from one branch onto another, creating a linear history.

**Remote**: A version of the repository hosted elsewhere (GitHub, GitLab, Bitbucket).

**Clone**: Copying a remote repository to your local machine.

**Pull**: Fetching and merging changes from a remote repository.

**Push**: Sending local commits to a remote repository.

**Stash**: Temporarily storing uncommitted changes.

**Conflict**: When changes from different branches cannot be automatically merged.

**Pull Request (PR)**: A proposal to merge changes, reviewed before integration.

**Git Flow**: A branching strategy with develop, feature, release, and hotfix branches.

**GitHub Flow**: Feature branches off main, merged via pull request.

**Trunk-Based Development**: Everyone commits to main with short-lived branches.

## Testing

**Unit Test**: Tests individual functions or methods in isolation.

**Integration Test**: Tests that multiple components work together correctly.

**End-to-End (E2E) Test**: Tests simulate real user workflows through the entire stack.

**Test-Driven Development (TDD)**: Write tests before writing code: Red → Green → Refactor.

**Red**: Writing a failing test.

**Green**: Writing the minimum code to pass the test.

**Refactor**: Improving code while keeping tests green.

**Test Coverage**: The percentage of code exercised by tests.

**Mock**: A test double that verifies specific method calls.

**Stub**: A test double that returns predefined values.

**Test Suite**: A collection of tests run together.

**Assertion**: A check that verifies a condition is true.

**Regression Test**: Tests ensuring new changes don't break existing functionality.

**Test Runner**: A framework that executes tests and reports results.

**Jest**: A JavaScript testing framework.

**pytest**: A Python testing framework.

**JUnit 5**: A Java testing framework.

**Go Test**: Go's built-in testing package.

**Cypress**: A JavaScript E2E testing framework.

**Playwright**: A modern, multi-browser E2E testing framework.

## Debugging

**Debugger**: A tool that lets you step through code, inspect variables, and set breakpoints.

**Breakpoint**: A pause point in code where the debugger stops execution.

**Stack Trace**: The chain of function calls leading to an error, showing where the problem occurred.

**Logging**: Recording information about program execution for debugging and monitoring.

**Rubber Duck Debugging**: Explaining the problem out loud to reveal the solution.

**Binary Search Debugging**: Commenting out halves of code to narrow down where a bug lives.

**Heap Dump**: A snapshot of memory at a point in time, used for memory leak analysis.

**Core Dump**: A file containing the memory state of a program at the time of a crash.

**Post-mortem Debugging**: Analyzing crash dumps or logs after a program fails.

**Network Analyzer**: Tools like Wireshark for inspecting network traffic.

## CI/CD

**Continuous Integration (CI)**: Automatically building and testing code on every commit.

**Continuous Deployment (CD)**: Automatically deploying code that passes all tests to production.

**Continuous Delivery**: Deploying code that passes tests to a staging environment, requiring manual promotion to production.

**Pipeline**: The sequence of stages a commit goes through — build, test, deploy.

**Build**: Compiling or bundling the application.

**Artifact**: The output of a build — a binary, Docker image, or package.

**Stage**: A phase in a CI/CD pipeline (e.g., lint, test, build, deploy).

**GitHub Actions**: GitHub's CI/CD platform, tightly integrated with repositories.

**GitLab CI/CD**: GitLab's built-in CI/CD platform with pipeline configuration.

**Jenkins**: A self-hosted, highly customizable CI/CD server.

**CircleCI**: A Docker-based CI platform with parallelism support.

**Blue-Green Deployment**: Maintaining two identical environments and swapping traffic between them.

**Canary Deployment**: Rolling out changes to a small percentage of users first.

**Rolling Deployment**: Gradually replacing old instances with new ones.

**Feature Flags**: Deploying code with features disabled, enabled remotely when ready.

## Code Quality

**Linter**: A tool that analyses code for errors, style violations, and potential bugs.

**Formatter**: A tool that automatically rewrites code to a consistent style.

**Static Analysis**: Finding bugs without running the code.

**ESLint**: A JavaScript/TypeScript linter.

**Prettier**: An opinionated code formatter for JavaScript, TypeScript, CSS, and more.

**Black**: An opinionated Python code formatter.

**gofmt**: Go's built-in code formatter.

**rustfmt**: Rust's built-in code formatter.

**Clippy**: Rust's built-in linter.

**Ruff**: A fast Python linter.

**SonarQube**: A multi-language code quality platform.

**CodeQL**: Semantic code analysis for security vulnerabilities.

**Pre-commit Hook**: A Git hook that runs checks automatically before each commit.

**Code Review**: The practice of reviewing code changes before merging.

**Technical Debt**: The accumulated cost of shortcuts and suboptimal decisions.

## Containerisation

**Container**: A lightweight, isolated environment packaging an application and its dependencies.

**Docker**: The standard platform for creating and running containers.

**Image**: A read-only template for creating containers.

**Container Registry**: A storage and distribution system for Docker images (Docker Hub, ECR, GCR).

**Dockerfile**: A text file defining the steps to build a Docker image.

**Docker Compose**: A tool for defining and running multi-container Docker applications.

**Volume**: Persistent storage for Docker containers.

**Network**: Docker networking for container communication.

**Port Mapping**: Exposing container ports to the host: `-p 3000:3000`.

**Multi-Stage Build**: A Dockerfile technique to reduce image size by building in one stage and copying to a minimal final image.

## Kubernetes (K8s)

**Kubernetes**: An open-source container orchestration platform managing containers at scale.

**Pod**: The smallest deployable unit in Kubernetes, containing one or more containers.

**Deployment**: Declares the desired state for pods, handling rolling updates.

**Service**: A stable network endpoint for accessing pods.

**Ingress**: Routes external traffic to services.

**ConfigMap**: Stores non-sensitive configuration data.

**Secret**: Stores sensitive data (passwords, keys) separately from container images.

**PersistentVolume (PV)**: Storage that survives pod restarts.

**Namespace**: A virtual cluster within a physical cluster.

**Helm**: A package manager for Kubernetes.

**kubectl**: The command-line tool for interacting with Kubernetes.

## Command Line and Terminal

**Shell**: A program that interprets commands (bash, zsh, fish).

**Bash**: The most common Unix shell.

**Terminal**: The application providing a command-line interface.

**Pipe (|)**: Passes the output of one command as input to another.

**Redirect (>, >>)**: Sends command output to a file.

**Environment Variable**: A key-value pair available to processes.

**PATH**: An environment variable listing directories to search for executables.

**Alias**: A shortcut for a command: `alias ll="ls -la"`.

**fzf**: A fuzzy finder for快速 file searching.

**ripgrep (rg)**: A fast grep alternative for content searching.

**fd**: A fast alternative to the find command.

## Productivity

**Pomodoro Technique**: 25 minutes of focused work followed by a 5-minute break.

**Time Blocking**: Dedicating specific hours to specific types of work.

**Deep Work**: Sustained, distraction-free concentration on cognitively demanding tasks.

**Knowledge Base**: A central repository of project information and documentation.

**README**: A file explaining what a project does, how to set it up, and how to contribute.

**ADR (Architecture Decision Record)**: A document capturing significant architectural decisions.

**IDE (Integrated Development Environment)**: A comprehensive code editor with debugging, testing, and refactoring tools.

**VS Code**: A popular, extensible code editor by Microsoft.

**Language Server Protocol (LSP)**: A protocol providing IDE features (completion, diagnostics) for any language.

**Snippet**: A reusable code template inserted into the editor.

## Related Terms

- See [Programming Glossary](/programming/glossary) for programming fundamentals
- See [Linux Glossary](/linux/glossary) for Linux administration
- See [Networking Glossary](/networking/glossary) for network concepts
- See [Security Glossary](/security/glossary) for security practices
- See [Databases Glossary](/databases/glossary) for database tools
