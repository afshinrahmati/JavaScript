//A lexical scope environment in JavaScript is a data structure that stores the variables 
// and functions that are defined in the current scope and all of the outer scopes.
// some times is call "static scope"
function outerFunction() {
    let outerVar = 'I am outer';

    // that is leixcal envirment
    function innerFunction() {
      let innerVar = 'I am inner';
      console.log(outerVar); // This will log 'I am outer'
    }
  
    innerFunction();
  }
  
  outerFunction();