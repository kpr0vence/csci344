const ALL_LINKS = [ 
"https://docs.google.com/document/d/1-_9TBU8RBABBoMpzIAYKxfl8vt6lmge0w8E78Y9iDOI/edit?usp=sharing", 
 "homework/hw02/index.html",
"quizzes/quiz01/index.html", 
"tutorials/tutorial01/index.html", 
"tutorials/tutorial02/tutorial02dinnerplate.png",
"tutorials/tutorial02/02-box-model/index.html", 
"tutorials/tutorial02/03-fonts/index.html","tutorials/tutorial02/04-flex/index.html", 
"tutorials/tutorial02/05-navbar/index.html", 
"tutorials/tutorial02/06-grid/index.html", 
"tutorials/tutorial02/07-tacotemple/index.html", 
"tutorials/tutorial03/index.html", 
"tutorials/tutorial04/index.html", 
"tutorials/tutorial05/01-theme-switcher/index.html", 
"tutorials/tutorial05/02-hamburger-menu/index.html", 
"tutorials/tutorial05/03-carousel/index.html",
"lectures/lecture04/index.html", 
"lectures/lecture05/my_website/home/index.html", 
"lectures/intro-css-gallery-flex/index.html", 
"lectures/lecture07/01-media-query/mq.html", 
"lectures/lecture07/02-flexbox/index.html", 
"lectures/lecture07/03-css-grid/layout.html", 
"https://youtu.be/dQw4w9WgXcQ?si=ALcRW_TBzE8ld5WE",
"quizzes/quiz01/index.html"
];

let options = ALL_LINKS;

// function filterOptions(type) {
//     console.log("Options was " +options);
//     //use filter to filter the options to only links that include the phrase in type
//     //reassign that to options
//     options = allLinks.filter(link => (type) = link.includes(type));
//     console.log("Options now equals " +options);
// }



function changeOptions(type) {
    if (type == "reset") {
        changeOptionsReset();
    } else {
        changeOptionsStandard(type);
    }
}

function changeOptionsStandard(type) {
    options = ALL_LINKS.filter((name) => name.includes(type));
    if (type == "homework") {
        options.push("https://docs.google.com/document/d/1-_9TBU8RBABBoMpzIAYKxfl8vt6lmge0w8E78Y9iDOI/edit?usp=sharing");

    }
    console.log("Options now equals: " +options);

    //Also change the text dispayed in that one bit
    let phrase = document.querySelector("#suprise-me-prompt");
    console.log("The phrase was \"" +phrase.innerHTML+ "\"");

    phrase.innerHTML = `Go to any random ${type}`;
    console.log("The phrase is now \"" +phrase.innerHTML+ "\"");
}

function changeOptionsReset() {
    options = ALL_LINKS;
    console.log("This was the call to reset, options now equals: " +options);

    let phrase = document.querySelector("#suprise-me-prompt");
    console.log("The phrase was \"" +phrase.innerHTML+ "\"");

    phrase.innerHTML = `Go to any random assignment`;
    console.log("The phrase is now \"" +phrase.innerHTML+ "\"");
}

function goToRandomAssignment() {
    let max = options.length - 1;
    let min = 0;
    let ranIndex = Math.floor(Math.random() * (max-min+1) + min);

    console.log("Loading the window at the link: " + options[ranIndex]);

    //addBackButton(options[ranIndex]);

    window.open(options[ranIndex], window.name);    //It's not opening in the same window :(
}

function addBackButton(link) {
    //Eventually this function should inject HTML and CSS into the loading window that adds the back button
}

let supriseMe = document.querySelector(".icon-wrapper");

supriseMe.addEventListener('click', goToRandomAssignment);


function changeClass(type) {
    let body = document.querySelector("body");
    body.className = type;

}

