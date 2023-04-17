// merge two or more arrays
const a = [1, 2, 3, 4];
const b = [5, 6, 7, 8, 9];
const c = a.concat(b); // [1,2,3,4,5,6,7,8,9]

function myName() {
  return "Afshin";
}
function what() {
  return myName();
}
function say() {
  return what();
}

console.log(say());
// in javascropt we have two Global Execution Context
// 1==> this * 2==> windows (Global Object)
