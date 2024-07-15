// Activity 1: If-Else Statements
// Task 1
let num1 = 48;
if (num1 > 0) {
    console.log("Given number is positive.");
} else if (num1 < 0) {
    console.log("Given number is negative.");
} else {
    console.log("Given number is zero.");
}

// Task 2
let age = 21;
if (age < 18) {
    console.log("You are not eligible for voting.");
} else {
    console.log("You are eligible for voting.");
}

// Activity 2: Nested If-Else Statements
// Task 3
let x = 49;
let y = 64;
let z = 70;
if (x > y) {
    if (x > z) {
        console.log(`${x} is largest.`);
    }
} else {
    if (y > z) {
        console.log(`${y} is largest.`);
    } else {
        console.log(`${z} is largest.`);
    }
}

// Activity 3: Switch Case
// Task 4
let day = 1;
switch (day) {
    case 1: day == 1;
        console.log("Today is Monday");
        break;
    case 2: day == 2;
        console.log("Today is Tuesday");
        break;
    case 3: day == 3;
        console.log("Today is Wednesday");
        break;
    case 4: day == 4;
        console.log("Today is Thursday");
        break;
    case 5: day == 5;
        console.log("Today is Friday");
        break;
    case 6: day == 6;
        console.log("Today is Saturday");
        break;
    case 7: day == 7;
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// Task 5
let score = 54;
switch (true) {
    case score >= 91:
        console.log("Your grade is A+.");
        break;
    case score >= 81:
        console.log("Your grade is A.");
        break;
    case score >= 71:
        console.log("Your grade is B.");
        break;
    case score >= 61:
        console.log("Your grade is C.");
        break;
    case score >= 51:
        console.log("Your grade is D.");
        break;
    case score >= 41:
        console.log("Your grade is E.");
        break;
    case score >= 33:
        console.log("Your grade is F");
    default:
        console.log("You failed.");
        break;
}

// Activity 4: Conditional (Ternary) Operator
// Task 6
let num2 = 47;
const result = (num2 % 2 == 0) ? "Even" : "Odd";
console.log(`Number ${num2} is ${result}.`);

// Activity 5: Combining Conditions
// Task 7
let year = 2024;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(`Year ${year} is leap year.`);
        } else {
            console.log(`Year ${year} is not leap year.`)
        }
    } else if (year % 400 !== 0) {
        console.log(`Year ${year} is leap year.`)
    } else {
        console.log(`Year ${year} is not leap year.`)
    }
} else {
    console.log(`Year ${year} is not leap year.`)
}