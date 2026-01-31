// memory is allocated to variables when they are declared
// memory is deallocated when variables go out of scope

/*
// memory is used to store data values
// memory management is handled by the JavaScript engine
// memory leaks can occur if memory is not properly managed
// memory can be optimized by using efficient data structures and algorithms
*/
// types of memory in JavaScript
/*
1. Stack Memory (primitive data types and function calls):-


Stack memory is used to store primitive data types and function calls.
Stack memory is organized in a last-in, first-out (LIFO) manner.
Stack memory is faster to access than heap memory.
Stack memory has a limited size, which can lead to stack overflow errors if exceeded.


2. Heap Memory (non-primitive data types):-


Heap memory is used to store non-primitive data types (objects, arrays, functions).
Heap memory is organized in a more complex manner than stack memory.
Heap memory is slower to access than stack memory.
Heap memory has a larger size limit than stack memory, but can still lead to memory leaks if not properly managed.
*/

// example of stack memory
/*let a = 10; // primitive data type stored in stack memory
let b = 20; // primitive data type stored in stack memory

function add(x, y) { // function call stored in stack memory
    return x + y;
}

let sum = add(a, b); // function call stored in stack memory
*/

let myyoutubeChannel = "Sabita Tech"; // primitive data type stored in stack memory

 let anothername = myyoutubeChannel // primitive data type stored in stack memory's
  anothername = "Sabita Coding"; // modifying anothername variable in stack memory

 //console.log(myyoutubeChannel); // accessing variable from stack memory
 //console.log(anothername); // accessing variable from stack memory

// example of heap memory
/*
let obj = { // non-primitive data type stored in heap memory
    name: "John",
    age: 30
};

let arr = [1, 2, 3, 4, 5]; // non-primitive data type stored in heap memory

function greet() { // function stored in heap memory
    console.log("Hello, World!");
}
*/

let useOne = { // non-primitive data type stored in heap memory
    email: "sp1234@gmail.com",
    upi: "sp@oksbi"
};

 let useTwo = useOne // reference to the same object in heap memory
 useTwo.email = "sabita23@gmail.com"
console.log(useOne.email); // accessing object property from heap memory
console.log(useTwo.email); // accessing object property from heap memory