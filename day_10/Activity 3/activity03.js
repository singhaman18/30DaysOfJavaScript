// Activity 3: Keyboard events
// TAsk 5
document.querySelector("input").addEventListener('keydown', function (event) {
    console.log(event.key);
});

document.querySelector("input").addEventListener('keyup', () => {
    const value = document.querySelector("input").value
    console.log(value);
});