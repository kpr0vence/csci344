function showFox() {
    // your code here...
    changeImageAndTitle("images/fox.jpg", "Fox");
    
    console.log('Change image and paragraph to fox...');
}

function showLion() {
    // your code here...
    changeImageAndTitle("images/lion.jpg", "Lion");

    console.log('Change image and paragraph to lion...');
}

function showTiger() {
    // your code here..
    changeImageAndTitle("images/tiger.png", "Tiger");

    console.log('Change image and paragraph to tiger...');
}

function showZebra() {
    // your code here...
    changeImageAndTitle("images/zebra.jpg", "Zebra");

    console.log('Change image and paragraph to zebra...');
}

const changeImageAndTitle = (newImage, newTitle) => {
    let image = document.querySelector(".card").querySelector("img");
    image.src = newImage;

    let pTag = document.querySelector(".card").querySelector("p");
    pTag.innerText = newTitle;
}


