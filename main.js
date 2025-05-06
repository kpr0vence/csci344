
let options;


//Add links in chronological order?

// ************************
// Assignmentes Data List
// ************************
const assignments = [
    {
        Title: "Homework 01",
        Subtitle: "Photo AppCurrent CS Issues",
        Links: [
            "https://docs.google.com/document/d/1-_9TBU8RBABBoMpzIAYKxfl8vt6lmge0w8E78Y9iDOI/edit?usp=sharing", 
        ],
        Description: "We were asked to research a current computer science-related issue and write our thoughts on it. I chose AI art \"witch hunting\" and how it effects artists and peoples' preception of art."
    },
    {
        Title: "Homework 02",
        Subtitle: "Photo App",
        Links: [
            "homework/hw02/index.html", 
        ],
        Description: "This homework was made in collaboration with a classmate, Caleb Knapp. We implementad a \"photo app\" according to the given specifications."
    },
    {
        Title: "Tutorial 01",
        Subtitle: "HTML Exercises",
        Links: [
            "tutorials/tutorial01/index.html"
        ],
        Description: "Contains 3 pages: The image page, which hasn't seen any love, the music page, which has a design and songs I actually like, and the videos page, which is Minecraft Parkour Civilization themed."
    },
    {
        Title: "Tutorial 02",
        Subtitle: "CSS Exercises",
        Links: [
            "tutorials/tutorial02/tutorial02dinnerplate.png",
            "tutorials/tutorial02/02-box-model/index.html",
            "tutorials/tutorial02/03-fonts/index.html",
            "tutorials/tutorial02/04-flex/index.html",
            "tutorials/tutorial02/05-navbar/index.html",
            "tutorials/tutorial02/06-grid/index.html",
            "tutorials/tutorial02/07-tacotemple/index.html"
        ],
        Description: "More CSS practice."
    },
    {
        Title: "Tutorial 03",
        Subtitle: "Introduction to Tailwind",
        Links: [
        "tutorials/tutorial03/index.html"
        ],
        Description: "Through this lecture we were introduced to Tailwind and how to use it."
    },
    {
        Title: "Tutoiral 04",
        Subtitle: "Introduction to Javascript",
        Links: [
            "tutorials/tutorial04/index.html"
        ],
        Description: " We created our first .js file and used wrote functions which used the circle, fille, square functions and more to write shapes to the screen when it was loaded. Finally I utilized Math.Random to create a stary night scene. Remove the call to staryNight() to see the rest of the functions at work."
    },
    {
        Title: "Tutorial 05",
        Subtitle: "Event Handlers",
        Links: [
            "tutorials/tutorial05/01-theme-switcher/index.html",
            "tutorials/tutorial05/02-hamburger-menu/index.html",
            "tutorials/tutorial05/03-carousel/index.html",
        ],
        Description: "Practice with evnet handlers, mostly on buttons."
    },
    {
        Title: "Tutorial 06",
        Subtitle: "JavaScript: Higher Order Iteration Functions",
        Links: [
            "tutorials/tutorial06/index.html"
        ],
        Description: " We used javascript to get course information from a file, then manipulate it by filtering accordning to user input. Finally we dynaically built html snippets to display the desired subset of courses and then inserted it into the html page. .filter, .includes, and .forEach were used to practice using Higher Order Functions."
    },
    {
        Title: "Lecture 04",
        Subtitle: "Write your First HTML Page",
        Links: [
            "lectures/lecture04/index.html",
        ],
        Description: " Contains 2 pages: One with images of my DnD characters and a list that quickly describes them, and the other which just holds a few links to the first page."
    },
    {
        Title: "Lecture 05",
        Subtitle: "Linking",
        Links: [
            "lectures/lecture05/my_website/home/index.html",
        ],
        Description: "To be honest, I did not follow along for this in class practice very well. There is very little in this page."
    },
    {
        Title: "Lecture 06",
        Subtitle: "Intro to CSS",
        Links: [
            "lectures/intro-css-gallery-flex/index.html",
        ],
        Description: "This was the first time we worked with CSS. Contains pictures of my Destiny 2 character, Quinn"
    },
    {
        Title: "Lecture 07",
        Subtitle: "CSS Layout Exercises",
        Links: [
            "lectures/lecture07/01-media-query/mq.html",
            "lectures/lecture07/02-flexbox/index.html",
            "lectures/lecture07/03-css-grid/layout.html"
        ],
        Description: "We practiced CSS Layout, using both flex and grid techniques"
    },
    {
        Title: "Quiz 01",
        Subtitle: "",
        Links: [
            "quizzes/quiz01/index.html"
        ],
        Description: "Our first quiz included modifying the following homepage according to the provided specifications, as well as a written portion, which asked the questions \"Where is the internet?\" \"Who owns the internet?\" and \"Who made the internet?\"."
    },
    {
        Title: "Quiz 02a",
        Subtitle: "",
        Links: [
            "quizzes/quiz02a/task01/index.html",
            "quizzes/quiz02a/task02/index.html",
            "quizzes/quiz02a/task03/index.html",
            "quizzes/quiz02a/task04-extra-credit/index.html"
        ],
        Description: "Our second quiz focused on basic JavaScript programming, event handling, DOM manipulation, and data navigation."
    },
    {
        Title: "Homework 03",
        Subtitle: "Photo App Pt. 2",
        Links: [
            "homework/hw03/index.html"
        ],
        Description: "This homework is a work in progress, and currenlty only contains the progress necessary for Tutorial 07. I worked on this assignment in collaboration with Caleb Knapp, but then also watched the videos and walked through the assignment myself as well."
    },
    {
        Title: "Quiz 02b",
        Subtitle: "",
        Links: [
            "quizzes/quiz02b/task01/index.html",
            "quizzes/quiz02a/task02/index.html"
        ],
        Description: "Our third quiz focused on higher order javascript functions and fetch requests."
    },
    {
        Title: "Tutorial 07",
        Subtitle: "Begin Homework 03",
        Links: [
            "homework/hw03/index.html"
        ],
        Description: "This is the begining portion of the code for homework 03. I worked on this assignment in collaboration with Caleb Knapp, but then also watched the videos and walked through the assignment myself as well. We worked with the preexisting HTML and CSS which was set up using tailwind, and created javascript that made the fetch requests necessary to generate each of the posts associated with the logged in user and add and remove likes and bookmarks upon clicking the associated element. "
    },
    {
        Title: "Tutorial 08",
        Subtitle: "React, Custom & Third Party Components",
        Links: [
            "tutorials/tutorial08/dist/index.html"
        ],
        Description: "Through this tutorial we learned how to use basic 3rd party react components, specifically components from Ant Design. I also practiced using States to change the color of the carousel when using the color picker."
    },
    {
        Title: "Lecture 10",
        Subtitle: "DOM Manipulation and Screen Drawing",
        Links: [
            "lectures/lecture10/01-warmup/index.html",
            "lectures/lecture10/02-style-property-demo/index.html",
            "lectures/lecture10/03-attribute-demo/index.html",
        ],
        Description: ""
    },
    {
        Title: "Lecture 11",
        Subtitle: "Using Object Arrays and Injecting HTML",
        Links: [
            "lectures/lecture11/01-photo-gallery/index.html",
            "lectures/lecture11/02-create-cards-from-list-of-objects/index.html",
        ],
        Description: ""
    },
    {
        Title: "Lecture 14",
        Subtitle: "React, Lifting Up Functions",
        Links: [
            "lectures/react-lifting-up-practice.html"
        ],
        Description: "This was completed independet of any lecture, but through one of the assigned readings. It walked me through how to lift a function our of a child react element so that it could affect two children elements on the same level of the React Tree."
    },
    {
        Title: "Tutorial 09",
        Subtitle: "Intro to Flask",
        Links: [

        ],
        Description: "This tutorial focused on familiarizing ourselves with flask. To get the most out of this assignment, I did complete the extra credit task. Unfortunately, GitHub is not able to display the code that we did for this tutorial. The code is available to inspect on this sites GitHub repository."
    },
    {
        Title: "Homework 04",
        Subtitle: "React Client (Photo App Pt. 3)",
        Links: [
            "homework/hw04/dist/index.html"
        ],
        Description: "Re-implement the HW03 code in React. This includes implementing like/unlike, bookmark/remove bookmark, and add comment functionality. The code had to be transpiled in order to be shown through this page. Additionally, I took care to ensure the page was accessable."
    },
    {
        Title: "Tutorial 10",
        Subtitle: "Database / ORM Activity",
        Links: [

        ],
        Description: "Practice creating SQL queries. This involved Joining tables, filtering, and ordering the returned content. For example, one prompt was to \"Write a query that displays the id and caption of every blog post that a specific user has published, along with a count of how many comments each post has.\""
    },
    {
        Title: "Homework 05",
        Subtitle: "Build a Rest API",
        Links: [

        ],
        Description: "Created a REST API using Flask and PostgreSQL. We did this by creating and populating a local database, then configuring python code to interact with the database using SQL Alchemy and use Flask RESTful to implement a few API endpoints. Finally, we ran multiple tests to see that the API requirements have been met."
    },
    {
        Title: "Homework 06",
        Subtitle: "Secure Photo App",
        Links: [

        ],
        Description: "Used cookies to secure the Photo App from previous homeworks. Locked down endpoints and ran a host of security tests to ensure the product was sufficiently safe."
    },
]

// *******************
// Surprise me section
// *******************
function changeOptions(type) {
    if (type == "reset") {
        changeOptionsReset();
    } else {
        changeOptionsStandard(type);
    }
}

function changeOptionsStandard(type) {
    options = assignments.filter((assignment) =>{
        console.log("Does " +assignment.Title+ " === " +type+ "? " +assignment.Title.toLowerCase().includes(type));
        return assignment.Title.toLowerCase().includes(type);
    });
    console.log("Options now equals: ");
    options.forEach((option) => console.log(option.Title));    


    //Also change the text dispayed in that one bit
    let phrase = document.querySelector("#suprise-me-prompt");
    console.log("The phrase was \"" +phrase.innerHTML+ "\"");

    phrase.innerHTML = `Go to any random ${type}`;
    console.log("The phrase is now \"" +phrase.innerHTML+ "\"");
}

function changeOptionsReset() {
    options = assignments;
    console.log("This was the call to reset, options now equals: ");
    options.forEach((option) => console.log(option.Title));

    let phrase = document.querySelector("#suprise-me-prompt");
    console.log("The phrase was \"" +phrase.innerHTML+ "\"");

    phrase.innerHTML = `Go to any random assignment`;
    console.log("The phrase is now \"" +phrase.innerHTML+ "\"");
}

function goToRandomAssignment() {
    let max = options.length - 1;
    let min = 0;

    //Get a random selection of the assignments
    let ranIndex = Math.floor(Math.random() * (max-min+1) + min);

    let choice = options[ranIndex];
    max = choice.Links.length - 1;
    console.log("len = " +max);

    console.log("Potential link selections from " +choice.Title);
    choice.Links.forEach((link) => console.log(link));

    //Get a random selection from the number of links available 
    let ranLink = Math.floor(Math.random() * (max-min+1) + min); 

    console.log(ranLink);
    console.log("Loading the window at the link: " + choice.Title);
    console.log("The link is: " +choice.Links[ranLink])
    window.open(choice.Links[ranLink], window.name);    //It's not opening in the same window :(
}

let supriseMe = document.querySelector(".icon-wrapper");

supriseMe.addEventListener('click', goToRandomAssignment);

function changeSite(site) {
    
    let x = document.querySelector(".site");
    console.log('Change ' + x + ' to ' + site);
    x.src= site;
}

// **************
// Theme Switcher
// **************
function changeClass(type) {
    let body = document.querySelector("body");
    body.className = type;

}
// ****************************
// Generate assignment sections
// ****************************
function injectMostRecent() {
    //Homework
    let homeworks = assignments.filter((assignment) => {
        return assignment.Title.toLowerCase().includes("homework");
    });
    injectSnippet(homeworks, "homework");

    //Tutorials
    let tutorials = assignments.filter((assignment) => {
        return assignment.Title.toLowerCase().includes("tutorial");
    });
    injectSnippet(tutorials, "tutorial")

    //Lectures
    let lectures = assignments.filter((assignment) => {
        return assignment.Title.toLowerCase().includes("lecture");
    });
    injectSnippet(lectures, "lecture");

    //Quizzes
    let quizzes = assignments.filter((assignment) => {
        return assignment.Title.toLowerCase().includes("quiz");
    });
    injectSnippet(quizzes, "quiz")
}

function injectSnippet(group, type) {
    let mostRecent = group[group.length -1];
    console.log(mostRecent.Title);

    let linkCode = ``;
    if (mostRecent.Links.length === 0) 
        linkCode = `${mostRecent.Title} | ${mostRecent.Subtitle}`;
    else
        linkCode = `<a href=${mostRecent.Links[0]}>${mostRecent.Title} | ${mostRecent.Subtitle}</a>`

    let snippet = 
        `<h3 id = "${type}-most-recent">Most Recent: ${linkCode}</h3>
                        <p>${mostRecent.Description}</p>`;

    let id = "#" + type;
    console.log(id)
    let location = document.querySelector(id).querySelector(".most-recent");
    console.log(location.innerHTML);
    location.insertAdjacentHTML("beforeend", snippet);
}

injectMostRecent();

//Call a render rendedrtopicsAssignments for each type
function renderAllAssignments() {

    //Each of them is going into the ".expanded-list" div which is nested in a div that has the id of the typ (ex. homeworj or quiz)
    renderHomeworkAssignments();
    renderTutorialAssignments();
    renderLectureAssignments();
    renderQuizAssignments();
}

function renderHomeworkAssignments() {
    //get just the homeworks
    let homeworks = assignments.filter( (item) => item.Title.includes("Homework"));
    let container = document.querySelector("#homework").querySelector(".expanded-list");

    //for each of them generate the html snippet, then inject it
    homeworks.forEach( (homework) => {
        let snippet = renderAssignment(homework);
        container.insertAdjacentHTML("beforeend", snippet);
    });
}

function renderTutorialAssignments() {
    let tutorials = assignments.filter( (item) => item.Title.includes("Tutorial"));
    let container = document.querySelector("#tutorial").querySelector(".expanded-list");

    tutorials.forEach( (tutoiral) => {
        let snippet = renderAssignment(tutoiral);
        container.insertAdjacentHTML("beforeend", snippet);
    })
}

function renderLectureAssignments() {
    let lectures = assignments.filter( (item) => item.Title.includes("Lecture"));
    let container = document.querySelector("#lecture").querySelector(".expanded-list");

    lectures.forEach( (lecture) => {
        let snippet = renderAssignment(lecture);
        container.insertAdjacentHTML("beforeend", snippet);
    })
}

function renderQuizAssignments() {
    let quizzes = assignments.filter( (item) => item.Title.includes("Quiz"));
    let container = document.querySelector("#quiz").querySelector(".expanded-list");

    quizzes.forEach( (quiz) => {
        let snippet = renderAssignment(quiz);
        container.insertAdjacentHTML("beforeend", snippet);
    })
}

function renderAssignment(assignment) {
    if (assignment.Links.length === 0)
        return renderNoLinkCase(assignment);
    else if (assignment.Links.length > 1)
        return renderReverseCase(assignment);
    else
        return renderRegularCase(assignment);
}

function renderRegularCase(assignment) {
     let snippet = ` 
        <div class = "expanded-list-card hide">
                <a href="${assignment.Links[0]}"><strong>${assignment.Title}</strong>: ${assignment.Subtitle}</a>
            <p>
                ${assignment.Description}
            </p>
        </div>`;
    return snippet;
}

function renderNoLinkCase(assignment) {
    let snippet = `
        <div class="expanded-list-card hide">
            <a id="test"><strong>${assignment.Title}</strong>: ${assignment.Subtitle}</a>
            <p>
                ${assignment.Description}
            </p>
        </div>`;
    return snippet;
}

function renderReverseCase(assignment) {
    let bulletPoints = ``;
    let counter = 1;

    assignment.Links.forEach((link) => {
        bulletPoints += `<li>
            <a href="${link}">Task ${counter}</a>
          </li>`;
        counter++;
    });

    let snippet = `
    <div class="expanded-list-card hide">
        <a id="test"><strong>${assignment.Title}</strong>: ${assignment.Subtitle}</a>
        <ul>
            ${bulletPoints}
        </ul>
      </div>`;

      return snippet;
}

renderAllAssignments();


// *****************
// Expand full list
// *****************

function toggleExpansion(type) {
    let selector = "#" + type + "-expand";
    let targetButton = document.querySelector(selector);

    //1. Change the css associated
    console.log(targetButton.classList);
    targetButton.classList.toggle("see-more-button-expanded");
    console.log("New List of classes: " +targetButton.classList)

    //2. Change the <i> tags and <p>tags
    if (targetButton.classList.contains("see-more-button-expanded")) {
        targetButton.innerHTML = `
            <i class="fa-solid fa-caret-up"></i> 
            <p>Collapse Full List</p>
            <i class="fa-solid fa-caret-up"></i>`;
    } else {
        targetButton.innerHTML = `
            <i class="fa-solid fa-caret-down"></i> 
            <p>Expand Full List</p>
            <i class="fa-solid fa-caret-down"></i>`;   
    }
    toggleFullList(type);
}

function toggleFullList(type) {
    let target = document.querySelector(`#${type}`)
    target = target.querySelector(".expanded-list")
    target.classList.toggle("hide");
    target.querySelectorAll(".expanded-list-card").forEach(item => item.classList.toggle("hide"));
}