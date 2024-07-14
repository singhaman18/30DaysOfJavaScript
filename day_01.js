// Activity 1: Variable Declaration
// Task 1
var number = 10;
console.log(number)

// Task 2
let string = "JavaScript";
console.log(string)

// Activity 2: Constant Declaration
// Task 3
const isStudent = true;
console.log(isStudent)

// Activity 3: Data Types
// Task 4
const a = 50;
const b = "Aman singh";
const c = false;
const d = ["HTML", "CSS", "JAVASCRIPT"];
const e = {
    name: "Aman Singh",
    age: 20,
}
// In JS arrays are considered a special type of object.
console.table(Array.isArray(d));       // To specifically checking if a variable is an array(Will give output as : True/False).
console.table([typeof a, typeof b, typeof c, typeof d, typeof e])

// Activity 4: Reassigning variables
// Task 5
let username = "Aman Singh";
console.log(`This is the initial username: ${username}`);
username = "Aman Kumar";
console.log(`This is the reassigned username: ${username}`)

// Activity 5: Reassigning constants
// Task 6
const temp = 32;
temp = 35;
console.log(temp);                  // TypeError: Assignment to constant variable.

// Feature Request 1: Variable Types
const A = 69;
const B = "Noiceeeee";
const C = true;
const D = [1, 2, 3, 4, 5];
const E = {name: "Aman Singh", age: 20, city: "Muzaffarpur", state: "Bihar"}
console.log(typeof(A), A)
console.log(typeof(B), B)
console.log(typeof(C), C)
console.log(typeof(D), D)
console.log(typeof(E), E)

// Feature Request 2: Reassignment
let initialValue = 78;
console.log(`This is the initial value: ${initialValue}`);
initialValue = 90;
console.log(`This is the reassigned value: ${initialValue}`);           // No error: Can change the value of variable in let.

const initialVal = 38;
console.log(`This is the initial value: ${initialVal}`);
initialVal = 40;
console.log(`This is the reassigned value: ${initialVal}`);             // TypeError: Assignment to constant variable.
