/******************* DATE AND TIME ******************* */

/******************** Dates****************** */
/* Dates in JavaScript are represented by the built-in Date object.
// The Date object provides various methods to work with dates and times.
// dates are stored as the number of milliseconds since January 1, 1970, 00:00:00 UTC (Coordinated Universal Time).
// dates can be created, manipulated, and formatted using the Date object methods.
// dates are useful for handling time-related data in applications, such as scheduling events, calculating durations, and displaying timestamps.
// Dates are used to represent specific points in time, such as a particular day, month, year, hour, minute, and second.
// You can create a new Date object using the Date() constructor.
// If you call Date() without any arguments, it creates a Date object representing the current date and time.
*/

let myDate = new Date()
// console.log(myDate) // 20 // current date and time
/*
console.log(myDate.toString()) // Sat Jan 31 2026 15:57:15 GMT+0000 (Cordinated Universal Time) // current date and time in string format
console.log(myDate.toDateString()) // Sat Jan 31 2026  // current date in string format
console.log(myDate.toTimeString()) // 15:57:15 GMT+0000 (Cordinated Universal Time) // current time in string format
console.log(myDate.toLocaleDateString()) // 1/31/2026// current date in string format
console.log(myDate.toLocaleString()) // current date in local string format
console.log(typeof myDate) // object
*/
// console.log(myDate.toISOString()) // 2026-01-31T15:57:15.000Z  // current date in ISO format
// console.log(myDate.toUTCString()) // Sat, 31 Jan 2026 15:57:15 GMT // current date in UTC format

/* *********** */

// let myCreatedDate = new Date('2026, 01, 21')
// let myCreatedDate = new Date(2026, 0, 26) // month is 0-indexed (0 = January, 1 = February, etc.)
// console.log(myCreatedDate); // Sat Jan 21 2026 00:00:00 GMT+0000 (Coordinated Universal Time) // date created using string
// console.log(myCreatedDate.toDateString()); // Wed Jan 21 2026 // date created using string in string format

/* *********** */

//let myCreatedDate = new Date(2026, 0, 21, 10, 33, 30, 0)

//console.log(myCreatedDate.toLocaleString()) // 1/21/2026, 10:33:30 AM // date created using year, month, day, hour, minute, second, millisecond
//console.log(myCreatedDate.toDateString()) // Wed Jan 21 2026 // date created using year, month, day, hour, minute, second, millisecond in string format
//console.log(myCreatedDate.toTimeString()) // 10:33:30 GMT+0000 (Coordinated Universal Time) // time part of the date created using year, month, day, hour, minute, second, millisecond in string format

/* *********** */

/* You can also create a Date object using a date string. The date string should be in a format recognized by the Date.parse() method.

let myCreatedDate = new Date("2026, 01, 26")
console.log(myCreatedDate); // Sun Feb 26 2026 00:00:00 GMT+0000 (Coordinated Universal Time) // date created using string
console.log(myCreatedDate.toLocaleString()); // 2/26/2026, 12:00:00 AM // date created using string in local string format
console.log(myCreatedDate.toDateString()); // Thu Feb 26 2026 00:00:00 GMT+0000 (Coordinated Universal Time) // date created using string in local string format
*/

let myCreatedDate = new Date("01-26-2026") // Date string in "DD-MM-YYYY" format may not be recognized in all environments
// console.log(myCreatedDate); // Invalid Date // date created using string
 // console.log(myCreatedDate.toLocaleString()); // Invalid Date // date created using string in local string format
// console.log(myCreatedDate.toDateString()); // Invalid Date // date created using string in local string format

/******************** Timestamps ******************  */

// A timestamp is a numerical representation of a specific point in time.
// In JavaScript, timestamps are typically represented as the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC (Coordinated Universal Time).
// Timestamps are useful for various purposes, such as measuring time intervals, scheduling events, and storing date and time information in a compact format.
// You can obtain the current timestamp using the Date.now() method or by creating a new Date object and calling its getTime() method.

// Getting current timestamp

let myTimeStamp = Date.now()

//console.log(myTimeStamp) // 1769986635000 // current timestamp in milliseconds since January 1, 1970
//console.log(myCreatedDate.getTime()) // 1769568000000 // timestamp of the created date in milliseconds since January 1, 1970
//console.log(Date.now()) // 1769986635000 // current timestamp in milliseconds since January 1, 1970

// console.log(Date.now()/1000) // 1769986635 // current timestamp in seconds since January 1, 1970
 //console.log(Math.floor(Date.now()/1000)) // 1769986635 // current timestamp in seconds since January 1, 1970 rounded down

let newDate = new Date() // current date

// console.log(newDate); // 2026-01-31T15:57:15.000Z // current date
// console.log(newDate.getMonth()); // 0 // month (0-11)
// console.log(newDate.getDay()); // 6 // day of the week (0-6) Sunday - Saturday
// console.log(newDate.getMonth() + 1); // 1 // month (1-12)

//'${newDate.getDay()} and the time is ${newDate.getHours()}:${newDate.getMinutes()

newDate.toLocaleDateString('default', {
    weekday: 'long', // use ctrl + space to see options
    year: 'numeric',
    month: 'long',
    day: 'numeric'

})
// console.log(newDate); // 2026-01-31T15:57:15.000Z // current date
// console.log(newDate.toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })); // Saturday, January 31, 2026

/******************** Getting Date Components ****************** */
/* You can retrieve individual components of a date using various methods provided by the Date object.
*/
