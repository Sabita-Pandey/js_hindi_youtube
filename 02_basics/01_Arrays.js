/* ***********************Array************************ */

// An array is a special variable, which can hold more than one value at a time.
// Array is a collection of items stored at contiguous memory locations.
// To store multiple values in a single variable, we can use arrays.
//  Instead of declaring separate variables for each value,
//  we can declare a single array variable and store all the values in it.
//  This makes it easier to organize and manipulate the data.
//  An array is a special type of object in JavaScript.
//  It is used to store multiple values in a single variable.
//  Arrays are zero-indexed: the first element is stored at index 0,
//  the second at index 1, and so on.
// If you have a list of items (a list of car names, for example),
//  storing the cars in single variables could look like this:

const myArr =[0,1,2,3,4,5]

// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
// console.log(myArr.length); // 6
// console.log(myArr[2]); // 2

const myHeros = ["Thor", "IronMan", "SpiderMan"];
const myVillains = ["Loki", "Thanos", "Green Goblin"];

// console.log("My Heroes:", myHeros); // My Heroes: [ 'Thor', 'IronMan', 'SpiderMan' ]
// console.log("My Villains:", myVillains); // My Villains: [ 'Loki', 'Thanos', 'Green Goblin' ]

// You can also create an array using the Array constructor:
 
const myArra = new Array(1, 2, 3, 4, 5);
// console.log("Numbers:", myArra); // Numbers: [ 1, 2, 3, 4, 5 ]

const myArray = new Array("Apple", "Banana", "Cherry");
// console.log("Fruits:", myArray); // Fruits: [ 'Apple', 'Banana', 'Cherry' ]

myArr.push(6);
// console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6 ]

myArr.pop();
// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]

// myArr.shift();
// console.log(myArr); // [ 1, 2, 3, 4, 5 ]

// myArr.unshift(6);
// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]

// console.log(myArr.includes(7)); // false
// console.log(myArr.indexOf(3)); // 3 

const newArr = myArr.join()
/*console.log(newArr); // 0,1,2,3,4,5
console.log(typeof newArr); // string
console.log(typeof myArr); // object
*/

// slice method
// slice is used to extract a portion of an array without modifying the original array.
// It takes two arguments: the starting index and the ending index (exclusive).
// It returns a new array containing the extracted elements.
// that is used to extract a portion of an array without modifying the original array.

console.log("Original Array:", myArr); // Original Array: [ 0, 1, 2, 3, 4, 5 ]
 
const slicedArr = myArr.slice(1, 4);
console.log("Sliced Array:", slicedArr); // Sliced Array: [ 1, 2, 3 ]
console.log("After Slicing, Original Array:", myArr); // After Slicing, Original Array: [ 0, 1, 2, 3, 4, 5 ]

// splice method
// splice is used to add or remove elements from an array.
// It modifies the original array.
// It takes three arguments: the starting index, the number of elements to remove, and the elements to add (optional).

//const splicedArr = myArr.splice(2, 2, 10, 11);
const splicedArr = myArr.splice(1, 3);
console.log("Spliced Array (Removed Elements):", splicedArr); // Spliced Array (Removed Elements): [ 2, 3 ]
console.log("After Splicing, Original Array:", myArr); // After Splicing, Original Array: [ 0, 1, 10, 11, 4, 5 ]

// Main difference between slice and splice is that slice does not modify the original array,
// while splice modifies the original array by adding or removing elements.

// diffrence between slice and splice
// 1. slice() does not modify the original array, while splice() modifies the original array.
// 2. slice() returns a new array containing the extracted elements, while splice() returns an array containing the removed elements.
// 3. slice() takes two arguments (starting index and ending index), while splice() takes three arguments (starting index, number of elements to remove, and elements to add).

// Accessing Array Elements
// You can access array elements using their index:

// console.log("First Hero:", myHeros[0]); // First Hero: Thor
// console.log("Second Villain:", myVillains[1]); // Second Villain: Thanos

// Modifying Array Elements
// You can modify array elements by assigning a new value to a specific index:

myHeros[2] = "Black Panther";
// console.log("Updated Heroes:", myHeros); // Updated Heroes: [ 'Thor', 'IronMan', 'Black Panther' ]

// Array Properties and Methods
// Arrays come with various properties and methods to manipulate them.
// Some commonly used ones include:

// Length Property
// The length property returns the number of elements in an array:

// console.log("Number of Heroes:", myHeros.length); // Number of Heroes: 3

// Push Method
// The push() method adds one or more elements to the end of an array:

myVillains.push("Ultron");
// console.log("Updated Villains:", myVillains); // Updated Villains: [ 'Loki', 'Thanos', 'Green Goblin', 'Ultron' ]

// Pop Method
// The pop() method removes the last element from an array:

const removedVillain = myVillains.pop();
// console.log("Removed Villain:", removedVillain); // Removed Villain: Ultron
// console.log("Villains after pop:", myVillains); // Villains after pop: [ 'Loki', 'Thanos', 'Green Goblin' ]

// Shift Method
// The shift() method removes the first element from an array:

const firstHero = myHeros.shift();
// console.log("Removed Hero:", firstHero); // Removed Hero: Thor
// console.log("Heroes after shift:", myHeros); // Heroes after shift: [ 'IronMan', 'Black Panther' ]

// Unshift Method
// The unshift() method adds one or more elements to the beginning of an array:

myHeros.unshift("Captain America");
// console.log("Heroes after unshift:", myHeros); // Heroes after unshift: [ 'Captain America', 'IronMan', 'Black Panther' ]

// These are just a few examples of how to work with arrays in JavaScript.
//  Arrays are versatile and powerful, making them essential for managing collections of data.  





