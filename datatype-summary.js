//datatype-summary.js
/*
Summary of Data Types in JavaScript
datatypes is a classification or categorization of data items. It represents the kind of value that tells what operations can be performed on a particular data.
datatypes is a way to represent the value in the memory.
datatypes is used to tell the interpreter or compiler how the programmer intends to use the data.datatypes is used to define the operations that can be done on the data.
datatypes is used to define the meaning of the data.
datatypes is used to define the size and layout of the data in memory.
datatypes is used to define the range of values that can be stored in the memory.
datatypes is used to define the operations that can be performed on the data.
datatypes is used to define the way the data is stored in the memory.
*/


// datatypes are mainly two types
// whose type of data store in the memory and how we can use them and how can we access them in the basics of javascript datatypes are mainly two types:-

// 1. Primitive Data Types
// 2. Non-Primitive Data Types



//"use strict";

// 1. Primitive Data Types
/*
Primitive Data Types in JavaScript
Primitive data types are the most basic data types in JavaScript. 
They are immutable, meaning their values cannot be changed once created. 
Primitive data types are stored directly in the memory location associated with the variable.
primitive data types are compared by their values.
primitive data types are passed by value.
primitive data types are faster to access and manipulate compared to non-primitive data types.
primitive data types have a fixed size in memory.
primitive data types do not have properties or methods.
primitive data types are not objects and do not have methods or properties.
primitive data types are not reference types.
primitive data types are not collections of values.
*/
// There are seven primitive data types in JavaScript:
// 1. String
// 2. Number
// 3. BigInt

const bigNum = 9007199254741991n; // BigInt data type
//console.log(typeof bigNum); // bigint


// 4. Boolean
// 5. Null
// 6. Undefined
// 7. Symbol

const id = Symbol('4567'); // unique identifier
const anotherId = Symbol('4567'); // unique identifier

//console.log(id === anotherId); // false

// 1. Primitive Data Types
/*Examples of Primitive Data Types in JavaScript
Here are some examples of each primitive data type in JavaScript:
*/
/*
let str = "Hello, World!"; // String
let num = 42;              // Number
let bigIntNum = 9007199254741991n; // BigInt
let bool = true;           // Boolean
let nul = null;            // Null
let undef;                 // Undefined
let sym = Symbol('unique'); // Symbol
*/

/*Checking Data Types using typeof Operator
You can use the typeof operator to check the data type of a variable in JavaScript. Here are examples for each primitive data type:
*/

/*
let str = "Hello, World!";
console.log(typeof str);      // "string"
console.log(typeof num);      // "number"
console.log(typeof bigIntNum); // "bigint"
console.log(typeof bool);     // "boolean"
console.log(typeof nul);      // "object" (this is a known quirk in JavaScript)
console.log(typeof undef);    // "undefined"
console.log(typeof sym);      // "symbol"
*/



const score = 100;
const scorevalue = 100.5;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined

//console.log(typeof score); // number
//console.log(typeof scorevalue); // number
//console.log(typeof isLoggedIn); // boolean
//console.log(typeof outsideTemp); // object
//console.log(typeof userEmail); // undefined

//2. Non-Primitive Data Types
/*
Non-Primitive Data Types in JavaScript
Non-primitive data types, also known as reference types, are more complex data types that can store collections of values or more complex structures.
Non-primitive data types are mutable, meaning their values can be changed after they are created.
Non-primitive data types are stored as references in memory, meaning the variable holds a reference to the location in memory where the data is stored.
Non-primitive data types are compared by their references, not by their values.
Non-primitive data types are passed by reference.
Non-primitive data types can have properties and methods.
Non-primitive data types can be used to create complex data structures like arrays and objects.
Non-primitive data types can grow and shrink in size as needed.
Non-primitive data types can contain multiple values or collections of values.
*/
// There are three main non-primitive data types in JavaScript:
// 1. Object
// 2. Array

const heros = ["shaktiman", "naagraj", "doga", "batman"]; // Array
 let myObj = { 
    name: "Sabita",
    age: 21,
}
// 3. Function

const myFunction = function() {
    console.log("Hello, Sabita!"); // Function
}
// Examples of Non-Primitive Data Types in JavaScript
/*
let obj = { name: "Alice", age: 30 }; // Object
let arr = [1, 2, 3, 4, 5];            // Array
let func = function() {                // Function
    console.log("Hello, World!");
};
*/

// Checking Data Types using typeof Operator
/*
console.log(typeof obj);  // "object"
console.log(typeof arr);  // "object"
console.log(typeof func); // "function"
*/

const person = {
    name: "Sabita",
    age: 21
};

const oddNumbers = [1, 3, 5, 7, 9];

function greet() {
    //console.log("Hello, Sabita!");
}

//console.log(typeof person); // object
//console.log(typeof oddNumbers); // object
//console.log(typeof greet); // function



// How to find data type of a  value&variable in JavaScript?
/*
In JavaScript, you can find the data type of a variable using the typeof operator. The typeof operator returns a string indicating the type of the unevaluated operand.
Here are some examples:
*/


console.log(typeof bigNum)//bigint
console.log(typeof id)//symbol
console.log(typeof anotherId) //symbol
console.log(typeof heros)//object
console.log(typeof myObj) //object
console.log(typeof myFunction) //function
console.log(typeof outsideTemp) //object
console.log(typeof score) //number
console.log(typeof isLoggedIn) //boolean
console.log(typeof userEmail) //undefined
