// js ==> Parsing ==> Compilation ==> Execution

// #### what is js ####
// JavaScript is a high-level, interpreted programming language. It doesn't require compilation into machine' +
// ' code like some other ' + 'languages (e.g., C or Java), but it' + ' does go through a process of parsing and just-in-time (JIT) compilation to execute.' +
// ' Let's break down how JavaScript works under the hood:
// 1**** Parsing
// A) Lexical Analysis
// The JavaScript engine starts by breaking down the source code into a series of tokens. These tokens are the smallest elements in the code, like keywords,
// operators, and identifiers.Example: In the statement let x = 10;, tokens might be let, x, =, 10, and ;.
// B) Syntax Analysis (Parsing): AST<abstract syntax tree> (ASTExplorer.net)
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
// ***** 2  Compilation (Just-In-Time Compilation - JIT):  then bytecode then machine code
// A) Bytecode Generation:
// After parsing, the AST is converted into bytecode by the interpreter. Bytecode is a lower-level representation of the code, but it’s not machine-specific.
//  It's an intermediate representation that is easier to execute than raw JavaScript code.
// B) Interpreter Execution
// Initially, the JavaScript engine interprets the bytecode and starts executing it.
// The code is run in an interpreted mode first, which is quick but not fully optimized.
// C) JIT Compilation:
// As the code is being interpreted, the engine identifies "hot" code paths—code that runs frequently.
// These hot code paths are then compiled into machine code by the JIT compiler. This machine code is highly optimized and can be executed much faster.
// The JIT compiler uses techniques like inline caching and hidden classes to speed up execution.
// D) Optimization and Deoptimization:
// The JIT compiler continuously monitors the execution and optimizes the machine code. If assumptions made during
// optimization are invalidated (e.g., variable types change),
// the engine can deoptimize the code and revert to a less optimized version.
// ***** 3) Execution <v8 engine or>
// Once the bytecode (or optimized machine code) is ready, the JavaScript engine executes it. This execution is done within
// a runtime environment that provides the necessary APIs
// (e.g., DOM manipulation in browsers, file system access in Node.js).

// **** 4) Garbage Collection:
//JavaScript engines include a garbage collector that automatically manages memory. It identifies objects that are no longer needed
// (i.e., no longer referenced by the code) and frees up memory by removing them.