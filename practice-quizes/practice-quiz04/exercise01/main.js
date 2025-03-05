function color1() {
    // target the element with the id of square1
    // and change its background color...
    changeColor(document.querySelector("#square1"), "#FF66B3");
}

function color2() {
    // target the element with the id of square2
    // and change its background color...
    changeColor(document.querySelector("#square2"), "#084B83");
}

function color3() {
    // TODO
    changeColor(document.querySelector("#square3"), "#42BFDD");
}

function color4() {
    // TODO
    changeColor(document.querySelector("#square4"), "#BBE6E4");
}

function color5() {
    // TODO
    changeColor(document.querySelector("#square5"), "#F0F6F6");
}

function color6() {
    // TODO
    changeColor(document.querySelector("#square6"), "#FF66B3");
}

const changeColor = (location, color) =>  {
    console.log(location);
    location.style.backgroundColor = color;
}