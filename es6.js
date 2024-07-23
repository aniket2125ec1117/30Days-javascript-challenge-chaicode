// Use template literal to create a String that include variable for a person name and age and log the string to the console.

let name = 'Aniket'
let age = 21

let str = `my name is ${name} and my age is ${age}`

console.log(str)

//create a multiline string using the template literal and log it to the console

let str1 = `My name is ${name}.\nMy age is ${age}`;

console.log(str1)

// Use array destructuring to extract the first and second element from the array of number and log them to the console

let c = [32, 46, 78, 98]
let [a, b] = c

console.log(`${a} ${b}`)

// Use object destructuring to extract the title and author from a book object and log them to the console

let book = {
    title : 'let us me',
    author: 'Author'
}

let {title, author} = book
console.log(title)
console.log(author)

// Use the spread operator to create a new array that includes all element of an existing arrray plus additional element, and log the new array

let arr1 = [1, 2, 3, 4]
let arr2 = [...arr1, 5, 6, 7, 8]
console.log(arr2)

// Use the rest operator in a function to accept an arbitray number of argument , sum them and return the result
function sum(...numbers) {
    return numbers.reduce((num, currentValue) => currentValue + num);
}
console.log(sum(1, 2, 3, 4, 5))

// Write a function that takes two parameter and return their product with the second parameter having a default value of 1 log the result of calling the function with or without the second parameter

function product(a, b = 1) {
    return a*b
}
console.log(product(2))
console.log(product(2, 3))

// Use enhanced object literal to create an object with method and properties and log the object to the console

let name1 = "OnClick";
let location = "New York";

let barberShop = {
    name1,
    location,
    open() {
        console.log(`${this.name1} is now open at ${this.location}`);
    },
    close() {
        console.log(`${this.name1} is now closed`);
    }
};

console.log(barberShop);
barberShop.open();
barberShop.close();

// Create an object with computed properties name based on variable and log the object to the console

let referObj = {
    firstName : 'Aniket',
    lastName: 'Kumar',
    libId: '2125ec1117',
    year: 2025,
    getEmail() {
        return `${this.firstName}.${this.libId}@kiet.edu`;
    }
}
referObj.lastCode = referObj.libId.substring(6)
console.log(referObj.getEmail())
console.log(referObj)
// Note using this inside a template literal directly within an object literal does not work as expected because this inside the template literal does not refer to the object being defined. 
// You can use this in function inside the object literal


// Day 8 Completed successfully