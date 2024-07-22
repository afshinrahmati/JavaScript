// 'use strict'
//
// The purpose of "use strict" is to indicate that the code should be
// executed in "strict mode". With strict mode, you can not, for example,
// use undeclared variables. All modern browsers support "use strict"
// now h allocate in global envirement.

function weird() {
    h = 80;
    return 80;
}
function test2() {
  return h;
}

weird(); //80
test2(); //80

// and if we use 'use strict' give us an error