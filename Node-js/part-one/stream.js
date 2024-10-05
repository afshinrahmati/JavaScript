// what is stream

// A stream is a sequence of the data that is beging moved from one point to another point over the time
// over the internet moved from one computer to an other

//  streams send chunk chunk

// in youtube data arriveds in chunks 


// + prevents the downlaod file or data and memory usage


// handle input and output (I/O


// Benefits
//  Streams allow for processing data as it becomes available, which is especially useful for large datasets.
//  Since streams do not require loading all data into memory at once, they are ideal for handling large files or real-time data.

//Overall, streams provide a powerful way to handle data in a flexible and efficient manner.




// Advantages of Using JSON (Static Files):
// Simplicity:

// JSON files are straightforward to create, read, and understand. They provide a clear structure for data that can easily be parsed by various programming languages and frameworks.
// Interoperability:

// JSON is widely supported across different platforms and languages. It serves as a common data interchange format, making it easy to communicate between different systems.
// Ease of Debugging:

// Static JSON files are easier to debug and test because they can be inspected directly. You can view the entire content in a single file, which is helpful for troubleshooting.
// Performance for Small Data Sets:

// For small amounts of data, loading a static file can be faster than setting up a stream. The overhead of establishing a stream connection may not be justified for simple use cases.
// Caching:

// Static files can be easily cached by browsers or proxies, improving performance and reducing server load. Streams may not be as easily cacheable.
// Advantages of Using Streams:
// Handling Large Data Sets:

// Streams are more efficient for handling large datasets because they allow processing of data in chunks, minimizing memory usage.
// Real-Time Data Processing:

// Streams are ideal for real-time applications, such as live data feeds or continuous data processing (e.g., video streaming, chat applications).
// Reduced Latency:

// With streams, data can be sent and processed as soon as it becomes available, reducing wait times compared to waiting for an entire file to be downloaded.
// Asynchronous Operations:

// Streams can be processed asynchronously, allowing applications to handle multiple operations simultaneously without blocking