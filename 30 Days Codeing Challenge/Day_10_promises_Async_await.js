//Day 11: Promises and Async/Await

//Tasks/Activities:

//Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise1_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("Resolved !!!, Yes it is");
  }, 2000);
});
promise1_1.then((data) => console.log(data));
//     Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const promise1_2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return reject("I ooh, It is an Error !!!!");
  }, 2000);
});

promise1_2.catch((err) => console.log(err));

//   Activity 2: Chaining Promises

//     Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const promise3_3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("promise3_3, Finished ");
  }, 3000);
});

const promise3_2 = new Promise((resolve, reject) => {
  return promise3_3.then((data) => resolve(data + "promise3_2 _data "));
});

const promise3_1 = new Promise((resolve, reject) => {
  return promise3_2.then((data) => resolve(data + "promise3_1_ data"));
});

promise3_1.then((data) => console.log(data));

//   Activity 3: Using Async/Await

//     Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const promise4 = new Promise((resolve, reject) => {
  return resolve("task 4 Using Async/Await ");
});
const fun = async () => {
  const data = await promise4;
  console.log(data);
  return data;
};
console.log(fun());
//     Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const promise5 = new Promise((resolve, reject) => {
  return reject("task 5reject Using Async/Await ");
});
const fun5 = async () => {
  try {
    const data = await promise5;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fun5();

//   Activity 4: Fetching Data from an API

//     Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

const fun6 = () => {
  fetch("https://fakestoreapi.com/products/1")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

fun6();

//     Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

const fun7 = async () => {
  try {
    const data = await fetch("https://fakestoreapi.com/products/1");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fun7();

//   Activity 5: Concurrent Promises

//     Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values
console.log("--------------------------------");
const promise8_4 = new Promise((resolve, result) => resolve("promise8_4!!!"));
const promise8_2 = new Promise((resolve, result) => resolve("promise8_2!!!"));
const promise8_3 = new Promise((resolve, result) => resolve("promise8_3!!!"));
const promise8_1 = new Promise((resolve, result) => {
  setTimeout(() => {
    return resolve("promise8_1");
  }, 1000);
});

Promise.all([promise8_1, promise8_2, promise8_3, promise8_4]).then((data) =>
  console.log("Promise.all ---> ", data)
);

//     Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

Promise.race([promise8_1, promise8_2, promise8_3, promise8_4]).then((data) =>
  console.log("Promise.race ---> ", data)
);
Promise.allSettled([promise8_1, promise8_2, promise8_3, promise8_4]).then(
  (data) => console.log("Promise.allSettled ---> ", data)
);

//   Feature Request:
// Promise.all() will reject immediately upon any of the input promises rejecting. In comparison, the promise returned by Promise.allSettled() will wait for all input promises to complete, regardless of whether or not one rejects. Use allSettled() if you need the final result of every promise in the input iterable.

//     Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.

//     Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.

//     Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.

//     API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.

//     Concurrent Promises Script: Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.
