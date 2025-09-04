// Variables and Data Types
let personName = "Daniel";
let personAge = 27;
let studentStatus = false;

console.log(personName);
console.log(personAge);
console.log(studentStatus + "\n")

// Basic Arithmetic Operations
let variable1 = 6;
let variable2 = 2;

let variableAdd = variable1 + variable2;
let variableSub = variable1 - variable2;
let variableMult = variable1 * variable2;
let variableDiv = variable1 / variable2;

console.log("2 and 6");
console.log("Addition: " + variableAdd);
console.log("Subtraction: " + variableSub);
console.log("Multiplication: " + variableMult);
console.log("Division: " + variableDiv +"\n");

// Working with Strings
let exampleString = "This string is an example for Assignment 2";

console.log(exampleString);
console.log("The length of the string is: " + exampleString.length)
console.log("The first letter of the string is " + 
    exampleString.charAt(0));
console.log("The last letter of the string is " + 
    exampleString.charAt(exampleString.length - 1) + "\n");

// Math Object
let negNumber = -5;

let numSqrt = Math.sqrt(negNumber);
let numSquared = Math.pow(negNumber, 2);
let numAbs = Math.abs(negNumber);

console.log("Initial number is " + negNumber);
console.log("Square Root: " + numSqrt);
console.log("Squared: " + numSquared);
console.log("Absolute Value: " + numAbs + "\n");

// Boolean Logic and Comparison Operators
if (variable1 > variable2){
    console.log(variable1 + " is greater than " + variable2);
} else if (variable1 < variable2){
    console.log(variable1 + " is less than " + variable2);
} else console.log("Both variables are equal to each other\n");

// Logical Operators
let variableTrue = true;
let varibaleFalse = false;

console.log("\"AND\" Result:" + (variableTrue && variableFalse));
console.log("\"OR\" Result:" + (variableTrue || variableFalse));
console.log("\"NOT\" Result:" + !(variableTrue == variableFalse) + "\n");

// Using Tempalate Literals
let firstName = "Ayden";
let lastName = "Burke";
let greetingMessage = `Welcome ${firstName}, ${lastName}!`;

console.log(greetingMessage);

