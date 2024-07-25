//   Day 9: DOM Manipulation

//   Tasks/Activities:

//   Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content.
const textObj = document.getElementById("text-content-name");
textObj.text("Updated Content");

// Task 2: Select an HTML element by its class and change its background color.
const bgObj = document.getElementsByClassName("example-class");
bgObj.style.backgroundColor = "red";

//   Activity 2: Creating and Appending Elements

//     Task 3: Create a new div element with some text content and append it to the body.

//     Task 4: Create a new li element and add it to an existing ul list.
const liNode = document.createElement("LI");
const textNode = document.createTextNode("Coffee");
liNode.appendChild(textNode);
document.getElementById("UL_element").appendChild(liNode);

//   Activity 3: Removing Elements

//     Task 5: Select an HTML element and remove it from the DOM.
const removeObj = document.getElementById("removable-div");
removeObj.remove();

//     Task 6: Remove the last child of a specific HTML element.
const removeLastElement =
  document.getElementById("remove-last-child").lastChild;
removeLastElement.remove();

//   Activity 4: Modifying Attributes and Classes

//     Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

//     Task 8: Add and remove a CSS class to/from an HTML element.
const elementObj = document.getElementById("to-update-element");
elementobj.setAttribute("src", "URL");
elementobj.setAttribute("class", "my-updated-class");

//   Activity 5: Event Handling

//     Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const clickEventObj = document.getElementById("my-btn");
clickEventObj.addEventListener("click", () => {
  // TODO, what ever you want to do
});

//     Task 10: Add a mouseover event listener to an element that changes its border color.
const mouseOverEventObj = document.getElementById("mouse-over-event");
mouseOverEventObj.addEventListener("mouseover", () => {
  // TODO, call back will execute when our event trigger
});

//   Feature Request:

//     Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.

//     Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.

//     Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.

//     Attribute Modification Script: Create a script that changes the attributes of an HTML element.

//     Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.