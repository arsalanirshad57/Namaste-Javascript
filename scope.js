// Scope Def:  Where you access a special variables or a function in our code.

// The scope chain in JavaScript is the hierarchical structure used by the JavaScript engine to look up variables and functions. first find in local memory and its doen't find so it goes to referenced's parant memory just like chain.

// Lexical Environment: Lexical Environment is create whenver context execution created + referenced lexical scope of its lexical parent and it define wheater a function or varianble present inside a scope chain or not.

// Lexical Parent: where function or variable should actually place


function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}

a();
