//Add links in chronological order?

// CURRENTLY NOT BEING USED DO I HAVE TO LINK IT TO MY OTHER .JS FOR IT TO WORK?
export const assignments = [
    { //Object for each type of assignment
        Type: "homework",
        Items: [
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
            }
        ],
    },
    {
        Type: "lecture",
        Items: [
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
            }
        ] //End lecture.items[]
    }, //end lecture    

    {
        Type: "tutorial",
        Items: [
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
            }
        ] //End tutorial.items[]
    }, //End Tutorials

    {
        Type: "quiz",
        Items: [
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
            }
        ] //End Quiz.items[]
    }, //End quiz
]