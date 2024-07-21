/*   Day 8: ES6+ Features 

   Tasks/Activities: 

   Activity 1: Template Literals 

    

    Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console. 

    Task 2: Create a multi-line string using template literals and log it to the console. 

    

   Activity 2: Destructuring 

    

    Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console. 

    Task 4: Use object destructuring to extract the title and author from a book object and log them to the console. 

    

   Activity 3: Spread and Rest Operators 

    

    Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console. 

    Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result. 

    

   Activity 4: Default Parameters 

    

    Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter. 

    

   Activity 5: Enhanced Object Literals 

    

    Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console. 

    Task 9: Create an object with computed property names based on variables and log the object to the console. */

//Feature Request:

// Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
// const str = "Ashutosh Sarangi";
// console.log(`This is a log for multi line:- I will add more \n random words to perform the string \n ${str}`);

// Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.

const arrayValues = (arr) => console.log(...arr);
const objValues = (obj) => {
  const { name } = obj;

  console.log(name);
};
arrayValues([1, 2, 3]);
objValues({ name: "Ashu", age: 30 });

// Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.

const spreadAndRestOperatorDemo = (name, ...rest) => {
  console.log(...rest);
  console.log(name);
};
spreadAndRestOperatorDemo("Ashu", 123, { name: "As" });
// Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.

const defaultParamDemo = (name = "Ashu") => {
  console.log(name);
};

defaultParamDemo();
defaultParamDemo("Basu");

// Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.

const person = {
  name: "John Doe",
  age: 30,
  address: "123 Main Street",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet();
