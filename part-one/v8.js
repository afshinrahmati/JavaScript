function test() {
    return 74;
};

console.log(test());
// Run ==> node --print-bytecode v8.js

function sum(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

var nums = [1, 2, 3, 4, 5];
var result = sum(nums);
// v8 create with c++ and it work for chrom and nodejs and it is reay fast.
// **) Javascript Engine
// 1) parser
// Lexical analysis: The code is first scanned to identify tokens, such as keywords, identifiers, operators, and literals.
// This stage is also called "tokenization." The code is tokenized into the following sequence of tokens:
// function sum ( arr ) { var total = 0 ; for ( var i = 0 ; i < arr . length ; i ++ ) { total += arr [ i ] ; } return total ; }
// var nums = [ 1 , 2 , 3 , 4 , 5 ] ; var result = sum ( nums ) ;
// 2) AST<abstract syntax tree> (ASTExplorer.net)
// Syntax analysis: The tokens are then parsed to create an abstract syntax tree (AST), which represents the structure of the code in a hierarchical form.
// This stage is also called "parsing." Here's what the AST would look like:
//Program
// |- FunctionDeclaration: sum
// |- Identifier: arr
// |- BlockStatement
//      |- VariableDeclaration: total
//           |- LoadLiteral: 0
//      |- LoopStatement: for
//           |- VariableDeclaration: i
//                |- LoadLiteral: 0
//           |- BinaryExpression: <
//                |- Identifier: i
//                |- MemberExpression: length
//                     |- Identifier: arr
//           |- UnaryExpression: ++
//                |- Identifier: i
//           |- AssignmentStatement: +=
//                |- Identifier: total
//                |- MemberExpression: []
//                     |- Identifier: arr
//                     |- Identifier: i
//      |- ReturnValue
//           |- Identifier: total
// |- VariableDeclaration: nums
// |- ArrayExpression: [ 1 , 2 , 3 , 4 , 5 ]
// |- VariableDeclaration: result
// |- CallExpression: sum
//      |- Identifier: nums
// 3) Interpreter  then bytecode then machine code
// read code line by line


// 4) compiler then machine code
// for example in js you have 3 line in line 1 and 2 you log <"heelo"> but in line 3 you have error in js 
// run line 1 and 2  but in 3 error that is for interpreter but in compile before run check all code and if line 3 is error line 1 and 2 do not work.

