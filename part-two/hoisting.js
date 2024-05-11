// that mean is up ==> just var or function
// Before js run my code all variable and function
// changing automaticly like standard
// first the function alocate in memory then var 
smile();

function smile() {
  console.log("test");
}

// var

console.log(name); // undefined
//console.log(x) // error Not exist
var name = "afshin";
// it log undefine becases variable name is exsits but dont print on there any thing
// ###
var lastname = undefined;
console.log(name, lastname);
lastname = "rahmati";


// console.log(n1) // error
let n1 = "Amir"

// t() // error
var t = () => {
  console.log("TTTTTTTTTTT")
}
// let & const
// two this create for this that you should first varibales then use // error Not exist



a() // a2
function a() {
  console.log("a1")
}
a() // a2
function a() {
  console.log("a2");
}


var test1 = "this is test";
var food = function () {

  console.log("ttt", test1); // ttt undefine

  var test1 = "sushi"
  console.log(test1) // sushi
}