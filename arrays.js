// Create an array of numbers from 1 to 5 and log the array to the console
let arr = [1, 2, 3, 4, 5];
console.log(arr);  // Output: [1, 2, 3, 4, 5]

// Access the first and last element of the array
console.log(arr[0]);  // Output: 1
console.log(arr[arr.length - 1]);  // Output: 5

// Use the push method to add a new number to the end of the array and log the updated array
arr.push(6);
console.log(arr);  // Output: [1, 2, 3, 4, 5, 6]

// Use the pop method to remove the last element from the array and log the updated array
arr.pop();
console.log(arr);  // Output: [1, 2, 3, 4, 5]

// Use the shift method to remove the first element from the array and log the updated array
arr.shift();
console.log(arr);  // Output: [2, 3, 4, 5]

// Use the unshift method to add a new number to the beginning of the array and log the updated array
arr.unshift(1);
console.log(arr);  // Output: [1, 2, 3, 4, 5]

// Use the map method to create a new array where each number is doubled and log the new array
let num = arr.map((ele) => ele * 2);
console.log(num);  // Output: [2, 4, 6, 8, 10]
console.log(arr);  // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

// Use the filter method to create a new array with only even numbers and log the new array
let fil = arr.filter((ele) => ele % 2 == 0);
console.log(fil);  // Output: [2, 4]

// Use the reduce method to calculate the sum of all numbers in the array and log the result
let result = arr.reduce((sum, ele) => sum + ele);
console.log(result);  // Output: 15

// Use a for loop to iterate over the array and log each element to the console
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);  // Output: 1 2 3 4 5 (each number on a new line)
}

// Use the forEach method to iterate over the array and log each element to the console
arr.forEach((item) => {
    console.log(item);  // Output: 1 2 3 4 5 (each number on a new line)
});

// Create a two-dimensional array (matrix) and log the entire array to the console
let matrix = [[1, 2], [3, 4], [5, 6]];
console.log(matrix);  // Output: [[1, 2], [3, 4], [5, 6]]

// Access and log a specific element from the two-dimensional array
console.log(matrix[1][0]);  // Output: 3 (element at row 1, column 0)


// Day 6 completed successfully