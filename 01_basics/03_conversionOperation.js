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

let someNumber = 45

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)