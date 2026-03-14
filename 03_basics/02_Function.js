//function calculateCartPrice(...num1)// rest parameter (...) that is called rest operator which allows us to pass an indefinite number of arguments as an array to the function. In this case, num1 will be an array containing all the arguments passed to the function.
// The rest operator is useful when we want to work with a variable number of arguments, such as in this case where we want to calculate the total price of items in a shopping cart. We can use the rest operator to collect all the prices into an array and then perform operations on that array, such as summing up the total price.
// that is also spread operator which allows us to expand an array into individual elements. In this case, we can use the spread operator to pass an array of prices as individual arguments to the function, which can be useful when we have an array of prices that we want to calculate the total for. The spread operator allows us to easily pass the elements of the array as separate arguments to the function, making it more convenient to work with arrays in certain situations.
//{
   // return num1
//}

function calculateCartPrice(value1, value2, ...num1) {
    return num1
}

//console.log(calculateCartPrice(200, 400,500, 600, 700)); // Output: [500, 600, 700]

// In this example, the first two arguments (200 and 400) are assigned to value1 and value2 respectively, while the rest of the arguments (500, 600, and 700) are collected into the num1 array using the rest operator. The function then returns the num1 array, which contains the remaining arguments passed to the function.

const user ={
    Name: "Sabita",
    Age: 22,
    Email: "sabita@example.com"
}
function handleObject(anyobject){
    console.log(`User Name is ${anyobject.Name} , Age is ${anyobject.Age} and Email is ${anyobject.Email}`);
    
}
// handleObject(user); // Output: User Name is Sabita , Age is 22 and Email is sabita@example.com

handleObject({
    Name: "Sabita",
    Age: 22,
    Email: "sabita@example.com"
}); // Output: User Name is Sabita , Age is 22 and Email is sabita@example.com

const myNewArray = [1, 2, 3, 4, 5];

function returnSecondValue(getArray)
{
    return getArray[1]; // This will return the second value of the array, which is 2
}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([1,2,3,4,5]));


