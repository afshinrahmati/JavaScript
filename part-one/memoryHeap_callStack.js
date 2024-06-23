// stack :
// *it is on the Ram; *specified for size; int Array[8]; first in last out. stack is so fast But if we don't have any information
// about size of a variable we can not push in stack. so heap help to us to this.
// in stack ==> prt(pointer for find the valuable);len(len the value);capacity(how many len save on memory)

// heap: it is on the Ram; *specified for don't size; int Array[?];new obj(....)set on heap


//example: const date = new Date(); this is a object so it store on te heap and in stake create a name date that point in to the heap newDate when in stack call name date
// it go to heap with pointer and call the value of he new data()


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


// Garbage collector algorithm use is Mark and sweep ==> mark run and sweep delete it.