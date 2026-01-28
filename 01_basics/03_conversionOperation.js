// ******************* Conversion Operation ********************* //

// Conversion means changing data from one type to another type

// 1. Number Conversion
// 2. Boolean Conversion
// 3. String Conversion
// let score = 33 => // number, number, number, 33
// let score = "33" =>  // string, string, number, 33
// let score = "33abc" => // string, string, number NaN
// let score = "null" => // string, string, number NaN
// let score = null => // object, object, number 0
//let score = undefined => //undefined, undefined, number Nan
// let score = true => // boolean, boolean, number, 1
//let score = "Sabita Pandey" => // string, string, number, NaN
 let score = "Sabita"


/*console.log(typeof score);
  console.log(typeof (score)); */

  let valueinNumber = Number(score)
  /*console.log(typeof valueinNumber);
  console.log(valueinNumber)*/


//"33" => 33
// "33abc" => NaN
// true => 1; false => 0


// let IsloggedIn = 1 => true
// let IsloggedIn = "" => false
// let IsloggedIn = "Sabita" => true
let IsloggedIn = 1
 
let booleanisLoggedIn = Boolean(IsloggedIn)
//console.log(booleanisLoggedIn)

//1 => true; 0 => false
// "" => false
// "sabita" => true

//let someNumber = 45

let someNumber = 76 
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)




// ******************* Operations ******************* //


// Conversion using Operators
// 1. Unary + Operator
let str = "45"
let num = +str
//console.log(num)
//console.log(typeof num)

// 2. Unary - Operator    

let value = "34"
let negValue = -value
//console.log(negValue)
//console.log(typeof negValue)

/* console.log("********** Conversion using Operators **********")
console.log(2+2)
console.log("2"+"2")  // concatenation, 22
console.log("2"+2)   // concatenation, 22
console.log(2+"2")   // concatenation, 22
console.log("Sabita"+2)  // concatenation, Sabita2
console.log(+"2"+ +"2")  // 4
console.log(+"2"+2)   // 4
console.log(-"2"+2)   // 0
console.log("2"-2)    // 0
console.log("2"*2)    // 4
console.log("6"/2)    // 3 */

 
/* console.log("2"%6)   // 2
console.log(+"Sabita")  // NaN
console.log(-"Sabita")  // NaN
console.log("Sabita"-2)   // NaN
console.log("Sabita"*2)   // NaN
console.log("Sabita"/2)   // NaN
console.log("Sabita"%2)   // NaN */ 

console.log("********** Other Mathematical Operations **********")

// Other Mathematical Operators
 /* console.log(2+2);//4
console.log(2-2);//0
console.log(2*2);//4
console.log(6/2);//3
console.log(2%6); //2 */

// Note: + operator is used for addition as well as concatenation
// but other operators(-,*,/) are only used for mathematical operations

// Examples of Unary + and - Operators
/* console.log(-"-56")  // 56
console.log(+"78")   // 78
console.log(+"Sabita") // NaN */

// 3. String Concatenation using + Operator

let str1 = "Hello"
let str2 = "World"
let fullString = str1 + " " + str2
// console.log(fullString)
// console.log(typeof fullString)


// console.log("1" + 2)  // "12"
// console.log(1 + "2")  // "12"
// console.log("1" + "2") // "12"
// console.log(1 + 2)    // 3
// console.log("1" +2 +3) // "123" if first operand is string then it will concatenate and treat all as string
// console.log(1 + "2" +3) // "123" if first operand is string then it will concatenate and treat all as string
// console.log(1 + 2 +"3") // "33" if first two operands are number then it will add them and then concatenate as string
// console.log("Hello" + 2 + 3) // "Hello23" if first operand is string then it will concatenate and treat all as string
// console.log(+"1" + 2 +3) // 6 here unary + converts string "1" to number 1 and then addition is performed
// console.log(1 + +"2" +3) // 6 here unary + converts string "2" to number 2 and then addition is performed
// console.log(1 + 2 + +"3") // 6 here unary + converts string "3" to number 3 and then addition is performed

/* console.log(true); // true
console.log(false); // false
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Sabita")); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false */


/* console.log(true); // true
console.log(false); // false
console.log(+true); // 1
console.log(+false); // 0
console.log(-true); // -1
console.log(-false); // -0
console.log(Number(true)); // 1
console.log(Number(false)); // 0 */


//Assignment Operators with Conversion

let num1 , num2, num3

num1 = num2 = num3 = 2 + 5
// console.log(num1) // 7  => It is right assignment but not better practice because it reduces code readability

let gameCounter = "100"
gameCounter++
console.log(gameCounter) // 101
console.log(typeof gameCounter) // string

// Here, ++ operator converts string "100" to number 100, then increments it to 101, and finally assigns back to gameCounter as number 101
// ******************* End ******************* //





