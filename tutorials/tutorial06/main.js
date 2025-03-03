// global variables tracking the user's preferences:
let searchTerm = "";
let openOnly = false;

const search = (ev) => {
    ev.preventDefault(); // overrides default button action  
    // ^^ Used for forms to prevent them from sending the form to some server, 
    // And instead let us do what we want to

    // Set user's preferences (global variables) from the DOM:
    searchTerm = document.querySelector("#search_term").value;  //Find the element with the search term ID, and get the input value
    openOnly = document.querySelector("#is_open").checked;      //get the t/f that tells if the check box has been checked

    // Invoke the show matching courses function
    showMatchingCourses();
};

// Part 1.1a
const isClassFull = (course) => {
    // modify this to accurately apply the filter:
    //Each course is an object, it has a  EnrollmentCurrent: 15, EnrollmentMax: 22,

    return (course.EnrollmentCurrent >= course.EnrollmentMax);
};

// Part 1.1b
const doesTermMatch = (course) => {
    // modify this to accurately apply the filter:
    let term = course.Title.toLowerCase();
    let termCode = course.Code.toLowerCase();
    
    return (term.includes(searchTerm.toLowerCase()) || termCode.includes(searchTerm.toLowerCase()));
};

// Part 1.2
const dataToHTML = (course) => {
    let availabilitySnippet;
    //Get if course is open or closed
    if (isClassFull(course)) {
        availabilitySnippet = waitlistHTML(course);
    } else {
        availabilitySnippet = openSpotsHTML(course);
    }

    return `<section class="course">
             <h2>${course.Code}: ${course.Title}</h2>
             <p>
                 ${availabilitySnippet}
             </p>
             <p>
                 ${course.Days || "TBD"} &bull;  ${course.Location.FullLocation || "TBD"} &bull; ${course.Hours} credit hour(s)
             </p>
             <p><strong>${course.Instructors[0].Name}</strong></p>
     </section>`;   //See how we could use the or operator to get it to display the TBD if the data field is null
};

const waitlistHTML = (course) => {
    //TBH, not sure how the waitlist number should be reported, but heres one way (I guess)
    let numOnList = course.EnrollmentCurrent - course.EnrollmentMax;
    return `<i class="fa-solid fa-circle-xmark"></i> 
            Closed &bull; ${course.CRN} &bull; Number on Waitlist: ${numOnList}`;
};

const openSpotsHTML = (course) => {
    let seats = course.EnrollmentMax - course.EnrollmentCurrent;
    return `<i class="fa-solid fa-circle-check"></i> 
            Open  &bull; ${course.CRN} &bull; Seats Available: ${seats}`;
};

// Part 2
const showMatchingCourses = () => {
    console.log(`Search term: ${searchTerm}`);
    console.log(`Only show open classes: ${openOnly}`);
    console.log(`Course data:`, courseList);

    // output all of the matching courses to the screen:

    //Get rid of courses currently on the screen
    let container = document.querySelector(".courses");
    container.innerHTML = "";       //clears the contents

    //Get the filtered array
    let matchingCourses = courseList.filter(doesTermMatch);
    if (openOnly) {
        matchingCourses = matchingCourses.filter((course) => {
                if (isClassFull(course))
                    return false;
                return true;
            });
    }
       
    console.log(matchingCourses);

    //get the array of filtered courses
    matchingCourses.forEach(course => {
        //Get the HTML we'll use
        let snippet = dataToHTML(course);
        // console.log(snippet);

        //Then inject it into the dom
        container.insertAdjacentHTML("beforeend", snippet);
    })

};
