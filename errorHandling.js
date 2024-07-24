// Basic error handling with try - catch

const { response } = require("express");

// 1. Write a function the intentionally throws an error and use a try catch block to handle the error and log an appropriate error in the console
function tryCatch(a) {
  try {
    // Explicitly throw an error
    if (typeof a !== "object" || a === null) {
      throw new Error("Invalid input: input must be an object or array");
    }

    a.length = 6;
    a[2] = 1;
    console.log(a[2]);
  } catch (e) {
    console.log("An error occurred:", e.message);
  }
}

// This will throw an error because 4 is not an object
tryCatch(4);

// 2. Write a function that divide two number and throws an error if the denominator is zero use try and catch block to handle this error

function div(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    let c = a / b;
    console.log(c);
  } catch (e) {
    console.log("error occured : " + e);
  }
}
div(1, 0);

// Finally block
//1. Write a script that includes a try catch and a finally block log the message in the try catch block and finally to observe the exction flow

let a = 10;
let b = 0;
try {
  if (b === 0) {
    throw new Error("Divisbile not possible");
  }
  let d = a / b;
  console.log(d);
} catch (error) {
  console.log(error.message);
} finally {
  console.log("process done");
}

// Custom Error objects
//  Create a custom error object that extends the build in error class throw an instance of this custom error in a fucntion and handle it using the try catch
class AppError extends Error {
  constructor(message) {
    super(message);
    this.name = "AppError";
  }
}

function divide(a, b) {
  try {
    if (b === 0) {
      throw new AppError("Division by zero is not allowed");
    }
    let c = a / b;
    console.log(c);
  } catch (e) {
    if (e instanceof AppError) {
      console.log("Custom error occurred: " + e.message);
    } else {
      console.log("Unexpected error: " + e.message);
    }
  }
}

// This will throw an instance of AppError because b is zero
divide(1, 0);
//2. Write a fucntion that validates the user input (e.g checking if the string is not empty ) and throw a new custom error if the validation fails handle the custom error using try catch
class StringError extends Error {
  constructor(message) {
    super(message);
    this.name = "StringError";
  }
}

function stringError(Str) {
  try {
    if (Str.length == 0) {
      throw new StringError("No string specified");
    }
    console.log(Str.charAt(0));
  } catch (e) {
    if (e instanceof StringError) {
      console.log(e.name + " : " + e.message);
    } else {
      console.log("Unexpected error: " + e.message);
    }
  }
}

stringError("");

// Error handling in promises
//1.Using a promise that randomly resolve or reject useing .catch() to handle the erjection and log an appropriate message to the console
function promise(a, b) {
  return new Promise((resolve, reject) => {
    try {
      if (b === 0) {
        throw new Error("not possible");
      }
      let c = a / b;
      resolve(c);
    } catch (err) {
      reject(err);
    }
  });
}

promise(4, 2)
  .then((c) => console.log(c))
  .catch((err) => {
    console.log(err.message);
  });
// 2. Use try-catch within a sync function to handle error from a promise that randomly resolves or reject and log the error
function getRandomPromise() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    setTimeout(() => {
      if (random > 0.5) {
        resolve("Success!");
      } else {
        reject(new Error("Random failure"));
      }
    }, 1000);
  });
}

async function handlePromise() {
  try {
    const result = await getRandomPromise();
    console.log(result); // Logs "Success!" if the promise resolves
  } catch (error) {
    console.error("Error:", error.message); // Logs "Random failure" if the promise rejects
  }
}

// Call the async function
handlePromise();

// Graceful error handling in fetch
//1. Use the fetch api to request data from an invalid url and handle the error using .catch()  log the appropriate error
fetch("https://picsum.photos/id/237/200/300")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.blob();
  })
  .then((blob) => {
    const imageUrl = URL.createObjectURL(blob);
    console.log("Image URL:", imageUrl);
  })
  .catch((error) => {
    console.error("Error1:", error.message);
  });
//2. Use the fetch api to request data from an invalid URL within an async function and handle the error using the try catch log an appropriate error message
async function fetchUrl(url) {
    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch data: ' + response.statusText);
        }

        let data = await response.blob();
        console.log(data);
    } catch (e) {
        console.log('Error2:', e.message);
    }
}


fetchUrl('https://picsum.photos/id/237/200/300');

// Day 12 completed successfully