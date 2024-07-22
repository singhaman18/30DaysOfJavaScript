// Activity 1: Selecting and Manipulating Elements
// Task 1
document.getElementById("heading").innerText = "Changing the text by selecting ID."

// Task 2
document.getElementsByClassName("first_heading")[0].style.backgroundColor = "blue"

// Activity 2: Creating and Appending Elements
// Task 3
let div = document.createElement("div")
let heading = document.createElement("h")

let textNodeThree = document.createTextNode("Hello! How are you?")
heading.append(textNodeThree)
div.append(heading)
document.body.append(div)

// Task 4
let li = document.createElement("li")
li.textContent = "JavaScript"
document.querySelector("ul").appendChild(li)

// Activity 3: Removing Elements
// Task 5
const headings = document.getElementsByClassName("headings")[0]
headings.remove()

// Task 6
const lastSubHeading = document.querySelector(".sub-headings")
lastSubHeading.lastElementChild.remove()

// Activity 4: Modifying Attributes and Classes
// Task 7
let img = document.querySelector("img")
img.setAttribute("src","https://images.pexels.com/photos/14092389/pexels-photo-14092389.png?auto=compress&cs=tinysrgb&w=600&lazy=load")

// Task 8
let para = document.getElementsByClassName("para")
para[0].setAttribute('style', 'color: red;background-color: pink; font-size: 40px; border-radius: 15px')
para[0].setAttribute('style', " ")

// Activity 5: Event Handling
// Task 9
let paraChange = document.querySelectorAll('p')[0]

function changePara() {
    // M1:-
    // paraChange.innerText = "This paragraph changed due to the clicking of the button."
    // M2:-
    let textNode = document.createTextNode("This paragraph changed due to the clicking of the button by the textNode method.")
    paraChange.innerText = ""
    paraChange.append(textNode)
    console.log("Change of para successfull");
}

// Task 10
let changeBorder = document.querySelector("#changeBorder")

changeBorder.addEventListener('mouseover', () => {
    changeBorder.style.border = "15px solid red"
})