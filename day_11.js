// Activity 1: Understanding Promises
// Task 1
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("This message will be shown after 2000ms")
    }, 2000);
});

promise1.then((message) => {
    console.log(message);
});

// Task 2
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject ("This message will be rejected in 2000ms")
    }, 2000);
});

promise2.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});

// Activity 2: Chaining Promises
// Task 3
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ("This is the details of first user from server1.")
    }, 3000);
});

promise3
.then((message) => {
    console.log(message);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve ("This is the details of first user from server2.")
        }, 3500);
    });
})
.then((message) => {
    console.log(message);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve ("This is the details of first user from server3.")
        }, 4000);
    });
})
.then((message) => {
    console.log(message);
})
.catch((error) => console.log(error))

// Activity 3: Using Async/Await
// Task 4
const promise4 = new Promise((resolve) => {
    setTimeout(() => {
        resolve ("This is the resolved message of task 4.")
    }, 1500);
});

async function newMessage() {
    const message = await promise4;
    console.log(message);
}
newMessage();

// Task 5
async function myNewFunction() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject ("This is the rejected message of task 5.")
        }, 5000);
    });
    try {
        const message = await promise;
        console.log(message);
    } catch(error) {
        console.log(error);
    }
}
myNewFunction()

// Activity 4: Fetching Data from an API
// Task 6
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => response.json())
.then((data) => console.log(data))
.then((error) => console.log(error))

// Task 7
async function responseFunction() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}
responseFunction();

// Activity 5: Concurrent Promise
// TAsk 8
const promise5 = new Promise((resolve, reject) => {
    resolve ("This is the first resolved message of task 8.")
});

const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ("This is the second resolved mesage of task 8.")
    }, 1000);
});

const promise7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ("This is the third resolved mesage of task 8.")
    }, 1500);
});

const promise8 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ("This is the fourth resolved mesage of task 8.")
    }, 2000);
});

Promise.all([promise5, promise6, promise7, promise8])
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});

// Task 9
const promise9 = new Promise((resolve, reject) => {
    resolve ("Myself Aman Singh.")
});

const promise10 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ("I am 20 years old.")
    }, 1000);
});

const promise11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ("I am a coder and loves coding.")
    }, 1500);
});

Promise.race([promise9, promise10, promise11])
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});