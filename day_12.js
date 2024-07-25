// Activity 1: Basic Error Handling with try-catch
// Task 1
// function checkerror() {
//     const promise = new Promise((resolve, reject) => {
//         reject ("This is the rejected message.");
//     });
//     try {
//         promise.then((message) => console.log(message))
//     } catch(error) {
//         console.log(error);
//     }
// }
// checkerror()

// Task 2
// function divideNum(numerator, denominator) {
//     try {
//         if (denominator !== 0) {
//             console.log(numerator / denominator);
//         } else {
//             throw new Error("Denominator can not be zero");
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// divideNum(100, 6)
// divideNum(85, 0)

// Activity 2: Finally Block
// Task 3
// function performTask() {
//     try {
//         console.log("This message is insise a try block.");
//         throw new Error("Error")
//     } catch (error) {
//         console.log(error.message);
//     } finally {
//         console.log("This message is inside a finally block.");
//     }
// }

// console.log(performTask());

// Activity 3: Custom Error Objects
// Task 4
// function isEven(num) {
//     if (num === 0) {
//         throw new Error ("Input must not be zero.")
//     }
//     try {
//         if (num % 2 === 0) {
//             console.log("Number is even");
//         } else {
//             console.log("Number is odd");
//         }
//     } catch (error) {
//         console.log(`${error.message}`);
//     }
// }
// isEven(85)
// isEven(42)
// isEven(0)

// Task 5
// function checkString(str) {
//     if (str === "") {
//         throw new Error ("String can not be empty.");
//     }
//     try {
//         console.log(str.length);
//     } catch (error) {
//         console.log(`${error.message}`);
//     }
// }

// checkString("Hello! there")
// checkString("")

// Activity 4: Error Handling in Promise
// Task 6
function checkPromise() {
    return new Promise((resolve, reject) => {
        const randomNum = Math.random();
        setTimeout(() => {
            if (randomNum > 0.5) {
            resolve ("Promise resolved sucessfully!")
            } else {
                reject ("Promis rejected sucessfully!")
            }
        }, 2000);
    });
};

checkPromise()
.then((message) => console.log(message))
.catch((error) => console.log(error));

// Task 7
async function randomPromise() {
    const promise = new Promise((resolve, reject) => {
        const randomNumber = Math.random();

        setTimeout(() => {
            if (randomNumber > 0.5) {
                resolve(randomNumber)
            } else {
                reject(new Error("Promise rejected."))
            }
        }, 1000);
    })
    try {
        const check = await promise;
        console.log("Promise resoved: ", check);
    } catch (error) {
        console.log("Promise rejected: ", error);
    }
}
randomPromise();

// Activity 5: Graceful Error Handling in Fetch
// Task 8
fetch('https://background-remove')
.then((resolve) => console.log(resolve.json()))
.catch((error) => console.log(`${error.message}`));

// Task 9
async function InvalidFetchData() {
    try {
        const response = await fetch("https://background-remove")
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
InvalidFetchData()