const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:
    drawMonster(100, 100, 150, '#0bc9cd', false);
    drawMonster(300, 200, 75, '#8093f1', true);
    drawMonster(100, 325, 100, '#8093f1', false);
    drawMonster(250, 375, 125, '#7fb285', true);
    drawMonster(550, 200, 250, '#7fb285', false);


    drawGrid(canvasWidth, canvasHeight);
}


// function definition goes here:
function drawMonster(x, y, size, color, isSurprised) {
    fill(color);
    rectMode(CENTER);
    //Draw Square for face
    rect(x, y, size);
    
    //Draw Whites of eyes
    //Get a distance for the eyes, based on the size
    fill("white");
    let distanceFromCenter = size/5;
    let sizeOfWhites = size/5;

    console.log("Whites: " +sizeOfWhites+ " distance: " +distanceFromCenter)

    //Subtract from y to elevate (for some weird reason)
    //Draw left eye by adding to the x value
    rect((x+distanceFromCenter), (y-distanceFromCenter), sizeOfWhites);

    //Draw right eye by subtracting from the x value
    rect((x-distanceFromCenter), (y-distanceFromCenter), sizeOfWhites)

    //Draw pupils, much the same was as the whites
    fill("black");
    let sizeOfPupil = size/10;

    console.log("Pupils: " +sizeOfPupil+ " distance: " +distanceFromCenter)
    //Using the distance from center from the whites, calculate the elevation using the same as the whites (to get it in the middle of the whites) then bring it back down (by adding) by 1/4th the size of the whites, which will get you to move to the bottom of the whites
    rect((x+distanceFromCenter), (y-distanceFromCenter + (sizeOfWhites/4)), sizeOfPupil);

    rect((x-distanceFromCenter), (y-distanceFromCenter + (sizeOfWhites/4)), sizeOfPupil);

    //Draw mouth
    let mouthSize = size/6;
    let mouthDistance = y + (size/6);
    
    if (isSurprised) {
        rect(x, mouthDistance, mouthSize);
    } else {
        rect(x, mouthDistance, mouthSize);
        rect(x+mouthSize, mouthDistance, mouthSize);
        rect(x-mouthSize, mouthDistance, mouthSize);
    }
}
