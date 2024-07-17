// Activity 1: Function Declaration
// Task 1
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return (`${number} is Even.`)
    }
    else {
        return (`${number} is Odd.`)
    }
};
console.log(isEvenOrOdd(56));

// Task 2
function squareNum(num) {
    return (`Square of ${num} is: ${num * num}`)
};
console.log(squareNum(25));

// Activity 2: Function Expression
// Task 3
let maxNum = function(num1, num2) {
    if (num1 > num2) {
        return (`${num1} is greater than ${num2}`)
    } else {
        return (`${num2} is greater than ${num1}`)
    }
};
console.log(maxNum(14, 45));

// Task 4
let str = function(str1, str2) {
    return (`Hello I am ${str1 + str2}.`)
};
console.log(str("Aman ", "Singh"));

// Activity 3: Arrow Functions
// Task 5
let mySum = (a, b) => `The sum of ${a} and ${b} is: ${a + b}`;
console.log(mySum(45, 55));

// Task 6
let mystr = "JavaScript";
char = "i";
const findChar = (mystr, char) => {
    return mystr.includes(char);
}
console.log(`The string ${mystr} contains ${char}? ${findChar(mystr, char)}`);

// Activity 4: Functions Parameters and Default Values
// Task 7
let myProduct = (x, y = 25) => `The product of ${x} and ${y} is: ${x * y}`;
console.log(myProduct(58));

// Task 8
let greetMe = (name, age = 20) => `Hello ${name}. You are ${age} years old.`;
console.log(greetMe("Aman"));

// Activity 5: Higher-Order Functions
// Task 9
function lowFunc(numTimes) {
    return `Hello Aman Singh! x ${numTimes}`;
}

function highFunc(func, numTimes) {
    for (i = 1; i <= numTimes; i++) {
        console.log(func(i));
    }
}

highFunc(lowFunc, 5);

// Task 10
const callBackFunc1 = (val) => {
    return val ** 2;
}

const callBackFunc2 = (callFunc) => {
    return (callFunc **2)*100;
}

const higherOrderFunc = (func1, func2, val) => {
    return func2(func1(val));
}
console.log(higherOrderFunc(callBackFunc1, callBackFunc2, 10));