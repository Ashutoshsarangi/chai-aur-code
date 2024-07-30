//   Day 16: Recursion

//   Tasks/Activities:

//   Activity 1: Basic Recursion

//     Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
counter = 1;
const factoritalWrapper = () => {
  const cache = {};
  const factorial = (n) => {
    console.log(cache);
    if (n == 1) {
      return 1;
    }

    if (cache[n]) {
      return cache[n];
    } else {
      cache[n] = n * factorial(n - 1);
      console.log(cache);
    }
    counter++;
    return cache[n];
  };

  return factorial;
};

const task1 = factoritalWrapper();

console.log(task1(5));
console.log(task1(5));
console.log(task1(15));
console.log(task1(15));
console.log(counter);
//     Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
const fibWrapper = () => {
  const cache = {};
  const fib = (n) => {
    if (n == 1 || n == 2) {
      return 1;
    }

    if (cache[n]) {
      return cache[n];
    } else {
      cache[n] = fib(n - 1) + fib(n - 2);
    }

    return cache[n];
  };
  return fib;
};
const task2 = fibWrapper();
console.log("-------------------------------");
console.log(task2(5));
// console.log(task2(5));
// console.log(task2(15));
// console.log(task2(15));
//  console.log(task2(35));

//   Activity 2: Recursion with Arrays

//     Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

const arrWrapper = (arr) => {
  let sum = 0;
  const arrSum = (index) => {
    if (index == arr.length - 1) {
      return arr[index];
    }

    sum = sum + arr[index] + arrSum(index + 1);

    return sum;
  };
  return arrSum(0);
};

console.log("Array Sum ----");
console.log(arrWrapper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//     Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

const arrWrapperTask4 = (arr) => {
  let max = -Infinity;
  const arrMax = (index) => {
    if (index == arr.length - 1) {
      return arr[index];
    }

    if (max < arr[index]) {
      max = arr[index];
    }
    arrMax(index + 1);

    return max;
  };
  return arrMax(0);
};

console.log("Array MAX ----");
console.log(arrWrapperTask4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//   Activity 3: String Manipulation with Recursion

//     Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

//     Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

//   Activity 4: Recursive Search

//     Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

//     Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

//   Activity 5: Tree Traversal (Optional)

//     Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

//     Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

//   Feature Request:

//     Factorial and Fibonacci Script: Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers.

//     Array Recursion Script: Create a script that includes recursive functions to find the sum and maximum element of an array.

//     String Recursion Script: Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.

//     Recursive Search Script: Create a script that includes recursive functions for binary search and counting occurrences in an array.

//     Tree Traversal Script: Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree (optional).
