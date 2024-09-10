function printName() {
    return "AfshinRahmati";
}
function findMyName() {
    printName();
}

function callMyName() {
    findMyName();
}

callMyName();




// 1) global()<first thing in call stack,,,,Global Object<windows,golbal> , this == windows. 2) sayMyName() 3) findMyName() 4) pritName()