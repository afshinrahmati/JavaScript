// **event-driven** and **event loop** are not the same, though they are related concepts.

// ### **Event-Driven Programming**:
// Event-driven programming is a **paradigm** where the flow of the program is determined by **events** (s
// uch as user actions, messages from other programs, or sensor outputs). In event-driven systems, the program typically waits
//  for events and then reacts to them. These events might be clicks, inputs, or system signals that trigger the execution of specific code.

// - **Key Concepts**:
//   - Events (e.g., button clicks, messages, data received, etc.)
//   - Event handlers (functions that respond to events)
//   - Often used in **GUI applications** and **web servers** (like Node.js).

// ### **Event Loop**:
// The event loop is a programming construct that constantly checks for and handles events or messages in a queue.
//  It's often a core feature in event-driven programming, especially in **asynchronous** systems. The event loop ensure
// s that once an event occurs, its associated handler (callback) is executed.

// - **Key Concepts**:
//   - Continuously running process that waits for tasks/events.
//   - It picks up tasks from a queue and executes them.
//   - It's heavily used in **Node.js** and other **asynchronous frameworks** to manage non-blocking I/O operations.
  
// ### How They're Related:
// - **Event-Driven Programming** refers to the design or model of a program where actions are triggered by events.
// - **Event Loop** is a mechanism or system that allows handling multiple events in **asynchronous** (non-blocking) programming.

// ### Example:
// - **Node.js** is a great example of **event-driven programming**. It uses an **event loop** to handle requests and events, allowing it to process multiple operations (like network requests or file reads) without blocking the main execution thread.
  
// #### Event-Driven (in Node.js):
// 1. A user makes a request to a server.
// 2. An event is fired when the request is received.
// 3. The event triggers the corresponding **event handler** (callback function).
// 4. The event handler processes the request and sends back a response.

// #### Event Loop (in Node.js):
// 1. The event loop waits for incoming events (like HTTP requests or file system operations).
// 2. It checks the event queue, picks the event, and executes the handler.
// 3. Once the event is handled, the event loop moves to the next event in the queue.

// ### Summary:
// - **Event-Driven** is a broader concept where actions are triggered by events.
// - **Event Loop** is the mechanism that drives this system in asynchronous programming, by waiting for and handling events without blocking the main program flow.

// They work together in systems like Node.js, but they are **not the same thing**.