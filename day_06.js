// Activity 1: Array Creation and Access
// Task 1
let arrNum = [1, 2, 3, 4, 5];
console.log(arrNum);

// Task 2
console.log(`Element at index first is ${arrNum[0]}`);
console.log(`Element at index last is ${arrNum[4]}`);

// Activity 2: Array Methods (Basics)
// Task 3
arrNum.push(6);
console.log(`Array after push: ${arrNum}`);

// Task 4
arrNum.pop();
console.log(`Array after pop: ${arrNum}`);

// Task 5
arrNum.shift();
console.log(`Array after shift: ${arrNum}`);

// Task 6
arrNum.unshift(1);
console.log(`Array after unshift: ${arrNum}`);

// Activity 3: Array Methods (Intermediate)
// Task 7
let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let result = newArr.map((num) => num * 2);
console.log(`Double of all the elements in the array is: ${result}`);

// Task 8
let evenNum = newArr.filter((even) => even % 2 === 0);
console.log(`Array has even numbers: ${evenNum}`);
let oddNum = newArr.filter((odd) => odd % 2 !== 0);
console.log(`Array has odd numbers: ${oddNum}`);

// Task 9
let sumNum = newArr.reduce((acc, currVal) => {
    return acc + currVal;
}, 0)
console.log(`Sum of all the elments in the Array is: ${sumNum}`);

// Activity 4: Array Iteration
// Task 10
for (let i = 0; i < arrNum.length; i++) {
    console.log(`Element at index ${i}: ${arrNum[i]}`);
};

// Task 11
arrNum.forEach((elments, i) => console.log(`Element at index ${i}: ${elments}`))

// Activity 5: Multi-dimensional Arrays
// Task 12
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('matrix: ', matrix);

// Task 13
let specificElement = matrix[1][2];
console.log(`Element at row 1, column 2: ${specificElement}`);