// what is differnt between var let const
// 1)) Hoisting ==> up
// ##var can use Hoisting
num1 = 10;
console.log(num1);
var num1;

// ##let cant use Hoisting
num2 = 10;
console.log(num2); //Error
let num2;

// 2)) ReDecluration(u can repeat that)

// ##var ==> u can Decluration
var num1 = 12;
console.log(num1); // 12

var num1 = 24;
console.log(num1); // 24

// ## let cant
let num12 = 12;
console.log(num2); // 12

let num12 = 24;
console.log(num2); // Error
num12 = 522; // Not Error

// 3)) SCope
var a = 30;
// Block
{
  var a = 85;
  console.log(a); // 85
}
console.log(a); // 85
// Let
let b = 74;

{
  let b = 90;
  console.log(b); // 90
}
console.log(b); //74

// const(constant) for variable Fixed
