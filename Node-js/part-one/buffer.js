// chapter:buffer
// buffer is a  temporary storage area in computer memory


// Data Transmission: In networking, buffers are used to store incoming or outgoing data packets. They help manage differences in speed between sender and receiver, ensuring smooth data flow.

// I/O Operations: Buffers are used when reading from or writing to devices (like disks, keyboards, or network interfaces). They reduce the number of read/write operations, improving overall performance.

// Multimedia: In audio and video playback, buffers are used to store data to prevent interruptions or delays. For example, streaming services use buffers to ensure continuous playback despite fluctuations in network speed.

// Programming: In programming languages, buffers can refer to arrays or memory regions that temporarily hold data. For instance, a byte buffer in Java can be used to store bytes read from a file.



//  buffers can be used with streams, and they often work together in data processing.


// nodejs can not control the pace at which data arrives in the stream
// it can onlu check when is the right time to sebd the data for processing


const buffer = new Buffer.from("salam")


console.log(buffer.toJSON(),buffer.toString())