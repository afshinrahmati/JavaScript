// function Scope
// vs
// block scope
// javascript is function scope that mean if we have if and defile a variable there in global we have access  there
if (8 > 3) {
  var secret = "iioouu";
}

console.log(secret); //iioouu

//if no we have a function and we put there it was return error
function t() {
  var secret = 9090;
}
console.log(secret); // errro



// but some lanuage are block scope

// in e6 javascript realize this problem and handle it with const and let 

function loop() {
  for(var i = 0 ; i < 5; i++){
    console.log(i)
  }
  console.log("ginal",i) // even in for it is look like the if
}
loop()

