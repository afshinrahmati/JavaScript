// in javascript we have 3 steps:

// 1 eventloop And Callback Queue
// eventloop calls the callback when it is empty

// 2 call Stack * Memory Heap

// 3 web API (DOM,fetch(),setTimeout())
// while WebApis do their operations push the value in CallbackQueue<1> and then eventloop pass to callback stack

// event loop pass the data to call stack and callstack if (DOM,fetch(),setTimeout()) said oh that is not for mine it is for Web api and pass to Web Api to run this
// console.log(1); setTimeout(()=>console.log(2),5000) ; console.log(3) ==> 1,3,2 (callStack pass the setTimeout to webApi)