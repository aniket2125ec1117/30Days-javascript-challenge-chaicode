// Creating and Exporting Modules
//1. Create a module that exports a fucntiona nd add two number and import and use this  module in another scrpt
//2. create a modlule that exports an object respresenting a person with propertie and method import and use module in another scrpt
// import { multiply, divide, subtract } from '../module/module2.js';
// import maxq from '../module/module3.js';
// const {module1, person}= require('./module1');

// console.log(module1(2, 5));
// console.log(person.name)

// Named and Default Exports
//1.  Create a module2 that exports a multiple function using named exports and import and use these function in another script


// console.log(multiply(2, 3));
// console.log(divide(4, 2));
// console.log(subtract(4, 2));

//2. create a module that export a single function using default export and use this function in another script
// console.log(maxq(4, 5))

// Using third party module (eg lodash) usingnpm import and use a fucntion from this module in a script
const lodash = require('lodash');
var array = [1];
var result = lodash.concat(array, [3, 4, 3]);
console.log(result); 
// Using third party module (eg axios) usingnpm import and use a fucntion from this module in a script
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  // Day 13 completed successfully
