// Day 3: Control Structures

//    Tasks/Activities:
//    Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
const checkPositive = (param) => {
  if (Number.isNaN(Number("ashu"))) {
    return "Please Enter a valid Number";
  }
  if (param === "-0") {
    return "Negative";
  }
  return param >= 0 ? "Positive" : "Negative";
};

console.log("checkPositive ---> ", checkPositive(3));
console.log("checkPositive ---> ", checkPositive(-2));
console.log("checkPositive ---> ", checkPositive(0));
console.log("checkPositive ---> ", checkPositive(-0));
console.log("checkPositive ---> ", checkPositive("As"));

//     Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

//    Activity 2: Nested If-Else Statements
//     Task 3: Write a program to find the largest of three numbers using nested if-else statements.

//    Activity 3: Switch Case
//     Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

//     Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

//    Activity 4: Conditional (Ternary) Operator

//     Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

//    Activity 5: Combining Conditions

//     Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

const checkLeapyear = (year) => {
  const divBy400 = year % 400 == 0 ? false : true;
  const divByhundred = year % 100 !== 0 ? divBy400 : true;

  return year % 4 == 0 ? divByhundred : false;
};

console.log("2024", checkLeapyear(2024));
console.log("2028", checkLeapyear(2028));
console.log("2014", checkLeapyear(2014));
console.log("2016", checkLeapyear(2016));
//    Feature Request:

//     Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.

//     Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.

//     Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.

//     Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.

//     Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
