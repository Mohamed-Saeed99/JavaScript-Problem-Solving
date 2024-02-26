// Part 1: Problem solving

// // 1- Calculate the sum of numbers within an array with 5 element
// let array = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }

// console.log("The sum of the array elements is:", sum);





// // 2-Using built in Function Remove the spaces found in a string
// let str = "Hello world!";
// let stringWithoutSpaces = str.replace(" ", "");
// console.log("String without spaces:", stringWithoutSpaces);




// // 3-Return a Boolean if a number is divisible by 10
// function isDivisibleBy10(number) {
//     return number % 10 === 0;
// }
// let numFromUser=parseInt(prompt("enter number"))
// console.log(isDivisibleBy10(numFromUser)); 









// // 4- Using Function to return the max between 2 numbers (ternary operator : search)
// function maxNumber(a, b) {
//     return a > b ? a : b;
// }
// let num1 =parseInt(prompt("enter num 1"));
// let num2 =parseInt(prompt("enter num 2"));
// console.log(maxNumber(num1, num2));









// -----------------------------------------------------------------------------


// Part 2:

// // 1- What is the data type of "Hello world"?
// // the type is string
// console.log(typeof "Hello world")





// // 2- what happen when you put + between string and number?
// // it performs concatenation. The number is converted to a string, and then the two strings are concatenated together
// let string = "Hello";
// let number = 42;
// let result = string + number;
// console.log(result); 





// 3- what is the && operator represent in JS?
// is the logical AND operator. It is used to combine two conditions or expressions:
// If both expressions on its left and right sides are true, it returns true.
// Otherwise, it returns false.





// -----------------------------------------------------------------------------------------------
// Part 3: Search


// // 1- How I can Access all data in array without using index
// // by using for...of 
// let array = [1, 2, 3, 4, 5];
// for (let item of array) {
//     console.log(item);
// }