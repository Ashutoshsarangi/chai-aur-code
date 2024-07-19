/*


   Day 5: Functions 

   Tasks/Activities: 

   Activity 1: Function Declaration 

    

    Task 1: Write a function to check if a number is even or odd and log the result to the console. 

    Task 2: Write a function to calculate the square of a number and return the result. 

    

   Activity 2: Function Expression 

    

    Task 3: Write a function expression to find the maximum of two numbers and log the result to the console. 

    Task 4: Write a function expression to concatenate two strings and return the result. 

    

   Activity 3: Arrow Functions 

    

    Task 5: Write an arrow function to calculate the sum of two numbers and return the result. 

    Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value. 

    

   Activity 4: Function Parameters and Default Values 

    

    Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter. 

    Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age. 

    

   

*/

//Feature Request:

// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.

const checkEvenAndOdd = (num) => (num % 2 === 0 ? "Even" : "Odd");

console.log(checkEvenAndOdd(4));
console.log(checkEvenAndOdd(5));

// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
const squareCalculate = (num) => num * num;

console.log(squareCalculate(4));
console.log(squareCalculate(25));

// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
const stringConcate = (param1, param2) => String(param1) + " " + String(param2);

console.log(stringConcate("hello", "world"));
console.log(stringConcate("Ashutosh", "Sarangi"));

// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
const sumOfTwo = (param1, param2) => param1 + param2;
// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.
//Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const repeatFunCall = (func, num) => {
  while (num-- > 0) {
    func(num);
  }
};

const printHello = (num) => console.log("Hello Print---> ", num);

repeatFunCall(printHello, 5);
// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const higherOrderDemo = (func1, func2, num) => func2(func1(num));

const multipleByNum = (num) => num * 2;

const multipleBy10 = (num) => num * 10;

console.log(higherOrderDemo(multipleByNum, multipleBy10, 20));
