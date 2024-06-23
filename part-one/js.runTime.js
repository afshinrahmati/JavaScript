//  javascript is a single thread programming language that mean only one stack and one heap

// in javascript we have 3 steps:
// 1) callstack <do all the function and didn't wait for webApi >2) webApi then after webApi got to callback Queue then it o to the stack
// 1 eventLoop And Callback Queue
// eventLoop calls the callback when it is empty

// 2 call Stack * Memory Heap

// 3 web API (DOM,fetch(),setTimeout())
// while WebApis do their operations push the value in CallbackQueue<1> and then eventLoop pass to callback stack

// event loop pass the data to call stack and callstack if (DOM,fetch(),setTimeout()) said oh that is not for mine it is for Web api and pass to Web Api to run this and go to next line
// console.log(1); setTimeout(()=>console.log(2),5000) ; console.log(3) ==> 1,3,2 (callStack pass the setTimeout to webApi)



console.log("1");
setTimeout(()=> {console.log(2)},1)
for(let i = 0 ; i < 500;i++) {
    console.log(i)
}