const books = [
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, cover: 'photo-assets/orangefit.JPG' },
    { title: 'Dune', author: 'Frank Herbert', year: 1965, cover: 'photo-assets/darksouls.JPG' },
    { title: 'Foundation', author: 'Isaac Asimov', year: 1951, cover: 'photo-assets/bow.jpg' }
];


// 1.Select an element with the ID “main-header” and change its text to “Updated Header.”
let mainHead = document.querySelector("#main-header");
mainHead.innerHTML = "Updated Header";

//2. Select the first <li> element in an unordered list.
let firstPoint = document.getElementsByTagName("li")[0];
console.log("Selected the element: " +firstPoint);
firstPoint.style.color = "hotpink";

//3. Select all elements with the class “highlight” and change their background color to yellow.
let highs = document.querySelectorAll(".highlight");
highs.forEach((elem) => {
    elem.style.backgroundColor = "yellow";
});

//4. Select all paragraph elements and add the class “text-content” to them.
let pTags = document.getElementsByTagName("p");
console.log(pTags);
for (elem of pTags) {
    console.log("Adding\".text-content\" to " +elem);
    elem.classList.add("text-content");
}

//5. Select all images on the page and log their src attributes.
let imgs = document.getElementsByTagName("img");
for (elem of imgs){
      console.log("src = " +elem.src);
}

//PART 2
//1. Create a new <div> element and add it to the end of the body
let divSnippet = `<div>This is a new Div</div>`
document.querySelector("body").insertAdjacentHTML("beforeend", divSnippet);

//2. Create a button element with the text “Click Me” and insert it before an element with ID “target”
let buttonSnippet = `<button>Click Me</button>`;
document.querySelector("#target").insertAdjacentHTML("beforebegin", buttonSnippet);

//3. Create an unordered list with 3 list items (your favorite foods) and append it to an element with ID “menu”
let listSnippet = `
    <ul>My Favorite Foods
        <li>Filet Mignon</li>
        <li>Strawberry-Chocolate Chip Yogurt Cup</li>
        <li>French Fries</li>
    </ul>`;
document.querySelector("#menu").insertAdjacentHTML("afterend", listSnippet);


//PART 3
//1. Add a click event listener to a button that toggles a “dark-mode” class on the body
function toggleDarkMode() {
    let mode = document.querySelector("body").classList;
    if (mode.contains("dark-mode")) {
        mode.remove("dark-mode");
        console.log("Removed dark mode");
    } else {
        mode.add("dark-mode");
        console.log("Turned dark mode on")
    }
    console.log(mode)
}

let darkButton = document.querySelector("#toggle-dark");
console.log(darkButton.innerHTML);
darkButton.addEventListener("click", toggleDarkMode);

//2. Add an image to the page body every time the user clicks a button.
function insertPhoto(toAdd) {
    let snippet = `<img src=${toAdd} alt="">`;

    document.querySelector("body").insertAdjacentHTML("beforeend", snippet);
}

//3. Create a button that, when clicked, changes the background color of the page to a random color.
function changeColor() {
    //get a random color, by generating a random combination of numbers and letters?
    //Or pick an index of a pre-built array of color names
    let builder = "#";
    for(let i = 0; i < 6; i++) {
        builder += getRandomCharacter();
    }

    console.log("Generated the hex code " +builder);
    return builder
    
}

function getRandomCharacter() {
    const characters = 'abcdef0123456789';
    let toReturn = Math.floor(Math.random()*characters.length);
    toReturn = characters.charAt(toReturn);
    console.log("returning the following character: " +toReturn);
    return toReturn;
}

//Get the button and add the event listener
let myButton = document.querySelector("#change-color");
console.log("Grabbed the button with the following inner HTML \"" +myButton.innerHTML+ "\"");
myButton.addEventListener('click', () => {
    document.querySelector("body").style.backgroundColor = changeColor();
    console.log("Changing body's color.");
});


//PART 4
//1. Create a todo list where users can add and remove items
const addItem = (ev) => {
    ev.preventDefault(); // overrides default button action  
    // ^^ Used for forms to prevent them from sending the form to some server, 
    // And instead let us do what we want to

    //Generate the html,
    //Inject it
    newItem = document.querySelector("#item-input").value;  
    let snippet = `<li class = "added-item">${newItem}</li>`;
    console.log("The HTML to be added is "+snippet);

    let whereAt = document.querySelector("#todo-list");
    whereAt.insertAdjacentHTML("beforeend", snippet);
};

const removeItem = (ev) => {
    ev.preventDefault();

    //get the input
    let input = document.querySelector("#item-input").value;

    //get the list of all li items in in the todo-list
    let items = document.querySelectorAll(".added-item");
    console.log("Looking for " +input+ " in the following items: ");
    items.forEach((item) => console.log("item = " +item.innerHTML));

    //see if it matches any one of them (for each loop)
    for (item of items) {
        if (item.innerHTML == input) {
            console.log("A match was found! " +item.innerHTML+ " and " +input);
            item.remove();
            break;
        }
    }
}

//2. Implement a “read more” button that shows hidden text.

function toggleHidden() {
    let pTag = document.querySelector("#to-hide");
    pTag.classList.toggle("hidden");

}

document.querySelector("#read-more").addEventListener("click", toggleHidden);


//3. Show and hide a div when a button is clicked (like the hamburger menu we made in class).
function toggleSideMenu() {
    //select the right div
    let menu = document.querySelector("#side-menu");
    //change it's right attribute to 0;
    console.log("The side bar has the id of " +menu);

    let attr = menu.style.right;
    console.log(attr);
    if (attr !== '0px') {
        menu.style.right = 0;
    } else {
        console.log("It was already 0, setting it to -300px")
        menu.style.right = '-300px';
    }
}


//TOPIC 4
//1. Display Books
//Generate a book card for each book
function createCard(book) {
    let card = ` <div class = "book-card">
            <p>${book.title}</p>
            <p>${book.author}, ${book.year}</p>
            <img src="${book.cover}" alt="">
        </div>`;

    return card;
}

//Take those books and inject them into a grid div
for (book of books) {
    let card = createCard(book);
    let putAt = document.querySelector(".bookshelf");
    putAt.insertAdjacentHTML("beforeend", card);
}

