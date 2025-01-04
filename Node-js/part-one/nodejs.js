//Node.js:

// Node.js is a JavaScript runtime environment built on the V8 engine. It allows JavaScript to run outside of the browser, typically on a server or in any non-browser environment.
//     Node.js adds a layer of APIs specific to server-side programming, such as file system access, networking, and process management.
// we can run javascript without browsers and serverside
// it created in 2009 <Rayan Dahl>

// it is not langaue or framework it is just runtime.
// in chrome we have a v8 Engine but in Node we have libuv
// libuv: is a multi-platform C library that provides support for asynchronous I/o bases on eventloop

// ### REPL ###<read,evals,prints,loops>
// the shell reads javascript code the user
// and evaluates the result of interpreting the line of code
// prints the result to the user
// loops until the user signals to quit.
// The REPL is bundled with every Node.js installation and allows you to quickly test and explore  all the instruction are in terminal called REPL
// REPL ==> Read,Eval,Print,loop
// JavaScript code within the Node environment without having to store it in a file.



// What is the difference between process.nextTick() and setImmediate()?
// both of them for do for run the code
// process.nextTick(): Executes callbacks immediately after the current operation completes, before the event loop continues. 
// not go to event lopp phases and it run immediately on eventlopp and it is good for force job
// setImmediate(): Executes callbacks in the check phase of the event loop, after the poll phase. it is diffulet on ndoejs