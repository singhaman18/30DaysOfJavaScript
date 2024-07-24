// Activity 4: Form Events
// Task 7
document.getElementById("MyForm").addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
});

// Task 8
document.getElementById("mySelect").addEventListener('change', function() {
    const selectedValue = this.value;
    document.getElementById('selectedValue').textContent = `Selected value: ${selectedValue}`;
});