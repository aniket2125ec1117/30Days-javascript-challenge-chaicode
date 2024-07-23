// Create an object representing a book with properties like title, author, and year
var book = {
    title: "Let us C",
    author: "John",
    year: 2024 
};
console.log(book); // Log the book object to the console

// Access and log the title and author properties of the book
console.log(book.title); // Logs the title of the book
console.log(book.author); // Logs the author of the book

// Add a method to the book object that returns a string with book title and author
book.getDetails = function() {
    return this.title + ' ' + this.author;
};

// Log the result of calling the getDetails method
console.log(book.getDetails()); // Logs "Let us C John"

// Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object
book.updateYear = function(yr) {
    this.year = yr;
};

// Update the year and log the updated object
book.updateYear(2025);
console.log(book); // Logs the book object with the updated year property

// Create a nested object representing a library with properties like name and books (an array of book objects)
var library = {
    lib1: {
        name: 'Aniket',
        books: [
            { title: "Let us C", author: "John" },
            { title: "Java", author: "Herbert" }
        ]
    },
    lib2: {
        name: 'Ankit',
        books: [
            { title: "Truth", author: "Smith" },
            { title: "What", author: "Doe" }
        ]
    }
};

console.log(library); // Log the library object to the console

// Access and log the name of the library and the titles of the books in the library
console.log(library.lib1.name); // Logs the name of lib1
library.lib1.books.forEach((book) => console.log(book.title)); // Logs the titles of books in lib1

// Add a method to the book object that uses the 'this' keyword to return a string with the book's title and year
book.meth = function() {
    return this.title + ' ' + this.year;
};
console.log(book.meth()); // Logs "Let us C 2025"

// Use a for...in loop to iterate over the properties of the book object and log each property and its value
for (let a in book) {
    console.log(a + " : " + book[a]); // Logs each property name and value in the book object
}

// Use a for...of loop to iterate over the values of the books in library.lib1
for (let a of library.lib1.books) {
    console.log(a); // Logs each book object in the books array of lib1
}

// Use Object.keys and Object.values methods to log all the keys and values of the book object
console.log('Keys:', Object.keys(book)); // Logs an array of keys of the book object
console.log('Values:', Object.values(book)); // Logs an array of values of the book object

// Day 7 completed successfully
