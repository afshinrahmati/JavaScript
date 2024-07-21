// all the 
function two() {
 var isValiable;
 console.log(isValiable);
}

function one(){
 var isValiable = true;
 console.log(isValiable);
 two()
}



var isValiable = false;
one()
// one() ===> true
// two() ===> undeifine
// global envirmentt