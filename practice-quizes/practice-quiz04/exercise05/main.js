const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:
    drawElmo(100, 100, 150, '#0bc9cd', true);   // nose drawn
    drawElmo(300, 200, 75, '#0bc9cd', false);   // no nose drawn
    drawElmo(100, 325, 100, '#8093f1', false);  // no nose drawn
    drawElmo(250, 375, 125, '#7fb285', true);   // nose drawn
    drawElmo(550, 200, 250, '#102e4a', true);   // nose drawn



    drawGrid(canvasWidth, canvasHeight);
}


// function definition goes here:
function drawElmo(x, y, size, color, hasNose) {
    // fill('#db5461');     //Nose code
    // ellipse(500, 500, 70, 100);  // x, y, width, height (but yours needs to scale)

    //Draw body circle
    fill(color);
    circle(x, y, size);

    //Draw whites of eyes
    fill("white");
    let distanceUp = size/6;
    let distanceOut = size/7;
    let whiteSize = size/4;
    console.log("Distance apart = " +distanceOut+ " Distance Up = " +distanceUp);

    circle(x+distanceOut, y-distanceUp, whiteSize);
    circle(x-distanceOut, y-distanceUp, whiteSize);

    //Draw pupils
    fill("black");
    //We need the middle of the circle, which is 1/2 diameter, which is the size???

    circle(x+distanceOut, y-distanceUp, size/12);
    circle(x-distanceOut, y-distanceUp, size/12)

    //Opitional Nose
    if (hasNose) {
        fill('#db5461');     //Nose code
        ellipse(x, y, size/5, size/3);
    }

}