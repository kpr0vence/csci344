let canvasWidth = document.documentElement.clientWidth - 10;
let canvasHeight = document.documentElement.clientHeight - 10;

// in p5.js, the function runs on page load:
function setup() {
    rectMode(CENTER);
    createCanvas(canvasWidth, canvasHeight);

    background(0,0,0);

}

// in p5.js, special event handler that listens for click events:
function mouseClicked() {
    // in p5.js, mouseX and mouseY are
    // built-in global variabls that track the
    // current position of your mouse.

    shapeDrawer();
   
}

// in p5.js, special event handler that listens for drag events:
function mouseDragged() {

    shapeDrawer();
    
}

function shapeDrawer() {
    // const [r,g,b] = getColor();
    // fill(getColor());
    if ( Math.random() > .5) {
        // circle(mouseX, mouseY, Math.random() * 100);
        drawBullseye();
    }
    else {
        square(mouseX, mouseY, Math.random() * 100);

    }
}

function drawBullseye() {
    for(let i = 150; i >= 0 ; i-=25) {
        circle(mouseX, mouseY, i);
    }
}

function getColor() {
    let r = Math.Random() * 255;
    let g = Math.Random() * 255;
    let b = Math.Random() * 255;

    return (r, g, b);
}



/**
 * Challenges:
 * 1. As you click / drag, can the circles have different colors and sizes?
 *      * Try using the Math.random() function
 * 2. Can you make the click / drag sometimes make circles and sometimes make rectangles
 *      * Sample rectangle function invocation: rect(mouseX, mouseY, 100, 100);
 * 3. Can you make each click create a bulleye of different colors?
 *      * Hint: make sure you draw the bigger circles before you draw the smaller circles.
 */
