// Activity 1: Arithmetic Operators
// Task 1
let num1 = 40;
let num2 = 60;
let addnum = num1 + num2
console.log(`addition: ${addnum}`);

// Task 2
let num3 = 60;
let num4 = 40;
let subnum = num3 - num4
console.log(`subtraction: ${subnum}`);

// Task 3
let num5 = 25;
let num6 = 45;
let multiplynum = num5 * num6
console.log(`multiplication: ${multiplynum}`);

// Task 4
let num7 = 50;
let num8 = 2;
let dividenum = num7 / num8
console.log(`division: ${dividenum}`);

// Task 5
let num9 = 65;
let num10 = 4;
let modulusnum = num9 % num10
console.log(`remainder: ${modulusnum}`);

// Activity 2: Assignment Operators
// Task 6
let num11 = 35;
num11 += 5;
console.log(num11);

// Task 7
let num12 = 24;
num12 -= 6;
console.log(num12);

// Activity 3: Comparison Operators
// Task 8
let num13 = 56;
let num14 = 37;
let isGreaterThan = num13 > num14;
console.log(`Is 56 greater than 37?: ${isGreaterThan}`);

let num15 = 68;
let num16 = 97;
let isLessThan = num15 < num16;
console.log(`Is 68 less than 97?: ${isLessThan}`);

// Task 9
let num17 = 48;
let num18 = 61;
let isGreaterThanOrEqualTo = num17 >= num18;
console.log(`Is 48 greater than or equal to 61?: ${isGreaterThanOrEqualTo}`);

let num19 = 72;
let num20 = 72;
let isLessThanOrEqualTo = num19 <= num20;
console.log(`Is 72 less than or equal to 72?: ${isLessThanOrEqualTo}`);

// Task 10
let num21 = 73;
let num22 = 93;
let isEqualTo = num21 == num22;
console.log(`Is 73 equal to 93?: ${isEqualTo}`);

let num23 = 68;
let num24 = "5";
let isStrictlyEqualTo = num23 === num24;
console.log(`Is 68 strictly equal to "5"?: ${isStrictlyEqualTo}`);

// Activity 4: Logical Operators
// Task 11
let num25 = 10;
let num26 = 57;
console.log(num25 < 11 && num26 < 100);

// Task 12
let num27 = 87;
let num28 = 74;
console.log(num27 > 80 || num28 < 60);

// Task 13
let num29 = 78;
let num30 = 88;
console.log(!(num29 == num30));

// Activity 5: Ternary Operator
// Task 14
let num31 = -24
let result = num31 > 0 ? "Positive" : "Negative";
console.log(`num31 is: ${result}`);

// Feature Request 1: Arithmetic Operations
let num32 = 100;
let num33 = 48;

let add = num32 + num33;
console.log(add);

let sub = num32 - num33;
console.log(sub);

let multiply = num32 * num33;
console.log(multiply);

let divide = num32 / num33;
console.log(divide);

let rem = num32 % num33;
console.log(rem);

// Feature Request 2: Comparison and Logical operators
let num34 = 143;
let num35 = 158;

console.log(num34 > num35);
console.log(num34 < num35);

console.log(num34 >= num35);
console.log(num34 <= num35);

console.log(num34 == num35);
console.log(num34 === num35);

console.log(num34 > num35 && num34 >= num35);

console.log(num34 < num35 || num34 == num35);

console.log(!(num34 == num35));

// Feature Request 3: Ternary Operator
let num36 = 87;
let PosOrNeg = num36 > 0 ? "Positive" : "Negative";
console.log(`Given number is: ${PosOrNeg}`);