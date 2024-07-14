// Challenge 1
/* Arithmetic Operations Script: Write a script that performs basic arithmetic operations
 (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results. */

const arithMaticOperation = (param1, param2) => {
  console.log(`Addition of 2 number is ${param1 + param2}`);
  console.log(`Multiplication of 2 number is ${param1 * param2}`);
  console.log(`Subtraction of 2 number is ${param1 - param2}`);
  console.log(`Division of 2 number is ${param1 / param2}`);
};

arithMaticOperation(10, 5);

// Challenge 2
/* Comparison and Logical Operators Script: Create a script that compares two numbers using
 different comparison operators and combines conditions using logical operators, logging the results.*/

const combineOperators = (param1, param2) => {
  if (param1 > param2 || param2 > 100) {
    console.log("Some random Condition 1");
  } else if (param1 === param2 || param2 > 50) {
    console.log("Some random Condition 2");
  } else {
    console.log("Some random Condition 3");
  }
};

combineOperators(5, 30);

// Challenge 3
/* Ternary Operator Script: Write a script that uses the ternary operator to determine
 if a number is positive or negative and logs the result.*/

const testTernary = (param) => {
  if (param === -0) {
    return "Negative";
  }
  return param >= 0 ? "Positive" : "Negative";
};

console.log(testTernary(0));
