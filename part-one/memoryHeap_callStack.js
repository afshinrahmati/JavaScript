// place a store and information our variable our object it happen in call stack and memory heap

// allocate memory use memory <memory Heap> just a place for us to store our information.


// where we are in the <code callStack> the engine track of our code

const number = 610 // allocate memory for number it save in scope in chrom


// call stack

function calCulate() {

    const sumTotal = 4 + 5;
    return sumTotal;
}

calCulate();
// every time we run this<Or any function> we use the callstack . it region on the memory and operate is first in and last out
// it happend pop after doing it.

// what happend if we stay callStack and dont destoey when it finnesh work or job<push on pop off > 
// Error Maximum call stack size exceeded


// Garbage collector algorithm use is Mark and sweep