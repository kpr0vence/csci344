let currentPosition = 0;
let gap = 10;
const slideWidth = 400;
//The above set some defaults values, to be used as meaningfully named variables within the function

function moveCarousel(direction) {  //Direction determines if the images are intended to move forwards or backwards
    const items = document.querySelectorAll(".carousel-item");  //gets the elements with the carousel-item class 
    // (all of the images), and stores them in an array holding each of the 4 images and 4 divs

    if (direction == "forward") {       //If the parameter given during the function call is forward (aka the photos should move forward one)
        // minus 2 b/c first 2 slides already showing
        if (currentPosition >= items.length - 2) {  //If we've hit the end of the number of available photos (calculated by looking at the number
            //of photos already scrolled (currentPoisition) compared to the number of images in the array)
            return false;   //Then do nothing
        }
        currentPosition++;  //If the current position is less than the number of images available to be scrolled, increase the position by one

    //If the given direction was not forward (aka the photos should go back one)
    } else {        
        if (currentPosition == 0) {     //If we're at the start of the images (aka, we have no ability to "go backwards")
            return false;       //Do nothing
        }
        currentPosition--;  //If we do have images to go backwards to, decrement the position
    }

    const offset = (slideWidth + gap) * currentPosition;    //Calculate the current offset using the newly calculated position (either incremented
    //  or decremented) to determine the "offset" 

    for (const item of items) { //Iterate through each of the images,
        item.style.transform = `translateX(-${offset}px)`;  //Applying that amount of offset to them (this is what actually moves the images
        // back and forth)
    }
}
