//voacayin that mean run code on func

function iran() {
  console.log("warm");
}
const India = () => {
  console.log("cold");
};

// Invocation // call .Execution
India();
iran();

function marry(p1, p2) {
  console.log(arguments); //==>[Arguments] { '0': 'ali', '1': 'afshin' }
  console.log(`${p1}is good ${p2}`);

  console.log(Array.from(arguments));
}

marry("ali", "afshin");

function two() {
  var isValid;
  console.log(isValid, 1);
}

function one() {
  var isValid = true;
  console.log(isValid, 2);

  two();
}
var isValid = false;
one();

console.log(isValid, 3);
