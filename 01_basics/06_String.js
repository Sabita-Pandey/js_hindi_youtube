const name = "Sabita"
const repoCount = 5

//console.log("Hello " + name  + ", your repo count is " + repoCount); // concatenation but it is not a good way to print variables in strings so you can not use it in real world applications

console.log(`Hello ${name}, your repo count is ${repoCount}`); // template literal
// it is a best way to print variables in strings because it is more readable and easier to use and it is a advanced version of concatenation

// multi-line strings
// declare in strings

const gamename = new String("Mine-craft-com") // using String constructor
//console.log(gamename[0]);
//console.log(gamename.__proto__);
//console.log(gamename.length);
/*
console.log(gamename.toUpperCase()); //MINE-CRAFT
console.log(gamename.toLowerCase()); // mine-craft
console.log(gamename.charAt(2)); // n
console.log(gamename.indexOf("c")); // 5
console.log(gamename.slice(0, 5)); // Mine-
console.log(gamename.replace("Mine", "Block")); // Block-craft
console.log(gamename.split("")); //  split into array of characters
*/

const newString = gamename.substring(0, 4) // substring method in this method negative index is not allowed
console.log(newString); // Mine

const anotherString = gamename.slice(-8, 4) // slice method with negative index
console.log(anotherString); // ne 

const newStringOne = "   Hello World!   "

console.log(newStringOne);
console.log(newStringOne.trim()); // trim method to remove whitespace from both ends

const url = "https://www.sabitatech.com/path/name/index.html?search=query#hash"

// console.log(url.replace('/path/name/index.html?', '.')); // https://www.com.search=query#hash removing path, query and hash from url

// console.log(url.includes("sabitatech")); // true checking if substring is present in string
// console.log(url.includes("google")); // false checking if substring is present in string
   
console.log(gamename.split("-")); // [ 'Mine', 'craft', 'com' ]
// split method to split string into array based on delimiter







/*const multiLine = "This is line one.\nThis is line two.\nThis is line three."
console.log(multiLine); // using \n for new lines

const multiLineTemplate = `This is line one.
This is line two.
This is line three.`
console.log(multiLineTemplate); // using template literals for multi-line strings

const str = "Hello, World!"
console.log(str.length); // length of the string
console.log(str.toUpperCase()); // convert to uppercase
console.log(str.toLowerCase()); // convert to lowercase
console.log(str.indexOf("World")); // index of substring
console.log(str.slice(0, 5)); // slice the string
console.log(str.replace("World", "JavaScript")); // replace substring
console.log(str.split(", ")); // split the string into an array 
*/