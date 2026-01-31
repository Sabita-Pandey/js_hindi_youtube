/***************** Number ******************* */
// Number means numeric data type in javascript
// It is used to represent both integer and floating point numbers
// JS uses 64-bit floating point representation for all its numbers (IEEE 754 standard)
// It can represent numbers from -(2^53 -1) to (2^53 -1)

// Examples of numbers
const num1 = 42          // integer
const num2 = 3.14        // floating point number
const num3 = -7          // negative number
const num4 = 0           // zero

// console.log(num1, num2, num3, num4)

// You can perform various mathematical operations on numbers
const sum = num1 + num2          // addition
const difference = num1 - num3   // subtraction
const product = num1 * num2      // multiplication
const quotient = num1 / num2     // division
const remainder = num1 % 5       // modulus

// There are two types of numbers in javascript
// 1. Primitive number type
// 2. Number object type
const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance) // Number {100}

// console.log(typeof score)// 'number'
// console.log(typeof balance) // 'object'

 // console.log(balance.toString().length) // '3'
// console.log(balance.toFixed(2)) // '100.00'

constotherNumber = 1245.56789
 // console.log(constotherNumber.toPrecision(4)) // '45.57'

const hundreds = 10000000
 // console.log(hundreds.toLocaleString('en-IN')) // '1,00,00,00,000'

//********************** MATHS ********************* //

// Math is a built-in object in javascript that provides various mathematical constants and functions
// It is not a function or a constructor, so you cannot create instances of it
// All properties and methods of Math are static and can be accessed directly using the Math object
// For example, Math.PI gives the value of pi, and Math.sqrt() computes the square root of a number
// Math is useful for performing complex mathematical calculations and operations in your code
// It includes methods for rounding numbers, generating random numbers, finding minimum and maximum values, and more
// You can use Math methods by calling them with the Math prefix, like Math.methodName()
// For example, Math.round(4.6) will round the number 4.6 to the nearest integer, which is 5
// Math helps in simplifying mathematical operations in JavaScript programming

// Here are some examples of using Math methods:
// Some commonly used Math methods are: 
// console.log(Math); // Math {…}
// console.log(Math.abs(-4)) // 4
// console.log(Math.abs(4)) // 4



/*
console.log(Math.round(4.6)) // 5
console.log(Math.round(4.4)) // 4

console.log(Math.ceil(4.2)) // 5 // Mins value is greater than  than choose after come the given number or equal to given number 
console.log(Math.ceil(4.8)) // 5

console.log(Math.floor(4.8)) // 4 // Maxs value is less than than choose before come the given number or equal to given number
console.log(Math.floor(4.2)) // 4

console.log(Math.min(2,34,5,6,7,8,9,-1)) // -1
console.log(Math.max(2,34,5,6,7,8,9,-1)) // 34
*/ 

//console.log(Math.random()) // random number between 0 and 1

 console.log(Math.random() * 100) // random number between 0 and 100

// console.log((Math.random()*100) + 1) // random number between 1 and 100

// console.log(Math.floor(Math.random() * 100)) // random integer between 0 and 99

// console.log(Math.floor(Math.random() * 100) + 1) // random integer between 1 and 100

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)))
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // random integer between 10 and 20





//********************** EXTRA METHODS ********************* //






/*
console.log(Number.isInteger(23)) // true
console.log(Number.isInteger(23.5)) // false

console.log(Math.PI) // 3.141592653589793
console.log(Math.E) // 2.718281828459045

console.log(Math.round(4.6)) // 5
console.log(Math.floor(4.6)) // 4
console.log(Math.ceil(4.2)) // 5
console.log(Math.trunc(4.9)) // 4

console.log(Math.random()) // random number between 0 and 1

console.log(Math.random() * 100) // random number between 0 and 100

console.log(Math.floor(Math.random() * 100)) // random integer between 0 and 99

console.log(Math.floor(Math.random() * 100) + 1) // random integer between 1 and 100
*/



