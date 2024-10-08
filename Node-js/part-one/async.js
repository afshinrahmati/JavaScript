// Node.js is asynchronous <go to next line i do it> by nature, but it supports both synchronous and asynchronous operations.

// operation system<LIBUV> :  node delegated<that mean give it<node>> our code NODE.js API<fs,http,crypto,path> our task to the operatin systeam
// and out code<node> do not waiting for it<response> node says oky operating system when our task complete and node take it called<asynchronous IO<input/out put>>

// Yes, exactly! In Node.js, which is asynchronous by nature, the runtime (powered by libuv) allows you to perform non-blocking operations.
//  This means that when an asynchronous task (like a database call, file read, or network request) is initiated, the program doesn’t wait for it to 
//  complete before moving to the next line of code. Instead, it hands the task over
//  to the event loop and continues with the next lines of code, leaving the event loop to handle the task asynchronously.

// This model is called event-driven non-blocking I/O, and it's at the core of how Node.js handles asynchronous operations. Let’s break it down:


// 1) Key Aspects of Asynchronous in Node.js:
// Non-blocking: Node.js can initiate I/O operations like reading from a file or making HTTP requests, and while waiting for
//  them to finish, it can continue executing other code.

// Event Loop
// Node.js uses an event loop (through libuv) to manage asynchronous operations. The event loop checks 
// for pending tasks and invokes the necessary callbacks once an operation completes.


 
 // asyn/wait just good for handle non-bloking and event loop and non-blocking
//  With async/await, you can write code that waits for these operations to complete without blocking the entire program or thread.it go to thread in c++ libuve but in nodejs go to eventloop
//  The program can continue executing other tasks while waiting for the result.
// **** Important ****
// Callbacks, Promises, and async/await help to make code non-blocking and utilize the event loop.
// With these tools, our code can hand off long-running operations (like reading files, calling APIs, or querying a database) to the event loop.
// This allows JavaScript to continue executing other lines of code without waiting for those operations to finish.
// so with async/wati can just hanld e eventloop
// Without async/await, handling asynchronous code often involves chaining `.then()` calls with Promises or using callbacks. This can lead to messy code or "callback hell."
// async/await provides a cleaner way to handle asynchronous code, especially for error handling with try/catch blocks, which is simpler than chaining `.catch()` with Promises.
// if do not use the call back a,d something like this:::
//Without callbacks (or another mechanism like async/await), JavaScript would be forced to wait for the file to be fully read before continuing.
//This is blocking behavior, which could freeze the program while waiting for I/O.
//Callbacks allow the program to continue running while waiting for long operations to finish in the background.



// Callbacks, Promises, async/await
 // These are the primary ways to handle asynchronous tasks in Node.js.
//  *************************************
//  non-blocking Operation:::  querying databases,callApi,readFile,while waiting for them to finis
 // code down 

 // log 1,2,3,3.1,4
 const fs = require('fs');
 // Non-blocking, asynchronous file read
 fs.readFile('file.txt', 'utf8', (err, data) => {
   if (err) throw err;
   console.log('3:', data);
 });
 fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('3.1:', data);
  });
 // This will run before the file read is finished
 console.log('1');
//  ********************************
const fss = require('fs').promises;

console.log("****************######************")
async function readFile() {
    try {
      const data = await fss.readFile('file.txt', 'utf8');
      console.log('4:', data);
    } catch (err) {
      console.error(err);
    }
  }
  
  readFile();
  
  // This will still run first because readFile is async
  console.log('2');

//   ************  // Blocking code ******
//   sync and async
//   sync that mean block the code that mean stop till read file do so go to the next line
//   async mean ok you do it i go to next line and i come back and get from you.

// Synchronous = Blocks the code execution (waits for the task to finish before continuing).
// Asynchronous = Does not block the code execution (moves on and handles the task later, when it's ready).
 

// Node.js is primarily asynchronous and optimized for non-blocking, event-driven code.
// You can still write synchronous code, but it's not recommended in performance-critical applications like servers.
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data,"blocking first it"); // This won't be logged until the file is fully read
 
console.log('This will run after the file is read second it');



// No, the **event loop** in JavaScript (specifically in Node.js or browser environments) is **not the same as a thread** in other languages. Here's the distinction between the two:

// ### **1. Event Loop (JavaScript/Node.js)**:
// - **Single-threaded**: The event loop operates on a single thread in JavaScript. It manages and orchestrates asynchronous tasks like I/O operations, timers, or HTTP requests without blocking the main execution thread.
// - **Non-blocking I/O**: The event loop allows asynchronous operations to be offloaded (e.g., file reads or network requests) so that the program can continue executing other code.
// - **Call stack and task queue**: In an event loop system, there is a **call stack** (where synchronous tasks are executed) and a **task queue** (where asynchronous operations are handled). Once the call stack is empty, the event loop processes tasks from the task queue.

// In short, the event loop ensures the non-blocking behavior of JavaScript without the need for multiple threads.

// ### **2. Threads (Other languages like Java, C++, Python, etc.)**:
// - **Multi-threaded**: Many languages like Java, C++, and Python allow the creation of multiple threads. Each thread can run its own tasks in parallel.
// - **Concurrency/Parallelism**: Threads allow actual parallel execution, meaning that tasks can run simultaneously on multiple CPU cores (if the hardware allows it). This is true multi-tasking where each thread is independently executing.
// - **Blocking operations**: Each thread can block while waiting for an I/O operation (e.g., reading a file or waiting for a network response). However, since multiple threads are running, other threads can continue working even if one thread is blocked.

// ### **Comparison**:

// | Feature              | Event Loop (Node.js/JS)                       | Threads (Other Languages)                  |
// |----------------------|------------------------------------------------|--------------------------------------------|
// | **Execution Model**   | Single-threaded, asynchronous, non-blocking   | Multi-threaded, synchronous, blocking or non-blocking |
// | **Concurrency**       | Handles concurrency with async operations     | Handles concurrency by running tasks in parallel on multiple threads |
// | **I/O Operations**    | Offloaded to worker threads, handled asynchronously | Can block the thread until the operation completes |
// | **Complexity**        | Simpler for non-blocking I/O                  | More complex, with potential race conditions, deadlocks, etc. |

// ### **Summary**:
// - **Event loop**: Single-threaded, focuses on non-blocking, asynchronous I/O tasks.
// - **Threads**: Multiple threads run in parallel, and can block depending on the operation.

// In other languages, **threads** allow for **parallel execution** of code, while the **event loop** in JavaScript provides a way to manage asynchronous tasks without blocking the main execution flow—while still using a single thread.