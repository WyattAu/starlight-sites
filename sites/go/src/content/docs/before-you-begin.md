same, regardless of who wrote it; and where the compiler is fast enough that
restrictive; until you encounter the concurrency model, which is the reason
catastrophic. Go's concurrency model; **Communicating Sequential Processes**
(CSP); avoids shared memory by design: goroutines communicate by sending
**The main goroutine.** When `main` returns, the program exits; all running
implements an interface implicitly; no `implements` keyword, no inheritance
float64` method; no declaration needed. A function that takes a `Shape`
**Contrast with Java.** Java requires `class Circle implements Shape`; the
the function can fail, and the `if err != nil` check is *required*; the
error values make the error path visible and forces you to handle it; which
(1) The program exits and all running goroutines are killed; the `main`
(2) `func print(ch <-chan int) { for v := range ch { fmt.Println(v) } }` -
and check `err` before using `result`; the error path is visible in the
differences; e.g., a producer that generates items in bursts and a consumer
- [The Go Track](/); the language in full: modules, testing, generics, and the standard library.
- [Concurrency](https://go.wyattau.com/concurrency/); the deeper treatment of goroutines, channels, the `sync` package, and the race detector.
- [Linux](https://linux.wyattau.com/); the operating system that Go programs run on and deploy to.
- [Databases](https://databases.wyattau.com/); the storage layer that Go services connect to.
- [Computer Science Track](https://computer-science.wyattau.com/1-discrete-mathematics/); the theoretical foundations of the concurrency model.