//   Day 14: Classes

//   Tasks/Activities:

//   Activity 1: Class Definition

//     Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
  fName;
  lName;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static greet() {
    console.log("This is a static Greet method");
  }

  greeting() {
    console.log(`Welcome to ${this.name}`);
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated Age --> ${this.age}`);
  }
  get fullName() {
    return this.fName + " " + this.lname;
  }

  set fName(fName) {
    this.fName = fName;
  }

  set lName(lName) {
    this.lName = lName;
  }
}

const person1 = new Person("Ashu", 12);
person1.greeting();

//     Task 2: Add a method to the Person class that updates the age property and logs the updated age
person1.updateAge(30);

//   Activity 2: Class Inheritance

class Student extends Person {
  static noOfStudent = 0;
  constructor(name, age, studentId) {
    super(name, age);
    Student.noOfStudent++;
    this.studentId = studentId;
  }

  print() {
    console.log("studentId ---> ", this.studentId);
  }

  greeting() {
    console.log(`Welcome to ${this.studentId}`);
  }
}

//     Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

const student1 = new Student("Ashu", 30, 1233);
student1.print();

//     Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

student1.greeting();

//   Activity 3: Static Methods and Properties

//     Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
Person.greet();

//     Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

console.log("No of Student Created --> ", Student.noOfStudent);

//   Activity 4: Getters and Setters

//     Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

//     Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

person1.fName = "Ashutosh";
person1.lname = "Sarangi";

console.log(person1.fullName);

//   Activity 5: Private Fields (Optional)

//     Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  deposit(money) {
    this.#balance += money;
  }

  withdraw(money) {
    this.#balance -= money;
  }

  print() {
    console.log(" Now the money is --> ", this.#balance);
    console.log(
      "we can not access this.balance, we can accecc this.#balance as this is private property;"
    );
  }
}

//     Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

const acc = new Account(23);

acc.deposit(277);
acc.withdraw(100);

acc.print();
//   Feature Request:

//     Basic Class Script: Write a script that defines a Person class with properties and methods, creates instances, and logs messages.

//     Class Inheritance Script: Create a script that defines a Student class extending Person, overrides methods, and logs the results.

//     Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes.

//     Getters and Setters Script: Create a script that uses getters and setters in a class.

//     Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields (optional).
