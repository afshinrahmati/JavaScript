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



// Date Transfer Concept
// 1) stream(real-time)
// Streams are ideal for handling large amounts of data that cannot be fully loaded into memory at once, such as video or images. They process data sequentially, which is memory efficient.
// use: Streaming video/audio playback, reading large files line by line, or processing real-time data feeds.
//2)buffer
// Buffers are used for smaller amounts of data that can be managed within memory. They temporarily hold data before it's processed or sent.
// Audio playback buffers for sound data, JSON payloads that can fit in memory, or small files that need to be read and processed quickly.
// 3)Data Formats and Structures(json)
// Primitive Types: Such as integers, floats, or characters && Readable Object Arrays: Arrays of objects that can be serialized/deserialized.
// 4) proto :
// Protocol Buffers (Proto): This is a method for serializing structured data. It allows you to define data structures in a .proto file and then generate code to read/write this structured data. It can be used for transforming data between servers while maintaining the same structure.

// Summary
// Streams are best for large, continuous data transfers, while buffers are suitable for smaller, manageable data sizes.
// Protocol Buffers (or similar protocols) can transform and serialize structured data efficiently between different servers or systems.
// Yes, both buffers and streams in Node.js process data in chunks, but they do so in different ways depending on the use case:
// File path to be used for both stream and buffer
const filePath = path.join(__dirname, 'example.txt');

// 1. Buffer Example: Reading the entire file into memory
fs.readFile(filePath, (err, data) => {
    if (err) {
        return console.error('Error reading file with buffer:', err);
    }
    console.log('Buffer - File content:', data.toString());
});

// 2. Stream Example: Reading file in chunks
const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

readStream.on('data', (chunk) => {
    console.log('Stream - Received chunk:', chunk);
});

readStream.on('end', () => {
    console.log('Stream - Finished reading file');
});

readStream.on('error', (err) => {
    console.error('Error reading file with stream:', err);
});