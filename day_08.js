// Activity 1: Template Literals
// Task 1
let name = "Aman Singh";
let age = 20;
let string = `Hello! my name is ${name} and I am ${age} years old.`;
console.log(string);

// Task 2
let text = 
`The quick
brown fox
jumps over
the lazy dog.`
console.log(text);

// Activity 2: Destructuring
// Task 3
const [first, second] = [69, 96];
console.log(`First element: ${first}, Second element: ${second}`);

// Task 4
const {title, author} = {
    title: "The Subtle Art of Not Giving a Fuck",
    author: "Mark Manson",
    year: "2016"
};
console.log(`The title of the book is: ${title}`);
console.log(`The author of the book is: ${author}`);

// Activity 3: Spread and Rest Operators
// Task 5
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const newArr = [...arr1, ...arr2];
console.log(newArr);

// Task 6
const sum = (...args) => {
    let sumOfElement = args.reduce((sum, element) => sum + element, 0)
    return sumOfElement
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Activity 4: Default Parameters
// Task 7
const product = (num1, num2 = 1) => num1 * num2
console.log(product(100));

// Activity 5: Enhanched Object Literals
// Task 8
const person = {
    name: "Aman Singh",
    age: 19,
    greet() {
        return `Hello! I'm ${this.name} and I'm ${this.age} years old.`
    },
    birthday() {
        this.age++
        return `Happy Birthday to me! Now I'm ${this.age} years old.`
    }
};
console.log(person);
console.log(person.greet());
console.log(person.birthday());

// Task 9
const key1 = "name";
const key2 = "age";
const key3 = "occupation";
const value1 = "Aman Singh";
const value2 = 20;
const value3 = "Buisnessman";
const nicePerson = {
    [key1]: value1,
    [key2]: value2,
    [key3]: value3,
};
console.log(nicePerson);