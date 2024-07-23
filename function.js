"use strict";
// Write a function to check if a number is even or odd and log the result to the console

function oddEven(a) {
    if (a % 2 === 0) {
        console.log('even')
    } else {
        console.log('odd')
    }
}
oddEven(5)
// Write a program to calculate the square of a number and resturn the result 

function square(a) {
    return a*a;
}
console.log(square(3))

// Write a function to find the max of two number and log the result to the console

function max(a, b) {
    if (a > b) {
        console.log(`max is ${a}`)
    } else {
        console.log(`max is ${b}`)
    }
}
max(1, 2)

// Write a fucntion to concat two string and return the result

function combineString(a, b) {
    return a.concat(b);
}
console.log(combineString("hello", "world"))

// Write a arrow function to check if a string contains a specific character and return a boolean

var specificCharacter = (str, ch) => {
    if (str.length == 0 && ch.length != 0) {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === ch) {
            return true;
        }
    }
    return false;
}

console.log(specificCharacter("geeksforgeeks", "e"))

// Write a function that takes two parameters and return their product provide a default value for second parameter

function product(a, b = 5) {
    return a*b;
}
console.log(product(5))
console.log(product(5,7))

// Write a function that take a person name and age and return a greeting message provide the default value for the age

function greet(name, age = 35) {
    console.log("good Morning " + name + ` ${age}`)
}

console.log(greet("Aniket"))
console.log(greet("Ankit", 16))

// udeifined because it explicitly return the console and we again console the reuslt 

// Write a higher order function that takes a function and a number and calls the fucntion that many times

function higherOrder(a, cb) {
    for (let i = 0; i < a; i++) {
        cb(i);
    }
    return () => console.log(a)
}
function print(i) {
    console.log(i)
}
var checkHO = higherOrder(5, (val) => {console.log(val)})
checkHO()
higherOrder(10, print)

// Write a higher order function that takes two function and a value applies the first function to the value and then applies the second function to the reuslt

function higherOrderFunction(value, firstFunction, secondFunction) {
    const result1 = firstFunction(value);   
    const finalResult = secondFunction(result1);  
    return finalResult;
}

// Example functions
function double(x) {
    return x * 2;
}

function subtractOne(x) {
    return x - 1;
}

// Usage example:
const value = 5;
const result = higherOrderFunction(value, double, subtractOne);
console.log("see");
console.log(result); // Output: 9

// Day 4 completed successfully


