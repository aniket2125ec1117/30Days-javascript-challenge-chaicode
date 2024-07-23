// Write a program to print number from 1 to 10 using for loop

for (let i = 1; i < 11; i++) {
    console.log(i)
}

// Write a program to print ht emultiplcation table of using a for loop

for (let j = 1; j < 11; j++) {
    console.log(5*j)
}

// Write a program to calculate the sum of number from 1 to 10 using a while loop

let sum = 0;
let k = 0;
while (k <= 10) {
    sum = sum + k;
    k++;
}

console.log(sum)

// Write a program to print from 10 to 1 

let x = 10
while (x > 0) {
    console.log(x)
    x--
}

// Write a program to print number from 1 to 5 using a do.. while loop

let y = 1;
do {
    console.log(y)
    y++
} while (y < 6)

// Write a program to calculate the factorial of a number using a do while loop

let z = 5
let fact = 1

do {
    fact = fact * z;
    z--;
} while (z > 0)
console.log(fact)

// write a program to print the following pattern
// *
// **
// ***
// ****
// *****
for (let i = 0; i < 5; i++) {
    let line = ""
    for (let j = 0; j <= i; j++) {
        line += "*"
    }
    console.log(line)
    console.log("\n")
}

// Write a program to prnint number from 1 to 10 but skip the number 5 using the continue statement

for (let i = 1; i <= 10; i++) {
    if(i == 5) {
        continue;
    }
    console.log(i)
}

// Write a program to print number from 1 to 10 but stop the loop when the number is 7 using the break statement

for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        break ;
    }
    console.log(i)
}

// Day 3 completed successfully