
const makeRed = () => {
    // your code here...
    
    console.log('Change background to red');    //Prints a message to the screen
    document.querySelector('#section1').style.backgroundColor = 'salmon';
    //get the item              //.style    //.aspect you want to change    //word
};

const makeBlue = () => {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('#section2').style.backgroundColor = 'cyan';
};

const makePink = () => {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('#section3').style.backgroundColor = 'pink';
};

const makeOrange = () => {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section4').style.backgroundColor = 'orange';
};

// const changeColor = (selector, color) => {
//     document.querySelector(selector).style.backgroundColor = color;
// }    //The below function could also be written this way

function changeColor(selector, color) {

    let x = document.querySelector(selector);

    if (x.style.backgroundColor === color) {
        console.log('Change ' + selector + ' to white');
        document.querySelector(selector).style.backgroundColor = 'white';
    } else {
        console.log('Change ' + selector + ' to ' + color);
        document.querySelector(selector).style.backgroundColor = color;
    }

}

function reset() {
    let items = document.querySelectorAll(".my-section");

    for (let item of items) {
        console.log('Change ' + item + ' to white');
        item.style.backgroundColor = 'white';
    }
}

