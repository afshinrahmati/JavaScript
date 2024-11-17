// Clustering

// Clustering involves running multiple instances of a server application on multiple cores of a machine, allowing better utilization of resources and higher performance
// . It is particularly useful in Node.js,as Node.js runs on a single-threaded event loop but can spawn child processes to leverage multiple CPU cores.
// Scalability: Handle more traffic by distributing it across multiple instances.
// Fault Tolerance: If one instance crashes, others continue serving requests.
// CPU Utilization: Takes advantage of multi-core processors.

const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isMaster) {
    const numCPUs = os.cpus().length;

    console.log(`Master process ${process.pid} is running`);

    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    // Workers can share any TCP connection
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end("Hello World\n");
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}

// 2. Traffic Management
// Clustering helps within a single machine, but managing traffic across multiple servers or regions often requires additional tools.
// Clustering helps within a single machine, but managing traffic across multiple servers or regions often requires additional tools.

// API Gateway
// An API Gateway acts as a centralized entry point for your application, handling:

// Routing: Directs traffic to the correct service or cluster.
// Load Balancing: Distributes incoming requests across multiple server instances.
// Rate Limiting: Prevents individual users from overwhelming the system.
// Authentication: Secures endpoints.


// 3Load Balancing
// Load balancing distributes incoming network traffic across multiple servers to ensure no single server is overwhelmed.

// Common Load Balancers:

// Hardware Load Balancers: High-performance, specialized devices.
// Software Load Balancers: Nginx, HAProxy.
// Cloud Load Balancers: AWS Elastic Load Balancer, Azure Load Balancer.
// Load Balancing Methods:

// Round Robin: Distributes requests sequentially across servers.
// Least Connections: Sends requests to the server with the fewest active connections.
// IP Hash: Maps client IP to a specific server, ensuring session persistence.

// In a high-traffic application, clustering is combined with load balancing and API Gateway:

// Clustering ensures all CPU cores on a single machine are utilized.
// Load Balancers distribute traffic across multiple clustered servers.
// API Gateway manages requests, authentication, and routing.
// Architecture Example:

// Clients → API Gateway
// API Gateway → Load Balancer
// Load Balancer → Clustered Nodes