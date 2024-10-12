let a = 18;
let b = a;

b = 89


console.log(a,b) // 18 , 89 beacuse in primitive type each paert refrence in self

let obj1  = {name:"afshin"};

let obj2 = obj1;

obj2.name = "amir";



// solve:for handle this error we can use object.assign({},obj) Or {...obj}
console.log(obj1.name,obj2.name) // both is amir because object in the memery refrenci in on memry

// if we have nest obj
let oob = {a:"a",b:{c:"c",d:"d"}};

let superClone = JSON.parse(JSON.stringify(oob))

let obb2 = oob;


oob.b.c = "ppp";

console.log(superClone,obb2)

let c = [1,2,4]
let d = c

d.push(9090);

// solve:there if we wnat to add just in c we can use .concat
console.log(c,d) // 9090 is in both of theme

