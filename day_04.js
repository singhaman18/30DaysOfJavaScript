// Activity 1: For loop
// Task 1
for (let i = 1; i < 11; i++) {
    console.log(i);
}

// Task 2
for (let j = 1; j <= 10; j++) {
    console.log(`5 * ${j} = ${5 * j}`);
}

// Activity 2: While Loop
// Task 3
const number = 10;
let sum = 0;
i = 1;
while (i <= number) {
    sum += i;
    i++;
}
console.log("The sum of natural numbers 1 to 10:", sum);

// Task 4
let k = 10;
while (k > 0) {
    console.log(k);
    k--;
}

// Activity 3: Do...While Loop
// Task 5
let l = 0;
do {
    l++;
    console.log(l);
} while (l < 5);

// Task 6
let nFactorial = 5;
let factorial = 1;
do {
    factorial = factorial * nFactorial;
    nFactorial--;
} while (nFactorial >= 1);
console.log(`Factorial of 5 is ${factorial}`);

// Activity 4: Nested Loops
// Task 7
let symbol = ``;
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        symbol += `*`;
    }
    console.log(symbol);
    symbol = ``;
}

// Activity 5: Loop Control Statements
// Task 8
for (let a = 1; a <= 10; a++) {
    if (a === 5) continue;
    console.log(a);
}

// Task 9
for (let b = 1; b <= 10; b++) {
    if (b === 7) break;
    console.log(b);
}