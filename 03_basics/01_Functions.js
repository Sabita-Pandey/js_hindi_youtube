
// Functions
// A function is a block of code that performs a specific task. It can be reused multiple times throughout a program. Functions can take input parameters and return output values.

// Function Declaration
function greet() {
    //console.log("Hello, World!");
}

// Calling the function
greet(); // Output: Hello, World!

function sayMyName //Function name
() { // Syntax of function declaration

// Function body

/*
console.log("S");
console.log("A");
console.log("B");
console.log("I");
console.log("T");
console.log("A");
*/
}
sayMyName();// (Function call) this is function reference and this is how we call the function
// Output: S A B I T A

//function addTwoNumbers(number1, number2) { // Function with parameters
   // console.log(number1 + number2);
//}
/*
addTwoNumbers(5, 10); // Output: 15
addTwoNumbers(20, "30"); // Output: 2030 (String concatenation)
addTwoNumbers("Hello, ", "World!"); // Output: Hello, World!
addTwoNumbers(4, "a"); // Output: 4a (assuming 'a' is defined)
addTwoNumbers(4, null); // Output: 4 (null is treated as 0 in addition)
addTwoNumbers(4, undefined); // Output: NaN (undefined is treated as NaN in addition)
*/

function addTwoNumbers(number1, number2) 
{
    //let result = number1 + number2; // Local variable to store the result
    //console.log("Sabita");// This line will be executed before the return statement
    
    //return result; // Return statement to return the result to the caller
    //console.log("Sabita"); // This line will never be executed because it is after the return statement

   // return number1 + number2; // Directly returning the result without using a local variable
    
}
const result = addTwoNumbers(5, 10); // This will log 15 but result will be undefined because the function does not return anything
//console.log("Result:", result); // Output: Result: undefined Because the function does not return anything
 

// Function with return value

function loginUserMessage(username = "Guest") // Default parameter value{
{
    if(username === undefined ) // or if(!username) // This will check for both undefined and empty string
        {
            console.log("Please Enter A Username");
                return; // This will exit the function if username is not provided
        }
            

    return `${username} just logged in`;
}

// console.log(loginUserMessage("Sabita")); // Output: Sabita just logged in

// console.log(loginUserMessage(""));
console.log(loginUserMessage());

console.log(loginUserMessage("Sabita")); // Output: Sabita just logged in



function multiplyTwoNumbers(number1, number2) {
   // return number1 * number2; // Return statement
}
//let result = multiplyTwoNumbers(5, 10);
//console.log(result); // Output: 50

// Function Expression
const divideTwoNumbers = function(number1, number2) {
   // return number1 / number2;
};
let divisionResult = divideTwoNumbers(10, 5);
//console.log(divisionResult); // Output: 2

// Arrow Function
const subtractTwoNumbers = (number1, number2) => {
    //return number1 - number2;
};
let subtractionResult = subtractTwoNumbers(10, 5);
//console.log(subtractionResult); // Output: 5

// Arrow Function with implicit return
const square = number => number * number;
let squareResult = square(5);
//console.log(squareResult); // Output: 25

// Function with default parameters
function greetPerson(name = "Guest") {
   // console.log(`Hello, ${name}!`);
}
greetPerson(); // Output: Hello, Guest!
greetPerson("Alice"); // Output: Hello, Alice!

// Function with rest parameters
function sumAll(...numbers) {
   // return numbers.reduce((acc, curr) => acc + curr, 0);
}
let total = sumAll(1, 2, 3, 4, 5);
//console.log(total); // Output: 15

// Function with callback
function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched from server";
        callback(data);
    }, 2000);
}
fetchData(data => {
    // console.log(data); // Output: Data fetched from server (after 2 seconds)
}); 
    



