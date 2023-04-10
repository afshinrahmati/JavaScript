// javascrip is single threaded that mean it on thing at a time
// has One call stack and on memory heap and
// must finish executing a piece code before moving onto the next it is synchronous
// harmful. For example, if a function takes awhile to execute or has to wait on something, it freezes everything up in the meanwhile.

// A good example of this happening is the window alert function. alert("Hello World")
// You can't interact with the webpage at all until you hit OK and dismiss the alert. You're stuck.

// But javascript Engine handle it pushed onto the stack as a callback.
// Problems synchronous ==> run code line 1 and in line 2 we have error and long run task ...can use promises and awati
// Event Loops <==> Callback queue, and WebAPIs ==> DOM , fetch(). , setTimeout() that are also used to run the JS code
//  4 , 3 , 1  promises
console.log(4);
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(3);
    resolve(3);
  }, 300);
}).then(() => {
  console.log(1);
});
//  async
console.log(4);
async function a() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(3);
      console.log(3);
    }, 300);
  });
}
async function run() {
  await a();
  console.log(2);
}
