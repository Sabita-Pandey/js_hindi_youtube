// let score = 33 => // number, number, number, 33
// let score = "33" =>  // string, string, number, 33
// let score = "33abc" => // string, string, number NaN
// let score = "null" => // string, string, number NaN
// let score = null => // object, object, number 0
//let score = undefined => //undefined, undefined, number Nan
let score = true
console.log(typeof score);
console.log(typeof (score)); 

let valueinNumber = Number(score)
console.log(typeof valueinNumber);
console.log(valueinNumber)