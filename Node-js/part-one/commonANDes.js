// in nodejs we can use two type of modules that we can use
// It was designed to enable modularization of code
// commonJs and ECMAScript Modules
// Both of them has own syntax and behaviors
// 1) syntax
// **)common==> CommonJS is the older module system and was the default in Node.js until recently.
// Importing
const myModule = require('./myModule');

// Exporting
module.exports = function() {
  console.log('Hello from my module!');
};
// CommonJS is a module system primarily used in Node.js (the server-side JavaScript environment). 
// It was designed to enable modularization of code and has been the default system in Node.js for a long time.
// 1) Synchronous loading: Modules are loaded synchronously, meaning when you use require, Node.js
// immediately loads and executes the module before moving to the next line of code.
// 2) Exports with module.exports: In CommonJS, you export a module’s functionality using the module.exports object.

// ################################
// **) es ==>ESM is the newer module system that follows the ECMAScript standard, and Node.js started supporting it natively in version 12.
// Exports with module.exports: In CommonJS, you export a module’s functionality using the module.exports object.

// Importing
import myModule from './myModule.js';

// Exporting
export default function() {
  console.log('Hello from my module!');
};