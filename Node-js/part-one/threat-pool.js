
// Explanation of the Event Loop and Thread Pool in Node.js
// When the event loop is invoked, Node.js opens a thread to delegate the asynchronous operation that needs to be executed (such as file I/O or network requests).

// Once the event loop finishes processing the asynchronous task, the result of that operation is placed back in the thread pool.

// By default, Node.js maintains a thread pool with 4 threads. This size is a balance between performance and resource utilization, allowing the system to handle multiple asynchronous operations concurrently without overwhelming system resources.
// At the end of the operation, JavaScript retrieves the result from the thread pool and places it in the heap
// Key Points: ***************
// Event Loop: The core mechanism in Node.js that allows for non-blocking I/O operations by managing asynchronous tasks.

// Thread Pool: A collection of threads that handle expensive I/O operations to prevent blocking the event loop.

// Default Size: The default size of the thread pool is 4, which can be adjusted based on the needs of the application using the UV_THREADPOOL_SIZE environment variable.

//  if the threat is full it go to callBack Queeus
const fs = require('fs');

// Task detected by the event loop
console.log('Reading file...');

// Offload this I/O task to the thread pool
fs.readFile('some-large-file.txt', (err, data) => {
    if (err) throw err;
    
    // This callback is executed once the thread pool completes the task
    console.log('File read complete:', data.toString());
});

// Event loop continues while thread pool works on reading the file
console.log('Event loop continues running...');