// Activity 5: Event Delegation
// Task 9 and 10
const dynamicList = document.getElementById("dynamicList");
const addItemButton = document.getElementById("addItemBtn");

document.getElementById("myList").addEventListener('click', function (event) {
    if (event.target && event.target.tagName === "LI") {
        console.log('Clicked item content:', event.target.textContent);
    }
});
function addNewItem() {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${dynamicList.children.length + 1}`;
    dynamicList.appendChild(newItem)
};

dynamicList.addEventListener('click', function (event) {
    if (event.target && event.target.tagName === "LI") {
        console.log('Clicked item content:', `${event.target.textContent}`);
    }
});

addItemButton.addEventListener('click', addNewItem)