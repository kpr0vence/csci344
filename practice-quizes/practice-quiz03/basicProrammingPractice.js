//BASIC PROGRAMMING 
//1.a. Decade
const whichDecade = (age) => {
    let decade = Math.floor(age/10) * 10;
    console.log("you are in your " +decade+ "'s")
}

whichDecade(24);
whichDecade(40);

//1.b. Color Mixer
const colorMixer = (red, yellow, blue) => {
    if (red) {
        if (blue) {
            if (yellow) {
                //red/blue/yellow
                console.log("black");
                return;
            }
            //only red/blue
            console.log("purple");
            return;
        }
        if (yellow) {
            //only red/yellow
            console.log("orange");
            return;
        }
        //Only red
        console.log("red");
        return;
    }
    //no red, only blue/yellow
    if (blue) {
        if (yellow) {
            //yellow and blue
            console.log("green");
            return;
        }
        //only blue
        console.log("blue");
        return;
    }
    //if no read or blue, only yellow or none
    if (yellow) {
        console.log("yellow")
        return;
    }
    console.log("none");
}

colorMixer(true, true, true);
colorMixer(false, true, true);
colorMixer(true, false, true);
colorMixer(false, false, true);
colorMixer(false, false, false);

//2 While Loops 
let n = 0;
while (n <= 99) {
    process.stdout.write(n + " ");
    n++;
}
console.log("\nDescending Order: ");
n--;
while (n >= 0) {
    process.stdout.write(n + " ");
    n--;
}
console.log("\nOnly Evens");
n++;
while (n <= 99) {
    if (n % 2 === 0) {
        process.stdout.write(n + " ");
    }
    n++;
}
console.log("\nOnly Odds");
n = 0;
while (n <= 99) {
    if (n % 2 !== 0) {
        process.stdout.write(n + " ");
    }
    n++;
}

//For loops
console.log("\nFor Loops Ascending Order");
for (let i = 0; i < 100; i++) {
    process.stdout.write(i + " ");
}
console.log("\nFor Loops Decending Order");
for (let i = 99; i >= 0; i--) {
    process.stdout.write(i + " ");
}
console.log("\nFor Loops Evens Only");
for (let i = 0; i < 100; i++) {
    if (i%2 === 0)
        process.stdout.write(i + " ");
}
console.log("\nFor Loops Odds Only");
for (let i = 0; i < 100; i++) {
    if (i%2 !== 0)
        process.stdout.write(i + " ");
}

//Reverse a String
function reverseString(str) {
    let revStr = "";
    for (let i = 0; i < str.length; i++) {
        revStr = str[i] + revStr;
    }
    console.log("Original: " +str+ " Reversed: " +revStr);
}
console.log("\nReverse String");
reverseString("Ayooo!");
reverseString("doechii");

//Sum nums
const sumArray = (arr) => {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    console.log("The total was " +sum);
}
console.log("Sum Arrays");
sumArray([20, 26, 41, 8 ]);

//Largest num
const findLargest = (arr) => {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest)
            largest = arr[i];
    }
    console.log("The largest value was " +largest);
}
findLargest([20, 26, 41, 8 ]);