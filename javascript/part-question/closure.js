// equal == > lexical
// we define a function to an other function.
// Data stability,security.
//Closures can encapsulate private data. Hiding implementation details while exposing a public API.
function outer() {
  // that is in a scope security
  let counter = 1;
    return function inner() {
      // Data stability,
     return counter++;
    }
  }
  
  const x = outer();
  console.log(x())
  console.log(x())
  console.log(x())

 