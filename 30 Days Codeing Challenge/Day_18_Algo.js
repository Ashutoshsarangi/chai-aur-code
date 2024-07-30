//   Day 18: Algorithms

//   Tasks/Activities:

//   Activity 1: Sorting Algorithms

//     Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log("Bubble Sort ---> ", arr);
};
const arr = [5, 4, 3, 2, 1];
bubbleSort(arr);
//     Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
const selectionSort = () => {
  let max = -Infinity;
  let pos = -1;
  const lastPos = arr.length;
  for (let i = 0; i < lastPos; i++) {
    for (let j = 0; j < lastPos; j++) {
      if (max < arr[j]) {
        max = arr[j];
        pos = j;
      }
    }
    if (pos !== lastPos - 1) {
      let temp = arr[lastPos - 1];
      arr[lastPos - 1] = arr[pos];
      arr[pos] = temp;
    }
  }
  console.log("selection Sort ---> ", arr);
};

selectionSort(arr);
//     Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

//   Activity 2: Searching Algorithms

//     Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return i;
    }
  }
  return -1;
};
console.log("linearSearch --> ", linearSearch(arr, 4));

//     Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
const binarySearch = (arr, value, start = 0, end = arr.length - 1) => {
  let mid = Math.floor((start + end) / 2);
  if (mid > arr.length) {
    return -1;
  }
  if (arr[mid] == value) {
    return mid;
  } else if (arr[mid] > value) {
    return binarySearch(arr, value, 0, mid);
  } else {
    return binarySearch(arr, value, mid + 1, arr.length - 1);
  }
};
console.log("binarySearch --> ", binarySearch([1, 2, 3, 4, 5, 6, 7], 1));
console.log("binarySearch --> ", binarySearch([1, 2, 3, 4, 5, 6, 7], 7));
console.log("binarySearch --> ", binarySearch([1, 2, 3, 4, 5, 6, 7], 4));

//   Activity 3: String Algorithms

//     Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

const occurrencesCounter = (str) => {
  let occurance = {};

  for (let item of str) {
    if (occurance[item]) {
      occurance[item] += 1;
    } else {
      occurance[item] = 1;
    }
  }

  return occurance;
};

console.log("occurrencesCounter --> ", occurrencesCounter("hello World"));
//     Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

//   Activity 4: Array Algorithms

//     Task 8: Write a function to rotate an array by k positions. Log the rotated array.

//     Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

//   Activity 5: Dynamic Programming (Optional)

//     Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.

//     Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

// We
