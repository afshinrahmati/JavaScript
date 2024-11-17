// 1) var
//  Scope:var is function-scoped. If declared inside a function, it cannot be accessed outside of it. If declared outside a function, it becomes global.
// You can declare a var variable multiple times without errors.
//  Hoisting:Variables declared with var are hoisted to the top of their scope but initialized with undefined.
// Usage: Historically used, but generally avoided in modern JavaScript due to potential issues with re-declaration and scope leakage.
function example() {
    console.log(a); // undefined (hoisted)
    var a = 10;
    console.log(a); // 10
}
example();
// 2) let 
// Scope: let is block-scoped, meaning it is only accessible within the block {} in which it is declared.
// Re-declaration: You cannot re-declare a variable using let within the same scope.
// Hoisting: Variables declared with let are hoisted but not initialized. Accessing them before their declaration results in a ReferenceError.
// Usage: Preferred for variables that may change their value within a block.
{
    let x = 10;
    console.log(x); // 10
}
console.log(x); // ReferenceError: x is not defined
// 3) const
// Once assigned, the value of a const variable cannot be changed. However, this applies to the variable reference, not the contents of objects or arrays.
const y = 20;
console.log(y); // 20
// y = 30; // TypeError: Assignment to constant variable

const obj = { name: "Afshin" };
obj.name = "John"; // Allowed because the object reference is constant, not its contents
console.log(obj.name); // "John"
