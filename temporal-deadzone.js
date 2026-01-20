// let&const: They are stored in different memory space then global

// Temporal Dead Zone: Temporal dead zone is the time since when that variable was hoisted and till it is initalize some value that time between that it known as temporal dead zone

// That phase from hoisting to alocating and assigning memory to variables adnd functions that phase is called Temporal dead zone.

// When you access a variable and function inside temporal dead zone it gives reference Error.

// Reference Error: When Javascript tries to find out variables and function inside memory space and it coudn't find out so it show reference error.

// the best way to avoid temporal dead zone to move the intialization at the top

// The TDZ begins when the scope is entered and continues until the JavaScript engine executes the line of code where the variable is declared and initialized.

// let a = 100;

console.log(b);
// console.log(a);
var b = 10;
