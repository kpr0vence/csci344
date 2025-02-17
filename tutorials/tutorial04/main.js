let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // invoke any drawing functions inside of setup.
    // functions should all go between "createCanvas()" and "drawGrid()"
    // draw5Circles();
    // draw5RedSquares();

    //Kati's functions 
    staryNight();   //If you want to see the rest, just comment this out

    draw5CirclesWhile();
    draw5CirclesFor();
    drawNCircles(20);
    drawNCirclesFlexible(30, 25, 500, 0);
    drawNCirclesFlexible(8, 50, 700, 100);
    drawNShapesFlexible(30, 30, 335, 0, "square");
    drawNShapesFlexible(4, 100, 120, 200, "circle");
    drawNShapesFlexible(8, 50, 725, 25, "square");

    drawNShapesDirectionFlexible(30, 30, 335, 0, "square", "column");
    drawNShapesDirectionFlexible(4, 100, 120, 200, "circle", "row");
    drawNShapesDirectionFlexible(8, 50, 725, 425, "circle", "row");


    drawGrid(canvasWidth, canvasHeight);

}

// my first function
function draw5Circles() {
    noFill();
    // fill('red');
    circle(100, 200, 50); // centerX, centerY, radius
    circle(100, 250, 50);
    circle(100, 300, 50);
    circle(100, 350, 50);
    circle(100, 400, 50);
}

function draw5RedSquares() {
    fill("red");
    square(320, 200, 50); // topLeftX, topLeftY, width
    square(320, 250, 50);
    square(320, 300, 50);
    square(320, 350, 50);
    square(320, 400, 50);
}

// Task 1. 
function draw5CirclesWhile() {
    let i = 1;
    while (i <= 5) {
        //Each circle is drawn on a new centerY (based on the value of i) 
        circle(200, (100 * i), 50);
        i++;
    }
}

// Task 2.
function draw5CirclesFor() {
    noFill();
    for (let i = 1; i <= 5; i++) {
        circle(300, (100 * i), 50);
    }
}

// Task 3.
function drawNCircles(n) {
    fill("hotpink");
    for (let i = 1; i <= n; i++) {
        circle(400, (25 * i), 25);
    }
}

// Task 4.
function drawNCirclesFlexible(n, size, x, y) {
    noFill();
    for (let i = 1; i <= n; i++) {
        circle(x, y + (size * i), size);
    }
}

// Task 5.
function drawNShapesFlexible(n, size, x, y, shape) {
    fill("hotpink");
    if (shape === "circle") {
        for (let i = 1; i <= n; i++) {
            circle(x, y + (size * i), size);
        }
    }
    else {
        for (let i = 1; i <= n; i++) {
            square(x, y + (size * i), size);
        }
    }
}

// Task 6.
function drawNShapesDirectionFlexible(n, size, x, y, shape, direction) {
    fill("teal");
    // circle(x+(size),y,size);

    if (shape === "circle") {
        if (direction === "row") {
            for (let i = 1; i <= n; i++) {
                circle(x+(size*i), y, size);
            }
        } else {
            for (let i = 1; i <= n; i++) {
                circle(x, y + (size * i), size);
            }
        }
    } else {
        if (direction === "row") {
            for (let i = 1; i <= n; i++) {
                square(x+(size*i), y, size);
            }
        } else {
            for (let i = 1; i <= n; i++) {
                square(x, y + (size * i), size);
            }
        }
    }
}

// Task 7. 
function staryNight() {
    fill("#272757");
    //Make a square that covers the whole screen
    square(0,0, (canvasHeight*canvasWidth));

    //make 100 little circles.
    for (let i = 0; i < 150; i++) {
        fill("white");
        //Randomly generate a position and size for them
        let x = Math.floor(Math.random() * canvasWidth);
        let y = Math.floor(Math.random() * canvasHeight);
        let size = Math.floor(Math.random() * 7);

        circle(x,y,size);
    }
}