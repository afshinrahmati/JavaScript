// it is  run time for javascript
// it is envirment for run js code like chrome,firFox,... any where can run js code with v8 engine
// **libuv = a project on c++ and it opensource and node js can  use it for connect to c++ and do crypto,.nodejs ==>
// 50 js & 50 c++ * v8 ==> 30 js & 70 c++ * libuv ==> 100c++ .
// and node has  some module standard path , http ,fs crypt,hash  that define on libuv and work on c++.
// **event loop = in node js forexmple you have a 4 line code and you want to in line 2 hash your code .
// node js relize it do very time and say to c++ come do this hash and i go to next line for do other line and then c++
// do this work call with events and say i do this hash and this is you result.and it like loop in do untile q is not full
// https://keep.google.com/#NOTE/1xY0osoD2TemgCQGjO9xVdgMPdtZmcqHoa8bWyhEg0to7STJ1KXC2IvKVDn7N_o0

// javascript file ==> like music note
// engine v8 ==> that persion how real not pointer
// runtime ==> can read note and can do gutiar and doghol
// node is sever side platform on asynchronous IO that is non blocking
