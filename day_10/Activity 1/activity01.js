// Activity 1: Basic Event Handling
// Task 1
document.querySelector("button").addEventListener('click', () => {
    document.querySelector("p").innerText = "This is also a simple paragraph but after clicking the button."
});

// Task 2
document.querySelector("img").addEventListener('dblclick', () => {
    document.querySelector("img").style.visibility = "hidden"
});