// Day 6: Arrays

/* Tasks/Activities: 

   Activity 1: Array Creation and Access 

    

    Task 1: Create an array of numbers from 1 to 5 and log the array to the console. 

    Task 2: Access the first and last elements of the array and log them to the console. 

    

   Activity 2: Array Methods (Basic) 

    

    Task 3: Use the push method to add a new number to the end of the array and log the updated array. 

    Task 4: Use the pop method to remove the last element from the array and log the updated array. 

    Task 5: Use the shift method to remove the first element from the array and log the updated array. 

    Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array. 

    

   Activity 3: Array Methods (Intermediate) 

    

    Task 7: Use the map method to create a new array where each number is doubled and log the new array. 

    Task 8: Use the filter method to create a new array with only even numbers and log the new array. 

    Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result. 

    

   Activity 4: Array Iteration 

    

    Task 10: Use a for loop to iterate over the array and log each element to the console. 

    Task 11: Use the forEach method to iterate over the array and log each element to the console. console.log('Push Operation ----> ', array); */

//   Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);

// Task 13: Access and log a specific element from the two-dimensional array.
console.log("Lets access 1st row and 2nd element ---> ", matrix[0][1]);

// Feature Request:

// Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods.

const array = [1, 2, 3, 4, 5];
array.push(33);
console.log("Push Operation ----> ", array);
array.unshift(100);
console.log("unshift Operation ----> ", array);
array.pop();
console.log("Pop Operation ----> ", array);
array.shift();
console.log("Shift Operation ----> ", array);
// Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.
const temp = array.map((ele) => ele * 3);

console.log("Map --> ", temp);

//Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.
for (let item of array) {
  console.log(item);
}

//Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.
