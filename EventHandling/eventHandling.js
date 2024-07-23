// Basic event handling
//1. Add a click event listen to a button that changes the text content of a paragraph

// let first1  = document.querySelector('#firstText')
// let btn = document.querySelector('#btn')

// btn.addEventListener('click', function(e) {
//     first1.innerHTML ="Button pressed"
// }, false)

// 2. Add a double click event listener to an image that toogle its visibility

// let first1  = document.querySelector('#firstText')
// let btn = document.querySelector('#btn')

// btn.addEventListener('dblclick', function(e) {
//     first1.style.color = "red"
// }, false)

//Mouse Events
//1. Add a mouseover event listener to an element that changes its background color
let first1 = document.querySelector('#firstText');
let btn = document.querySelector('#btn');

// Set initial border style
first1.style.border = "5px solid black";

// Add event listener for mouseover to change border color to black
first1.addEventListener('mouseover', function(e) {
    first1.style.border = "5px solid black";
}, false);

//2. Add event listener for mouseout to change border color to blue
first1.addEventListener('mouseout', function(e) {
    first1.style.border = "5px solid blue";
}, false);

// KeyBoard event
//1. Add a keydown event listener to an input field that log the key pressed to the log
document.getElementById('name').addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});

//2. Add a keyup event listener to an input field that log the current calue of  the paragraph
document.getElementById('email').addEventListener('keyup', function(event) {
    console.log('Current value:', event.target.value);
});

//Event Delegation
//1. Add a click event listner to a list that logs the text content of the clicked list item using event elegation
document.getElementById('myList').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
    }
});

//2. Add an event listener to a parent element that listen for events from dynamically added child elements
document.getElementById('addItemBtn').addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${document.getElementById('myList').children.length + 1}`;
    document.getElementById('myList').appendChild(newItem);
})

//Day 10 completed successfully