//const tinderUser = new Object();// {}. creating an object using constructor function.

//const { useSyncExternalStore } = require("react");

const tinderUser1 = {};// creating an object using object literal.

tinderUser1.id = '123abc';
tinderUser1.name = 'Satyarth';
tinderUser1.isLoggedIn = false;
//console.log(tinderUser);
// console.log(tinderUser1);

// Object literals:- that is the most common way to create object.

const regularUser = {
    email: "some@gmail.com",
    fullname:
    {
        userfullname: {
            firstname:"Sabita",
            Lastname:"Pandey"
        }


    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj4 = {5:"e", 6:"f"};

//const obj3 = {...obj1, ...obj2};// spread operator. it is used to copy the properties of one object into another object.

//const obj3 = { obj1, obj2};// it will create a nested object. it will create a new object with the properties of obj1 and obj2.

const obj3 = Object.assign({}, obj1, obj2, obj4);// it will create a new object with the properties of obj1 and obj2. it will not create a nested object. it will copy the properties of obj1 and obj2 into a new object.
//console.log(obj3);

const user = [
     {
        id: 1,
        email: "same@gmail.com"
     },
      {
        id: 1,
        email: "s@gmail.com"
     },
      {
        id: 1,
        email: "me@gmail.com"
     },
      {
        id: 1,
        email: "sam@gmail.com"
     },
]

user[1].email
/*console.log(tinderUser1);

console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1));

console.log(tinderUser1.hasOwnProperty('isLogged'));
*/

const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Satyarth"
}

//course.courseInstructor = "Sabita";
//course.language = "Hindi";

const {courseInstructor: instructor} = course;// object destructuring. it is used to extract the properties of an object and assign them to variables.

//console.log(courseInstructor);
console.log(instructor);




// Object destructuring is a convenient way of extracting multiple values from data stored in objects and Arrays. It can be used in variable declarations, function parameters, and more. It allows us to unpack values from arrays or properties from objects into distinct variables.
/*
const navbar = ({company}) => {
    // navbar logic here
}

navbar({company: "youtube"});// object destructuring in function parameters. it is used to extract the properties of an object and assign them to variables. it is used to pass the properties of an object as arguments to a function.
*/


