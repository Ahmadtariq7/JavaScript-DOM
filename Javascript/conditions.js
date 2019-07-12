
// {------  TO TEST THIS FILE ON BROWSER, CHANGE "___.js" TO "conditions.js" in LINE 19 in index.html..}

// ----- 1. IF ELSE condition ------
let num = 4;
if (num === 10) { // == matches number only and if x is '10' it will give true but === matches data type also.
    console.log(`num is 10`);
} else if (num < 10) {
    console.log(`num is less than 10`)
} else {
    console.log(`num is greater than 10`)
}
// or is ||, and is && 

// ----- 2. Ternary Operators ------
// These are basically shorthand if statements & they are used alot to assign variables based on condition.
const check = 10;
//imagine we want to create variable color & it based on condition that x is ______
const color = check > 10 ? 'red' : 'black'; // ? is ternary operater which represent "than" & : represents "else"
console.log(color); //returns black

// ----- 3. Switches ------
// It's another way to evaluate conditions..
switch (color) {
    case 'red':
        console.log(`color is red`);
        break;
    case 'black':
        console.log(`color is black`);
        break;
    default:
        console.log(`color is neither red nor black`)
}

// These are Conditionals Statements, See you in next lecture.