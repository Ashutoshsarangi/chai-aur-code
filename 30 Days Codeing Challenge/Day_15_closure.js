//   Day 15: Closures

//   Tasks/Activities:

//   Activity 1: Understanding Closures

//     Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

const outerTask1 = () => {
  let task1 = "Ashu task 1";

  return () => {
    console.log(task1);
  };
};

const task1 = outerTask1();
task1();

//     Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

const outerTask2 = () => {
  let task2 = 0;

  return () => {
    console.log("tracker - task 2 --> ", task2++);
  };
};

const task2 = outerTask2();
task2();
task2();

//   Activity 2: Practical Closures

//     Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
const outerTask3 = () => {
  let task3 = 123;

  return () => {
    console.log("Unique id Increment - task 3 --> ", task3++);
  };
};

const task3 = outerTask3();
task3();
task3();

//     Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

const outerTask4 =
  (name = "Ashu") =>
  () =>
    console.log("Welcome to task 4 --> ", name);

const task4 = outerTask4("Ashutosh");
task4();

//   Activity 3: Closures in Loops

//     Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
const arrOfFuncs = [];
for (let i = 0; i < 5; i++) {
  arrOfFuncs.push((index) => console.log(index));
}

arrOfFuncs.forEach((fun, index) => fun(index));

//   Activity 4: Module Pattern

//     Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const manageListfactory = () => {
  const list = [];

  const add = (item) => {
    list.push(item);
  };

  const remove = () => {
    list.pop();
  };

  const showList = () => console.log(list);

  return {
    add,
    remove,
    showList,
  };
};

const manageList = manageListfactory();
manageList.add(5);
manageList.add(4);
manageList.add(3);
manageList.add(2);
manageList.add(1);
manageList.add(0);
manageList.showList();
manageList.remove();
manageList.remove();
manageList.showList();
//   Activity 5: Memoization

//     Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

//     Task 8: Create a memoized version of a function that calculates the factorial of a number.
let counterWithOutMemo = 0;
const factorialFactoryWithOutMemo = () => {
  const factorial = (n) => {
    if (n == 1) {
      return 1;
    }
    counterWithOutMemo++;
    return n * factorial(n - 1);
  };
  return factorial;
};

const temp = factorialFactoryWithOutMemo();
console.log(temp(10), counterWithOutMemo);
console.log(temp(20), counterWithOutMemo);
console.log(temp(10), counterWithOutMemo);

let counterWithMemo = 0;
const factorialFactoryWithMemo = () => {
  let cache = { 1: 1 };
  let temp11;
  const factorial = (n) => {
    if (n == 1) {
      return 1;
    }
    temp11 = n * factorial(n - 1);
    if (cache[n]) {
      return cache[n];
    } else {
      cache[n] = temp11;
    }
    counterWithMemo++;
    return temp11;
  };
  return factorial;
};

const temp1 = factorialFactoryWithMemo();
console.log(temp1(10), counterWithMemo);
console.log(temp1(20), counterWithMemo);
console.log(temp1(10), counterWithMemo);
