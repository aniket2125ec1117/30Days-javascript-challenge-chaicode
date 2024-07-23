// Select an HTML element by its id and change its text content
const ele = document.querySelector("#ele");
ele.innerHTML = "Hey Aniket";

// Select an HTML element by its class and change its background color
const cl = document.querySelector(".container");
cl.style.backgroundColor = "red";

// Create a new div element with some text content and append it to the body
const div = document.createElement("div");
div.classList.add("newClass");

const child = document.createElement("h1");
child.innerHTML = "Hi there";

div.appendChild(child);
document.body.insertAdjacentElement("afterbegin", div); // Insert div at the beginning of the body

// Create a new li element and add it to an existing ul element
const li = document.createElement("li");
li.classList.add("li");
li.innerHTML = "ok";
const ul = document.querySelector("#li"); // Select ul element by its id
ul.appendChild(li);

// Select an HTML element and remove it from the DOM
const removeThis = document.querySelector("#removeThis");
if (removeThis) {
  removeThis.remove();
}

// Select the last child of a specific HTML element
const parentElement = document.querySelector(".container");
const lastChild = parentElement.lastElementChild;

if (lastChild) {
  lastChild.remove();
}

// Select an img element and change its src attribute (assuming there's an img element with id 'myImage')
const imgElement = document.querySelector("#myImage");
if (imgElement) {
  imgElement.setAttribute("src", "newImageSource.jpg");
  // Alternatively, you can change the attribute directly
  // imgElement.src = 'newImageSource.jpg';
}

console.log(imgElement.getAttribute("src"));

// Add and remove a CSS class to/from an html element
const elementId = document.querySelector("#elementId");
elementId.classList.add("cssClass");
elementId.classList.remove("cssClass");

//Event Handling

// Add a click event listenser to a button that changes the text content of a parahraph
const event = document.querySelector("#event1");
const button = document.querySelector("#btn");

let isEventTriggered = false;
let count = 0;

button.addEventListener("click", function () {
  if (isEventTriggered) {
    count++;
    event.innerHTML = "Button Pressed Again" + " " + count;
    event.style.color = "blue";
  } else {
    count++;
    event.innerHTML = "Event Triggered" + " " + count;
    event.style.color = "red";
  }
  isEventTriggered = !isEventTriggered; // Toggle the state
});

// Add a mouseover event listener to an element that changes its border color
const element = document.body;

// Set an initial border style on the body element
element.style.border = "5px solid black";

// Add a mouseover event listener to the body element
element.addEventListener("mouseover", function () {
  // Change the border color on mouseover
  element.style.borderColor = "blue";
});

// Optionally, add a mouseout event listener to revert the border color
element.addEventListener("mouseout", function () {
  // Revert the border color when the mouse leaves
  element.style.borderColor = "black";
});

// Day 9 Complete successfully
