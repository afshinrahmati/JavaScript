// Non-Blocking I/O
//  for each request we open a Threaded and handle it on there
// while a request is doing I/O , the Thread is not stuck waiting for request finish.

// Low-level languages (like C, C++, Rust): These languages manage concurrency and threading themselves, giving you full control over how threads are handled.
// Languages with their own concurrency model (like Java, Go, Scala): These languages run on platforms or have built-in models (e.g., JVM for Java, Goroutines for Go) to handle multi-threading and concurrency in a more abstract way.
// Single-threaded languages (like Python, PHP, Node.js): These languages are often single-threaded but can handle asynchronous operations using event loops or external libraries. They rely on lower-level languages (like C or C++) for concurrency and threading management.





// *************
// php, prel,Ruby, python ==> all of them handle those blocking io with that lanaguse that are behind them with Threaded

// the language model did not easily for non-blocking for some is possible Rust,go,java,scala


// many high-level languages like PHP, Python, and Node.js are implemented in lower-level languages like C or C++
// and use threading and asynchronous techniques to achieve non-blocking behavior. Here's how they work under the hood:
// 1. PHP (Written in C)
// PHP itself is single-threaded, meaning it does not natively support multithreading within a script execution.
// However, PHP extensions written in C can use pthreads or other threading libraries to perform multi-threading.
// PHP-FPM (FastCGI Process Manager) allows multiple requests to be handled in parallel using process-based concurrency rather than threading.
// 2. Python (Written in C - CPython)
// Python's main implementation, CPython, is written in C.
// Python has a Global Interpreter Lock (GIL), which prevents multiple threads from executing Python bytecode in parallel within a single process.
// For true parallel execution, Python uses multiprocessing (separate processes) instead of threading.
// The asyncio module provides an event loop for non-blocking, async execution.
// 3. Node.js (Built on C++, Uses libuv for Non-blocking I/O)
// Node.js is built using C++ (V8 engine) and libuv, which provides an event-driven, non-blocking I/O model.
// Libuv creates a thread pool in C++ for handling tasks like file I/O, DNS lookups, and cryptography outside the main JavaScript thread.
// The event loop in Node.js ensures that the main thread remains non-blocking while background threads handle async operations.


// ## How Non-blocking Execution Works in These Languages:
// Event-driven model (e.g., Node.js uses event loop + callbacks).
// Thread pooling (e.g., libuv in Node.js, C-based threading in Python/PHP extensions).
// Asynchronous I/O (e.g., async functions in Python and JavaScript).
// Process-based concurrency (e.g., PHP-FPM, Python multiprocessing).

// 📌 Final Thought:
// For I/O-heavy workloads, Node.js is the fastest. But for CPU-heavy tasks, Python is better. PHP is great for traditional web apps but less efficient for modern async applications.





// languages like Go, Scala, and Java handle non-blocking code using native threading models instead of relying on a separate C/C++ library like libuv (Node.js) or an event loop mechanism (Python's asyncio). Here's how they manage concurrency:
//  they handle own machin like jvm
// 1.Go (Golang) - Goroutines & Scheduler
// Go uses Goroutines, which are lightweight threads managed by the Go runtime.
// The Go runtime scheduler (written in Go and some assembly) multiplexes thousands of Goroutines onto a small number of OS threads.
// It does cooperative scheduling, meaning Goroutines yield execution at certain points to allow fair execution across multiple tasks.
// Uses channels to safely communicate between Goroutines without locks.

// 2. Scala - Akka Actors & Futures
// Scala supports Futures & Promises for async programming.
// Uses Akka Actors, which are lightweight message-passing entities that process messages asynchronously.
// Uses JVM threads but provides better control over execution models (blocking vs. non-blocking).


// 3. Java - Virtual Threads & Executors
// Traditional Java uses Thread Pools and the Executor framework for handling concurrency.
// Java 21 introduced Virtual Threads (Project Loom), which are lightweight threads that Java manages independently of OS threads.
// Java also supports CompletableFuture, which is a powerful non-blocking API.



// Language	Mechanism for Non-blocking Execution	Uses OS Threads?	Lightweight?
// Go	Goroutines + Scheduler	No (Managed by Go)	✅ Yes
// Scala	Futures + Akka Actors	Yes (JVM threads)	✅ Yes
// Java	CompletableFuture + Virtual Threads	Yes (New: Virtual Threads)	✅ Yes
// Node.js	Event Loop (libuv)	No (Uses C++ Thread Pool)	✅ Yes
// Python	Asyncio (Single-threaded)	No (GIL limits threads)	❌ No
// PHP	Process-based (PHP-FPM)	Yes (Multiple Processes)	❌ No


// Conclusion: When to Use What?
// Use Node.js if you need high-performance APIs, real-time apps, or a non-blocking system.
// Use Python if you’re doing AI, machine learning, or scientific computing.
// Use PHP if you're building CMS-based websites (e.g., WordPress, Laravel).

// Go is best for concurrency-heavy applications, real-time systems, and APIs that need to scale well with low overhead.
// Java is best for large-scale enterprise applications and scenarios where stability, portability, and scalability are crucial, but it has more overhead compared to Go and Rust.
// Rust is best for systems programming and any scenario where you need both extreme performance and memory safety, with zero overhead from garbage collection.

// https://www.youtube.com/watch?v=wB9tIg209-8