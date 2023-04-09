// when Javascript engine the biggest work for us change reading our code and executing it
// we need a place for stored information and our variables our obj and our data
// and what happening by line by line
// we use Memory Heap
// ## call stack + heap

// Allocate ==> space the memory need for save some value
// Use the allocated memory (read, write)
// Release(Delete) the allocated memory when it is not needed anymore
const number = 6520; // allocate number
const s = "azerty"; // allocates memory for a string
const o = {
  a: 1,
  b: null,
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and
// contained values
const a = [1, null, "abra"];
const d = new Date(); // allocates a Date object

const e = document.createElement("div"); // allocates a DOM element

// memory Heap is a place
// Heap: It is used to store objects and functions in JavaScript. The engine doesn’t allocate a fixed amount of memory. Instead, it allocates more space as required.
// Objects and functions + No limit for object memory

//  Stack: It is a data structure used to store static data. Static data refers to data whose size is known by the engine during compile time
//. In JavaScript, static data includes primitive values like strings, numbers, boolean, null, and undefined.
// References that point to objects and functions are also included. A fixed amount of memory is allocated for static data. This process is known as static memory allocation.
// Primitive data types and references + Fixed memory allocated
function getname(name) {
  return name;
}
// The function return value is given to stack after
// being evaluated in the heap
const employee = {
  name: "Rajesh",
  age: 30,
};
const newEmployee = employee;
// The newEmployee object will be stored in the stack and
// it will refer to the employee object in heap

const name = "Ram"; // Allocates memory statc

// Stack in Memory Top ==> getname,employee,newEmployee,name  (push on and popped off)
// Heap ==> {name:"Rajesh",age:30}, function getname(name) {return name;}

//  Garbage Collection ==>Garbage collectors are used in releasing memory. Once the engine recognizes that a variable, object, or
// function is not needed anymore, it releases the memory it occupied. The main issue here is that it is very difficult to predict
// accurately whether a particular variable, object, or function is needed anymore or not. Some algorithms help to find the
// moment when they become obsolete with great precision.
