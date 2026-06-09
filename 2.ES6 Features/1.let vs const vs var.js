//Practice Program-1
//  ------------------------------------------

var a = 10;

if (true) {
    var a = 20;
}

console.log(a);

// Because var ignores block scope.

//  ------------------------------------------
//Practice Program-2
//  ------------------------------------------

let a = 10;

if (true) {
    let a = 20;
}

console.log(a);

/* 
Global Scope
a = 10

Block Scope
a = 20

Two different variables.*/

//  ------------------------------------------
//Practice Program-3
//  ------------------------------------------

const a = 10;

a = 20;

console.log(a);

// TypeError: Assignment to constant variable.

/*
Rule to Remember

Use const  → default choice
Use let    → when value must change
Avoid var  → in modern JavaScript

This is the rule followed in most modern JavaScript, React, and Playwright projects.  */
