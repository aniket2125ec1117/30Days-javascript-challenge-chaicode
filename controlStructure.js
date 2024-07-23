// write a program to check if a number is positive negative or zero and log the result to the console
const a = 10
if (a>0) {
    console.log("positive")
} else if (a < 0) {
    console.log("negative")
} else {
    console.log("zero")
}

// write a program to check if a person is elgible to vote or not 

const age = 19
if (age >= 18) {
    console.log("elgible")
} else {
    console.log("not elgible")
}

// write a program to check largest of three number

const x = 100 
const y = 40
const z = 30

if (x > y) {
    if (x > z) {
        console.log("x is largest")
    } else {
        console.log("z is largest")
    }
} else {
    if (y > z) {
        console.log("y is largest")
    } else {
        console.log("z is largest")
    }
}

// Write a program that uses a switch case to determine the day of the week based on the number and log the day to the console
var day;
switch(new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;    
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
console.log(new Date().getDay())
console.log(day)

// Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the result

function assignGrade(score) {
    let grade;
    
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 0 && score < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';
            break;
    }
    
    console.log(`Score: ${score}, Grade: ${grade}`);
}

// Example usage
assignGrade(95); // Score: 95, Grade: A
assignGrade(85); // Score: 85, Grade: B
assignGrade(75); // Score: 75, Grade: C
assignGrade(65); // Score: 65, Grade: D
assignGrade(55); // Score: 55, Grade: F
assignGrade(-5); // Score: -5, Grade


// Write a program that uses the ternary opreator to check if a number is even or odd

const num = 4

var result = (num%2 == 0) ? 'even' : 'odd';
console.log(result)

// check if the year is leap year or not a leap year

var year = 2025
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log('leap year')
} else {
    console.log('not a leap year')
}

// Day 5 completed successfully