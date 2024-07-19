// Activity 1: Object Creation and Access
// Task 1
const book1 = {
    title: "The Subtle Art Of Not Giving A Fuck",
    author: "Mark Manson",
    year: "2016"
};
console.log(book1);

// Task 2
console.log(book1.title);
console.log(book1.author);
console.log(book1.year);

// Activity 2: Object Methods
// Task 3
const book2 = {
    title: "Everything Is Fucked",
    author: "Mark Manson",
    year: "2019",
    getBookInfo() {
        return `${this.title} by ${this.author}`;
    }
};
console.log(book2.getBookInfo());

// Task 4
const book3 = {
    title: "Monsoon",
    author: "Abhay K",
    year: "2023",
    updateYear(newYear) {
        this.year = newYear;
    }
};
console.log(`Previous year ${book3.year}`);
book3.updateYear(2024);
console.log(`Updated year ${book3.year}`);

// Activity 3: Nested Objects
// Task 5
const library = {
    name: "The books",
    books: [
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            year: "1813"
        },
        {
            title: "Moby-Dick",
            author: "Herman Melville",
            year: "1851"
        },
        {
            title: "War and Peace",
            author: "Tolstoy",
            year: "1869"
        },
        {
            title: "The Red and the Black",
            author: "Stendhal",
            year: "1830"
        }
    ]
};
console.log(library);

// Task 6
console.log(library.name);
console.log(library.books[0].title);
console.log(library.books[1].title);
console.log(library.books[2].title);
console.log(library.books[3].title);

// Activity 4: This Keyword
// Task 7
const book4 = {
    title: "Wuthering Heights",
    author: "Emily Bronte",
    year: "1847",
    getBookDetails() {
        return `${this.title} by ${this.author} in ${this.year}`
    }
};
console.log(book4.getBookDetails());

// Activity 5: Object Iteration
// Task 8
for (let key in book4) {
    if (book4.hasOwnProperty(key)) {
        console.log(`${key}: ${book4[key]}`);
    }
}

// Task 9
console.log("Keys:", Object.keys(book4));
console.log("Values:", Object.values(book4));