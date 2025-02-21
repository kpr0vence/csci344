// Your code here.

function toggleMenu() {
    let em = document.querySelector("#nav-links");
    em.classList.toggle("active");    
    document.querySelector("#menu-toggle").classList.toggle("active");

    if (em.className.includes("active"))
        console.log("The active class has been toggled on");
    else
        console.log("The active class has been toggled off ");
}

