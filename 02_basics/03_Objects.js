// singleton  if we create singleton from construction then its create object.

//Object.create:-that called construction method and its create singleton.

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sabita",
    "full name": "Sabita Pandey", // thas object does not access through dot(.)
    [mySym]: "MyKey1", // It is a Symbol key
    //mysum: "My" // it is a normal key that is like string. 
    age: 20,
    location: "jaipur",
    email: "sabi2132@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Maonday","Saturday"]
}

/* console.log(JsUser.email)  //that is use access the object. 1at method
console.log(JsUser["email"]) // 2nd method.
console.log(JsUser["full name"]);
console.log(JsUser.mySym);
console.log( typeof JsUser.mySym);
console.log(JsUser[mySym]);
console.log( typeof JsUser[mySym]); */

// That is used to changed value:
JsUser.email = "sabi12@gmail.com"

// if you want to lock the value for no one change the value you can freedge this object.
// Object.freeze(JsUser) // now you can try to change the the value than it not propogate, its not give error .
 JsUser.email = "sabi43@gmail.com"

 //console.log(JsUser);
 
JsUser.greeting = function()
{
    console.log("Hello Js User");
    
}

JsUser.greetingTwo = function()
{
    console.log(`Hello Js user, ${this.name}`);// this keyword is used find the propertiess refferncess object.
    
}

//console.log(JsUser.greeting);
console.log(JsUser.greeting()); // its give error that is say that JsUser is not a function. Because its freezed.

console.log(JsUser.greetingTwo());






