// ignore this function for now. We'll go over it
// on Wednesday: 
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2025/fall/`;
    courseList = await fetch(url).then(response => response.json());
    displayResults(courseList);
} 

function displayResults(courses) {
    
    // your code here.
    //Alt. solution (given in review session)
    // console.log(courses);
    // let container = document.querySelector("#results");
    // for (const course of courses) {
    //     // console.log(course.Title);
    //     if (course.Department == "CSCI") {
    //         console.log(course.Title+ " is a Comp Sci class, adding it to the page");
    //         container.insertAdjacentHTML("beforeend", buildSnippet(course));
    //     }
    // }


    //given the list of courses, filter it so that it's only the ones with CSCI department

    //Each course is an object
    let justCSCI = courses.filter((course) => {
        return (course.Department == "CSCI");
    })

    console.log(courses);
    console.log(justCSCI);

    //iterate and get the code snippet and inject it into the html in the #results element
    justCSCI.forEach((course) => {
        document.querySelector("#results").insertAdjacentHTML("beforeend", buildSnippet(course));
    });

    
}

const buildSnippet = (course) => {
    let snippet = `<div class="course">
            <h3>${course.Code}: ${course.Title}</h3>
            <ul>
                <li>Instructor: ${course.Instructors[0].Name}</li>
                <li>${course.Location.FullLocation}</li>
                <li>Days: ${course.Days}</li>
            </ul>
        </div>`;

    return snippet;
}